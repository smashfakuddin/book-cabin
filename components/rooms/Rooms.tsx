import { RoomsCardProps } from "@/types/RoomsCardProps";
import RoomsCard from "./RoomsCard";
import { getAllRooms } from "@/db/queries/rooms";

export default async function Rooms() {
  const rooms = await getAllRooms();
  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {rooms.map((room: RoomsCardProps) => (
        <RoomsCard key={room._id} room={room} />
      ))}
    </div>
  );
}
