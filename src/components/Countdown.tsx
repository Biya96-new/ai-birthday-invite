"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const targetDate = new Date("2026-07-26T17:00:00+05:30").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  return (
    <section id="countdown" className="max-w-[1200px] mx-auto px-5 pt-[60px]">
      <motion.h2
        className="text-center font-body text-base font-bold tracking-[4px] text-accent-dark mb-10 uppercase"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        THE COUNTDOWN TO LAUNCH
      </motion.h2>

      <motion.div
        className="flex justify-center items-center gap-[15px] md:gap-[30px] bg-white/75 backdrop-blur-[24px] border border-white/90 rounded-[32px] p-[40px_20px] md:p-[50px_40px] shadow-[0_20px_40px_rgba(91,127,255,0.1)] max-w-[800px] mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <TimeBlock value={formatTime(timeLeft.days)} label="Days" />
        <div className="font-heading text-[24px] md:text-[48px] font-bold text-accent-light -mt-5 md:-mt-[30px]">:</div>
        <TimeBlock value={formatTime(timeLeft.hours)} label="Hours" />
        <div className="font-heading text-[24px] md:text-[48px] font-bold text-accent-light -mt-5 md:-mt-[30px]">:</div>
        <TimeBlock value={formatTime(timeLeft.minutes)} label="Minutes" />
        <div className="font-heading text-[24px] md:text-[48px] font-bold text-accent-light -mt-5 md:-mt-[30px]">:</div>
        <TimeBlock value={formatTime(timeLeft.seconds)} label="Seconds" />
      </motion.div>
    </section>
  );
}

function TimeBlock({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[60px] md:min-w-[100px]">
      <motion.span
        key={value}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        className="font-heading text-[36px] md:text-[64px] font-bold leading-none bg-gradient-to-br from-accent-dark to-accent-medium bg-clip-text text-transparent mb-2 md:mb-[10px]"
      >
        {value}
      </motion.span>
      <span className="text-[11px] md:text-[14px] font-medium uppercase tracking-[1px] md:tracking-[2px] text-text-light">
        {label}
      </span>
    </div>
  );
}
