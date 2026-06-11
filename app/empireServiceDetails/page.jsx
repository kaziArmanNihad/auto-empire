"use client";

import Image from "next/image";
import { EmpireServiceSection } from "@/app/constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";
import Link from "next/link";

/* ─── Service data config ─── */
const SERVICES = [
  {
    label: "Premium",
    title: "Premium Quality, Every Time",
    description:
      "We hold ourselves to the highest standards across every project. From initial planning to final delivery, premium craftsmanship is woven into our process — not an add-on.",
    bullets: [
      "End-to-end quality assurance",
      "White-glove client experience",
      "Certified materials & methods",
    ],
    image: EmpireServiceSection.ImageOne,
    accent: "from-orange-400 to-amber-500",
    accentSolid: "text-orange-400",
    accentBorder: "border-orange-400/30",
    accentBg: "bg-orange-400/8",
  },
  {
    label: "Design",
    title: "Design That Commands Attention",
    description:
      "Aesthetic precision meets strategic thinking. Our design approach is rooted in purpose — every visual decision serves the goal of making your brand unmistakable.",
    bullets: [
      "Brand identity systems",
      "Spatial & environmental design",
      "Motion & digital experiences",
    ],
    image: EmpireServiceSection.ImageTwo,
    accent: "from-violet-400 to-purple-500",
    accentSolid: "text-violet-400",
    accentBorder: "border-violet-400/30",
    accentBg: "bg-violet-400/8",
  },
  {
    label: "Build",
    title: "Built to Last, Built to Scale",
    description:
      "Solid foundations are non-negotiable. We engineer solutions with longevity in mind — systems that hold up under pressure and grow with your ambitions.",
    bullets: [
      "Structural integrity at every stage",
      "Scalable architecture & systems",
      "Rigorous testing & validation",
    ],
    image: EmpireServiceSection.ImageThree,
    accent: "from-sky-400 to-blue-500",
    accentSolid: "text-sky-400",
    accentBorder: "border-sky-400/30",
    accentBg: "bg-sky-400/8",
  },
  {
    label: "Deliver",
    title: "On Time. On Budget. On Point.",
    description:
      "We treat your deadlines as our own. With streamlined logistics and transparent communication, delivery is never a question mark — it's a commitment.",
    bullets: [
      "Real-time project tracking",
      "Guaranteed milestone delivery",
      "Zero-surprise pricing",
    ],
    image: EmpireServiceSection.ImageFour,
    accent: "from-emerald-400 to-teal-500",
    accentSolid: "text-emerald-400",
    accentBorder: "border-emerald-400/30",
    accentBg: "bg-emerald-400/8",
  },
  {
    label: "Scale",
    title: "Grow Without Limits",
    description:
      "From a single project to a multi-site operation, our infrastructure scales with you. We architect solutions that meet you today and grow with you tomorrow.",
    bullets: [
      "Multi-site & enterprise capabilities",
      "Modular growth frameworks",
      "Dedicated scale-up support",
    ],
    image: EmpireServiceSection.ImageFive,
    accent: "from-pink-400 to-rose-500",
    accentSolid: "text-pink-400",
    accentBorder: "border-pink-400/30",
    accentBg: "bg-pink-400/8",
  },
  {
    label: "Strategy",
    title: "Strategy That Moves the Needle",
    description:
      "Great execution starts with great strategy. We partner with you to define goals, map the path, and align every decision to outcomes that matter — now and long-term.",
    bullets: [
      "Market & competitive analysis",
      "Roadmapping & OKR alignment",
      "Long-term partnership model",
    ],
    image: EmpireServiceSection.ImageSix,
    accent: "from-amber-400 to-orange-500",
    accentSolid: "text-amber-400",
    accentBorder: "border-amber-400/30",
    accentBg: "bg-amber-400/8",
  },
];

/* ─── Individual service row ─── */
function ServiceRow({ service, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="group relative">
      {/* Connector line between rows */}
      {index !== 0 && (
        <div className="mx-auto mb-0 h-16 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      )}

      <div
        className={`flex flex-col gap-10 xl:flex-row xl:items-center xl:gap-16 ${
          isEven ? "" : "xl:flex-row-reverse"
        }`}
      >
        {/* ── Image side ── */}
        <motion.div
          {...getAnimation(isEven ? "left" : "right", { delay: 0.15 })}
          className="relative xl:w-1/2"
        >
          {/* Glow behind image */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br opacity-10 blur-3xl ${service.accent}`}
          />

          {/* Image container */}
          <div className="group/img relative h-64 overflow-hidden rounded-2xl border border-white/20 sm:h-80 xl:h-[420px]">
            <Image
              src={service.image}
              alt={service.label}
              fill
              quality={100}
              placeholder="blur"
              className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            {/* Label badge */}
            <div className="absolute left-4 top-4">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border ${service.accentBorder} ${service.accentBg} px-3 py-1 text-xs font-bold uppercase tracking-widest ${service.accentSolid} backdrop-blur-sm`}
              >
                <span className={`h-1.5 w-1.5 rounded-full bg-current`} />
                {service.label}
              </span>
            </div>

            {/* Hover ring */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition-all duration-300 group-hover/img:ring-white/15" />
          </div>
        </motion.div>

        {/* ── Text side ── */}
        <motion.div
          {...getAnimation(isEven ? "right" : "left", { delay: 0.25 })}
          className="flex flex-col gap-5 xl:w-1/2"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className={`h-px w-8 bg-gradient-to-r ${service.accent}`} />
            <span
              className={`text-xs font-bold uppercase tracking-widest ${service.accentSolid}`}
            >
              {service.label}
            </span>
          </div>

          {/* Heading */}
          <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl xl:text-4xl">
            {service.title}
          </h3>

          {/* Body */}
          <p className="text-sm leading-relaxed text-white/55 sm:text-base">
            {service.description}
          </p>

          {/* Bullet points */}
          <ul className="flex flex-col gap-2.5">
            {service.bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-sm text-white/70"
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${service.accent}`}
                >
                  <svg
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="none"
                    className="text-black"
                  >
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="pt-2">
            <Link href="/contact">
              <button
                className={`group/btn inline-flex items-center gap-2 rounded-full border ${service.accentBorder} px-5 py-2 text-sm font-semibold ${service.accentSolid} transition-all duration-200 hover:${service.accentBg}`}
              >
                Get started
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
                >
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Main component ─── */
function EmpireServiceDetails() {
  return (
    <section className="mx-auto w-11/12 max-w-screen-xl overflow-hidden py-20 xl:w-4/5 xl:py-28">
      {/* ── Section header ── */}
      <div className="mb-20 flex flex-col items-center gap-4 text-center">
        <motion.span
          {...getAnimation("top")}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
          What We Do
        </motion.span>

        <motion.h2
          {...getAnimation("top", { delay: 0.15 })}
          className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl xl:text-5xl"
        >
          {EmpireServiceSection.title}
        </motion.h2>

        <motion.p
          {...getAnimation("top", { delay: 0.25 })}
          className="max-w-xl text-sm leading-relaxed text-white/50 sm:text-base"
        >
          Every service is crafted with purpose. Explore what we offer and how
          we deliver it.
        </motion.p>

        <motion.div
          {...getAnimation("top", { delay: 0.3 })}
          className="h-px w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        />
      </div>

      {/* ── Service rows ── */}
      <div className="flex flex-col gap-0">
        {SERVICES.map((service, i) => (
          <ServiceRow key={service.label} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}

export default EmpireServiceDetails;
