"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { BookOpen, Zap, Trophy, Star, Play, CheckCircle2, Lock, Award } from "lucide-react";
import StatCounter from "@/components/StatCounter";
import { spaceGrotesk } from "./fonts";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ProgressRing from "@/components/ProgressRing";

const HeroOrb = dynamic(() => import("@/components/HeroOrb"), { ssr: false });

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroOrb />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`text-5xl md:text-7xl font-bold mb-6 text-gradient-animate ${spaceGrotesk.className}`}
          >
            Learn Without Limits
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-[#6B7280] mb-10 max-w-2xl"
          >
            Structured courses, real projects, lifetime access.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/courses" className="bg-[#6366F1] text-white px-8 py-4 rounded-[12px] font-medium text-lg hover:bg-[#A78BFA] transition-all duration-300 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)]">
              Start Learning
            </Link>
            <Link href="/courses" className="bg-transparent border border-[#1F2937] text-white px-8 py-4 rounded-[12px] font-medium text-lg hover:bg-[#111827] transition-all duration-300">
              Browse Courses
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Ticker Section */}
      <div className="bg-[#111827] border-y border-[#1F2937] overflow-hidden whitespace-nowrap py-3 group">
        <div className="inline-block animate-[ticker_25s_linear_infinite] group-hover:[animation-play-state:paused]">
          <span className="text-[#6B7280] text-sm tracking-wide mx-4">⭐ 50,000+ Students  ·  ✅ 200+ Courses  ·  🎓 98% Completion Rate  ·  🏆 #1 Rated Platform  ·  🚀 Learn at Your Pace  ·</span>
          <span className="text-[#6B7280] text-sm tracking-wide mx-4">⭐ 50,000+ Students  ·  ✅ 200+ Courses  ·  🎓 98% Completion Rate  ·  🏆 #1 Rated Platform  ·  🚀 Learn at Your Pace  ·</span>
          <span className="text-[#6B7280] text-sm tracking-wide mx-4">⭐ 50,000+ Students  ·  ✅ 200+ Courses  ·  🎓 98% Completion Rate  ·  🏆 #1 Rated Platform  ·  🚀 Learn at Your Pace  ·</span>
          <span className="text-[#6B7280] text-sm tracking-wide mx-4">⭐ 50,000+ Students  ·  ✅ 200+ Courses  ·  🎓 98% Completion Rate  ·  🏆 #1 Rated Platform  ·  🚀 Learn at Your Pace  ·</span>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 border-t border-[#1F2937] bg-[#0A0D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#1F2937]">
            <div className="text-center py-4">
              <div className={`text-4xl md:text-5xl font-bold text-white mb-2 ${spaceGrotesk.className}`}>
                <StatCounter end={50000} suffix="+" />
              </div>
              <p className="text-[#6B7280]">Students</p>
            </div>
            <div className="text-center py-4">
              <div className={`text-4xl md:text-5xl font-bold text-white mb-2 ${spaceGrotesk.className}`}>
                <StatCounter end={200} suffix="+" />
              </div>
              <p className="text-[#6B7280]">Courses</p>
            </div>
            <div className="text-center py-4">
              <div className={`text-4xl md:text-5xl font-bold text-white mb-2 ${spaceGrotesk.className}`}>
                <StatCounter end={98} suffix="%" />
              </div>
              <p className="text-[#6B7280]">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient ${spaceGrotesk.className}`}>Why Choose EduFlow?</h2>
            <p className="text-[#6B7280]">Everything you need to master your skills.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Structured Curriculum", desc: "Follow carefully curated paths designed by industry experts." },
              { icon: Zap, title: "Interactive Learning", desc: "Build real projects and get immediate feedback on your code." },
              { icon: Trophy, title: "Earn Certificates", desc: "Showcase your achievements with verifiable certificates." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#0A0D14] border border-[#1F2937] p-8 rounded-[12px] hover:-translate-y-2 hover:border-[#6366F1] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#6366F1]/10 rounded-full flex items-center justify-center mb-6 text-[#6366F1]">
                  <feature.icon size={24} />
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${spaceGrotesk.className}`}>{feature.title}</h3>
                <p className="text-[#6B7280]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Students Love EduFlow Section */}
      <section className="py-24 bg-[#0A0D14] border-t border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="text-center mb-20">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient ${spaceGrotesk.className}`}>Why students love EduFlow</h2>
          </div>
          
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex-1"
            >
              <h3 className={`text-2xl font-bold text-white mb-4 ${spaceGrotesk.className}`}>Learn at your own pace</h3>
              <p className="text-[#6B7280] text-lg">Access all course content forever. Pick up where you left off on any device, any time.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex-1 w-full max-w-sm"
            >
              <div className="bg-[#111827] border border-[#1F2937] rounded-[24px] p-4 shadow-2xl relative aspect-[9/19] flex flex-col mx-auto w-64">
                <div className="w-1/3 h-1 bg-[#1F2937] mx-auto rounded-full mb-6 mt-2" />
                <div className="bg-[#0A0D14] rounded-lg h-32 mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#6366F1] to-[#A78BFA] opacity-20" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play size={16} className="text-white fill-current ml-1" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-[#1F2937] rounded-full overflow-hidden"><div className="w-[60%] h-full bg-[#6366F1]" /></div>
                  <div className="flex items-center gap-3"><div className="w-6 h-6 rounded-full border border-[#10B981] flex items-center justify-center text-[#10B981]"><CheckCircle2 size={12} /></div><div className="h-3 w-3/4 bg-[#1F2937] rounded-full" /></div>
                  <div className="flex items-center gap-3"><div className="w-6 h-6 rounded-full border border-[#1F2937] flex items-center justify-center"><Play size={10} className="text-[#6366F1] fill-current" /></div><div className="h-3 w-1/2 bg-[#1F2937] rounded-full" /></div>
                  <div className="flex items-center gap-3"><div className="w-6 h-6 rounded-full border border-[#1F2937] flex items-center justify-center"><Lock size={10} className="text-[#6B7280]" /></div><div className="h-3 w-2/3 bg-[#1F2937] rounded-full" /></div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Row 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 mb-24">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex-1"
            >
              <h3 className={`text-2xl font-bold text-white mb-4 ${spaceGrotesk.className}`}>Track every milestone</h3>
              <p className="text-[#6B7280] text-lg">Visual progress rings, streaks, and achievement badges keep you motivated throughout your learning journey.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex-1 flex justify-center items-center gap-4"
            >
              <ProgressRing percentage={90} size={100} strokeWidth={8} />
              <div className="mt-16"><ProgressRing percentage={65} size={80} strokeWidth={6} /></div>
              <div className="mt-8"><ProgressRing percentage={40} size={60} strokeWidth={4} /></div>
            </motion.div>
          </div>
          
          {/* Row 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex-1"
            >
              <h3 className={`text-2xl font-bold text-white mb-4 ${spaceGrotesk.className}`}>Certificates that matter</h3>
              <p className="text-[#6B7280] text-lg">Earn shareable certificates upon completion. Add them to LinkedIn with one click.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex-1 w-full max-w-sm"
            >
              <div className="bg-[#111827] border border-[#1F2937] p-6 rounded-[16px] shadow-2xl relative">
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                  <Award size={24} className="text-amber-900" />
                </div>
                <div className="mb-8">
                  <div className={`text-2xl font-bold text-white tracking-wide ${spaceGrotesk.className}`}>EduFlow</div>
                  <div className="text-[10px] text-[#6B7280] uppercase tracking-widest mt-1">Certificate of Completion</div>
                </div>
                <div className="text-center py-6 border-y border-[#1F2937]/50 mb-6">
                  <div className="text-[#6B7280] text-sm mb-2">This is to certify that</div>
                  <div className="text-xl text-white font-bold mb-2 border-b border-dashed border-[#374151] inline-block pb-1 px-8">Alex Johnson</div>
                  <div className="text-[#6B7280] text-sm mt-2">has successfully completed</div>
                  <div className="text-white font-medium mt-1">Advanced React Patterns</div>
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-[#6B7280] text-xs">Issued: Oct 2026</div>
                  <div className="w-24 h-6 border-b border-[#374151] relative"><span className="absolute bottom-0 left-0 text-[10px] text-[#6B7280]/50 italic text-center w-full">signature</span></div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#0A0D14] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-16 text-center ${spaceGrotesk.className}`}>What Our Students Say</h2>
          
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="min-w-[300px] md:min-w-[400px] snap-center bg-[#111827] border border-[#1F2937] p-8 rounded-[12px] flex-shrink-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366F1] to-[#A78BFA]" />
                  <div>
                    <h4 className="font-bold text-white">Alex Johnson</h4>
                    <div className="flex text-[#10B981]">
                      {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <p className="text-[#6B7280]">&quot;EduFlow completely transformed my career path. The courses are practical, well-structured, and the community is amazing.&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1F2937] bg-[#111827] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className={`text-2xl font-bold text-white tracking-wide ${spaceGrotesk.className}`}>
            EduFlow
          </div>
          <div className="flex gap-6 text-[#6B7280]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>
          <div className="text-[#6B7280] text-sm">
            © 2026 EduFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
    </PageTransition>
  );
}
