"use client";

import Image from "next/image";
import { AboutStorySection } from "../../app/constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

const stats = [
  { value: "1M+", label: "Monthly readers" },
  { value: "30+", label: "Countries reached" },
  { value: "150+", label: "Events covered" },
  { value: "1,000+", label: "Expert reviews published" },
];

function AboutPageStorySection() {
  return (
    <div
      id="story"
      className="mx-auto flex min-h-screen w-4/5 flex-col justify-center py-20"
    >
      {/* Header */}
      <motion.div {...getAnimation("bottom")} className="mb-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-500">
          Our story
        </p>
        <h1 className="mb-2 text-4xl font-bold leading-tight text-white">
          {AboutStorySection.heading}
        </h1>
        <div className="h-[3px] w-10 rounded-full bg-orange-500" />
      </motion.div>

      {/* Image + Text */}
      <div className="mb-4 flex items-center gap-12 overflow-hidden">
        {/* Image */}
        <motion.div
          {...getAnimation("left")}
          className="relative w-1/2 overflow-hidden rounded-2xl border border-white/10"
          style={{ aspectRatio: "4/3" }}
        >
          <Image
            alt="Our story image"
            src={AboutStorySection.image}
            quality={100}
            placeholder="blur"
            className="h-full w-full object-cover"
            fill
          />
          {/* "Est." badge */}
          <div className="absolute left-3 top-3 rounded-full border border-orange-500/30 bg-orange-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400">
            Est. 1987
          </div>
          {/* Bottom overlay */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/50 px-4 py-3 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-100">
              {AboutStorySection.heading}
            </p>
          </div>
        </motion.div>

        {/* Text */}
        <div className="w-1/2 space-y-4">
          <motion.h2
            {...getAnimation("right")}
            className="text-2xl font-bold leading-snug text-white"
          >
            {AboutStorySection.title}
          </motion.h2>
          <motion.div
            {...getAnimation("right", { delay: 0.15 })}
            className="h-[2px] w-8 rounded-full bg-orange-500"
          />
          <motion.p
            {...getAnimation("right", { delay: 0.25 })}
            className="text-sm leading-relaxed text-stone-400"
          >
            {AboutStorySection.description}
          </motion.p>
        </div>
      </div>

      {/* Stats row */}
      <motion.div
        {...getAnimation("bottom", { delay: 0.3 })}
        className="grid grid-cols-4 gap-3"
      >
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="rounded-xl border border-orange-500/20 bg-white/5 p-5 text-center"
            style={{ borderTop: "3px solid rgb(249 115 22 / 0.7)" }}
          >
            <p className="text-2xl font-bold text-orange-400">{value}</p>
            <p className="mt-1 text-xs leading-snug text-stone-400">{label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AboutPageStorySection;
