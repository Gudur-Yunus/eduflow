"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { spaceGrotesk } from "@/app/fonts";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`hidden md:block fixed w-full z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled ? "bg-[#111827]/90 backdrop-blur-md border-b border-[#1F2937] py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className={`text-2xl font-bold text-white tracking-wide ${spaceGrotesk.className}`}>
            EduFlow
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-[#F9FAFB] hover:text-[#6366F1] transition-colors">Home</Link>
            <Link href="/courses" className="text-[#F9FAFB] hover:text-[#6366F1] transition-colors">Courses</Link>
            <Link href="/dashboard" className="text-[#F9FAFB] hover:text-[#6366F1] transition-colors">Dashboard</Link>
            <Link href="/login" className="bg-[#6366F1] text-white px-5 py-2 rounded-[12px] hover:bg-[#A78BFA] transition-all duration-300 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)]">
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111827] border-b border-[#1F2937]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-[#F9FAFB] hover:text-[#6366F1]">Home</Link>
            <Link href="/courses" className="block px-3 py-2 text-[#F9FAFB] hover:text-[#6366F1]">Courses</Link>
            <Link href="/dashboard" className="block px-3 py-2 text-[#F9FAFB] hover:text-[#6366F1]">Dashboard</Link>
            <Link href="/login" className="block px-3 py-2 text-[#6366F1] font-bold">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
