"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ContactHeroSection } from "../../app/constants";
import { getAnimation } from "@/utils/Animation";
import {
  MdLocationOn,
  MdAccessTime,
  MdCalendarToday,
  MdInfoOutline,
} from "react-icons/md";

function ContactPageHeroSection() {
  const infoRows = [
    {
      icon: <MdLocationOn size={20} />,
      label: "Address",
      value: ContactHeroSection.discription,
      sub: null,
      badge: null,
    },
    {
      icon: <MdAccessTime size={20} />,
      label: "Working hours",
      value: ContactHeroSection.subtitle,
      sub: ContactHeroSection.openDay,
      badge: { text: "Open now", color: "text-emerald-400 bg-emerald-400/10" },
    },
    {
      icon: <MdCalendarToday size={18} />,
      label: "Appointments",
      value: ContactHeroSection.Appointment,
      sub: "Book via email or phone",
      badge: null,
    },
    {
      icon: <MdInfoOutline size={18} />,
      label: "Note",
      value: null,
      sub: "Walk-ins welcome during working hours. Remote consultations available worldwide.",
      badge: null,
    },
  ];

  return (
    <div className="mx-auto flex min-h-screen w-4/5 flex-col justify-center py-20">
      {/* Header */}
      <motion.div {...getAnimation("top")} className="mb-2">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-400">
          Find us
        </p>
        <h1 className="mb-4 text-5xl font-bold leading-tight text-white">
          {ContactHeroSection.title}
        </h1>
        <div className="h-[3px] w-10 rounded-full bg-orange-500" />
      </motion.div>

      {/* Two-column layout */}
      <div className="flex items-center gap-12 overflow-hidden">
        {/* Left: Info rows */}
        <motion.div
          {...getAnimation("left", { delay: 0.2 })}
          className="w-1/2 divide-y divide-white/10"
        >
          {infoRows.map(({ icon, label, value, sub, badge }) => (
            <div key={label} className="flex items-start gap-4 py-4">
              <span className="mt-0.5 flex-shrink-0 text-stone-500">
                {icon}
              </span>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-stone-500">
                  {label}
                </p>
                {value && (
                  <p className="text-sm leading-relaxed text-white">{value}</p>
                )}
                {sub && <p className="mt-0.5 text-sm text-stone-400">{sub}</p>}
                {badge && (
                  <span
                    className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge.color}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {badge.text}
                  </span>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right: Image */}
        <motion.div
          {...getAnimation("right", { delay: 0.4 })}
          className="w-1/2"
        >
          <div className="relative overflow-hidden rounded-xl border border-white/10">
            <Image
              alt="Our location"
              src={ContactHeroSection.image}
              quality={100}
              placeholder="blur"
              className="h-full w-full object-cover"
              style={{ aspectRatio: "4/3" }}
            />
            {/* Image caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 border-t border-white/10 bg-black/60 px-4 py-3 backdrop-blur-sm">
              <MdLocationOn
                size={16}
                className="flex-shrink-0 text-orange-400"
              />
              <span className="text-sm font-medium text-white">
                Dhaka, Bangladesh
              </span>
              <span className="ml-auto cursor-pointer text-xs text-stone-400 transition-colors hover:text-white">
                View on Maps ↗
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPageHeroSection;
