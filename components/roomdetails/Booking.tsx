"use client";
import Link from "next/link";
import BookCalender from "./BookCalender";
import { RoomsCardProps } from "@/types/RoomsCardProps";
import BookingSummary from "./BookingSummary";
import { Session } from "next-auth";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { differenceInDays } from "date-fns";

export default function Booking({
  room,
  session,
}: {
  room: RoomsCardProps;
  session: Session | null;
}) {
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const totalDays =
    date?.from && date?.to
      ? differenceInDays(date.to, date.from) + 1 // include both start & end
      : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <h3 className="text-amber-300 text-4xl text-center font-semibold">
        Reserve {room.title} today. Pay on arrival.
      </h3>

      <div className="border border-gray-800 grid grid-cols-1 md:grid-cols-2">
        {/* Calendar Section */}
        <div className="">
          <BookCalender
            room={room}
            totalDays={totalDays}
            date={date}
            setDate={setDate}
          />
        </div>

        {/* Login Message Section */}
        {session?.user ? (
          <BookingSummary room={room} totalDays={totalDays} date={date} userId={session?.user?.id}/>
        ) : (
          <div className="bg-gray-900/50 flex-1 flex items-center justify-center p-6">
            <p className="text-center text-white text-xl font-semibold">
              Please{"  "}
              <Link href={"/login"} className="text-amber-200 underline">
                login
              </Link>{" "}
              to reserve this cabin right now
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
