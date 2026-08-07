"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, LayoutDashboard, User } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();
  
  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Courses", href: "/courses", icon: BookOpen },
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Profile", href: "/login", icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0A0D14]/90 backdrop-blur-xl border-t border-[#1F2937] z-[100] px-6 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.label} 
              href={item.href}
              className={`flex flex-col items-center gap-1.5 transition-colors ${isActive ? "text-[#6366F1]" : "text-[#6B7280] hover:text-white"}`}
            >
              <item.icon size={22} className={isActive ? "fill-current/20" : ""} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
