export default function Intro() {
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
        <h3 className=" text-5xl font-semibold text-amber-600 text-center sm:text-left">
          Managed by our family since 1962
        </h3>
        <p className=" line-clamp-4">
          Since 1962, The Cozy Cabins has been a cherished family-run retreat.
          Started by our grandparents, this haven has been nurtured with love
          and care, passing down through our family as a testament to our
          dedication to creating a warm, welcoming environment.
        </p>
        <p>
          Over the years, we've maintained the essence of The Cozy Cabins,
          blending the timeless beauty of the mountains with the personal touch
          only a family business can offer. Here, you're not just a guest;
          you're part of our extended family. So join us at The Cozy Cabins
          soon, where tradition meets tranquility, and every visit is like
          coming home.
        </p>
        <button className=" px-5 py-3 bg-amber-700 text-black flex items-center">
          <span>Explore our luxury cabins</span>
          
        </button>
      </div>
    </div>
  );
}
