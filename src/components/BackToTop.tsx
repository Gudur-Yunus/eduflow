"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 bg-[#6366F1] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-[0_4px_20px_rgba(99,102,241,0.5)] hover:bg-[#A78BFA] transition-colors group"
        >
          <ChevronUp size={24} />
          
          <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap bg-[#111827] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Back to top
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
