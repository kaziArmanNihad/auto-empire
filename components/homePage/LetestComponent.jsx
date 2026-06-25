"use client";

import { latestSection, latestSectionImages } from "@/app/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

const ACCENTS = [
  { gradient: "from-orange-400 to-amber-500", border: "border-orange-400/25" },
  { gradient: "from-violet-400 to-purple-500", border: "border-violet-400/25" },
  { gradient: "from-sky-400 to-blue-500", border: "border-sky-400/25" },
];

function LatestComponent() {
  return (
    <section className="relative mx-auto w-11/12 max-w-screen-xl py-16 xl:w-4/5 xl:py-24">
      {/* ── Header ── */}
      <div className="mb-12 flex flex-col items-center gap-4 text-center">
        <motion.span
          {...getAnimation("top")}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
          New Arrivals
        </motion.span>

        <motion.h2
          {...getAnimation("top", { delay: 0.15 })}
          className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl xl:text-5xl"
        >
          {latestSection.title}
        </motion.h2>

        <motion.div
          {...getAnimation("top", { delay: 0.22 })}
          className="h-px w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        />

        <motion.p
          {...getAnimation("top", { delay: 0.3 })}
          className="max-w-xl text-sm leading-relaxed text-white/55 sm:text-base"
        >
          {latestSection.description}
        </motion.p>
      </div>

      {/* ── Gallery ── */}
      <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-stretch sm:gap-5">
        {latestSectionImages.map((img, index) => {
          const accent = ACCENTS[index % ACCENTS.length];
          return (
            <motion.div
              key={index}
              {...getAnimation(
                index === 0 ? "left" : index === 1 ? "bottom" : "right",
                { delay: 0.35 + index * 0.15 },
              )}
              whileHover={{
                y: -6,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="border-white/8 group relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border sm:h-40 sm:w-40 lg:h-64 lg:w-64"
            >
              <Image
                src={img.image}
                alt="Latest arrival"
                fill
                quality={100}
                placeholder="blur"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 256px"
              />

              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              {/* Hover ring */}
              <div
                className={`pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition-all duration-300 group-hover:ring-white/20`}
              />

              {/* "New" badge */}
              <div className="absolute bottom-3 left-3">
                <span
                  className={`inline-block rounded-full border ${accent.border} bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm`}
                >
                  New
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default LatestComponent;
