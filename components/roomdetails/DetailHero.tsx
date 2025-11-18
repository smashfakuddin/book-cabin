import DoubleUser from "@/icons/DoubleUser";
import { RoomsCardProps } from "@/types/RoomsCardProps";
import AmenityItem from "./Aminities";

export default function DetailHero({ room }: { room: RoomsCardProps }) {
  console.log(room);
  return (
    <section className="flex items-center justify-center min-h-screen  px-4 sm:px-6 md:px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-5 md:gap-10  rounded-md  shadow-md border border-gray-700 bg-[#131c24]">
        {/* Left Image Section */}
        <div className="relative w-full h-64 sm:h-80 md:h-[450px] ">
          <img
            src={room?.imageUrl}
            alt={room.title.slice(1, 10)}
            className="absolute inset-0 w-full h-full object-cover scale-100 md:scale-[1.10] rounded-md md:-translate-x-3 transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Details Section */}
        <div className="flex flex-col justify-center space-y-6 p-6 sm:p-8 md:p-10 text-gray-300">
          <h2 className="text-accent-100 font-black text-2xl sm:text-4xl bg-[#131c24] mb-2 translate-x-0 md:translate-x-[-254px] bg-primary-950 p-2 md:p-6 w-full ">
            {room.title}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-400">
            {room.description}
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <DoubleUser />
              <span>Up to 2 Guests</span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <DoubleUser />
              <span>1 Queen Bed</span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <DoubleUser />
              <span>Private Lake View</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
              {room.amenities.map((item) => (
                <AmenityItem key={item} type={item} />
              ))}
            </div>
          </div>

          <button className="mt-4 inline-block bg-accent-100 text-[#131c24] font-semibold px-6 py-3 rounded-xl hover:bg-accent-200 transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
