"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { differenceInDays } from "date-fns";
import type { DateRange } from "react-day-picker"; // ✅ Import correct type

export default function BookCalender() {
  const [date, setDate] = React.useState<DateRange | undefined>(undefined); // ✅ Proper type

  const totalDays =
    date?.from && date?.to
      ? differenceInDays(date.to, date.from) + 1 // include both start & end
      : 0;

  return (
    <div className="flex flex-col  space-y-4 p-6">
      {/* Calendar */}
      <Calendar
        mode="range"
        selected={date}
        onSelect={setDate}
        numberOfMonths={1}
        disabled={{ before: new Date() }}
        className="rounded-lg border [--cell-size:--spacing(10)] md:[--cell-size:--spacing(10)]"
        // className="rounded-md border shadow"
      />
      <button className=" px-5 py-3 bg-amber-500 text-black w-full text-center gap-4">
        $ {210} <span className="text-sm line-through">${250}</span> / night{" "}
        {totalDays ? (
          <span className="font-bold text-accent-100">
           {"  "} Total ${totalDays * 210}
          </span>
        ) : (
          ""
        )}
      </button>
    </div>
  );
}
