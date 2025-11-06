import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" border-b border-gray-700">
        <div className=" container mx-auto flex flex-col gap-3 sm:flex-row items-center justify-between py-3">
      <div className="font-semibold">
        <Link href={"/"} className="flex items-center gap-3">
        <img
          src="https://cozy-cabins.vercel.app/_next/image?url=%2Flogo4.png&w=256&q=100"
          alt="log"
          className=" h-12 w-12"
        />
        <span className=" text-2xl font-bold ">Room Booking</span>
        </Link>
      </div>
      <div className=" gap-12 flex font-semibold">
        <Link href={"/rooms"} className=" hover:text-less transition-colors duration-300">Rooms</Link>
        <Link href={"/about"} className=" hover:text-less transition-colors duration-300">About</Link>
        <Link href={"/rooms"} className=" hover:text-less transition-colors duration-300">Guest</Link>
      </div>
    </div>
    </div>
  );
}
