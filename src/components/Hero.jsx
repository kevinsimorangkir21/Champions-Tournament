"use client";

import { motion } from "framer-motion";

const logos = [
  "/teams/barcelona.png",
  "/teams/arsenal.png",
  "/teams/dortmund.png",
  "/teams/psv.png",
  "/teams/realmadrid.png",
  "/teams/villa.png",
  "/teams/leverkusen.png",
  "/teams/inter.png",
  "/teams/mancity.png",
  "/teams/atletico.png",
  "/teams/psg.png",
  "/teams/ajax.png",
  "/teams/bayern.png",
  "/teams/alnassr.png",
  "/teams/lens.png",
  "/teams/marseille.png",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* BACKGROUND LOGO GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 grid w-max -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] grid-cols-4 gap-8 opacity-[0.06] sm:grid-cols-6 sm:gap-10"
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <img
              key={`${logo}-${index}`}
              src={logo}
              alt=""
              loading="lazy"
              className="h-12 w-12 object-contain grayscale opacity-80 sm:h-16 sm:w-16"
            />
          ))}
        </motion.div>
      </div>

      {/* DARK OVERLAY */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-black/80"
      />

      {/* CINEMATIC GLOW */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 2 }}
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white blur-[140px]"
      />

      {/* DEPTH GRADIENT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]"
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-32 text-center sm:px-6 md:py-40">
        {/* LIVE BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <span className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-red-500 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            LIVE TOURNAMENT
          </span>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          CHAMPIONS
          <br />
          <span className="bg-gradient-to-r from-white via-gray-300 to-white/60 bg-clip-text text-transparent">
            TOURNAMENT
          </span>
          <span className="mt-2 block text-2xl font-bold tracking-[0.18em] text-[#d7ff3f] sm:text-3xl md:text-4xl">
            2026
          </span>
        </motion.h1>

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-xs font-semibold tracking-[0.2em] text-white/60 sm:text-sm sm:tracking-[0.25em]"
        >
          #OneGameOneChampions
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base md:text-lg"
        >
          The ultimate FIFA tournament for elite players. Witness the clash of
          titans on the virtual pitch and experience competition at its highest
          level.
        </motion.p>

        {/* BOTTOM ACCENT */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mx-auto mt-10 h-[3px] w-20 origin-center bg-[#d7ff3f]"
        />
      </div>

      {/* BOTTOM FADE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-32 w-full bg-gradient-to-t from-black to-transparent"
      />
    </section>
  );
}