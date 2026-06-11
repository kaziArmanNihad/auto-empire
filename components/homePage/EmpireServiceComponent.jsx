"use client";

import Image from "next/image";
import { EmpireServiceSection } from "@/app/constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";
import Link from "next/link";

/* ─── image tile with hover overlay ─── */
function ServiceImage({
  src,
  alt = "Empire service",
  label,
  className = "",
  animProps,
}) {
  return (
    <motion.div
      {...animProps}
      className={`group relative overflow-hidden rounded-2xl ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        quality={100}
        placeholder="blur"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* vignette always present */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* label slides up on hover */}
      {label && (
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 ease-out group-hover:translate-y-0">
          <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
            {label}
          </span>
        </div>
      )}

      {/* thin border shimmer on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition-all duration-300 group-hover:ring-white/20" />
    </motion.div>
  );
}

/* ─── main component ─── */
function EmpireServiceComponent() {
  return (
    <section className="mx-auto w-11/12 max-w-screen-xl py-16 xl:w-4/5 xl:overflow-hidden xl:py-24">
      {/* ── Header ── */}
      <div className="mb-12 flex flex-col items-center gap-3 text-center">
        <motion.span
          {...getAnimation("top")}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
          Our Services
        </motion.span>

        <motion.h2
          {...getAnimation("top", { delay: 0.15 })}
          className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl xl:text-5xl"
        >
          {EmpireServiceSection.title}
        </motion.h2>

        <motion.div
          {...getAnimation("top", { delay: 0.25 })}
          className="h-px w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        />
      </div>

      {/* ── Bento grid ── */}
      <div className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 xl:auto-rows-[180px] xl:grid-cols-5">
        {/* ── Text card ── */}
        <motion.div
          {...getAnimation("left", { delay: 0.5 })}
          className="border-white/8 bg-white/4 flex flex-col justify-center gap-2 rounded-2xl border p-7 backdrop-blur-sm sm:col-span-2 xl:col-span-2 xl:row-span-1"
        >
          <h3 className="text-xl font-bold leading-snug text-white xl:text-lg">
            {EmpireServiceSection.heading}
          </h3>
          <p className="text-sm leading-relaxed text-white/55 xl:text-base">
            {EmpireServiceSection.descriptionOne}
          </p>
          <Link href="/empireServiceDetails">
            <button className="self-start rounded-sm border border-orange-400/40 px-4 py-1.5 text-xs font-semibold text-orange-400 transition-colors hover:bg-orange-400/10">
              Learn more →
            </button>
          </Link>
        </motion.div>

        {/* ── Image 1 — large centre (row 1) ── */}
        <ServiceImage
          src={EmpireServiceSection.ImageOne}
          label="Premium"
          className="xl:col-span-2 xl:col-start-3"
          animProps={getAnimation("top", { delay: 1 })}
        />

        {/* ── Image 2 — tall right (row 1) ── */}
        <ServiceImage
          src={EmpireServiceSection.ImageTwo}
          label="Design"
          className="xl:col-start-5"
          animProps={getAnimation("right", { delay: 1.5 })}
        />

        {/* ── Image 3 (row 2, col 1) ── */}
        <ServiceImage
          src={EmpireServiceSection.ImageThree}
          label="Build"
          className="xl:row-start-2"
          animProps={getAnimation("left", { delay: 1.5 })}
        />

        {/* ── Image 4 (row 2, col 2) ── */}
        <ServiceImage
          src={EmpireServiceSection.ImageFour}
          label="Deliver"
          className="xl:row-start-2"
          animProps={getAnimation("bottom", { delay: 2.5 })}
        />

        {/* ── Image 5 (row 2, col 3) ── */}
        <ServiceImage
          src={EmpireServiceSection.ImageFive}
          label="Scale"
          className="xl:row-start-2"
          animProps={getAnimation("bottom", { delay: 1 })}
        />

        {/* ── Image 6 — wide (row 2, cols 4-5) ── */}
        <ServiceImage
          src={EmpireServiceSection.ImageSix}
          label="Strategy"
          className="sm:col-span-2 xl:col-span-2 xl:row-start-2"
          animProps={getAnimation("right", { delay: 0.5 })}
        />
      </div>
    </section>
  );
}

export default EmpireServiceComponent;
