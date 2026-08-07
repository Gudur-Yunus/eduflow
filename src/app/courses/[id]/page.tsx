"use client";

import dynamic from "next/dynamic";
import * as Tabs from "@radix-ui/react-tabs";
import { ArrowLeft, Star, Users } from "lucide-react";
import Link from "next/link";
import LessonSidebar from "@/components/LessonSidebar";
import { spaceGrotesk } from "@/app/fonts";
import { mockCourses } from "@/data/courses";
import PageTransition from "@/components/PageTransition";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false }) as any;

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = mockCourses.find((c) => c.id === params.id);
  if (!course) return <div className="text-white text-center mt-32">Course not found</div>;

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0A0D14] pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/courses" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-white mb-6 transition-colors">
            <ArrowLeft size={16} />
            Back to Courses
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-[70%]">
              <h1 className={`text-2xl md:text-3xl font-bold text-white mb-6 ${spaceGrotesk.className}`}>
                {course.title}
              </h1>
              
              <div className="rounded-[12px] overflow-hidden bg-[#111827] border border-[#1F2937] mb-8 aspect-video relative">
                <ReactPlayer 
                  url={course.videoUrl} 
                  width="100%" 
                  height="100%" 
                  controls 
                />
              </div>
              
              <Tabs.Root defaultValue="overview">
                <Tabs.List className="flex border-b border-[#1F2937] mb-6">
                  <Tabs.Trigger value="overview" className="px-6 py-3 text-[#6B7280] hover:text-white data-[state=active]:text-[#6366F1] data-[state=active]:border-b-2 data-[state=active]:border-[#6366F1] font-medium transition-colors">
                    Overview
                  </Tabs.Trigger>
                  <Tabs.Trigger value="qa" className="px-6 py-3 text-[#6B7280] hover:text-white data-[state=active]:text-[#6366F1] data-[state=active]:border-b-2 data-[state=active]:border-[#6366F1] font-medium transition-colors">
                    Q&A
                  </Tabs.Trigger>
                  <Tabs.Trigger value="resources" className="px-6 py-3 text-[#6B7280] hover:text-white data-[state=active]:text-[#6366F1] data-[state=active]:border-b-2 data-[state=active]:border-[#6366F1] font-medium transition-colors">
                    Resources
                  </Tabs.Trigger>
                </Tabs.List>
                
                <Tabs.Content value="overview" className="text-[#F9FAFB] space-y-6">
                  <div className="flex items-center gap-6 text-sm text-[#6B7280] mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500" />
                      <span className="text-white">{course.instructor}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-[#10B981] fill-current" />
                      <span className="text-white">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-bold ${spaceGrotesk.className}`}>About this course</h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    Welcome to the Complete Web Development Bootcamp.
                  </p>
                </Tabs.Content>
                <Tabs.Content value="qa" className="text-[#6B7280]">
                  <p>No questions have been asked yet.</p>
                </Tabs.Content>
                <Tabs.Content value="resources" className="text-[#6B7280]">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 bg-[#111827] p-4 rounded-[8px] border border-[#1F2937]">
                      <div>
                        <h4 className="text-white font-medium">Starter Code</h4>
                        <p className="text-sm">starter-files.zip (2.4 MB)</p>
                      </div>
                    </li>
                  </ul>
                </Tabs.Content>
              </Tabs.Root>
            </div>
            
            <div className="lg:w-[30%]">
              <LessonSidebar />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
