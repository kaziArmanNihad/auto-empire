"use client";

import { ContactMessageSection } from "../../app/constants";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { MdPhone, MdPhoneAndroid } from "react-icons/md";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";
import { useState } from "react";

function ContactPageMessageSection() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  const socialLinks = [
    {
      href: "http://www.facebook.com",
      icon: <FaFacebook size={18} />,
      label: "Facebook",
      hoverColor: "hover:text-blue-500",
    },
    {
      href: "http://www.linkedin.com",
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
      hoverColor: "hover:text-blue-600",
    },
    {
      href: "http://www.x.com",
      icon: <FaXTwitter size={18} />,
      label: "X / Twitter",
      hoverColor: "hover:text-white",
    },
    {
      href: "http://www.instagram.com",
      icon: <SiInstagram size={18} />,
      label: "Instagram",
      hoverColor: "hover:text-pink-500",
    },
  ];

  return (
    <div className="mx-auto flex min-h-screen w-4/5 flex-col justify-center py-20">
      {/* Header */}
      <motion.div {...getAnimation("top")} className="mb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-400">
          Get in touch
        </p>
        <h1 className="text-5xl font-bold leading-tight text-white">
          {ContactMessageSection.subtitle}
        </h1>
        <div className="h-[3px] w-10 rounded-full bg-orange-500" />
      </motion.div>

      {/* Two-column layout */}
      <div className="flex items-start gap-12 overflow-hidden">
        {/* Left: Social + Hotline */}
        <motion.div
          {...getAnimation("left", { delay: 0.2 })}
          className="w-2/5 space-y-8"
        >
          <p className="max-w-sm text-sm leading-relaxed text-stone-400">
            {ContactMessageSection.description}
          </p>
          {/* Socials */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-stone-500">
              Social networks
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, icon, label, hoverColor }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-stone-400 transition-all duration-200 ${hoverColor} hover:border-white/20 hover:bg-white/10`}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Hotline */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-stone-500">
              Hot line
            </p>
            <div className="space-y-2">
              {[
                { icon: <MdPhone size={16} />, number: "+880 2 5555 1234" },
                {
                  icon: <MdPhoneAndroid size={16} />,
                  number: "+880 1612 345 678",
                },
              ].map(({ icon, number }) => (
                <div
                  key={number}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-stone-300 transition-all duration-200 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-300"
                >
                  <span className="text-stone-500">{icon}</span>
                  {number}
                </div>
              ))}
            </div>
          </div>

          {/* Response time */}
          <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-stone-500">
              Response time
            </p>
            <p className="text-sm leading-relaxed text-stone-400">
              Typically within{" "}
              <span className="font-semibold text-white">24 hours</span> on
              business days.
            </p>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          {...getAnimation("right", { delay: 0.4 })}
          className="w-3/5 rounded-r-xl border border-l-[3px] border-white/10 border-l-orange-500 bg-white/5 p-8"
        >
          <div className="space-y-5">
            {/* Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                Your name
              </label>
              <input
                type="text"
                placeholder="e.g. John Smith"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-stone-600 outline-none transition-all duration-200 focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-stone-600 outline-none transition-all duration-200 focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20"
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                Message
              </label>
              <textarea
                rows={5}
                maxLength={70}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm leading-relaxed text-white placeholder-stone-600 outline-none transition-all duration-200 focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20"
              />
              <p className="text-right text-xs text-stone-600">
                {message.length}/70
              </p>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSubmit}
              disabled={submitted}
              className={`w-full rounded-lg px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                submitted
                  ? "cursor-not-allowed bg-orange-800/50 text-orange-300 opacity-70"
                  : "border border-orange-500 bg-transparent text-stone-500 hover:bg-orange-500 hover:text-white"
              }`}
            >
              {submitted ? "Message sent ✓" : "Send message"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPageMessageSection;
