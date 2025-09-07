"use client";


import { motion } from "framer-motion";


export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-green-900 to-white overflow-hidden">
      
    {/* Left canopy leaves */}
    <motion.img
      src="/images/leaves.webp"
      alt="Leaves Left"
      className="absolute top-0 left-0 h-[100vh] object-cover z-10"
      animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Right canopy leaves (mirrored) */}
    <motion.img
      src="/images/leaves.webp"
      alt="Leaves Right"
      className="absolute top-0 right-0 h-[100vh] object-cover z-10 scale-x-[-1]"
      animate={{ y: [0, -10, 0], rotate: [1, -1, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />

    {/* Main brand text */}
    <div className="relative z-20 text-center mt-32">
      <h1 className="text-6xl text-black font-[gua]">ATMOSPHERIA</h1>
      <p className="text-xl font-[gua] text-black mt-2">the courtyard Kitchen</p>
    </div>
  </div>
  );
}