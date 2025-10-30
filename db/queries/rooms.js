import { dbConnect } from "@/db/dbConnect";
import Rooms from "../../models/rooms";


export async function getAllRooms(type) {
  try {
    await dbConnect();

    // Build the query object
    let query = {};

    // Only filter if type is provided and not "all"
    if (type && type !== "all") {
      query.capacity = type; // assuming "capacity" field is used for type
    }

    const rooms = await Rooms.find(query).lean();
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