import DetailHero from "@/components/roomdetails/DetailHero";
import Booking from '../../../components/roomdetails/Booking';


export default function roomDetailPage() {
  return <div className=" container mx-auto pb-10">
    <DetailHero/>
    <Booking/>
  </div>;
}
