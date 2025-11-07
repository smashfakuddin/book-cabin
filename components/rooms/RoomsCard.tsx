import BookMark from "@/icons/BookMark";
import DoubleUser from "@/icons/DoubleUser";
import Heart from "@/icons/Heart";
import RightArrow from "@/icons/RightArrow";
import { RoomsCardProps } from "@/types/RoomsCardProps";
import Link from "next/link";

export default function RoomsCard({ room }: { room: RoomsCardProps }) {
  return (
    <div className="border border-gray-700 flex gap-3 rounded-md relative">
      <div>
        <img
          src={room?.imageUrl}
          alt={room.title.slice(0, 10)}
          className="w-72 h-64 object-cover rounded-l-md"
        />
      </div>
      <div className="space-y-2 w-full ">
        <h3 className=" text-amber-300/70 text-xl font-semibold my-2">
          {room.title}
        </h3>
        <div className=" flex items-center gap-3 text-neutral-400">
          <DoubleUser />
          <span className=" ">For up to {room.totalGuestCapacity} guests</span>
        </div>
        <button className="flex gap-3 items-center">
          <BookMark />
          <Heart />
        </button>
        <p className=" justify-self-end mr-5 text-xl">
          {room?.isDiscountApplicable ? (
            <span>
              {" "}
              $ {room?.discountedPrice}{" "}
              <span className="text-sm line-through">
                ${room?.regularPrice}
              </span>{" "}
              / night{" "}
            </span>
          ) : (
            <span> $ {room?.regularPrice} / night </span>
          )}
        </p>
        <div className="absolute bottom-3 right-3 ">
          <div className="flex gap-3 items-center">
            <Link
              href={`/rooms/${room?._id}`}
              className="flex items-center gap-2 px-4 py-2 border border-gray-800  hover:bg-amber-600/70 cursor-pointer transition-colors duration-500"
            >
              Detail and Reservation <RightArrow />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
