"use client";
import { motion } from "framer-motion";

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
    label: "DAY 1",
    matches: [
      { teamA: "Barcelona", teamB: "PSV", time: "16:00", score: [0, 0] },
      { teamA: "Real Madrid", teamB: "Inter", time: "16:00", score: [1, 1] },
      { teamA: "Arsenal", teamB: "Dortmund", time: "18:00", score: [0, 0] },
      { teamA: "Aston Villa", teamB: "Leverkusen", time: "18:00", score: [0, 0] },
    ],
  },
];

// 🔥 FIX WIB TIME
function getStatus(time, date) {
  const now = new Date();
  const match = new Date(`${date}T${time}:00+07:00`);
  const end = new Date(match.getTime() + 2 * 60 * 60 * 1000);

  if (now < match) return "UPCOMING";
  if (now >= match && now <= end) return "LIVE";
  return "FINISHED";
}

export default function SchedulePreview() {
  const todayData = schedule[0];

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">

      {/* 🔥 BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)] -z-10" />

      <div className="max-w-5xl mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-bold">
            Match Schedule
          </h2>
          <p className="text-white/50 mt-1 text-sm">
            {todayData.label}
          </p>
        </div>

        {/* MATCH LIST */}
        <div className="space-y-4">
          {todayData.matches.map((m, i) => {
            const status = getStatus(m.time, todayData.date);

            const winnerA = m.score[0] > m.score[1];
            const winnerB = m.score[1] > m.score[0];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`
                  relative
                  flex flex-col md:grid
                  md:grid-cols-[1fr_auto_1fr_auto]
                  gap-4 md:gap-0
                  items-center
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  rounded-xl px-4 md:px-5 py-3 md:py-4
                  transition-all duration-300
                  hover:bg-white/10
                  ${status === "LIVE" ? "ring-1 ring-red-500/50 bg-red-500/5" : ""}
                `}
              >

                {/* 🔝 MOBILE TOP */}
                <div className="flex justify-between items-center w-full md:hidden text-xs text-white/50">
                  <span>{m.time}</span>

                  {status === "LIVE" && (
                    <span className="flex items-center gap-1 text-red-500 font-semibold">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                      LIVE
                    </span>
                  )}
                  {status === "UPCOMING" && (
                    <span className="text-yellow-400 font-semibold">
                      UPCOMING
                    </span>
                  )}
                  {status === "FINISHED" && (
                    <span className="text-green-400 font-semibold">
                      FINISHED
                    </span>
                  )}
                </div>

                {/* MAIN */}
                <div className="flex items-center justify-between w-full md:contents">

                  {/* TEAM A */}
                  <div className="flex items-center gap-2">
                    <img src={logos[m.teamA]} className="w-6 h-6 md:w-7 md:h-7" />
                    <span className={winnerA ? "text-green-400 font-semibold" : "text-white/70"}>
                      {m.teamA}
                    </span>
                  </div>

                  {/* SCORE */}
                  <div className="text-center">
                    {status === "UPCOMING" ? (
                      <span className="text-white/40 text-sm hidden md:block">
                        {m.time}
                      </span>
                    ) : (
                      <motion.span
                        key={`${m.score[0]}-${m.score[1]}`}
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="text-lg md:text-xl font-bold"
                      >
                        {m.score[0]} - {m.score[1]}
                      </motion.span>
                    )}
                  </div>

                  {/* TEAM B */}
                  <div className="flex items-center gap-2 justify-end">
                    <span className={winnerB ? "text-green-400 font-semibold" : "text-white/70"}>
                      {m.teamB}
                    </span>
                    <img src={logos[m.teamB]} className="w-6 h-6 md:w-7 md:h-7" />
                  </div>

                  {/* DESKTOP STATUS */}
                  <div className="hidden md:block text-right ml-6">
                    {status === "LIVE" && (
                      <span className="flex items-center gap-1 text-red-500 text-xs font-semibold justify-end">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        LIVE
                      </span>
                    )}
                    {status === "UPCOMING" && (
                      <span className="text-yellow-400 text-xs font-semibold">
                        UPCOMING
                      </span>
                    )}
                    {status === "FINISHED" && (
                      <span className="text-green-400 text-xs font-semibold">
                        FINISHED
                      </span>
                    )}
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}