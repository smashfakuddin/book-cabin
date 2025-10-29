import Rooms from "@/components/rooms/Rooms";
import RoomsIntro from "@/components/rooms/RoomsIntro";
import SelectionTab from "@/components/rooms/SelectionTab";

export default function roomspage() {
  return (
    <div className="container mx-auto">
      <RoomsIntro />
      <SelectionTab />
      <Rooms />
    </div>
  );
}
