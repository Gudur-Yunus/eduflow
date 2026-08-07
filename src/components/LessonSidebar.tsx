"use client";

import { CheckCircle2, Play, Lock } from "lucide-react";
import ProgressBar from "./ProgressBar";
import { spaceGrotesk } from "@/app/fonts";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function LessonSidebar() {
  const lessons = [
    { id: 1, title: "Course Introduction", duration: "5:20", status: "completed" },
    { id: 2, title: "Setting up the Environment", duration: "15:40", status: "completed" },
    { id: 3, title: "Core Concepts Overview", duration: "22:15", status: "current" },
    { id: 4, title: "Building the First Component", duration: "18:30", status: "locked" },
    { id: 5, title: "State and Props", duration: "25:00", status: "locked" },
    { id: 6, title: "Module 1 Quiz", duration: "10:00", status: "locked" },
  ];

  const completedCount = lessons.filter(l => l.status === "completed").length;
  const progress = Math.round((completedCount / lessons.length) * 100);

  const [showToast, setShowToast] = useState(false);

  const handleComplete = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#6366F1", "#A78BFA", "#818CF8", "#FFFFFF"],
    });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <>
      <div className="bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] rounded-[12px] p-6 sticky top-28">
        <h3 className={`text-xl font-bold text-white mb-4 ${spaceGrotesk.className}`}>Course Content</h3>
        
        <div className="mb-6">
          <div className="flex justify-between text-sm text-[#6B7280] mb-2">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <ProgressBar value={progress} />
        </div>

        <div className="space-y-3 mb-8">
          {lessons.map((lesson) => (
            <div 
              key={lesson.id} 
              className={`flex items-start gap-3 p-3 rounded-[8px] transition-colors ${
                lesson.status === "current" ? "bg-[#6366F1]/10 border border-[#6366F1]/30" : "hover:bg-[#1F2937]/50"
              }`}
            >
              <div className="mt-0.5 flex-shrink-0">
                {lesson.status === "completed" && <CheckCircle2 size={18} className="text-[#10B981]" />}
                {lesson.status === "current" && <Play size={18} className="text-[#6366F1] fill-current" />}
                {lesson.status === "locked" && <Lock size={18} className="text-[#6B7280]" />}
              </div>
              <div className="flex-grow">
                <h4 className={`text-sm font-medium ${lesson.status === "locked" ? "text-[#6B7280]" : "text-white"}`}>
                  {lesson.title}
                </h4>
                <span className="text-xs text-[#6B7280]">{lesson.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <motion.button 
          onClick={handleComplete}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ y: 0, scale: 0.98 }}
          className="w-full bg-[#6366F1] text-white py-3 rounded-[8px] font-medium hover:bg-[#A78BFA] transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.4)]"
        >
          Mark as Complete
        </motion.button>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 right-6 bg-[#111827] border border-[#6366F1] rounded-[12px] p-4 text-white shadow-xl z-50 flex items-center gap-3"
          >
            <div className="text-2xl">🎉</div>
            <div>
              <p className="font-bold">Course Complete!</p>
              <p className="text-sm text-[#6B7280]">Well done!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
