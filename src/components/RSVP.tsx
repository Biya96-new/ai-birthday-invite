"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Sparkles } from "lucide-react";

export function RSVP() {
  const [attendance, setAttendance] = useState<"yes" | "no">("yes");
  const [guestCount, setGuestCount] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="rsvp" className="max-w-[1200px] mx-auto px-5 py-[80px]">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-body text-base font-bold tracking-[4px] text-accent-dark mb-4 uppercase">
          Let's Celebrate Together
        </h2>
        <p className="font-heading text-xl md:text-2xl text-text-light mb-10 italic">
          We can't wait to share this special day with you
        </p>
      </motion.div>

      <motion.div
        className="max-w-[700px] mx-auto bg-white/75 backdrop-blur-[24px] rounded-[32px] p-[40px_20px] md:p-[60px_50px] shadow-[0_20px_40px_rgba(91,127,255,0.1)] border border-white/90 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-[30px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
            >
              <div className="flex flex-col md:flex-row gap-5 justify-center">
                <label className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={attendance === "yes"}
                    onChange={() => setAttendance("yes")}
                    className="sr-only peer"
                  />
                  <div className="p-5 border-2 border-slate-200 rounded-[16px] text-lg font-semibold text-text-medium transition-all duration-300 peer-checked:border-accent-dark peer-checked:bg-accent-lightest/50 peer-checked:text-accent-dark hover:border-accent-light">
                    🚀 YES, COUNT ME IN
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={attendance === "no"}
                    onChange={() => setAttendance("no")}
                    className="sr-only peer"
                  />
                  <div className="p-5 border-2 border-slate-200 rounded-[16px] text-lg font-semibold text-text-medium transition-all duration-300 peer-checked:border-slate-400 peer-checked:bg-slate-100 peer-checked:text-slate-600 hover:border-slate-300">
                    🌙 WILL MISS IT
                  </div>
                </label>
              </div>

              <AnimatePresence>
                {attendance === "yes" && (
                  <motion.div
                    className="flex flex-col items-center gap-4 overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="font-heading text-xl font-semibold text-text-dark">
                      Number of Astronauts
                    </label>
                    <div className="flex items-center gap-6 p-2 border-2 border-slate-200 rounded-full bg-white">
                      <button
                        type="button"
                        onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                        className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="font-heading text-2xl font-bold min-w-[30px] text-center text-text-dark">
                        {guestCount}
                      </span>
                      <button
                        type="button"
                        onClick={() => setGuestCount(Math.min(10, guestCount + 1))}
                        className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                className="w-full mt-5 p-5 text-lg font-semibold font-body text-white bg-gradient-to-br from-[#1E3A8A] to-[#3547C8] border-none rounded-full cursor-pointer transition-all duration-300 shadow-[0_10px_20px_-5px_rgba(30,58,138,0.4)] hover:-translate-y-0.5 hover:shadow-[0_15px_25px_-5px_rgba(30,58,138,0.5)]"
              >
                SEND TRANSMISSION
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              className="flex flex-col items-center py-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {attendance === "yes" ? (
                <>
                  <div className="w-[80px] h-[80px] rounded-full bg-accent-lightest flex items-center justify-center mb-6">
                    <Sparkles className="w-10 h-10 text-accent-dark" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-text-dark mb-4">
                    Mission Confirmed 🚀
                  </h3>
                  <p className="text-lg text-text-light">
                    Thank you for joining the celebration. Prepare for liftoff!
                  </p>
                </>
              ) : (
                <>
                  <h3 className="font-heading text-3xl font-bold text-text-dark mb-4">
                    Thank You For Your Response ✨
                  </h3>
                  <p className="text-lg text-text-light mb-4">
                    We're sorry you won't be able to join us for the celebration.
                  </p>
                  <p className="text-lg text-text-light">
                    We appreciate you letting us know and hope to celebrate together another time.
                  </p>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
