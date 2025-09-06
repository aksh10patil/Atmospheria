"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingLeaves() {
  return (
    <div className="relative w-full flex justify-between items-center">
      {/* Left Leaf */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-32 h-auto"
      >
        <Image
          src="/images/leaves.webp" // original leaf image
          alt="Left Leaf"
          width={128}
          height={128}
          className="object-contain"
        />
      </motion.div>

      {/* Right Leaf (mirrored) */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="w-32 h-auto"
      >
        <Image
          src="/images/leaves.webp" // same image
          alt="Right Leaf"
          width={1000}
          height={1000}
          className="object-contain scale-x-[-1]" // mirror horizontally
        />
      </motion.div>
    </div>
  );
}
