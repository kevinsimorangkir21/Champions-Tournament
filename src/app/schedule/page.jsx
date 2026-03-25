"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const isGroupFinished = false;

const logos = {
  Barcelona: "/teams/barcelona.png",
  "Real Madrid": "/teams/realmadrid.png",
  Arsenal: "/teams/arsenal.png",
  Dortmund: "/teams/dortmund.png",
  PSV: "/teams/psv.png",
  "Aston Villa": "/teams/villa.png",
  Leverkusen: "/teams/leverkusen.png",
  Inter: "/teams/inter.png",
  "Man City": "/teams/mancity.png",
  PSG: "/teams/psg.png",
  Atlético: "/teams/atletico.png",
  Ajax: "/teams/ajax.png",
  Bayern: "/teams/bayern.png",
  "Al Nassr": "/teams/alnassr.png",
  Marseille: "/teams/marseille.png",
  "RC Lens": "/teams/lens.png",
};

const schedule = [
  {
    date: "2026-03-31",
    label: "DAY 1 — 31 MARCH",
    matches: [
      { teamA: "Barcelona", teamB: "PSV", time: "16:00", score: [0, 0] },
      { teamA: "Real Madrid", teamB: "Inter", time: "16:00", score: [0, 0] },
      { teamA: "Arsenal", teamB: "Dortmund", time: "18:00", score: [0, 0] },
      { teamA: "Aston Villa", teamB: "Leverkusen", time: "18:00", score: [0, 0] },
    ],
  },
  {
    date: "2026-04-01",
    label: "DAY 2 — 1 APRIL",
    matches: [
      { teamA: "Man City", teamB: "Ajax", time: "16:00", score: [0, 0] },
      { teamA: "Bayern", teamB: "Marseille", time: "16:00", score: [0, 0] },
      { teamA: "Atlético", teamB: "PSG", time: "18:00", score: [0, 0] },
      { teamA: "Al Nassr", teamB: "RC Lens", time: "18:00", score: [0, 0] },
    ],
  },
  {
    date: "2026-04-02",
    label: "DAY 3 — 2 APRIL",
    matches: [
      { teamA: "Barcelona", teamB: "Dortmund", time: "16:00", score: [0, 0] },
      { teamA: "Real Madrid", teamB: "Leverkusen", time: "16:00", score: [0, 0] },
      { teamA: "Arsenal", teamB: "PSV", time: "18:00", score: [0, 0] },
      { teamA: "Aston Villa", teamB: "Inter", time: "18:00", score: [0, 0] },
    ],
  },
  {
    date: "2026-04-03",
    label: "DAY 4 — 3 APRIL",
    matches: [
      { teamA: "Man City", teamB: "PSG", time: "16:00", score: [0, 0] },
      { teamA: "Bayern", teamB: "RC Lens", time: "16:00", score: [0, 0] },
      { teamA: "Atlético", teamB: "Ajax", time: "18:00", score: [0, 0] },
      { teamA: "Al Nassr", teamB: "Marseille", time: "18:00", score: [0, 0] },
    ],
  },
  {
    date: "2026-04-04",
    label: "DAY 5 — 4 APRIL",
    matches: [
      { teamA: "Barcelona", teamB: "Arsenal", time: "16:00", score: [0, 0] },
      { teamA: "Real Madrid", teamB: "Aston Villa", time: "16:00", score: [0, 0] },
      { teamA: "Dortmund", teamB: "PSV", time: "18:00", score: [0, 0] },
      { teamA: "Leverkusen", teamB: "Inter", time: "18:00", score: [0, 0] },
    ],
  },
  {
    date: "2026-04-05",
    label: "DAY 6 — 5 APRIL",
    matches: [
      { teamA: "Man City", teamB: "Atlético", time: "16:00", score: [0, 0] },
      { teamA: "Bayern", teamB: "Al Nassr", time: "16:00", score: [0, 0] },
      { teamA: "PSG", teamB: "Ajax", time: "18:00", score: [0, 0] },
      { teamA: "RC Lens", teamB: "Marseille", time: "18:00", score: [0, 0] },
    ],
  },
];

function getStatus(time, date) {
  const now = new Date();
  const match = new Date(`${date}T${time}:00`);
  const end = new Date(match.getTime() + 2 * 60 * 60 * 1000);

  if (now < match) return "UPCOMING";
  if (now >= match && now <= end) return "LIVE";
  return "FINISHED";
}

