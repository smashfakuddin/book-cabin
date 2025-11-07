"use client";

import { useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Account created successfully!");
        setForm({ name: "", email: "", password: "" });
       
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
      redirect("/login")
    }
  };

  return (
    <div className="bg-gray-900/50 min-h-[90vh] flex items-center justify-center p-6">
      <div className="bg-neutral-900 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center border-b border-neutral-700 pb-3">
          Create an Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-neutral-400 text-sm mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-main"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-neutral-400 text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-main"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-neutral-400 text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-main"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-less text-black font-semibold py-2 rounded-md hover:bg-amber-500/50 transition cursor-pointer disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

          {message && (
            <p
              className={`text-center mt-3 text-sm ${
                message.startsWith("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}

          <p className="text-center text-neutral-400 text-sm mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-main hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
