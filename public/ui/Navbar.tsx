"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-4 left-0 right-0 flex items-center justify-between px-8 z-20 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mx-8 shadow-lg py-3">
      {/* Left links */}
      <div className="flex space-x-8">
        <Link
          href="#home"
          className="text-white font-[gua] font-bold  hover:text-gray-200 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="text-white font-[gua] font-bold hover:text-gray-200 transition-colors duration-300"
        >
          About
        </Link>
        <Link
          href="#menu"
          className="text-white font-[gua] font-bold hover:text-gray-200 transition-colors duration-300"
        >
          Menu
        </Link>
        <Link
          href="#contact"
          className="text-white font-[gua] font-bold hover:text-gray-200 transition-colors duration-300"
        >
          Contact
        </Link>
      </div>
      {/* Right buttons */}
      <div className="flex space-x-8">
        <Link
          href="#order"
          className="text-yellow-400 font-[gua] font-bold hover:text-gray-200 transition-colors duration-300"
        >
          Order
        </Link>
        <Link
          href="#reservations"
          className="text-yellow-400 font-[gua] font-bold hover:text-gray-200 transition-colors duration-300"
        >
          Reservations
        </Link>
      </div>
    </nav>
  );
}
