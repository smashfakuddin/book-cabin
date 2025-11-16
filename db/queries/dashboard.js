import { dbConnect } from "@/db/dbConnect";
import Room from "@/models/rooms";
import Booking from "@/models/booking";

export async function getDashboardSummary() {
  await dbConnect();

  const now = new Date();

  // 1. Total Rooms (number of room types)
  const totalRooms = await Room.countDocuments();

  // 2. Total Available Rooms (sum of totalRooms for all room types)
  const totalAvailableAgg = await Room.aggregate([
    { $group: { _id: null, total: { $sum: "$totalRooms" } } },
  ]);
  const totalAvailableRooms = totalAvailableAgg[0]?.total || 0;

  // 3. Active Bookings (ongoing or upcoming)
  const activeBookingsList = await Booking.find({
    startDate: { $lte: now },
    endDate: { $gte: now },
    status: "confirmed",
  }).lean();
  const activeBookings = activeBookingsList.length;

  // 4. Pending Bookings
  const pendingBookings = await Booking.countDocuments({
    status: "pending",
  });

  // 5. Total Guests in Active Bookings
  let totalGuests = 0;
  if (activeBookingsList.length > 0) {
    const roomIds = activeBookingsList.map((b) => b.roomId);
    const rooms = await Room.find({ _id: { $in: roomIds } }).lean();

    // Map roomId => totalGuestCapacity
    const roomMap = {};
    rooms.forEach((r) => {
      roomMap[r._id.toString()] = r.totalGuestCapacity;
    });

    // Calculate total guests
    totalGuests = activeBookingsList.reduce((sum, booking) => {
      const capacity = roomMap[booking.roomId.toString()] || 0;
      return sum + capacity * booking.numberOfRoomsBooked;
    }, 0);
  }

  // 6. Recent 10 bookings
  const recentBookingsRaw = await Booking.find()
    .sort({ createdAt: -1 })
    .limit(10)
    .populate("userId", "name email") // Guest info
    .populate("roomId", "title") // Room title
    .lean();

  const recentBookings = recentBookingsRaw.map((b) => ({
    id: b._id.toString(),
    guestName: b.userId?.name || "Unknown",
    guestEmail: b.userId?.email || "Unknown",
    roomName: b.roomId?.title || "N/A",
    checkIn: b.startDate
      ? new Date(b.startDate).toLocaleDateString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "N/A",
    checkOut: b.endDate
      ? new Date(b.endDate).toLocaleDateString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "N/A",
    status: b.status || "unknown",
  }));

  // Pack into stats array for frontend
  const stats = [
    // { id: 1, title: "Total Rooms", value: totalRooms },
    { id: 2, title: "Total Available Rooms", value: totalAvailableRooms },
    { id: 3, title: "Active Bookings", value: activeBookings },
    { id: 4, title: "Pending Bookings", value: pendingBookings },
    { id: 5, title: "Total Guests", value: totalGuests },
  ];

  return {
    stats,
    recentBookings,
  };
}
