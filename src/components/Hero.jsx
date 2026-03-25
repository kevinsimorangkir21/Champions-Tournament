"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] text-white">
      
      {/* 🔥 Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-white rounded-full blur-[120px]"
      />

      {/* 🔹 Content */}
      <div className="max-w-6xl mx-auto px-6 py-32 md:py-40 relative z-10 text-center">
        
        {/* 🔴 LIVE TAG */}
        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 text-red-500 text-sm font-semibold">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            LIVE TOURNAMENT
          </span>
        </div>

        {/* 🏆 TITLE */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          ESPORTS
          <br />
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            TOURNAMENT
          </span>
        </h1>

        {/* 📄 SUBTEXT */}
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          Compete with the best teams. Climb the bracket. Claim your victory and
          become the ultimate champion.
        </p>

        {/* 🏆 INFO */}
        <div className="mt-8 flex justify-center gap-6 text-sm text-white/60">
          <span>📅 25 Mar 2026</span>
          <span>🏆 Prize Pool: $5,000</span>
          <span>👥 32 Teams</span>
        </div>

        {/* 🚀 CTA */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
            Join Tournament
          </button>
          <button className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
            View Schedule
          </button>
        </div>
      </div>

      {/* 🔻 Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}