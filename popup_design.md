# Premium Space-Themed Welcome Popup

## Objective

Build a premium, luxury-quality welcome popup based on the attached reference image.

The popup appears immediately when a user lands on the birthday invitation website.

The purpose is to collect the visitor's name before allowing them to continue.

Do not simply recreate the image.

Use it as inspiration and elevate it into a modern, polished, production-ready experience.

The popup should feel:

- Elegant
- Premium
- Magical
- Emotional
- Personalized
- Space-inspired
- Modern

Avoid:

- Generic modal designs
- Cartoon styling
- Loud colors
- Harsh shadows
- Cheap gradients

---

# Overall Layout

Create a full-screen overlay modal.

```css
position: fixed;
inset: 0;
width: 100%;
height: 100vh;
overflow: hidden;
```

The popup should sit above the entire website.

---

# Background Layer

Use a blurred space-themed venue image.

Requirements:

- Full viewport coverage
- Slight zoom effect
- Large blurred astronaut visible in background
- Soft floating planets
- Warm glowing lights
- Tiny stars

```css
background-size: cover;
background-position: center;
filter: blur(18px);
transform: scale(1.05);
```

The astronaut should be visible but not distracting.

---

# Overlay Layer

Add a dark translucent overlay between the background and modal.

```css
background: rgba(8, 15, 35, 0.45);
backdrop-filter: blur(10px);
```

---

# Modal Container

Large luxury card with:
- 36px border radius
- Premium off-white gradient surface
- Subtle border
- Layered shadows
- Spacious padding

---

# Decorative Elements

- Rocket illustration (top left)
- Planet illustration (top right)
- Small stars around heading

Use premium SVG artwork.

---

# Main Heading

Please let us know your name

Typography:
- Inter
- 700 weight
- 56px desktop
- 36px mobile
- #16327A

---

# Input Field

Large luxury input with:
- User icon
- Rounded corners
- Soft border
- Glow on focus

Placeholder:
Enter your name

---

# CTA Button

Large pill-shaped button.

Gradient:

```css
linear-gradient(
135deg,
#1E3A8A,
#3547C8
);
```

Hover:
- Lift effect
- Glow effect

---

# Entrance Animation

Framer Motion animation:

- opacity: 0 → 1
- scale: 0.92 → 1
- translateY: 20px → 0

Duration: 0.8s

---

# Submit Behavior

1. Validate name
2. Save globally
3. Animate popup out
4. Reveal website underneath

Exit animation:
- opacity: 1 → 0
- scale: 1 → 0.95

---

# Personalization

Examples:

- Welcome aboard, Aarush
- Commander Aarush
- Ready for launch, Aarush?

---

# Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- shadcn/ui

---

# Final Goal

The popup should feel like the opening scene of a luxury space-themed celebration website and create an emotional first impression while collecting the visitor's name.
