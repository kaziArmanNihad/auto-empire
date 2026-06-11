"use client";

import Image from "next/image";
import { SpotlightSection } from "../../app/constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";
import Link from "next/link";

function SpotlightComponent() {
  return (
    <section className="max-w-screen mx-auto min-h-screen w-11/12 py-16 xl:w-4/5 xl:py-0">
      {/* ── Header ── */}
      <div className="mb-8 flex flex-col items-center gap-3 text-center">
        <motion.span
          {...getAnimation("top")}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
          Spotlight
        </motion.span>

        <motion.h2
          {...getAnimation("top", { delay: 0.15 })}
          className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl xl:text-5xl"
        >
          {SpotlightSection.title}
        </motion.h2>

        <motion.div
          {...getAnimation("top", { delay: 0.25 })}
          className="h-px w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        />
      </div>

      {/* ── Split layout ── */}
      <div className="flex flex-col gap-10 overflow-hidden md:flex-row md:items-stretch xl:gap-16">
        {/* ── Left: text content ── */}
        <div className="flex flex-col justify-center gap-3 md:w-3/5">
          <motion.h3
            {...getAnimation("left", { delay: 0.2 })}
            className="text-2xl font-bold leading-snug text-white sm:text-3xl xl:text-2xl"
          >
            {SpotlightSection.headline}
          </motion.h3>

          {/* Accent line */}
          <motion.div
            {...getAnimation("left", { delay: 0.3 })}
            className="h-px w-12 bg-orange-400/60"
          />

          {/* Description paragraphs */}
          {[
            SpotlightSection.descriptionOne,
            SpotlightSection.descriptionTwo,
          ].map((text, i) => (
            <motion.p
              key={i}
              {...getAnimation("left", { delay: 0.35 + i * 0.12 })}
              className="text-sm leading-relaxed text-white/55 sm:text-base"
            >
              {text}
            </motion.p>
          ))}

          {/* CTA row */}
          <motion.div
            {...getAnimation("left", { delay: 0.65 })}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Link href={"inventory"}>
              {" "}
              <button className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600 active:scale-95">
                Explore Now
              </button>
            </Link>
            <Link href={"inventory"}>
              <button className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/70 transition-colors hover:border-white/30 hover:text-white">
                Cars →
              </button>
            </Link>
          </motion.div>
        </div>

        {/* ── Right: image card ── */}
        <motion.div
          {...getAnimation("right", { delay: 0.3 })}
          className="group relative flex items-center justify-center md:w-2/5"
        >
          {/* Glow behind image */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at center, #f97316 0%, transparent 70%)",
            }}
          />

          {/* Image wrapper */}
          <div className="relative flex h-72 w-4/5 items-center justify-center overflow-hidden rounded-2xl border border-white/10 md:h-full md:min-h-[380px]">
            <Image
              src={SpotlightSection.ImageOne}
              alt="Spotlight poster"
              fill
              quality={100}
              placeholder="blur"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
            />

            {/* Bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Corner badge */}
            <div className="absolute bottom-16 left-4">
              <span className="inline-block rounded-full bg-orange-500/80 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                Featured
              </span>
            </div>

            {/* Hover ring */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition-all duration-300 group-hover:ring-white/15" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SpotlightComponent;
