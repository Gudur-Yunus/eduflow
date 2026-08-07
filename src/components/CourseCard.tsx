"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Users } from "lucide-react";
import { spaceGrotesk } from "@/app/fonts";
import { AnimatePresence, motion } from "framer-motion";

interface CourseCardProps {
  id: string;
  title: string;
  category: string;
  instructor: string;
  rating: number;
  students: number;
  price: number | string;
  image: string;
}

export default function CourseCard({
  id,
  title,
  instructor,
  rating,
  students,
  price,
  image,
  category,
}: CourseCardProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [showPreview, setShowPreview] = useState(false);
  const [panelSide, setPanelSide] = useState<"left" | "right">("right");
  const cardRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout>();

  const numericPrice = typeof price === "number" ? price : 0;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const distanceToRight = window.innerWidth - rect.right;
      if (distanceToRight < 320) {
        setPanelSide("left");
      } else {
        setPanelSide("right");
      }
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setShowPreview(true);
    }, 600);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setShowPreview(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="relative h-full perspective-1000">
      <Link href={numericPrice > 0 ? `/checkout/${id}` : `/courses/${id}`} className="block h-full cursor-pointer group">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="h-full bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-200 ease-out flex flex-col group-hover:border-[#6366F1]/50 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
          style={{
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          }}
        >
          <div className="h-48 w-full relative overflow-hidden bg-[#1F2937]">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6366F1] bg-[#6366F1]/10 px-3 py-1 rounded-full">
                {category}
              </span>
            </div>
            <h3 className={`text-xl font-bold text-white mb-2 ${spaceGrotesk.className}`}>
              {title}
            </h3>
            <p className="text-[#6B7280] text-sm mb-4 line-clamp-2 flex-grow">
              {instructor}
            </p>
            <div className="flex items-center justify-between text-sm mt-auto border-t border-[#1F2937]/50 pt-4">
              <div className="flex items-center gap-4 text-[#6B7280]">
                <span className="flex items-center gap-1.5">
                  <Star size={16} className="text-[#10B981]" />
                  {rating}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users size={16} />
                  {students}
                </span>
              </div>
              <span className={`font-bold ${numericPrice > 0 ? 'text-white' : 'text-[#10B981]'}`}>
                {numericPrice > 0 ? `$${numericPrice}` : 'Free'}
              </span>
            </div>
          </div>
        </div>
      </Link>

      <AnimatePresence>
        {showPreview && (
          <motion.div 
            initial={{ opacity: 0, x: panelSide === "right" ? -8 : 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-50 top-full mt-4 lg:top-0 lg:mt-0 bg-[#111827] border border-[#6366F1]/30 rounded-[16px] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-[calc(100%-2rem)] lg:w-72 left-4 cursor-default pointer-events-auto ${
              panelSide === "right" 
                ? "lg:left-full lg:ml-4 lg:right-auto" 
                : "lg:right-full lg:mr-4 lg:left-auto"
            }`}
            onMouseEnter={() => setShowPreview(true)}
            onMouseLeave={() => setShowPreview(false)}
          >
            <h3 className={`text-xl font-bold text-white mb-4 ${spaceGrotesk.className}`}>{title}</h3>
            
            <p className="text-[#10B981] text-xs font-bold uppercase tracking-wider mb-2">What you&apos;ll learn</p>
            <ul className="text-sm text-[#6B7280] space-y-2 mb-4">
              <li className="flex gap-2"><div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#6366F1]" />Master the core concepts</li>
              <li className="flex gap-2"><div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#6366F1]" />Build real-world projects</li>
              <li className="flex gap-2"><div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#6366F1]" />Get ready for the industry</li>
            </ul>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6366F1] to-[#A78BFA]" />
              <div>
                <p className="text-sm text-white">{instructor}</p>
                <p className="text-xs text-[#6B7280]">20 hours · 45 lessons</p>
              </div>
            </div>
            
            <Link 
              href={numericPrice > 0 ? `/checkout/${id}` : `/courses/${id}`}
              className="block w-full bg-[#6366F1] text-white text-center py-2.5 rounded-[8px] font-medium hover:bg-[#A78BFA] transition-colors shadow-lg shadow-[#6366F1]/20 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)]"
            >
              Enroll Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
