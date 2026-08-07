import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import KeyboardShortcuts from "@/components/KeyboardShortcuts";
import BackToTop from "@/components/BackToTop";
import BottomNav from "@/components/BottomNav";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "EduFlow | Online Education",
  description: "Learn without limits. Structured courses, real projects, lifetime access.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        {children}
        <BottomNav />
        <KeyboardShortcuts />
        <BackToTop />
        <CustomCursor />
      </body>
    </html>
  );
}
