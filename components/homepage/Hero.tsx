import RightArrow from "@/icons/RightArrow";
import Link from "next/link";

export default function Hero() {
  return (
    <>
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage:
          "url('https://cozy-cabins.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg.c8baead7.png&w=3840&q=75')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        zIndex: -1, 
        textAlign: "center",
      }}
    >
      
    </div>
    <div className=" space-y-5 flex flex-col items-center justify-center h-[80vh]">
        <h2 className=" sm:text-5xl font-semibold text-center text-3xl">Book Your Relaxation Here</h2>
        <Link href={"/rooms"} className="bg-main hover:bg-less transition-colors duration-300 px-5 py-3 bg text-black flex items-center">
          <span>Explore Now{" "}</span>
          <RightArrow/>
        </Link>
      </div>
      </>
  );
}
