"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Error({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center gap-6 overflow-hidden bg-black px-6 text-center">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, #f97316 0%, #a78bfa 60%, transparent 80%)",
        }}
      />

      {/* Eyebrow */}
      <motion.span
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-red-400/8 relative inline-flex items-center gap-2 rounded-full border border-red-400/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-400"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
        Error
      </motion.span>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative max-w-md text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl xl:text-4xl"
      >
        Something went wrong!
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18 }}
        className="relative max-w-sm text-sm leading-relaxed text-white/55 sm:text-base"
      >
        An unexpected error occurred. You can try again or head back to the
        homepage.
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="relative h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative flex flex-wrap items-center justify-center gap-3"
      >
        <button
          onClick={() => reset()}
          className="rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 active:scale-95"
        >
          Try again
        </button>

        <button
          onClick={() => router.push("/")}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-white/70 transition-colors hover:border-white/30 hover:text-white active:scale-95"
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 7.5L8 2l6 5.5M3.5 6.5V14h9V6.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Go home
        </button>
      </motion.div>
    </div>
  );
}
