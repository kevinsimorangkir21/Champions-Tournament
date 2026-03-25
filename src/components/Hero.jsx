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
    <section className="relative overflow-hidden bg-[#0a0a0a] text-white">

      {/* 🔥 BACKGROUND LOGO GRID */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            rotate-[-20deg]
            grid grid-cols-6 gap-10
            opacity-[0.07]
            scale-125
          "
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              className="w-16 h-16 object-contain"
            />
          ))}
        </div>
      </div>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>

      {/* 🔥 GLOW */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-white rounded-full blur-[120px]"
      />

      {/* 🔹 CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-32 md:py-40 relative z-10 text-center">

        {/* 🔴 LIVE */}
        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 text-red-500 text-sm font-semibold">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            LIVE TOURNAMENT
          </span>
        </div>

        {/* 🏆 TITLE */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          CHAMPIONS
          <br />
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            TOURNAMENT 2026
          </span>
        </h1>

        {/* 🔥 SLOGAN */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-sm md:text-base font-semibold tracking-widest text-white/70"
        >
          #OneGameOneChampions
        </motion.p>

        {/* 📄 TEXT */}
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          The ultimate FIFA tournament for all players. Witness the battle for
          glory as top teams clash on the virtual pitch. Who will be crowned
          champion?
        </p>
      </div>

      {/* 🔻 FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}