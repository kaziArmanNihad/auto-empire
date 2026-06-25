"use client";

import Image from "next/image";
import { AboutTeamSection } from "../../app/constants";
import { motion } from "framer-motion";

const members = [
  {
    image: (s) => s.imageOne,
    name: (s) => s.nameOne,
    post: (s) => s.postOne,
    role: (s) => s.roleOne,
  },
  {
    image: (s) => s.imageTwo,
    name: (s) => s.nameTwo,
    post: (s) => s.postTwo,
    role: (s) => s.roleTwo,
  },
  {
    image: (s) => s.imageThree,
    name: (s) => s.nameThree,
    post: (s) => s.postThree,
    role: (s) => s.roleThree,
  },
];

// Smooth spring-like cubic bezier used throughout
const EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: EASE },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const dividerVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, delay: 0.35, ease: EASE },
  },
};

function AboutPageTeamSection() {
  return (
    <div
      id="team"
      className="mx-auto flex min-h-screen w-4/5 flex-col justify-center py-20"
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mb-8"
      >
        <motion.p
          variants={headerVariants}
          className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-500"
        >
          Our team
        </motion.p>
        <motion.h1
          variants={headerVariants}
          className="mb-4 text-4xl font-bold leading-tight text-white"
        >
          {AboutTeamSection.title}
        </motion.h1>
        <motion.div
          variants={dividerVariants}
          className="h-[3px] w-10 rounded-full bg-orange-500"
        />
      </motion.div>

      {/* Team cards — staggered container */}
      <motion.div
        className="grid grid-cols-3 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {members.map(({ image, name, post, role }, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.35, ease: EASE } }}
            className="group overflow-hidden rounded-2xl border border-orange-500/15 bg-white/5 transition-colors duration-300 hover:border-orange-500/45"
          >
            {/* Portrait */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1" }}
            >
              {/* Zoom on hover via group-hover scale on inner div */}
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                <Image
                  alt={`${name(AboutTeamSection)} portrait`}
                  src={image(AboutTeamSection)}
                  quality={100}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Orange accent bar — grows from left */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5 + i * 0.18,
                  duration: 0.55,
                  ease: EASE,
                }}
                style={{ originX: 0 }}
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-orange-500 opacity-70"
              />
            </div>

            {/* Info — each line fades up independently */}
            <div className="p-5">
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4 + i * 0.18,
                  duration: 0.5,
                  ease: EASE,
                }}
                className="mb-1 text-lg font-bold text-white"
              >
                {name(AboutTeamSection)}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.52 + i * 0.18,
                  duration: 0.5,
                  ease: EASE,
                }}
                className="mb-2 text-xs font-semibold uppercase tracking-wider text-orange-400"
              >
                {post(AboutTeamSection)}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.64 + i * 0.18,
                  duration: 0.5,
                  ease: EASE,
                }}
                className="text-sm leading-relaxed text-stone-400"
              >
                {role(AboutTeamSection)}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default AboutPageTeamSection;
