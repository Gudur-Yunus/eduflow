"use client";

import { spaceGrotesk } from "@/app/fonts";
import { mockCourses } from "@/data/courses";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Lock } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PageTransition from "@/components/PageTransition";

export default function CheckoutPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const course = mockCourses.find((c) => c.id === params.id);

  if (!course) return <div className="text-white text-center mt-32">Course not found</div>;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0A0D14] pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/courses" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-white mb-6 transition-colors">
            <ArrowLeft size={16} />
            Back to Courses
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h1 className={`text-3xl font-bold text-white mb-4 ${spaceGrotesk.className}`}>Checkout</h1>
              <div className="bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
                <p className="text-[#6B7280] mb-4">by {course.instructor}</p>
                <div className="flex justify-between items-center border-t border-[#1F2937] pt-4">
                  <span className="text-white font-medium">Total:</span>
                  <span className="text-2xl font-bold text-white">${course.price}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3 text-[#6B7280]">
                  <CheckCircle2 size={20} className="text-[#10B981] flex-shrink-0" />
                  <p className="text-sm">Full lifetime access</p>
                </div>
                <div className="flex gap-3 text-[#6B7280]">
                  <CheckCircle2 size={20} className="text-[#10B981] flex-shrink-0" />
                  <p className="text-sm">Certificate of completion</p>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handlePayment} className="bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Payment Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#6B7280] mb-2">Card Number</label>
                    <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-[#0A0D14] border border-[#1F2937] text-white rounded-[8px] py-3 px-4 focus:outline-none focus:border-[#6366F1]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#6B7280] mb-2">Expiry Date</label>
                      <input required type="text" placeholder="MM/YY" className="w-full bg-[#0A0D14] border border-[#1F2937] text-white rounded-[8px] py-3 px-4 focus:outline-none focus:border-[#6366F1]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#6B7280] mb-2">CVC</label>
                      <input required type="text" placeholder="123" className="w-full bg-[#0A0D14] border border-[#1F2937] text-white rounded-[8px] py-3 px-4 focus:outline-none focus:border-[#6366F1]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#6B7280] mb-2">Name on Card</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-[#0A0D14] border border-[#1F2937] text-white rounded-[8px] py-3 px-4 focus:outline-none focus:border-[#6366F1]" />
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isProcessing}
                  className="w-full bg-[#6366F1] text-white py-3 rounded-[8px] font-medium mt-8 hover:bg-[#A78BFA] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)]"
                >
                  {isProcessing ? "Processing..." : (
                    <>
                      <Lock size={18} />
                      Pay ${course.price}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </PageTransition>
  );
}
