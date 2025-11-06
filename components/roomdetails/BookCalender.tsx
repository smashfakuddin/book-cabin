"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { differenceInDays } from "date-fns";
import type { DateRange } from "react-day-picker"; // ✅ Import correct type
import { RoomsCardProps } from "@/types/RoomsCardProps";

export default function BookCalender({ room }: { room: RoomsCardProps }) {
  const [date, setDate] = React.useState<DateRange | undefined>(undefined); // ✅ Proper type

  const totalDays =
    date?.from && date?.to
      ? differenceInDays(date.to, date.from) + 1 // include both start & end
      : 0;

  return (
    <div className="flex flex-col flex-1 space-y-4 p-6">
      {/* Calendar */}
      <Calendar
        mode="range"
        selected={date}
        onSelect={setDate}
        numberOfMonths={1}
        disabled={{ before: new Date() }}
        className="rounded-lg border [--cell-size:--spacing(10)] md:[--cell-size:--spacing(10)] w-full"
        // className="rounded-md border shadow"
      />
      <button className=" px-5 py-3 bg-amber-500 text-black w-full text-center gap-4">
        {room?.isDiscountApplicable ? (
          <span>
            {" "}
            $ {room?.discountedPrice}{" "}
            <span className="text-sm line-through">${room?.regularPrice}</span>{" "}
            / night{" "}
          </span>
        ) : (
          <span> $ {room?.regularPrice} / night </span>
        )}

        {totalDays ? (
          <span className="font-bold text-accent-100">
            {"  "} Total $
            {totalDays *
              (room?.isDiscountApplicable
                ? room?.discountedPrice
                : room?.regularPrice)}
          </span>
        ) : (
          ""
        )}
      </button>
    </div>
  );
}
