// components/Hero.tsx
import React from "react";

const BRANDS = [
  // TODO: swap these src values to your real assets (SVG/PNG) in /public or CDN
  { name: "SmokeLab",  src: "https://media-assets.pcnaid.com/Smoke%20Lab%20Smoke%20Shop%20Logo-art.png"  },
  { name: "SmokeBox",  src: "https://media-assets.pcnaid.com/Smoke%20Box%20Smoke%20Shop%20Logo-art.png"  },
  { name: "BlazyVape", src: "https://media-assets.pcnaid.com/Blazy%20Vape%20Shop%20Logo-art.png" },
  { name: "5-Star",    src: "https://media-assets.pcnaid.com/5-Star%20Smoke%20Shop%20Logo-art.png"     },
  { name: "HighLimits",src: "https://media-assets.pcnaid.com/High%20Limits%20Smoke%20Shop%20Logo-art.png"},
];

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0c10]">
      {/* subtle background glow (behind everything) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[140px] -z-10 h-[320px] w-[900px] -translate-x-1/2 rounded-[9999px] opacity-[.25]"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(255,183,77,.35), rgba(255,255,255,0) 70%)",
          filter: "blur(28px)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 text-center md:pt-24">
        <h1 className="text-4xl font-extrabold tracking-wide text-white md:text-6xl">
          ELEVATE YOUR EXPERIENCE
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300 md:text-xl">
          Explore our family of brands — bringing you quality, community, and style.
        </p>

        {/* brands line (accessible text for SEO, kept short) */}
        <p className="mx-auto mt-2 max-w-2xl text-base text-gray-400 md:text-lg">
          SmokeLab, SmokeBox, BlazyVape, 5-Star, HighLimits.
        </p>

        {/* brand logos */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 md:mt-10 md:grid-cols-5 md:gap-8">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              className="flex h-[72px] w-[160px] items-center justify-center rounded-xl bg-white/0"
            >
              <img
                src={b.src}
                alt={b.name}
                className="max-h-[56px] w-auto object-contain drop-shadow-[0_2px_10px_rgba(255,168,0,.18)] transition-transform duration-200 hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        <a
          href="#locations"
          className="mx-auto mt-10 inline-block rounded-full px-7 py-3 font-semibold text-black shadow-[0_0_22px_rgba(255,168,0,.45)] transition-transform duration-200 hover:scale-105"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,197,66,1) 0%, rgba(255,158,13,1) 100%)",
          }}
        >
          Find a Shop
        </a>
      </div>
    </section>
  );
};

export default Hero;
