"use client";

import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CourseCard from "@/components/CourseCard";
import { spaceGrotesk } from "../fonts";
import { mockCourses } from "@/data/courses";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import PageTransition from "@/components/PageTransition";

const tabs = ["All", "Development", "Design", "Science", "Business"];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const searchResults = mockCourses
    .filter((c) => c.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 5);

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0A0D14] pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 className={`text-3xl md:text-4xl font-bold text-white ${spaceGrotesk.className}`}>
            Explore Courses
          </h1>
          <div className="relative w-full md:w-96" ref={dropdownRef}>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" size={20} />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
              placeholder="Search for courses..."
              className="w-full bg-[#111827] border border-[#1F2937] text-white rounded-[12px] py-3 pl-12 pr-4 focus:outline-none focus:border-[#6366F1] transition-colors"
            />
            <AnimatePresence>
              {showDropdown && searchQuery && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-[#111827] border border-[#1F2937] rounded-[12px] shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-50 overflow-hidden"
                >
                  {searchResults.length > 0 ? (
                    searchResults.map((result) => (
                      <div 
                        key={result.id} 
                        onClick={() => router.push(Number(result.price) > 0 ? `/checkout/${result.id}` : `/courses/${result.id}`)}
                        className="hover:bg-[#1F2937] px-4 py-3 cursor-pointer flex justify-between items-center border-b border-[#1F2937] last:border-0"
                      >
                        <span className="text-white font-medium text-sm md:text-base">{result.title}</span>
                        <div className="flex gap-3 items-center">
                          <span className="text-xs bg-[#0A0D14] px-2 py-1 rounded text-[#6B7280] hidden sm:block">{result.category}</span>
                          <span className="text-white font-bold text-sm">${result.price}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-4 text-[#6B7280] text-center">No courses found</div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 hide-scrollbar">
          {tabs.map((tab, i) => (
            <button 
              key={tab} 
              className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${i === 0 ? "bg-[#6366F1] text-white" : "bg-[#111827] border border-[#1F2937] text-[#6B7280] hover:text-white hover:border-[#6366F1]"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mockCourses.map((course) => (
            <motion.div key={course.id} variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}>
              <CourseCard {...course} />
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </div>
    </PageTransition>
  );
}
