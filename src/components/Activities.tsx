"use client";

import { motion } from "framer-motion";

const activities = [
  { image: "/assets/cake.jpg", title: "Cake Cutting" },
  { image: "/assets/games.jpg", title: "Games" },
  { image: "/assets/passtheparcel.jpg", title: "Pass the Parcel" },
  { image: "/assets/photobooth.jpg", title: "Photo Booth" },
  { image: "/assets/returngifts1.jpg", title: "Return Gifts" },
];

export function Activities() {
  return (
    <section id="activities" className="max-w-[1200px] mx-auto px-5 py-[80px]">
      <motion.h2
        className="text-center font-body text-base font-bold tracking-[4px] text-accent-dark mb-10 uppercase"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        GET READY FOR FUN
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px]">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-[40px_20px] bg-white/70 backdrop-blur-md rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(91,127,255,0.15)] text-center cursor-default"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover mb-5"
            />
            <h3 className="font-heading text-xl font-semibold text-text-dark">
              {activity.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
