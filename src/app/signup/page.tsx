"use client";

import Link from "next/link";
import { spaceGrotesk } from "@/app/fonts";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

export default function SignupPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0A0D14] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-[#111827] border border-[#1F2937] rounded-[12px] p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-bold text-white mb-2 tracking-wide ${spaceGrotesk.className}`}>
            EduFlow
          </h1>
          <p className="text-[#6B7280]">Create your account to start learning.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-white mb-1.5">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full bg-[#0A0D14] border border-[#1F2937] text-white rounded-[8px] py-2.5 px-4 focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1.5">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full bg-[#0A0D14] border border-[#1F2937] text-white rounded-[8px] py-2.5 px-4 focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1.5">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-[#0A0D14] border border-[#1F2937] text-white rounded-[8px] py-2.5 px-4 focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all"
            />
          </div>
          
          <motion.button 
            whileHover={{ y: -2, scale: 1.02 }} 
            whileTap={{ y: 0, scale: 0.98 }}
            className="w-full bg-[#6366F1] text-white py-2.5 rounded-[8px] font-medium hover:bg-[#A78BFA] transition-all duration-300 shadow-lg shadow-[#6366F1]/20 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] mt-4"
          >
            Create Account
          </motion.button>
        </form>

        <div className="mt-6 mb-6 flex items-center">
          <div className="flex-grow border-t border-[#1F2937]"></div>
          <span className="px-3 text-[#6B7280] text-sm">or</span>
          <div className="flex-grow border-t border-[#1F2937]"></div>
        </div>

        <button className="w-full bg-transparent border border-[#1F2937] text-white py-2.5 rounded-[8px] font-medium hover:bg-[#1F2937] transition-all flex items-center justify-center gap-2">
          <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          Sign up with Google
        </button>

        <p className="text-center text-[#6B7280] text-sm mt-8">
          Already have an account? <Link href="/login" className="text-[#6366F1] font-medium hover:text-[#A78BFA] transition-colors">Sign in</Link>
        </p>
        </motion.div>
      </div>
    </PageTransition>
  );
}
