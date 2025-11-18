export default function ProfilePage() {
  return (
    <div className="min-h-screen  py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* PAGE TITLE */}
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>

        {/* TOP SECTION */}
        <div className=" shadow rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
          <img
            src="/profile-avatar.png"
            alt="User"
            className="w-28 h-28 rounded-full object-cover border"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-semibold">Ashfak Uddin</h2>
            <p className="text-gray-600">ashfak@example.com</p>

            <div className="flex gap-4 mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Edit Profile
              </button>
              <button className="border px-4 py-2 rounded-lg hover:bg-gray-200">
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* USER STATS */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className=" p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold">Total Bookings</h3>
            <p className="text-4xl font-bold mt-2">12</p>
          </div>
          <div className=" p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold">Pending</h3>
            <p className="text-4xl font-bold mt-2 text-orange-500">3</p>
          </div>
          <div className=" p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold">Completed</h3>
            <p className="text-4xl font-bold mt-2 text-green-600">9</p>
          </div>
        </section>

        {/* BOOKING HISTORY */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Booking History</h2>

          <div className=" shadow rounded-xl overflow-hidden">
            <table className="w-full border-collapse">
              <thead className="text-left">
                <tr>
                  <th className="p-4">Room</th>
                  <th className="p-4">Check-in</th>
                  <th className="p-4">Check-out</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {[1, 2, 3, 4].map((item) => (
                  <tr key={item} className="border-t ">
                    <td className="p-4">Luxury Cabin Room</td>
                    <td className="p-4">Jan 12, 2025</td>
                    <td className="p-4">Jan 14, 2025</td>
                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-600">
                        Completed
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-blue-600 hover:underline mr-4">
                        View
                      </button>
                      <button className="text-red-500 hover:underline">
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Empty state example (uncomment when needed) */}
            {/* <div className="p-6 text-center text-gray-600">No bookings found.</div> */}
          </div>
        </section>

        {/* RECENT ACTIVITY */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>

          <div className=" shadow rounded-xl p-6 space-y-4">
            <div className="flex justify-between text-gray-700">
              <span>🔹 You updated your profile information.</span>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>🔹 Booking #1234 confirmed.</span>
              <span className="text-gray-500 text-sm">5 days ago</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>🔹 Booking #1211 reviewed.</span>
              <span className="text-gray-500 text-sm">1 week ago</span>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 py-10 text-center text-gray-500">
          © 2025 CabinBook — Profile Dashboard
        </footer>
      </div>
    </div>
  );
}
