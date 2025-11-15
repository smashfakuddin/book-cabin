"use server";
import Booking from "@/models/booking";
import { dbConnect } from "../dbConnect";
import Room from "@/models/rooms";

/**
 * Book a room
 * @param {ObjectId} userId - User who is booking
 * @param {ObjectId} roomId - Room to be booked
 * @param {Number} numberOfRooms - Number of rooms to book
 * @param {Date} startDate - Check-in date
 * @param {Date} endDate - Check-out date
 */
export async function bookRoom({
  userId,
  roomId,
  numberOfRooms,
  startDate,
  endDate,
}) {
  try {
    await dbConnect();

    // 1️⃣ Find the room
    const room = await Room.findById(roomId);
    if (!room) throw new Error("Room not found");

    // 2️⃣ Check availability
    const overlappingBookings = await Booking.aggregate([
      {
        $match: {
          roomId: room._id,
          $or: [{ startDate: { $lte: endDate }, endDate: { $gte: startDate } }],
        },
      },
      {
        $group: {
          _id: "$roomId",
          bookedRooms: { $sum: "$numberOfRoomsBooked" },
        },
      },
    ]);

    const bookedRoomsCount = overlappingBookings.length
      ? overlappingBookings[0].bookedRooms
      : 0;

    const availableRooms = room.totalRooms - bookedRoomsCount;

    if (numberOfRooms > availableRooms) {
      throw new Error(
        `Not enough rooms available. Only ${availableRooms} left`
      );
    }

    // 3️⃣ Create booking
    const booking = await Booking.create({
      userId,
      roomId,
      numberOfRoomsBooked: numberOfRooms,
      startDate,
      endDate,
      status: "confirmed",
      paymentStatus: "pending",
    });

    return {
      success: true,
      message: "Booking confirmed",
      booking,
      availableRooms: availableRooms - numberOfRooms,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "Booking failed",
    };
  }
}
