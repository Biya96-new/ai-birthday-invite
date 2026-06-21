"use client";

import { motion } from "framer-motion";
import { Navigation } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const venueImages = [
  "/assets/venue1.jpg",
  "/assets/venue2.jpg",
  "/assets/venue3.jpg",
];

export function Venue() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="venue" className="max-w-[1200px] mx-auto px-5 py-[80px]">
      <motion.h2
        className="text-center font-body text-base font-bold tracking-[4px] text-accent-dark mb-10 uppercase"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        VENUE
      </motion.h2>

      <motion.div
        className="flex flex-col lg:flex-row gap-10 lg:gap-[60px] items-center bg-white/75 backdrop-blur-[24px] rounded-[32px] p-8 md:p-[50px] shadow-[0_20px_40px_rgba(91,127,255,0.1)] border border-white/90"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Left Side: Gallery */}
        <div className="flex-1 w-full min-w-0">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-[20px] overflow-hidden mb-5 shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
            <div className="overflow-hidden h-full w-full" ref={emblaRef}>
              <div className="flex h-full touch-pan-y">
                {venueImages.map((src, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 relative h-full"
                  >
                    <img
                      src={src}
                      alt={`Venue View ${index + 1}`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/800x600/E2E8F0/475569?text=Venue+View+${index + 1}`;
                      }}
                      className="w-full h-full object-cover animate-[slowZoom_20s_infinite_alternate]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-[15px] justify-center">
            {venueImages.map((src, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "w-[60px] md:w-[80px] h-[45px] md:h-[60px] rounded-[10px] overflow-hidden cursor-pointer transition-all duration-300 border-2",
                  index === selectedIndex
                    ? "opacity-100 border-accent-dark scale-105"
                    : "opacity-60 border-transparent"
                )}
              >
                <img
                  src={src}
                  alt={`Thumb ${index + 1}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/800x600/E2E8F0/475569?text=Venue+${index + 1}`;
                  }}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="font-heading text-3xl md:text-[36px] font-bold text-text-dark mb-5">
            Iconic Hotels & Resorts
          </h3>
          <p className="flex items-start justify-center lg:justify-start gap-3 text-lg text-text-medium mb-6 leading-[1.5]">
            <MapPin className="w-6 h-6 text-accent-dark flex-shrink-0 mt-0.5" />
            Udaipur, India
          </p>
          <p className="text-base text-text-light leading-[1.7] mb-10">
            Prepare for liftoff at our stunning indoor-outdoor venue. Features
            include a zero-gravity bounce area, the starlight dining hall, and
            dedicated mission control gaming zones. Free parking available for
            all spacecraft.
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Iconic+Hotels+%26+Resorts%2C+Udaipur%2C+India"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 p-[16px_32px] rounded-full text-white font-medium bg-gradient-to-r from-accent-dark to-[#8AA3FF] hover:shadow-[0_0_20px_rgba(91,127,255,0.4)] transition-all duration-300"
          >
            <Navigation className="w-5 h-5" />
            OPEN IN GOOGLE MAPS
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function MapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}
