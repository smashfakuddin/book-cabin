export default function BookingSummary() {
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
              <span className="font-medium">Nov 6, 2025</span>
            </div>

            <div className="flex justify-between">
              <span className="text-neutral-400">Check-out</span>
              <span className="font-medium">Nov 14, 2025</span>
            </div>

            <div className="flex justify-between">
              <span className="text-neutral-400">Guests</span>
              <span className="font-medium">2 Adults</span>
            </div>

            <div className="border-t border-neutral-700 my-4"></div>

            <div className="flex justify-between">
              <span className="font-medium">Price per night</span>
              <span>$150</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Nights</span>
              <span>8</span>
            </div>

            <div className="flex justify-between text-lg font-bold text-main mt-4">
              <span>Total</span>
              <span>$1200</span>
            </div>
          </div>
        </div>

      
        <button className="mt-6 w-full bg-less text-black font-semibold py-2 rounded-md hover:bg-amber-500/50 cursor-pointer transition">
          Confirm Reservation
        </button>
      </div>
    </div>
  );
}
