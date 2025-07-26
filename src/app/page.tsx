"use client";

import { useState, useEffect } from "react";
import { Metadata } from "next";
import ProfileCard from "./components/home/profilecard";
import WorkExperience from "./components/home/workexperience";
import { InterfaceProfile } from "./interfaces/profile";
import { InterfaceWorkExperience } from "./interfaces/work";
import Service from "./components/home/service";

interface TypingTextProps {
  texts: string[];
  speed?: number;
  delayBetween?: number;
}

const profiles: InterfaceProfile = {
  name: "Fahmi Nabeel",
  title: "Process Engineering",
  description:
    "A passionate Process Engineering student specializing in chemical process optimization, plant operations, and industrial innovation. Currently interning at PT Lotte Chemical Indonesia, specializing in polypropylene production processes. A lover of technology, politics, and business.",
  email: "fahmi.nabeel21@gmail.com",
  image: "/assets/images/me.png",
};

const works: InterfaceWorkExperience[] = [
  {
    company: "SMP Negeri 1 Cilegon",
    position: "Science Program Student",
    startDate: "2017",
    endDate: "2020",
    imageCompany: "/assets/images/logo/smp1.svg",
  },
  {
    company: "SMK Negeri 2 Cilegon",
    position: "Industrial Chemistry",
    startDate: "2020",
    endDate: "2023",
    imageCompany: "/assets/images/logo/smk2.svg",
  },
  {
    company: "Politeknik Industri Petrokimia",
    position: "Petrochemical Industrial Process Technology",
    startDate: "2023",
    endDate: "2026",
    imageCompany: "/assets/images/logo/pipb.svg",
  },
  {
    company: "Lotte Chemical Indonesia",
    position: "Process Engineering Apprentice - Polypropylene Plant",
    startDate: "2025",
    endDate: "2026",
    imageCompany: "/assets/images/logo/figma.svg",
  },
];

const recentProjects = [
  {
    title: "BIOFOUR TEAM",
    image: "/assets/images/biofour.png",
    tags: ["Bioethanol", "Friendly Fuel"],
    link: "https://biofourteam.vercel.app/",
  },
  {
    title: "QR Code",
    image: "/assets/images/qrcode.png",
    tags: ["Simple Make a QR Code", "Scan"],
    link: "https://qrgenerator-fahmi.vercel.app/",
  },
  {
    title: "Notes Online",
    image: "/assets/images/notes.png",
    tags: ["Notes", "Online"],
    link: "https://catatan-fahmi.vercel.app/",
  },
];

