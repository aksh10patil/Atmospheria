"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-4 left-0 right-0 flex items-center justify-between px-8 z-20">
      {/* Left links */}
      <div className="flex space-x-6">
        <Link
          href="#home"
          className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition"
        >
          About
        </Link>
        <Link
          href="#menu"
          className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition"
        >
          Menu
        </Link>
        <Link
          href="#contact"
          className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition"
        >
          Contact
        </Link>
      </div>

      {/* Right buttons */}
      <div className="flex space-x-4">
        <Link
          href="#order"
          className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition"
        >
          Order
        </Link>
        <Link
          href="#reservations"
          className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition"
        >
          Reservations
        </Link>
      </div>
    </nav>
  );
}
