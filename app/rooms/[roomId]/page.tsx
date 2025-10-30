import DetailHero from "@/components/roomdetails/DetailHero";
import Booking from "../../../components/roomdetails/Booking";
import { getRoomById } from "@/db/queries/rooms";

export default async function roomDetailPage({
  params,
}: {
  params: Promise<{ roomId: string }>
}) {
  const {roomId} = await params;
  const roomDetail = await getRoomById(roomId);
  console.log(roomDetail);
  return (
    <div className=" container mx-auto pb-10">
      <DetailHero room={roomDetail}/>
      <Booking room={roomDetail}/>
    </div>
  );
}
