"use client";

import React from "react";
import Image from "next/image";
import { heroSection } from "@/app/constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

function HeroComponent() {
  return (
    <>
      <div
        id="hero"
        className="mx-auto h-full w-11/12 overflow-hidden lg:h-[100vh] lg:w-4/5"
      >
        <motion.h1
          {...getAnimation("top")}
          className="mt-20 text-center text-base font-bold italic text-stone-600 sm:text-3xl lg:text-4xl"
        >
          {heroSection.title}
        </motion.h1>
        <div className="flex flex-col lg:flex-row">
          <div className="flex w-full flex-col items-center justify-center gap-10 p-5">
            <motion.span
              {...getAnimation("left", { delay: 1 })}
              className="cursor-text text-left text-sm hover:text-orange-500 sm:text-base xl:text-lg"
            >
              {heroSection.description}
            </motion.span>
            <motion.span
              {...getAnimation("left", { delay: 2 })}
              className="cursor-text text-left text-sm hover:text-orange-500 sm:text-base xl:text-lg"
            >
              {heroSection.secondDescription}
            </motion.span>
            <motion.h3
              {...getAnimation("bottom", { delay: 2.5 })}
              className="text-center text-sm font-bold text-stone-600 sm:text-base xl:text-lg"
            >
              {heroSection.subtitle}
            </motion.h3>
          </div>
          <motion.div
            {...getAnimation("right", { delay: 1 })}
            className="flex h-full w-full items-center justify-center"
          >
            <Image
              src={heroSection.image}
              alt="hero section image"
              quality={100}
              className="object-cover"
              placeholder="blur"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default HeroComponent;
