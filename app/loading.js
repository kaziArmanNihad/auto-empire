"use client";

import React from "react";
import { motion } from "framer-motion";

function Loading({ message = "Loading..." }) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center gap-6 overflow-hidden bg-black">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, #f97316 0%, #a78bfa 60%, transparent 80%)",
        }}
      />

      {/* Spinner */}
      <div className="relative h-12 w-12">
        <motion.span className="absolute inset-0 rounded-full border-2 border-white/10" />
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-orange-400"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
        />
      </div>

      {/* Eyebrow + message */}
      <div className="relative flex flex-col items-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
          Please wait
        </span>

        <motion.h1
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          className="text-center text-sm font-bold text-white sm:text-base md:text-lg xl:text-2xl"
        >
          {message}
        </motion.h1>
      </div>
    </div>
  );
}

export default Loading;
