import { RoomsCardProps } from "@/types/RoomsCardProps";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { bookRoom } from "@/db/queries/booking";

export default function BookingSummary({
  room,
  totalDays,
  date,
  userId,
}: {
  room: RoomsCardProps;
  totalDays: number;
  date: DateRange | undefined;
  userId: string | undefined;
}) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleConfirm = async () => {
    if (!date?.from || !date?.to) {
      setMessage("Please select check-in and check-out dates");
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const result = await bookRoom({
        userId,
        roomId: room._id,
        numberOfRooms: 1, // or allow user to select quantity
        startDate: date.from,
        endDate: date.to,
      });

      if (result.success) {
        setMessage(`Booking confirmed! ${result.availableRooms} rooms left.`);
      } else {
        setMessage(result.message);
      }
    } catch (err) {
      setMessage("Booking failed. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900/50 flex-1 h-full flex items-center justify-center p-6">
      <div className="bg-neutral-900 relative text-white p-6 h-full w-full rounded-lg shadow-lg flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b text-center border-neutral-700 pb-2">
            Booking Summary
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-neutral-400">Check-in</span>
              <span className="font-medium">
                {date ? date?.from?.toDateString() : "No start date"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-neutral-400">Check-out</span>
              <span className="font-medium">
                {date ? date?.to?.toDateString() : "No End Date"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-neutral-400">Guests</span>
              <span className="font-medium">
                {room.totalGuestCapacity} Person
              </span>
            </div>

            <div className="border-t border-neutral-700 my-4"></div>

            <div className="flex justify-between">
              <span className="font-medium">Price per night</span>
              <span>
                $ {room?.discountedPrice}{" "}
                <span className="text-sm line-through">
                  ${room?.regularPrice}
                </span>{" "}
                / night{" "}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Nights</span>
              <span>{totalDays}</span>
            </div>

            <div className="flex justify-between text-lg font-bold text-main mt-4">
              <span>Total</span>
              <span>
                ${" "}
                {totalDays *
                  (room?.isDiscountApplicable
                    ? room?.discountedPrice
                    : room?.regularPrice)}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={handleConfirm}
          className="mt-6 w-full bg-less text-black font-semibold py-2 rounded-md hover:bg-amber-500/50 cursor-pointer transition"
        >
          {loading ? "Booking..." : "Confirm Reservation"}
        </button>
      </div>
    </div>
  );
}
