"use client";

import Image from "next/image";
import { AboutSignatureSection } from "../../app/constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";
import { MdBolt, MdShield, MdPalette, MdPeople } from "react-icons/md";

const answers = [
  {
    icon: <MdBolt size={16} className="mt-0.5 flex-shrink-0 text-orange-400" />,
    title: (s) => s.answerOne,
    desc: (s) => s.answerDis,
  },
  {
    icon: (
      <MdShield size={16} className="mt-0.5 flex-shrink-0 text-orange-400" />
    ),
    title: (s) => s.answerTwo,
    desc: (s) => s.answerDisTwo,
  },
  {
    icon: (
      <MdPalette size={16} className="mt-0.5 flex-shrink-0 text-orange-400" />
    ),
    title: (s) => s.answerThree,
    desc: (s) => s.answerDisThree,
  },
];

function AboutPageSignatureSection() {
  return (
    <div className="mx-auto flex min-h-screen w-4/5 flex-col justify-center py-20">
      {/* Header */}
      <motion.div {...getAnimation("top")} className="">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-400">
          Our signature
        </p>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-white">
          {AboutSignatureSection.title}
        </h1>
        <div className="mb-5 h-[3px] w-10 rounded-full bg-orange-500" />
      </motion.div>

      {/* Two-column layout */}
      <div className="flex items-start gap-12 overflow-hidden">
        {/* Left: Q&A cards */}
        <div className="w-3/5">
          <motion.p
            {...getAnimation("left", { delay: 0.2 })}
            className="mb-5 text-lg font-semibold text-white"
          >
            {AboutSignatureSection.question}
          </motion.p>

          <div className="space-y-3">
            {answers.map(({ icon, title, desc }, i) => (
              <motion.div
                key={i}
                {...getAnimation("left", { delay: 0.3 + i * 0.12 })}
                className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                style={{ borderLeft: "3px solid rgb(249 115 22 / 0.5)" }}
              >
                {icon}
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-white">
                    {title(AboutSignatureSection)}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-400">
                    {desc(AboutSignatureSection)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
          {...getAnimation("right", { delay: 0.5 })}
          className="w-2/5"
        >
          <div className="relative overflow-hidden rounded-xl border border-white/10">
            <Image
              src={AboutSignatureSection.image}
              alt="Signature image"
              quality={100}
              placeholder="blur"
              className="h-full w-full object-cover"
              style={{ aspectRatio: "1/1" }}
            />
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/50 px-4 py-3 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                {AboutSignatureSection.title}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPageSignatureSection;
