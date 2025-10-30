import { dbConnect } from "@/db/dbConnect";
import Rooms from "../../models/rooms";

export async function getAllRooms() {
  try {
    await dbConnect();

    const rooms = await Rooms.find({}).lean();
    return JSON.parse(JSON.stringify(rooms));
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