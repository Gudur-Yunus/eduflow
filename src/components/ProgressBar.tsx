"use client";

import { motion } from "framer-motion";

export default function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full bg-[#1F2937] h-2 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-[#6366F1] h-full relative"
      >
        <div className="absolute right-0 top-0 bottom-0 w-2 rounded-full" style={{ boxShadow: '4px 0 12px rgba(99, 102, 241, 0.6)' }} />
      </motion.div>
    </div>
  );
}
