import Link from "next/link";

export default function DashboardPage() {
  const stats = [
    { id: 1, title: "Total Rooms", value: 24 },
    { id: 2, title: "Active Bookings", value: 12 },
    { id: 3, title: "Pending Requests", value: 5 },
    { id: 4, title: "Total Guests", value: 47 },
  ];

  const recentBookings = [
    {
      id: 1,
      guest: "Sophie Turner",
      room: "Cozy Riverside Cabin",
      date: "Nov 8, 2025",
      status: "Confirmed",
    },
    {
      id: 2,
      guest: "David Miller",
      room: "Modern City Apartment",
      date: "Nov 9, 2025",
      status: "Pending",
    },
    {
      id: 3,
      guest: "Emma Brown",
      room: "Garden Suite",
      date: "Nov 10, 2025",
      status: "Cancelled",
    },
  ];

  return (
    <main className="container mx-auto py-5">
      {/* Top Bar */}
      <header className="flex justify-between items-center mb-10 gap-4">
        <h1 className="text-3xl font-bold text-less">Dashboard</h1>
        <Link
          href="/rooms/add"
          className="bg-less text-white px-5 py-2 rounded-lg font-medium hover:bg-main transition"
        >
          + Add New Room
        </Link>
      </header>

      {/* Stats Grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((item) => (
          <div
            key={item.id}
            className="  p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-700 "
          >
            <h3 className="text-sm mb-2">{item.title}</h3>
            <p className="text-3xl font-semibold">{item.value}</p>
          </div>
        ))}
      </section>

      {/* Recent Bookings */}
      <section className=" dark:bg-neutral-800 rounded-2xl shadow-sm border border-neutral-800 dark:border-neutral-700 p-6">
        <h2 className="text-2xl font-semibold mb-6 text-less">Recent Bookings</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700 text-neutral-300 text-sm">
                <th className="pb-3">Guest</th>
                <th className="pb-3">Room</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((b) => (
                <tr
                  key={b.id}
                  className="border-b border-gray-700 dark:border-neutral-700 hover:bg-neutral-900/60 cursor-pointer text-neutral-400 dark:hover:bg-neutral-800/60 transition-all duration-300"
                >
                  <td className="py-3 font-medium">{b.guest}</td>
                  <td className="py-3">{b.room}</td>
                  <td className="py-3 text-neutral-600 dark:text-neutral-300">
                    {b.date}
                  </td>
                  <td className="py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        b.status === "Confirmed"
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-800/30 dark:text-emerald-300"
                          : b.status === "Pending"
                          ? "bg-amber-100 text-amber-700 dark:bg-amber-800/30 dark:text-amber-300"
                          : "bg-rose-100 text-rose-700 dark:bg-rose-800/30 dark:text-rose-300"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
