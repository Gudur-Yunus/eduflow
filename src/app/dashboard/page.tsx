"use client";

import { motion } from "framer-motion";
import { Trophy, LayoutDashboard, BookOpen, Star, Medal, Award, ArrowRight } from "lucide-react";
import ProgressRing from "@/components/ProgressRing";
import { spaceGrotesk } from "@/app/fonts";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export default function DashboardPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0A0D14] pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className={`text-3xl md:text-4xl font-bold text-white mb-2 ${spaceGrotesk.className}`}>
            Welcome back, Alex 👋
          </h1>
          <p className="text-[#6B7280]">Let&apos;s pick up where you left off.</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Enrolled Courses", value: "5", icon: LayoutDashboard },
            { title: "Completed", value: "3", icon: BookOpen },
            { title: "Total XP", value: "1,240", icon: Star }
          ].map((stat, i) => (
            <motion.div key={i} variants={item} className="bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] p-6 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-[#6B7280] text-sm mb-1">{stat.title}</p>
                <p className={`text-3xl font-bold text-white ${spaceGrotesk.className}`}>{stat.value}</p>
              </div>
              <div className="w-12 h-12 bg-[#6366F1]/10 rounded-full flex items-center justify-center text-[#6366F1]">
                <stat.icon size={24} />
              </div>
            </motion.div>
          ))}

          {/* Learning Streak Widget */}
          <motion.div variants={item} className="bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] p-6 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[#6B7280] text-sm mb-1">Learning Streak</p>
                <p className={`text-3xl font-bold text-white flex items-baseline gap-2 ${spaceGrotesk.className}`}>
                  7 <span className="text-sm font-normal text-[#6B7280]">day streak</span>
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 animate-[pulse-flame_2s_ease-in-out_infinite]">
                  <path d="M12 2C12 2 8 8 8 13C8 15.2091 9.79086 17 12 17C14.2091 17 16 15.2091 16 13C16 8 12 2 12 2ZM11 15C10.4477 15 10 14.5523 10 14C10 13.4477 10.4477 13 11 13C11.5523 13 12 13.4477 12 14C12 14.5523 11.5523 15 11 15Z" />
                </svg>
              </div>
            </div>
            <div className="flex justify-between items-center">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, j) => (
                <div key={j} className="flex flex-col items-center gap-1.5">
                  <span className="text-[10px] text-[#6B7280]">{day}</span>
                  <div className={`w-3 h-3 rounded-full ${j < 6 ? 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]' : 'border border-[#374151]'}`} />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            <h2 className={`text-2xl font-bold mb-6 text-gradient ${spaceGrotesk.className}`}>Continue Learning</h2>
            <div className="space-y-4">
              {[
                { title: "Complete Web Development Bootcamp", progress: 65, color: "bg-[#6366F1]" },
                { title: "UI/UX Design Masterclass", progress: 30, color: "bg-[#A78BFA]" }
              ].map((course, i) => (
                <div key={i} className="bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] p-6 rounded-2xl hover:border-[#6366F1] transition-colors flex flex-col md:flex-row gap-6 md:items-center justify-between">
                  <div className="flex-grow">
                    <h3 className={`text-lg font-bold text-white mb-2 ${spaceGrotesk.className}`}>{course.title}</h3>
                    <div className="mt-4">
                      <ProgressRing percentage={course.progress} size={60} strokeWidth={4} />
                    </div>
                  </div>
                  <Link href={`/courses/${i + 1}`} className="flex items-center justify-center gap-2 bg-[#6366F1]/10 text-[#6366F1] px-5 py-2.5 rounded-[8px] font-medium hover:bg-[#6366F1] hover:text-white transition-all whitespace-nowrap">
                    Resume <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className={`text-2xl font-bold text-white mb-6 ${spaceGrotesk.className}`}>Achievements</h2>
            <div className="bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] p-6 rounded-2xl">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Trophy, label: "Fast Learner", active: true },
                  { icon: Medal, label: "Perfect Score", active: true },
                  { icon: Award, label: "Top 10%", active: true },
                  { icon: Star, label: "7 Day Streak", active: false },
                  { icon: BookOpen, label: "5 Courses", active: false },
                ].map((badge, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-2">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${badge.active ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white" : "bg-[#1F2937] text-[#6B7280]"}`}>
                      <badge.icon size={28} />
                    </div>
                    <span className="text-xs text-[#6B7280]">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        </div>
      </div>
    </PageTransition>
  );
}