const certificates = [
  {
    title: "INNOVATOPIA Teknologi Tepat Guna Nasional",
    issuer: "FLMPI Nasional BPSDMI KEMENPERIN",
    date: "2025",
    image: "/assets/images/certificates/Serti1.jpg",
    credentialUrl: "https://lh3.googleusercontent.com/pw/AP1GczMAUdr3juFlF6LFwv_AJjh7JN6tP7XYfTC-dveOd425wbjFKXVb9o0Nqa4bVFHFVmYpct3eY1y4M9m0ldb4BwJ8DWGx6sORkauOo6JGrILJb1IakaI9x0g2kbnHSBsxoYrWdBfuPJIKA2-goXctIk4E=w1341-h948-s-no-gm?authuser=0",
  },
  {
    title: "INNOVATOPIA Teknologi Tepat Guna PIPB",
    issuer: "FLMPI Politeknik Industri Petrokimia Banten",
    date: "2024",
    image: "/assets/images/certificates/serti2.jpg",
    credentialUrl: "https://lh3.googleusercontent.com/pw/AP1GczMAiodRGwMWD5Ha46awP7X81pcjKWKxh6ctRoc69w9wVDfa3waqVWjQbLOMsnB39muZQ5YlSVSAbY3Bi6GMswjoEXZAffWLnHK5ca_PjRo65QNVL4w8dFFAeXIgdtnEG9PPnzx-cRlkx34fopZptO-X=w2695-h1708-s-no-gm?authuser=0",
  },
  {
    title: "🚀Congratulations🚀",
    issuer: "Politeknik Industri Petrokimia Banten",
    date: "2025",
    image: "/assets/images/certificates/champ.jpg",
    credentialUrl: "https://lh3.googleusercontent.com/pw/AP1GczPkuxTPbq0-OS41u-00YGxckgvLqrWYoY7uqK8dPZXdtFWctM7qvyLtdJz0MMgw7PuYUzc4NzadaVWIae7LfoWkxm21k3NoTrLtIwg_B-9bcK7s7oVtPOO3Ci0Yi3OgCMJ8Y8cOTbCYrG0J1dTL3JlI=w1080-h1350-s-no-gm?authuser=0",
  },
  {
    title: "🚀Congratulations🚀",
    issuer: "FLMPI Politeknik Industri Petrokimia Banten",
    date: "2025",
    image: "/assets/images/certificates/champ1.jpg",
    credentialUrl: "https://lh3.googleusercontent.com/pw/AP1GczNuViJhZ9wF9uahIndCwn1yJDTJyVcyXChQMmNryu6hNRZ1QzMhDJS4hp_GWPoTtEynlco8n3Wc_I8P7zGPNLdGWchnlhOBuMST0QDRX3B8FzEG_WuaqwvSo5yIjoJYRRv_TjefzuPdQ3pjEcWPJ-Fz=w1080-h1920-s-no-gm?authuser=0",
  },
  {
    title: "Bismillah Sinta 3",
    issuer: "Politeknik Industri Petrokimia Banten",
    date: "2024",
    image: "/assets/images/certificates/jurnal.png",
    credentialUrl: "https://lh3.googleusercontent.com/pw/AP1GczN1wDY28e-gIDrAMoZbHHolpxJnw9b4Ai12iLURCbOib_ozcSMg5IqnY0VkT9FRUi8zw1JdThGy8CNqHkv7ZBzLiGlZwUvB7RjJ2fXRA86NlJcVeCkG2K3Jl8rI7U9dLCvlbd7FKAIM28770qLbre2P=w790-h906-s-no-gm?authuser=0",
  },
  {
    title: "Lomba Inovasi Pemanfaatan Limbah Plastik Polypropylene",
    issuer: "BIOFOURTEAM",
    date: "2025",
    image: "/assets/images/certificates/limbah.png",
    credentialUrl: "https://lh3.googleusercontent.com/pw/AP1GczM2wy2qFKUV0_KXdM5sqHpknOeYdFZP0bXocycc3LhXRx6S_I1_9ASAoTTiveOCKx9O_0rzIO3g_ivq0MZjpUH6O9xGFSpb9r8yxVixEIMOYlT9fkcBsyZdwXPEttoKpGZqzjJOs7Q8OT1AwMFmIaq6=w634-h805-s-no-gm?authuser=0",
  },
];

