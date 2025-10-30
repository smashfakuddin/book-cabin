import Link from "next/link";
import BookCalender from "./BookCalender";
import { RoomsCardProps } from "@/types/RoomsCardProps";

export default function Booking({ room }: { room: RoomsCardProps }) {
  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <h3 className="text-amber-300 text-4xl text-center font-semibold">
       {room.title}
      </h3>

      <div className="border border-gray-800 flex items-stretch justify-center">
        {/* Calendar Section */}
        <div className="flex-1">
          <BookCalender room={room}/>
        </div>

        {/* Login Message Section */}
        <div className="bg-gray-900/50 flex-1 flex items-center justify-center p-6">
          <p className="text-center text-white text-xl font-semibold">
            Please{"  "}
            <Link href={"/login"} className="text-amber-200 underline">
              login
            </Link>{" "}
            to reserve this cabin right now
          </p>
        </div>
      </div>
    </div>
  );
}
