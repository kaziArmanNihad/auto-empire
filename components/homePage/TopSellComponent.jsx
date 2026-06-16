"use client";

import React from "react";
import Image from "next/image";
import { TopSellSection, TopSellSectionCards } from "../../app/constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

function TopSellComponent() {
  return (
    <section className="mx-auto w-11/12 max-w-screen-xl overflow-hidden py-16 md:w-4/5 xl:py-24">
      {/* ── Header ── */}
      <div className="mb-5 flex flex-col items-center gap-3 text-center">
        <motion.span
          {...getAnimation("top")}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
          Top Selling
        </motion.span>

        <motion.h2
          {...getAnimation("top", { delay: 0.15 })}
          className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl xl:text-5xl"
        >
          {TopSellSection.title}
        </motion.h2>

        <motion.div
          {...getAnimation("top", { delay: 0.25 })}
          className="h-px w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        />
      </div>

      {/* ── Cards ── */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {TopSellSectionCards.map((value, index) => (
          <motion.div
            key={value.id}
            {...getAnimation(index % 2 === 0 ? "left" : "right", {
              delay: 0.15 + index * 0.12,
            })}
            className="flex flex-col gap-4"
          >
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-40 xl:h-80">
              <Image
                src={value.image}
                alt={value.model ?? "Top sell item"}
                fill
                quality={100}
                placeholder="blur"
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1.5 px-1">
              <motion.h3
                {...getAnimation(index % 2 === 0 ? "left" : "right", {
                  delay: 0.15 + index * 0.12,
                })}
                className="text-lg font-bold text-white"
              >
                {value.model}
              </motion.h3>
              <motion.p
                {...getAnimation(index % 2 === 0 ? "left" : "right", {
                  delay: 0.3 + index * 0.12,
                })}
                className="text-sm leading-relaxed text-white/55"
              >
                {value.modelDetails}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TopSellComponent;
