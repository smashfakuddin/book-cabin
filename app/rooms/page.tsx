import Rooms from "@/components/rooms/Rooms";
import RoomsIntro from "@/components/rooms/RoomsIntro";
import SelectionTab from "@/components/rooms/SelectionTab";

export default async function roomspage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
   const type = (await searchParams).type
  return (
    <div className="container mx-auto">
      <RoomsIntro />
      <SelectionTab />
      <Rooms type={type}/>
    </div>
  );
}
