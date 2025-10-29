export default function Welcome() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 container mx-auto h-screen items-center justify-center py-4">
      <div className=" flex item-center justify-center">
        <img
          src="https://cozy-cabins.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-1.58c75042.jpg&w=3840&q=75"
          alt=""
          className="w-[80%] h-[80%] rounded-md"
        />
      </div>
      <div className=" space-y-6 text-xl text-justify">
        <h3 className=" text-5xl font-semibold text-amber-600 text-center sm:text-left">Welcome to Cozy Cabins</h3>
        <p className=" line-clamp-4">
          Where nature's beauty and comfortable living blend seamlessly. Hidden
          away in the heart of the Bandarban Hills or Sajek Valley, this is your
          paradise away from home. But it's not just about the luxury cabins.
          It's about the experience of reconnecting with nature and enjoying
          simple pleasures with family.
        </p>
        <p>
          Our 8 luxury cabins provide a cozy base, but the real freedom and
          peace you'll find in the surrounding mountains. Wander through lush
          forests, breathe in the fresh air, and watch the stars twinkle above
          from the warmth of a campfire or your hot tub.
        </p>
        <p>
          This is where memorable moments are made, surrounded by nature's
          splendor. It's a place to slow down, relax, and feel the joy of being
          together in a beautiful setting.
        </p>
      </div>
    </div>
  );
}
