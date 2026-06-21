# Premium Light-Themed Space Birthday Invitation Website

## Objective

Analyze the attached reference image and recreate its overall structure, storytelling flow, and section hierarchy.

However, do NOT copy its dark space aesthetic.

Transform the entire experience into a premium light-themed luxury birthday invitation website.

The final result should feel like:

- Apple Event Website
- Luxury Wedding Website
- High-end Framer Landing Page
- Modern Editorial Design
- Elegant Child Celebration Website

The design should feel bright, airy, premium, magical, and sophisticated.

Avoid:

- Dark backgrounds
- Neon colors
- Heavy sci-fi styling
- Cartoonish designs
- Cluttered layouts

---

# Overall Experience

Build a single-page scroll website.

No header navigation.

No footer navigation.

No hamburger menu.

The experience should flow naturally as the user scrolls.

The page should feel like a beautiful story unfolding.

Every section should smoothly transition into the next.

---

# Visual Theme

## Style

Luxury Space Celebration

## Mood

- Elegant
- Airy
- Warm
- Magical
- Dreamy
- Premium
- Minimal

Imagine:

"Space theme interpreted by a luxury wedding designer."

---

# Color Palette

## Background

Use layered gradients.

```css
#FFFFFF
#FAFBFF
#F5F8FF
#EEF4FF
```

---

## Accent Colors

```css
#5B7FFF
#7A8BFF
#B6C4FF
#D9E3FF
```

---

## Gold Highlights

```css
#E7C98A
#F2D9A6
```

---

## Text

```css
#172554
#1E293B
#475569
```

---

# Global Background

Instead of dark space:

Create a soft celestial atmosphere.

Include:

- White clouds
- Soft nebula gradients
- Floating stars
- Gold sparkles
- Gentle planets
- Soft moon glow

Everything should blend into a bright luxury environment.

---

# Hero Section

Height:

100vh

---

# Layout

Centered content.

---

# Background

Large softly blurred image of the birthday child.

Requirements:

- Center aligned
- Low opacity
- Blended into background
- Fade edges
- Dream-like appearance

The image should feel like a memory.

Not a visible portrait.

---

# Floating Elements

Add:

- Moon
- Stars
- Rocket
- Astronaut
- Planets

Use subtle motion.

Animation duration:

20–40 seconds.

---

# Personalized Greeting

Top text:

```text
Dear Ananya
```

This should be dynamic.

Use visitor name from popup.

---

# Invitation Text

```text
You're invited to
```

---

# Main Heading

```text
SHERWIN'S
BIRTHDAY
```

Typography:

- Large
- Premium
- Elegant
- Letter-spaced

---

# Birthday Age Badge

Pill-shaped glass badge.

Example:

```text
Turning 5!
```

---

# Event Details

Show:

Calendar Icon

```text
19 July 2026
```

Clock Icon

```text
4:00 PM Onwards
```

---

# Scroll Indicator

Animated down arrow.

Subtle bounce.

---

# Countdown Section

Full-width section.

Centered.

---

# Heading

```text
THE COUNTDOWN TO LAUNCH
```

---

# Countdown Card

Glassmorphism.

```css
background:
rgba(255,255,255,0.75);

backdrop-filter:
blur(24px);
```

---

# Layout

4 columns:

Days

Hours

Minutes

Seconds

---

# Typography

Large numbers.

Gradient text.

```css
#5B7FFF → #7A8BFF
```

---

# Timeline Section

Heading:

```text
OUR PLAN FOR THE DAY
```

---

# Layout

Alternating timeline.

Center vertical line.

Desktop:

Image left

Content right

Then alternate.

Mobile:

Stack.

---

# Timeline Line

Use glowing celestial path.

Instead of a plain line.

Use:

- Planets
- Moon
- Stars
- Rocket markers

As timeline milestones.

---

# Event 1

Arrival & Welcome

4:00 PM

Description:

Welcome guests and begin the cosmic celebration.

Image:

stage.png

---

# Event 2

Games & Activities

4:30 PM

Image:

game_zone.png

Description:

Interactive space-themed games and activities.

---

# Event 3

Cake Cutting

5:30 PM

Image:

cake_cutting.png

Description:

Birthday wishes and celebration moment.

---

# Event 4

Dinner Time

6:00 PM

Image:

dinner.png

Description:

Delicious dinner and family time.

---

# Event 5

Return Gifts

7:00 PM

Image:

returngifts.png

Description:

Collect keepsakes and memories.

---

# Timeline Animations

On scroll:

Images:

```css
scale:
0.92 → 1;
```

Text:

```css
translateY:
40px → 0;
```

Opacity:

```css
0 → 1;
```

---

# Venue Section

Heading:

```text
VENUE
```

---

# Layout

Two-column.

---

# Left Side

Large venue gallery.

Main image.

Thumbnail navigation below.

---

# Right Side

Venue details.

Venue Name.

Address.

Description.

Google Maps button.

---

# Google Maps Button

Rounded pill.

Gradient background.

```css
#5B7FFF → #8AA3FF
```

Hover:

Glow effect.

---

# Venue Gallery

Requirements:

- Carousel
- Touch support
- Autoplay
- Fade transitions
- Infinite loop

Add subtle zoom animation.

---

# Activities Section

Heading:

```text
GET READY FOR FUN
```

---

# Layout

Five premium cards.

---

# Card 1

Cake Cutting

---

# Card 2

Games

---

# Card 3

Pass the Parcel

---

# Card 4

Photo Booth

---

# Card 5

Return Gifts

---

# Card Style

Glassmorphism.

Soft shadows.

Rounded corners.

Hover lift.

---


# RSVP Section

Heading:

```text
Let's Celebrate Together
```

---

# Subtitle

```text
We can't wait to share this special day with you.
```

---

# RSVP Choices

Two large buttons.

---

# Option 1

```text
🚀 YES, COUNT ME IN
```

---

# Option 2

```text
🌙 WILL MISS IT
```

---

# Guest Counter

Stepper control.

Minus Button

Guest Count

Plus Button

---

# Submit Button

Large premium button.

Text:

```text
SEND TRANSMISSION
```

---

# Success State

Show:

```text
Mission Confirmed 🚀
```

```text
Thank you for joining the celebration.
```

---

# Animation System

Use Framer Motion.

---

# Motion Style

Elegant.

Luxury.

Slow.

Intentional.

Avoid:

- Bounce
- Elastic effects
- Excessive parallax

---

# Performance

Use:

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- Embla Carousel
- Lucide Icons
- shadcn/ui

---

# Accessibility

Support:

```css
prefers-reduced-motion
```

Disable:

- Parallax
- Floating objects
- Continuous animations

Use simple fade transitions instead.

---

# Final Design Goal

The final website should feel like:

"A luxury, light-themed space birthday invitation experience where every section feels magical, premium, and memorable."

The design should preserve the structure and storytelling of the reference image while transforming it into a bright, elegant, modern celebration website suitable for a high-end event.