// Typing Animation Component - Fixed
const TypingText = ({ texts, speed = 100, delayBetween = 2000 }: TypingTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursor = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursor);
  }, []);

  useEffect(() => {
    // Guard clause to ensure texts exist and has content
    if (!texts || texts.length === 0) return;
    
    const fullText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, delayBetween]);

  return (
    <span className="relative">
      {currentText}
      <span 
        className={`ml-1 text-purple-500 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
      >
        |
      </span>
    </span>
  );
};

export default function Home() {
  const typingTexts = [
    "Process Engineering",
    "Apprentice PT Lotte Chemical Indonesia", 
    "Polypropylene Department",
    "Chemical Innovation",
    "technological innovation",
    "Business",
    "Politics"
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orbs */}
        <div className="absolute -top-20 -right-20 h-60 w-60 md:-top-40 md:-right-40 md:h-96 md:w-96 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 h-60 w-60 md:-bottom-40 md:-left-40 md:h-96 md:w-96 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Secondary floating elements */}
        <div className="absolute top-1/4 right-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 opacity-10 blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 h-24 w-24 rounded-full bg-gradient-to-br from-orange-400 to-red-400 opacity-10 blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-slate-100/25 dark:bg-grid-slate-800/25 bg-[size:20px_20px]"></div>
      </div>

      <main className="relative z-10 grid grid-cols-1 gap-4 p-4 sm:gap-6 sm:p-6 md:gap-8 md:p-8 lg:grid-cols-3 lg:gap-10 lg:p-10">
        
        {/* Enhanced Profile Card */}
        <div className="lg:col-span-1">
          <div className="group relative overflow-hidden rounded-3xl bg-white/90 border border-gray-200/50 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl dark:bg-gray-900/90 dark:border-gray-700/50">
            
            {/* Futuristic border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-75 blur-sm animate-pulse transition-opacity duration-500"></div>
            
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl"></div>
            
            {/* Profile header with enhanced design */}
            <div className="relative p-6 md:p-8 bg-white/95 dark:bg-gray-900/95 rounded-3xl backdrop-blur-xl">
              {/* Futuristic Status indicator */}
              <div className="absolute right-4 top-4 md:right-6 md:top-6">
                <div className="flex items-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1.5 backdrop-blur-sm dark:bg-emerald-900/50 border border-emerald-400/30">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse relative">
                    <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></div>
                  </div>
                  <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">AVAILABLE</span>
                </div>
              </div>

              {/* Profile image with enhanced styling */}
              <div className="relative mx-auto mb-6 h-32 w-32 md:h-40 md:w-40">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 animate-spin" style={{animationDuration: '3s'}}>
                  <div className="h-full w-full rounded-full bg-white dark:bg-gray-900"></div>
                </div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1 animate-spin" style={{animationDuration: '4s', animationDirection: 'reverse'}}>
                  <div className="h-full w-full rounded-full bg-white dark:bg-gray-900"></div>
                </div>
                
                {/* Profile image */}
                <div className="absolute inset-4 overflow-hidden rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                  <img
                    src={profiles.image}
                    alt={profiles.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 animate-bounce flex items-center justify-center" style={{animationDelay: '0.5s'}}>
                  <span className="text-xs">⚗️</span>
                </div>
                <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 animate-bounce flex items-center justify-center" style={{animationDelay: '1s'}}>
                  <span className="text-xs">🏭</span>
                </div>
              </div>

              {/* Profile content */}
              <div className="text-center">
                <h1 className="mb-2 text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                  {profiles.name}
                </h1>
                
                {/* Typing Animation Title */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100/80 to-pink-100/80 px-4 py-2 backdrop-blur-sm border border-purple-200/50 dark:from-purple-900/30 dark:to-pink-900/30 dark:border-purple-700/30">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                  <p className="text-sm font-medium text-purple-700 dark:text-purple-300 min-h-[20px]">
                    <TypingText texts={typingTexts} speed={120} delayBetween={2500} />
                  </p>
                </div>

                <p className="mb-6 text-sm text-gray-600 leading-relaxed dark:text-gray-300 text-justify">
                  {profiles.description}
                </p>

                {/* Enhanced contact button */}
                <a
                  href={`mailto:${profiles.email}`}
                  className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"></div>
                  <svg
                    className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="relative">Get In Touch</span>
                  <div className="absolute right-2 h-2 w-2 rounded-full bg-white/50 animate-ping"></div>
                </a>
              </div>
            </div>

            {/* Enhanced stats section */}
            <div className="border-t border-gray-200/50 bg-gray-50/50 p-6 dark:border-gray-700/50 dark:bg-gray-800/50">
              <div className="grid grid-cols-3 gap-4">
                <div className="group/stat text-center transition-transform duration-300 hover:scale-105">
                  <div className="mb-1 text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    6+
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Years Study</div>
                </div>
                <div className="group/stat text-center transition-transform duration-300 hover:scale-105">
                  <div className="mb-1 text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    10+
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Certificates</div>
                </div>
                <div className="group/stat text-center transition-transform duration-300 hover:scale-105">
                  <div className="mb-1 text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    5+
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                </div>
              </div>
            </div>

            {/* Social links with enhanced design */}
            <div className="border-t border-gray-200/50 p-6 dark:border-gray-700/50">
              <div className="flex justify-center gap-4">
                {[
                  { icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z", name: "Twitter" },
                  { icon: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z", name: "LinkedIn" },
                  { icon: "M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z", name: "GitHub" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group/social flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white dark:bg-gray-800 dark:text-gray-400"
                  >
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover/social:rotate-12"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience - Enhanced styling */}
        <div className="lg:col-span-1">
          <div className="h-full">
            <WorkExperience works={works} />
          </div>
        </div>

        {/* Recent Projects - Enhanced with modern cards */}
        <div className="lg:col-span-1">
          <div className="rounded-3xl bg-white/90 border border-gray-200/50 p-6 md:p-8 shadow-2xl backdrop-blur-xl dark:bg-gray-900/90 dark:border-gray-700/50">
            <div className="mb-6 md:mb-8 flex items-center justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                  Recent Projects
                </h3>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  <span className="text-2xl">⚗️</span>
                </div>
              </div>
              <a
                href="portfolio.html"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <span className="relative">View All</span>
              </a>
            </div>

            <div className="space-y-4 md:space-y-6">
              {recentProjects.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-xl dark:from-gray-800 dark:to-gray-700"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Enhanced hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                    
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute left-1/2 top-1/2 flex h-12 w-12 md:h-14 md:w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-purple-600 shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-purple-600 hover:text-white hover:scale-110"
                    >
                      <svg
                        className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 hover:rotate-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="p-4 md:p-6">
                    <h4 className="mb-3 text-lg md:text-xl font-bold text-gray-800 dark:text-white">
                      {project.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-1 text-xs font-medium text-purple-700 dark:from-purple-900/50 dark:to-pink-900/50 dark:text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates Section - Enhanced */}
        <div className="lg:col-span-3">
          <div className="rounded-3xl bg-white/90 border border-gray-200/50 p-6 md:p-8 lg:p-10 shadow-2xl backdrop-blur-xl dark:bg-gray-900/90 dark:border-gray-700/50">
            <div className="mb-6 md:mb-8 lg:mb-10 flex items-center justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                  Certificates & Achievements
                </h3>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                  <span className="text-3xl">🏆</span>
                </div>
              </div>
              <a
                href="certificates.html"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-sm md:text-base lg:text-lg font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <span className="relative">View All</span>
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.slice(0, 6).map((certificate, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2 dark:from-gray-800 dark:to-gray-700"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Enhanced floating badge */}
                    <div className="absolute right-3 top-3 md:right-4 md:top-4">
                      <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg animate-pulse">
                        <svg
                          className="h-4 w-4 md:h-5 md:w-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Enhanced hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute left-1/2 top-1/2 flex h-12 w-12 md:h-14 md:w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-emerald-600 shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:scale-110"
                    >
                      <svg
                        className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 hover:rotate-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="p-4 md:p-6">
                    <h4 className="mb-2 md:mb-3 text-base md:text-lg lg:text-xl font-bold text-gray-800 dark:text-white line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {certificate.title}
                    </h4>
                    <p className="mb-2 md:mb-3 text-sm md:text-base font-medium text-emerald-600 dark:text-emerald-400 line-clamp-1">
                      {certificate.issuer}
                    </p>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50">
                        <svg
                          className="h-3 w-3 text-emerald-600 dark:text-emerald-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>Issued {certificate.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Component */}
        <div className="lg:col-span-2">
          <Service />
        </div>

        {/* Enhanced Call to Action */}
        <div className="lg:col-span-1">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 md:p-8 shadow-2xl text-white transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-white/20 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 h-16 w-16 rounded-full bg-white/20 animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute right-1/4 top-1/3 h-12 w-12 rounded-full bg-white/10 animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="relative">
              <div className="mb-4 md:mb-6 inline-flex items-center gap-3 rounded-2xl bg-white/20 p-3 md:p-4 backdrop-blur-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/30">
                  <span className="text-lg">⚗️</span>
                </div>
                <div>
                  <p className="text-sm md:text-base font-bold">Available For Collaboration</p>
                  <p className="text-xs text-white/80">Process Engineering Solutions</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-2xl">🏭</span>
                </div>
              </div>

              <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl font-bold leading-tight">
                Let's 🤝 <br />
                Collaborate
              </h2>

              <p className="mb-6 md:mb-8 text-sm md:text-base text-white/90 leading-relaxed">
                Ready to optimize processes and innovate solutions? Let's work together to create efficient and sustainable engineering solutions!
              </p>

              <a
                href="contact.html"
                className="group/cta relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-purple-600 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-0 transition-opacity duration-300 group-hover/cta:opacity-100"></div>
                <span className="relative">Let's Connect</span>
                <svg
                  className="relative h-5 w-5 transition-transform duration-300 group-hover/cta:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <div className="absolute right-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-purple-400 animate-ping"></div>
              </a>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
} 