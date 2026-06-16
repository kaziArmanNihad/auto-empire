"use client";

import Image from "next/image";
import { TreasureSection } from "../../app/constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

function TreasureComponent() {
  return (
    <div
      id="inventory"
      className="mx-auto h-screen w-11/12 lg:h-full xl:h-screen xl:w-4/5"
    >
      {/* ── Header ── */}
      <div className="mb-2 flex flex-col items-center gap-1 text-center">
        <motion.span
          {...getAnimation("top")}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
          Inventory
        </motion.span>

        <motion.h2
          {...getAnimation("top", { delay: 0.15 })}
          className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl xl:text-4xl"
        >
          {TreasureSection.title}
        </motion.h2>

        <motion.div
          {...getAnimation("top", { delay: 0.25 })}
          className="h-px w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        />
      </div>
      {/* image sections */}
      <div className="my-3 grid w-full grid-cols-5 grid-rows-4 gap-2 overflow-hidden xl:h-2/3">
        <motion.div
          {...getAnimation("left", { delay: 2 })}
          className="row-span-2 h-full w-full"
        >
          <Image
            alt="Inventory Images"
            src={TreasureSection.imageOne}
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </motion.div>
        <motion.div
          {...getAnimation("left", { delay: 3 })}
          className="col-start-1 row-span-2 row-start-3"
        >
          <Image
            alt="Inventory Images"
            src={TreasureSection.imageTwo}
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </motion.div>
        <motion.div
          {...getAnimation("bottom", { delay: 1 })}
          className="col-span-3 col-start-2 row-span-4 row-start-1"
        >
          <Image
            alt="Inventory Images"
            src={TreasureSection.imageThree}
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </motion.div>
        <motion.div
          {...getAnimation("right", { delay: 2 })}
          className="col-start-5 row-span-2 row-start-1"
        >
          <Image
            alt="Inventory Images"
            src={TreasureSection.imageFour}
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </motion.div>
        <motion.div
          {...getAnimation("right", { delay: 3 })}
          className="col-start-5 row-span-2 row-start-3"
        >
          <Image
            alt="Inventory Images"
            src={TreasureSection.imageFive}
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </motion.div>
      </div>
      {/* bottom text */}
      <motion.div
        {...getAnimation("bottom", { delay: 3.5 })}
        className="flex w-full items-center justify-center xl:h-16"
      >
        <h1 className="text-left text-sm font-bold xl:text-center">
          {TreasureSection.description}
        </h1>
      </motion.div>
    </div>
  );
}

export default TreasureComponent;
