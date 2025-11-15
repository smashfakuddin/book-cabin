import { dbConnect } from "@/db/dbConnect";
import Rooms from "../../models/rooms";
import Booking from "@/models/booking";

export async function getAllRooms(type) {
  try {
    await dbConnect();

    let query = {};

    if (type && type !== "all") {
      query.capacity = type;
    }

    const rooms = await Rooms.find(query).lean();

    const today = new Date();

    const updatedRooms = await Promise.all(
      rooms.map(async (room) => {
        // find bookings overlapping today for this room
        const bookings = await Booking.aggregate([
          {
            $match: {
              roomId: room._id,
              startDate: { $lte: today },
              endDate: { $gte: today }
            }
          },
          {
            $group: {
              _id: null,
              totalBooked: { $sum: "$numberOfRoomsBooked" }
            }
          }
        ]);

        const booked = bookings.length > 0 ? bookings[0].totalBooked : 0;

        const availableRooms = room.totalRooms - booked;

        return {
          ...room,
          availableRooms: availableRooms < 0 ? 0 : availableRooms
        };
      })
    );

    return JSON.parse(JSON.stringify(updatedRooms));
  } catch (error) {
    console.error("Error fetching rooms:", error);
    throw new Error("Failed to fetch rooms");
  }
}



export async function getRoomById(id) {
  try {
    await dbConnect();

    const room = await Rooms.findById(id).lean(); // fetch single room
    if (!room) return null;

    return JSON.parse(JSON.stringify(room)); // make it serializable for Next.js
  } catch (error) {
    console.error("Error fetching room by ID:", error);
    return null;
  }
}