"use client";

import { motion } from "framer-motion";
import { ChevronDown, Calendar, Clock } from "lucide-react";

interface HeroSectionProps {
  guestName: string;
}

export function HeroSection({ guestName }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Mask */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-10"
        style={{
          backgroundImage: "url('/assets/astronaut_boy.png')",
          filter: "blur(8px)",
          WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
      >
        {/* Moon */}
        <svg
          className="absolute top-[15%] left-[10%] w-[80px] md:w-[120px] h-[80px] md:h-[120px] opacity-60 float-slow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E7C98A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>

        {/* Rocket */}
        <img
          src="/assets/rocket.png"
          alt="Rocket"
          className="absolute bottom-[10%] md:bottom-[20%] right-[5%] md:right-[15%] w-[100px] md:w-[150px] opacity-80 rotate-15 float-diagonal"
        />

        {/* Planet */}
        <div className="absolute top-[30%] right-[20%] w-[80px] h-[80px] rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--color-gold-light),var(--color-gold-dark))] shadow-[0_0_40px_rgba(231,201,138,0.4)] opacity-70 float-slow-reverse" />
      </motion.div>

      <div className="relative z-30 text-center px-5">
        <motion.p
          className="text-2xl font-light tracking-[4px] text-accent-dark mb-2 uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          Dear {guestName || "Friend"}
        </motion.p>

        <motion.p
          className="text-xl text-text-light mb-5 italic font-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          You're invited to
        </motion.p>

        <motion.h1
          className="font-heading text-5xl md:text-7xl font-bold leading-[1.1] tracking-wide mb-10 bg-gradient-to-br from-text-dark to-accent-dark bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
          SHERWIN'S
          <br />
          BIRTHDAY
        </motion.h1>

        <motion.div
          className="inline-block p-[12px_30px] rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-[22px] font-semibold text-accent-dark shadow-[0_10px_30px_rgba(91,127,255,0.15)] mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
        >
          Turning 5! 🎂
        </motion.div>

        <motion.div
          className="flex gap-5 justify-center flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        >
          <div className="flex items-center gap-2.5 p-[12px_24px] bg-white rounded-full text-base font-medium text-text-medium shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
            <Calendar className="w-5 h-5 text-accent-dark" />
            26 July 2026
          </div>
          <div className="flex items-center gap-2.5 p-[12px_24px] bg-white rounded-full text-base font-medium text-text-medium shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
            <Clock className="w-5 h-5 text-accent-dark" />
            5:00 PM Onwards
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-accent-dark animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
