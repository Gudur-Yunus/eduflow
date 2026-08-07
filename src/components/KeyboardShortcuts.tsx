"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { spaceGrotesk } from "@/app/fonts";

export default function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const keysPressed: Record<string, boolean> = {};

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      keysPressed[e.key.toLowerCase()] = true;

      if (e.key === "?") {
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      } else if (keysPressed["g"]) {
        if (e.key.toLowerCase() === "h") router.push("/");
        if (e.key.toLowerCase() === "c") router.push("/courses");
        if (e.key.toLowerCase() === "d") router.push("/dashboard");
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      delete keysPressed[e.key.toLowerCase()];
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [router]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="relative bg-[#111827] border border-[#1F2937] rounded-[16px] w-full max-w-md p-6 shadow-2xl z-10"
          >
            <h3 className={`text-xl font-bold text-white mb-6 ${spaceGrotesk.className}`}>Keyboard Shortcuts</h3>
            
            <div className="space-y-4">
              {[
                { keys: ["G", "H"], label: "Go to Home" },
                { keys: ["G", "C"], label: "Go to Courses" },
                { keys: ["G", "D"], label: "Go to Dashboard" },
                { keys: ["Esc"], label: "Close this menu" },
                { keys: ["?"], label: "Open shortcuts" },
              ].map((shortcut, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-[#6B7280]">{shortcut.label}</span>
                  <div className="flex gap-1.5">
                    {shortcut.keys.map((key, j) => (
                      <span key={j} className="bg-[#1F2937] text-white rounded px-2 py-1 font-mono text-xs border border-[#374151]">
                        {key}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
