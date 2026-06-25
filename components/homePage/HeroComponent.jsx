"use client";

import React from "react";
import Image from "next/image";
import { heroSection } from "@/app/constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";
import Link from "next/link";

function HeroComponent() {
  return (
    <section
      id="hero"
      className="relative mx-auto w-11/12 overflow-hidden pb-16 pt-24 lg:w-4/5 lg:py-20"
    >
      <div className="relative flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-10">
        {/* ── Left: text content ── */}
        <div className="flex w-full flex-col items-start gap-4 lg:w-1/2">
          {/* Eyebrow */}
          <motion.span
            {...getAnimation("top")}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
            Welcome
          </motion.span>

          {/* Title */}
          <motion.h1
            {...getAnimation("top", { delay: 0.15 })}
            className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-4xl"
          >
            {heroSection.title}
          </motion.h1>

          {/* Descriptions */}
          <motion.p
            {...getAnimation("left", { delay: 0.3 })}
            className="text-sm leading-relaxed text-white/60 sm:text-base xl:text-lg"
          >
            {heroSection.description}
          </motion.p>

          <motion.p
            {...getAnimation("left", { delay: 0.42 })}
            className="text-sm leading-relaxed text-white/55 sm:text-base xl:text-lg"
          >
            {heroSection.secondDescription}
          </motion.p>

          {/* Subtitle as a styled callout instead of plain bold text */}
          <motion.div
            {...getAnimation("bottom", { delay: 0.55 })}
            className="border-white/8 bg-white/4 flex items-center gap-3 rounded-xl border px-4 py-3 backdrop-blur-sm"
          >
            <span className="h-px w-6 bg-orange-400/70" />
            <h3 className="text-sm font-semibold text-white/80 sm:text-base">
              {heroSection.subtitle}
            </h3>
          </motion.div>

          {/* CTAs */}
          <motion.div
            {...getAnimation("bottom", { delay: 0.65 })}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Link href="/inventory">
              <button className="rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 active:scale-95">
                Get Started
              </button>
            </Link>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-white/70 transition-colors hover:border-white/30 hover:text-white">
                Learn More
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </motion.div>
        </div>

        {/* ── Right: hero image ── */}
        <motion.div
          {...getAnimation("right", { delay: 0.3 })}
          className="relative w-full lg:w-1/2"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[16/11]">
            <Image
              src={heroSection.image}
              alt="Hero showcase"
              fill
              priority
              quality={100}
              placeholder="blur"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroComponent;
