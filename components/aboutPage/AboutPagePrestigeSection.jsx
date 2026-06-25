"use client";

import React from "react";
import { AboutPrestigeSection } from "../../app/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";
import { MdAutoAwesome } from "react-icons/md";

const stats = [
  { value: "3+", label: "Years exp." },
  { value: "20+", label: "Projects" },
  { value: "100%", label: "Committed" },
];

function AboutPagePrestigeSection() {
  return (
    <div
      id="about"
      className="mx-auto flex min-h-screen w-4/5 flex-col justify-center py-20"
    >
      {/* Two-column layout */}
      <div className="flex items-center gap-12 overflow-hidden">
        {/* Left: Text content */}
        <div className="w-1/2 space-y-2">
          {/* Eyebrow + tag */}
          <motion.div
            {...getAnimation("left", { delay: 0.1 })}
            className="mb-4"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-400">
              Who we are
            </p>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-stone-400">
              <MdAutoAwesome size={13} className="text-orange-400" />
              {AboutPrestigeSection.heading}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            {...getAnimation("left", { delay: 0.2 })}
            className="mb-2 text-4xl font-bold leading-tight text-white"
          >
            {AboutPrestigeSection.title}
          </motion.h1>

          {/* Divider */}
          <motion.div
            {...getAnimation("left", { delay: 0.3 })}
            className="mb-6 h-[3px] w-10 rounded-full bg-orange-500"
          />

          {/* Description paragraphs */}
          {[
            AboutPrestigeSection.description,
            AboutPrestigeSection.descriptionTwo,
          ].map((text, i) => (
            <motion.p
              key={i}
              {...getAnimation("left", { delay: 0.4 + i * 0.15 })}
              className="mb-4 text-sm leading-relaxed text-stone-400 last:mb-0"
            >
              {text}
            </motion.p>
          ))}

          {/* Stats row */}
          <motion.div
            {...getAnimation("left", { delay: 0.9 })}
            className="mt-8 grid grid-cols-3 gap-3"
          >
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-lg border border-white/10 bg-white/5 p-4 text-center"
              >
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className="mt-0.5 text-xs uppercase tracking-widest text-stone-500">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          {...getAnimation("right", { delay: 0.4 })}
          className="w-1/2"
        >
          <div className="relative overflow-hidden rounded-xl border border-white/10">
            <Image
              src={AboutPrestigeSection.imageOne}
              alt="About us"
              quality={100}
              className="h-full w-full object-cover"
              style={{ aspectRatio: "1" }}
            />
            {/* Subtle bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/50 px-4 py-3 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                {AboutPrestigeSection.heading}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPagePrestigeSection;
