"use client";
import { motion } from "framer-motion";

export default function LiveMatch() {
  const liveMatch = {
    teamA: "EVOS",
    teamB: "RRQ",
    scoreA: 2,
    scoreB: 1,
    status: "LIVE",
  };

  const nextMatch = {
    teamA: "ONIC",
    teamB: "BIGETRON",
    time: "18:30",
  };

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] text-white py-24">
      
      {/* 🔹 Content */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* 🔴 Title */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          <h2 className="text-sm tracking-widest text-red-500 font-semibold">
            LIVE MATCH
          </h2>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          Ongoing Battle
        </h3>

        {/* ⚔️ LIVE MATCH CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
        >
          <div className="flex items-center justify-between">
            
            {/* Team A */}
            <div className="text-center flex-1">
              <div className="text-xl md:text-2xl font-semibold">
                {liveMatch.teamA}
              </div>
            </div>

            {/* Score */}
            <div className="text-center px-6">
              <div className="text-4xl font-bold tracking-wider">
                {liveMatch.scoreA} : {liveMatch.scoreB}
              </div>
              <span className="text-red-500 text-xs font-semibold mt-2 block">
                {liveMatch.status}
              </span>
            </div>

            {/* Team B */}
            <div className="text-center flex-1">
              <div className="text-xl md:text-2xl font-semibold">
                {liveMatch.teamB}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ⏳ NEXT MATCH */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm text-white/70">
            Next Match:{" "}
            <span className="text-white font-medium">
              {nextMatch.teamA} vs {nextMatch.teamB}
            </span>{" "}
            • {nextMatch.time}
          </div>
        </motion.div>

      </div>

      {/* 🔻 Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}