import Link from "next/link";

export default function Hero() {
  return (
    <>
    <div
      style={{
        position: "fixed", // 👈 makes it cover entire screen
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
        zIndex: -1, // 👈 keeps it behind other sections
        textAlign: "center",
      }}
    >
      
    </div>
    <div className=" space-y-5 flex flex-col items-center justify-center h-[80vh]">
        <h2 className=" sm:text-5xl font-semibold text-center text-3xl">Book Your Relaxation Here</h2>
        <Link href={"/rooms"} className=" px-5 py-3 bg-amber-500 text-black flex ">
          <span>Explore Now{" "}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </Link>
      </div>
      </>
  );
}
