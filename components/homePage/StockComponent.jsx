"use client";

import { StockSection, StockCardSection } from "../../app/constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

const ACCENT_COLORS = [
  "from-emerald-400 to-teal-500",
  "from-violet-400 to-purple-500",
  "from-sky-400 to-blue-500",
];

const ICON_COLORS = ["text-emerald-400", "text-violet-400", "text-sky-400"];

function StockComponent() {
  const cardAnimations = [
    getAnimation("left", { delay: 0.3 }),
    getAnimation("top", { delay: 0.5 }),
    getAnimation("right", { delay: 0.7 }),
  ];

  return (
    <section className="relative mx-auto w-11/12 max-w-screen-xl overflow-hidden py-20 xl:w-4/5">
      

      {/* ── Header ── */}
      <div className="relative mb-16 flex flex-col items-center gap-5 px-4 text-center">
        {/* Eyebrow label */}
        <motion.div
          {...getAnimation("top")}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-400">
            Stock Overview
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h2
          {...getAnimation("top", { delay: 0.2 })}
          className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {StockSection.title}
        </motion.h2>

        {/* Decorative divider */}
        <motion.div
          {...getAnimation("top", { delay: 0.35 })}
          className="h-px w-24 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        />
      </div>

      {/* ── Cards grid ── */}
      <div className="relative grid grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {StockCardSection.map((card, i) => {
          const accent = ACCENT_COLORS[i % ACCENT_COLORS.length];
          const iconColor = ICON_COLORS[i % ICON_COLORS.length];

          return (
            <motion.div
              key={i}
              {...cardAnimations[i % cardAnimations.length]}
              whileHover={{
                y: -6,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="border-white/8 bg-white/4 hover:border-white/16 hover:bg-white/6 group relative flex flex-col gap-4 overflow-hidden rounded-2xl border p-6 backdrop-blur-sm transition-colors duration-300"
            >
              {/* Glowing top-edge accent */}
              <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
              />

              {/* Card number badge */}
              <span
                className={`bg-white/6 self-start rounded-lg px-2 py-0.5 text-xs font-bold tabular-nums ${iconColor}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="text-base font-bold leading-snug text-white sm:text-lg">
                {card.cardTitle}
              </h3>

              {/* Divider */}
              <div
                className={`h-px w-8 bg-gradient-to-r ${accent} opacity-50`}
              />

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/55">
                {card.cardDescription}
              </p>

              {/* Subtle corner glow on hover */}
              <div
                className={`pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br ${accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-15`}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default StockComponent;
