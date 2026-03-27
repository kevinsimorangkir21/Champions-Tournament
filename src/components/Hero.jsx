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

      {/* 🔥 BACKGROUND LOGO GRID (FLOATING) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            rotate-[-18deg]
            grid grid-cols-6 gap-10
            opacity-[0.06]
            scale-125
            will-change-transform
          "
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              className="w-16 h-16 object-contain grayscale opacity-80"
              alt="team"
            />
          ))}
        </motion.div>
      </div>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80 -z-10"></div>

      {/* 🔥 GLOW (SOFT CINEMATIC) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 2 }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white rounded-full blur-[140px] -z-10"
      />

      {/* 🔥 EXTRA DEPTH GRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)] -z-10"></div>

      {/* 🔹 CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-32 md:py-40 text-center relative z-10">

        {/* LIVE BADGE */}
        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 text-red-500 text-sm font-semibold tracking-wider">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            LIVE TOURNAMENT
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          CHAMPIONS
          <br />
          <span className="bg-gradient-to-r from-white via-gray-300 to-white/70 bg-clip-text text-transparent">
            TOURNAMENT 2026
          </span>
        </h1>

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-5 text-sm md:text-base font-semibold tracking-[0.25em] text-white/60"
        >
          #OneGameOneChampions
        </motion.p>

        {/* DESC */}
        <p className="mt-6 text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
          The ultimate FIFA tournament for elite players. Witness the clash of
          titans on the virtual pitch and experience competition at its highest
          level.
        </p>
      </div>

      {/* 🔻 BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent -z-10"></div>
    </section>
  );
}