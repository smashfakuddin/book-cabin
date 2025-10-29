import BookMark from "@/icons/BookMark";
import DoubleUser from "@/icons/DoubleUser";
import Heart from "@/icons/Heart";
import RightArrow from "@/icons/RightArrow";

export default function RoomsCard() {
  return (
    <div className="border border-gray-700 flex gap-3 rounded-md relative">
      <div>
        <img
          src="https://cozy-cabins.vercel.app/_next/image?url=https%3A%2F%2Fquspfurlhyjelrremzah.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcabin-images%2Fcabin-001.jpg&w=3840&q=75"
          alt=""
          className="w-64 h-64 object-cover rounded-l-md"
        />
      </div>
      <div className="space-y-2 w-full ">
        <h3 className=" text-amber-300/70 text-xl font-semibold">
          Cabin Bella Vista
        </h3>
        <div className=" flex items-center gap-3 text-neutral-400">
          <DoubleUser />
          <span className=" ">For up to 2 guests</span>
        </div>
        <button className="flex gap-3 items-center">
          <BookMark />
          <Heart />
        </button>
        <p className=" justify-self-end mr-5 text-xl">
          $ {210} <span className="text-sm line-through">${250}</span> / night
        </p>
        <div className="absolute bottom-3 right-3 ">
          <div className="flex gap-3 items-center">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-800  hover:bg-amber-600/70 cursor-pointer transition-colors duration-500">
              Detail and Reservation <RightArrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
