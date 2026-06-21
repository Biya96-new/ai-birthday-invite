"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "lucide-react";

interface WelcomePopupProps {
  onComplete: (name: string) => void;
}

export function WelcomePopup({ onComplete }: WelcomePopupProps) {
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const savedName = localStorage.getItem("guestName");
    if (savedName) {
      // If already has name, we could skip. But let's show it anyway if they clear it or for demo purposes, 
      // or we can auto-complete.
      // For now, let's just let it show if isVisible is true.
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    localStorage.setItem("guestName", name.trim());
    setIsVisible(false);
    setTimeout(() => {
      onComplete(name.trim());
    }, 600); // Wait for exit animation
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 w-full h-screen overflow-hidden z-[9999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Background Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center blur-[18px] scale-105 z-10"
            style={{ backgroundImage: "url('/assets/popup_page.png')" }}
          />

          {/* Overlay Layer */}
          <div className="absolute inset-0 bg-[#080f23]/45 backdrop-blur-[10px] z-20" />

          {/* Modal Container */}
          <motion.div
            className="relative z-30 bg-gradient-to-br from-white to-[#f0f4ff] rounded-[36px] p-10 md:p-[60px_40px] w-[90%] max-w-[500px] text-center shadow-[0_25px_50px_-12px_rgba(13,22,56,0.25),inset_0_1px_0_rgba(255,255,255,0.8)] border border-white/60"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Rocket Decoration */}
            <svg
              className="absolute -top-5 -left-5 w-[60px] h-[60px] -rotate-15 opacity-80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1E3A8A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>

            {/* Planet Decoration */}
            <svg
              className="absolute -top-7 -right-5 w-[70px] h-[70px] opacity-80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E7C98A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="8" />
              <path d="M22 12c0-3.3-6.7-6-15-6-1.1 0-2.2.1-3.2.3" />
              <path d="M5.2 17.7c2.5 1.4 6.7 2.3 11.8 2.3 1.1 0 2.2-.1 3.2-.3" />
            </svg>

            <h2 className="font-heading text-[32px] md:text-[42px] font-bold text-[#16327A] mb-10 leading-tight">
              Please let us know your name
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="relative mb-6">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  autoComplete="off"
                  className="w-full p-[18px_20px_18px_56px] text-lg font-body border-2 border-slate-200 rounded-full bg-white text-text-dark outline-none transition-all duration-300 focus:border-accent-dark focus:ring-4 focus:ring-accent-dark/15"
                />
              </div>
              <button
                type="submit"
                className="w-full p-[18px] text-lg font-semibold font-body text-white bg-gradient-to-br from-[#1E3A8A] to-[#3547C8] border-none rounded-full cursor-pointer transition-all duration-300 shadow-[0_10px_20px_-5px_rgba(30,58,138,0.4)] hover:-translate-y-0.5 hover:shadow-[0_15px_25px_-5px_rgba(30,58,138,0.5)]"
              >
                Ready for Launch
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
