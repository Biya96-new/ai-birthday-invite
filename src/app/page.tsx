"use client";

import { useState } from "react";
import Starfield from "@/components/Starfield";
import { WelcomePopup } from "@/components/WelcomePopup";
import { HeroSection } from "@/components/HeroSection";
import { Countdown } from "@/components/Countdown";
import { Timeline } from "@/components/Timeline";
import { Venue } from "@/components/Venue";
import { Activities } from "@/components/Activities";
import { RSVP } from "@/components/RSVP";

export default function Home() {
  const [guestName, setGuestName] = useState("");

  const handleNameSubmit = (name: string) => {
    setGuestName(name);
  };

  return (
    <main className="relative min-h-screen">
      <Starfield />
      <WelcomePopup onComplete={handleNameSubmit} />

      {/* We can optionally delay rendering of below sections, but for SEO and smoothness, we render them and they'll animate in on scroll */}
      <HeroSection guestName={guestName} />
      <Countdown />
      <Timeline />
      <Venue />
      <Activities />
      <RSVP />
    </main>
  );
}
