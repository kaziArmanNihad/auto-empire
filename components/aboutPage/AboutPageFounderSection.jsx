"use client";

import Image from "next/image";
import { AboutFounderSection } from "../../app/constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

function AboutPageFounderSection() {
  return (
    <div
      id="founder"
      className="mx-auto flex min-h-screen w-4/5 flex-col justify-center py-20"
    >
      {/* Header */}
      <motion.div {...getAnimation("top")} className="mb-2">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-500">
          Meet the founder
        </p>
        <h1 className="mb-2 text-4xl font-bold leading-tight text-white">
          {AboutFounderSection.title}
        </h1>
        <div className="h-[3px] w-10 rounded-full bg-orange-500" />
      </motion.div>

      {/* Two-column layout */}
      <div className="flex items-center gap-12 overflow-hidden">
        {/* Left: Portrait */}
        <motion.div
          {...getAnimation("left", { delay: 0.2 })}
          className="relative w-2/5 overflow-hidden rounded-2xl border border-white/10"
          style={{ aspectRatio: "1" }}
        >
          <Image
            src={AboutFounderSection.Image}
            quality={100}
            alt="Founder portrait"
            fill
            className="object-cover"
          />
          {/* Name badge overlay */}
          <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-sm">
            <p className="text-sm font-bold text-white">
              {AboutFounderSection.author}
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Founder &amp; CEO
            </p>
          </div>
        </motion.div>

        {/* Right: Quote + author */}
        <div className="w-3/5">
          {/* Pull quote */}
          <motion.div
            {...getAnimation("right", { delay: 0.25 })}
            className="mb-6 border-l-[3px] border-orange-500 pl-6"
            style={{ borderRadius: 0 }}
          >
            <p className="text-base italic leading-relaxed text-white">
              {AboutFounderSection.description}
            </p>
          </motion.div>

          {/* Author attribution */}
          <motion.div
            {...getAnimation("right", { delay: 0.4 })}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-[2px] w-9 rounded-full bg-orange-500" />
            <div>
              <p className="text-sm font-bold text-white">
                {AboutFounderSection.author}
              </p>
              <p className="text-xs text-stone-500">Founder &amp; CEO</p>
            </div>
          </motion.div>

          {/* Tag */}
          <motion.div
            {...getAnimation("right", { delay: 0.5 })}
            className="flex flex-wrap gap-2"
          >
            <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-400">
              Based in Dhaka, Bangladesh
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutPageFounderSection;