export default function SchedulePage() {
  const [tab, setTab] = useState("schedule");

  return (
    <section className="py-20 md:py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="mb-8 md:mb-10">
          <h1 className="text-2xl md:text-4xl font-bold">Schedule</h1>
        </div>

        {/* TOGGLE */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12">
          <div className="bg-white/5 border border-white/10 rounded-full p-1 flex">

            <button
              onClick={() => setTab("schedule")}
              className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm ${
                tab === "schedule"
                  ? "bg-white text-black"
                  : "text-white/60"
              }`}
            >
              Group Stage
            </button>

            <button
              onClick={() => isGroupFinished && setTab("playoff")}
              disabled={!isGroupFinished}
              className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm ${
                tab === "playoff"
                  ? "bg-white text-black"
                  : "text-white/60"
              } ${!isGroupFinished ? "opacity-40 cursor-not-allowed" : ""}`}
            >
              Playoff
            </button>

          </div>
        </div>

        <AnimatePresence mode="wait">

          {/* ================= SCHEDULE ================= */}
          {tab === "schedule" && (
            <motion.div key="schedule" className="space-y-8 md:space-y-10">

              {schedule.map((day, dIdx) => (
                <div key={dIdx}>
                  <h2 className="text-white/40 mb-3 md:mb-4 text-sm md:text-base">
                    {day.label}
                  </h2>

                  <div className="space-y-3 md:space-y-4">
                    {day.matches.map((m, i) => {
                      const status = getStatus(m.time, day.date);

                      const showScore =
                        m.score[0] !== 0 || m.score[1] !== 0;

                      const winnerA = m.score[0] > m.score[1];
                      const winnerB = m.score[1] > m.score[0];

                      return (
                        <div
                          key={i}
                          className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr_auto] items-center gap-3 md:gap-0 bg-white/5 rounded-xl px-4 md:px-6 py-4"
                        >

                          {/* MOBILE */}
                          <div className="flex items-center justify-between w-full md:hidden">
                            <div className="flex items-center gap-2">
                              <img src={logos[m.teamA]} className="w-6" />
                              <span className={winnerA ? "text-green-400 font-bold" : ""}>
                                {m.teamA}
                              </span>
                            </div>

                            <span className="text-white/40 text-sm">
                              {showScore
                                ? `${m.score[0]} - ${m.score[1]}`
                                : m.time}
                            </span>

                            <div className="flex items-center gap-2">
                              <span className={winnerB ? "text-green-400 font-bold" : ""}>
                                {m.teamB}
                              </span>
                              <img src={logos[m.teamB]} className="w-6" />
                            </div>
                          </div>

                          {/* DESKTOP */}
                          <div className="hidden md:flex items-center gap-3">
                            <img src={logos[m.teamA]} className="w-7" />
                            <span className={winnerA ? "text-green-400 font-bold" : ""}>
                              {m.teamA}
                            </span>
                          </div>

                          <div className="hidden md:block text-center px-6">
                            {showScore ? (
                              <span className="text-xl font-bold">
                                {m.score[0]} - {m.score[1]}
                              </span>
                            ) : (
                              <span className="text-white/40 text-sm">
                                {m.time}
                              </span>
                            )}
                          </div>

                          <div className="hidden md:flex items-center justify-end gap-3">
                            <span className={winnerB ? "text-green-400 font-bold" : ""}>
                              {m.teamB}
                            </span>
                            <img src={logos[m.teamB]} className="w-7" />
                          </div>

                          {/* STATUS */}
                          <div className="text-xs md:text-right w-full md:w-auto">
                            {status === "LIVE" && (
                              <span className="text-red-500">● LIVE</span>
                            )}
                            {status === "UPCOMING" && (
                              <span className="text-yellow-400">UPCOMING</span>
                            )}
                            {status === "FINISHED" && (
                              <span className="text-green-400">FINISHED</span>
                            )}
                          </div>

                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

            </motion.div>
          )}

          {/* ================= PLAYOFF ================= */}
          {tab === "playoff" && (
            <motion.div
              key="playoff"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-3 gap-6 md:gap-8"
            >

              <div className="space-y-4 md:space-y-6">
                <h3 className="text-center text-white/40 text-xs uppercase tracking-wider">
                  Quarter Final
                </h3>

                {Array(4).fill(null).map((_, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 text-center text-white/30"
                  >
                    TBD
                  </div>
                ))}
              </div>

              <div className="space-y-10 md:space-y-16">
                <h3 className="text-center text-white/40 text-xs uppercase tracking-wider">
                  Semi Final
                </h3>

                {[1, 2].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 text-center text-white/30"
                  >
                    TBD
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3 className="text-white/40 text-xs uppercase tracking-wider mb-4">
                  Grand Final
                </h3>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center text-white/30 w-full max-w-xs">
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