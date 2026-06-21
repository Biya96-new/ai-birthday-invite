"use client";

import { motion } from "framer-motion";
import { Moon, Star, Rocket, MapPin, Gift } from "lucide-react";

const timelineEvents = [
  {
    time: "5:00 PM",
    title: "Stage Magic",
    description: "Witness mind-bending illusions and cosmic tricks.",
    image: "/assets/stage.png",
    fallback: "Stage+Magic",
    icon: <Moon className="w-[28px] h-[28px] text-accent-dark" />,
  },
  {
    time: "6:00 PM",
    title: "Cake Cutting",
    description: "Birthday wishes and celebration moment.",
    image: "/assets/cake_cutting.png",
    fallback: "Cake+Area",
    icon: <Star className="w-[28px] h-[28px] text-accent-dark" />,
  },
  {
    time: "7:00 PM",
    title: "Games and Fun",
    description: "Interactive space-themed games and activities.",
    image: "/assets/game_zone.png",
    fallback: "Games+and+Fun",
    icon: <Rocket className="w-[28px] h-[28px] text-accent-dark" />,
  },
  {
    time: "8:00 PM",
    title: "Dinner Time",
    description: "Delicious dinner and family time.",
    image: "/assets/dinner.png",
    fallback: "Dinner+Time",
    icon: <MapPin className="w-[28px] h-[28px] text-accent-dark" />,
  },
  {
    time: "9:00 PM",
    title: "Return Gifts",
    description: "Collect keepsakes and memories.",
    image: "/assets/returngifts.png",
    fallback: "Gift+Station",
    icon: <Gift className="w-[28px] h-[28px] text-accent-dark" />,
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="max-w-[1200px] mx-auto px-5 py-[80px]">
      <motion.h2
        className="text-center font-body text-base font-bold tracking-[4px] text-accent-dark mb-10 uppercase"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        OUR PLAN FOR THE DAY
      </motion.h2>

      <div className="relative max-w-[1000px] mx-auto py-10">
        {/* Timeline Line */}
        <div className="absolute left-[40px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent-light to-transparent -translate-x-1/2 rounded shadow-[0_0_15px_rgba(122,139,255,0.4)]">
          {/* Glow Effect */}
          <div className="absolute top-0 left-1/2 w-[20px] h-[100px] bg-[radial-gradient(ellipse_at_center,rgba(231,201,138,0.8)_0%,transparent_70%)] -translate-x-1/2 animate-[moveGlow_10s_linear_infinite]" />
        </div>

        {timelineEvents.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-end md:items-center justify-between mb-[50px] md:mb-[80px] relative w-full ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Marker */}
            <motion.div
              className="absolute left-[40px] md:left-1/2 top-[30px] md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-[48px] md:w-[56px] h-[48px] md:h-[56px] bg-white border-4 border-gold-light rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(231,201,138,0.4)]"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {item.icon}
            </motion.div>

            {/* Timeline Content */}
            <motion.div
              className="w-[calc(100%-90px)] md:w-[45%] flex flex-col bg-white/85 backdrop-blur-[16px] rounded-[24px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-white/90 group transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(91,127,255,0.15)]"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-full h-[240px] overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/600x400/E2E8F0/475569?text=${item.fallback}`;
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  initial={{ scale: 0.92 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
              <div className="p-[30px] text-center">
                <div className="font-heading text-xl font-bold text-accent-dark mb-3">
                  {item.time}
                </div>
                <h3 className="font-heading text-[26px] font-semibold text-text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-text-light leading-[1.6]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
