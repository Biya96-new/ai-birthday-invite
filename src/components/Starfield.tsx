"use client";

import { useEffect, useState, memo } from "react";

function Starfield() {
  const [stars, setStars] = useState<
    { id: number; size: number; x: number; y: number; opacity: number; isGold: boolean; duration: number; delay: number }[]
  >([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPrefersReducedMotion(reducedMotion);
    
    const starCount = reducedMotion ? 30 : 50;
    const generatedStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      isGold: Math.random() > 0.8,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    
    setStars(generatedStars);
  }, []);

  return (
    <>
      <div id="starfield" className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}vw`,
              top: `${star.y}vh`,
              backgroundColor: star.isGold ? "var(--color-gold-dark)" : "var(--color-accent-dark)",
              opacity: star.opacity,
              animation: prefersReducedMotion
                ? "none"
                : `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}
        <style jsx>{`
          @keyframes twinkle {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
        `}</style>
      </div>
      <div id="nebula-bg" className="fixed inset-0 w-full h-full -z-10 pointer-events-none pulse-nebula" 
           style={{
             background: `
               radial-gradient(circle at 20% 30%, rgba(182, 196, 255, 0.4) 0%, transparent 40%),
               radial-gradient(circle at 80% 70%, rgba(217, 227, 255, 0.5) 0%, transparent 50%),
               radial-gradient(circle at 50% 50%, rgba(231, 201, 138, 0.3) 0%, transparent 60%)
             `
           }}
      />
    </>
  );
}

export default memo(Starfield);
