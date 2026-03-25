"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BracketPreview() {
  const [tab, setTab] = useState("group");

  // 🔥 CONTROL PHASE
  const isGroupFinished = true; // nanti ubah ke true kalau mau aktif

  const groups = [
    {
      name: "Group A",
      teams: [
        { name: "FC Barcelona", logo: "/teams/barcelona.png", pts: 0, w: 0, d: 0, l: 0 },
        { name: "Arsenal", logo: "/teams/arsenal.png", pts: 0, w: 0, d: 0, l: 0 },
        { name: "Borussia Dortmund", logo: "/teams/dortmund.png", pts: 0, w: 0, d: 0, l: 0 },
        { name: "PSV Eindhoven", logo: "/teams/psv.png", pts: 0, w: 0, d: 0, l: 0 },
      ],
    },
    {
      name: "Group B",
      teams: [
        { name: "Real Madrid", logo: "/teams/realmadrid.png", pts: 0, w: 0, d: 0, l: 0 },
        { name: "Inter Milan", logo: "/teams/inter.png", pts: 0, w: 0, d: 0, l: 0 },
        { name: "Bayer Leverkusen", logo: "/teams/leverkusen.png", pts: 0, w: 0, d: 0, l: 0 },
        { name: "Aston Villa", logo: "/teams/villa.png", pts: 0, w: 0, d: 0, l: 0 },
      ],
    },
    {
      name: "Group C",
      teams: [
        { name: "Manchester City", logo: "/teams/mancity.png", pts: 0, w: 0, d: 0, l: 0 },
        { name: "PSG", logo: "/teams/psg.png", pts: 0, w: 0, d: 0, l: 0 },
        { name: "Atletico Madrid", logo: "/teams/atletico.png", pts: 0, w: 0, d: 0, l: 0 },
        { name: "Ajax", logo: "/teams/ajax.png", pts: 0, w: 0, d: 0, l: 0 },
      ],
    },
    {
      name: "Group D",
      teams: [
        { name: "Bayern Munich", logo: "/teams/bayern.png", pts: 0, w: 0, d: 0, l: 0 },
        { name: "Al Nassr", logo: "/teams/alnassr.png", pts: 0, w: 0, d: 0, l: 0 },
        { name: "Marseille", logo: "/teams/marseille.png", pts: 0, w: 0, d: 0, l: 0 },
        { name: "RC Lens", logo: "/teams/lens.png", pts: 0, w: 0, d: 0, l: 0 },
      ],
    },
  ];

  // 🔥 SORT GROUP
  const sortedGroups = groups.map((g) => ({
    ...g,
    teams: [...g.teams].sort((a, b) => b.pts - a.pts),
  }));

  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Tournament Bracket
          </h2>
          <p className="text-white/60 mt-2">
            Group stage and knockout stage
          </p>
        </div>

        {/* TOGGLE */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 border border-white/10 rounded-full p-1 flex">
            
            <button
              onClick={() => setTab("group")}
              className={`px-5 py-2 rounded-full text-sm ${
                tab === "group"
                  ? "bg-white text-black font-semibold"
                  : "text-white/60"
              }`}
            >
              Group Stage
            </button>

            <button
              disabled
              className="px-5 py-2 rounded-full text-sm text-white/40 cursor-not-allowed"
            >
              Knockout Stage
            </button>

          </div>
        </div>

        <AnimatePresence mode="wait">

          {/* ================= GROUP ================= */}
          {tab === "group" && (
            <motion.div
              key="group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {sortedGroups.map((group, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-sm text-white/50 mb-4 uppercase">
                    {group.name}
                  </h3>

                  {group.teams.map((team, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between px-3 py-2 text-sm ${
                        idx < 2 ? "bg-green-500/10" : "text-white/60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img src={team.logo} className="w-5 h-5" />
                        {team.name}
                      </div>

                      <div className="flex gap-4 text-sm">
                        <span className="text-white/60">
                          {team.w}-{team.d}-{team.l}
                        </span>
                        <span className="font-semibold">{team.pts}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          )}

          {/* ================= PLAYOFF (RESET) ================= */}
          {tab === "knockout" && (
            <motion.div
              key="knockout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-3 gap-8"
            >
              
              {/* QF */}
              <div className="space-y-6">
                {Array(4).fill(null).map((_, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center text-white/30">
                    TBD
                  </div>
                ))}
              </div>

              {/* SF */}
              <div className="space-y-16">
                {[1,2].map((_,i)=>(
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center text-white/30">
                    TBD
                  </div>
                ))}
              </div>

              {/* FINAL */}
              <div className="flex items-center justify-center">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-white/30">
                  TBD
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}