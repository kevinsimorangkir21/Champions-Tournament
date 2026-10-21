"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const groups = [
  { name: "Group A", teams: 4 },
  { name: "Group B", teams: 4 },
  { name: "Group C", teams: 4 },
  { name: "Group D", teams: 4 },
];

const knockoutMatches = {
  quarterFinals: [
    { label: "QF 01", home: "", away: "" },
    { label: "QF 02", home: "", away: "" },
    { label: "QF 03", home: "", away: "" },
    { label: "QF 04", home: "", away: "" },
  ],
  semiFinals: [
    { label: "SF 01", home: "", away: "" },
    { label: "SF 02", home: "", away: "" },
  ],
};

function GroupCard({ group, index }) {
  const emptyTeams = Array.from({ length: group.teams }, (_, i) => i);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="rounded-xl border border-white/10 bg-[#101010] p-5 sm:p-6"
    >
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
          {group.name}
        </h3>

        <span className="text-[10px] font-semibold tracking-widest text-white/30">
          04 TEAMS
        </span>
      </div>

      {/* TABLE HEADER */}
      <div className="mb-2 grid grid-cols-[1fr_36px_36px_36px_36px] items-center gap-1 px-3 text-center text-[9px] font-bold tracking-wider text-white/35 sm:grid-cols-[1fr_42px_42px_42px_42px]">
        <span className="text-left">TEAM</span>
        <span>MP</span>
        <span>W</span>
        <span>D</span>
        <span>PTS</span>
      </div>

      {/* EMPTY TEAM SLOTS */}
      <div className="space-y-1">
        {emptyTeams.map((teamIndex) => (
          <div
            key={teamIndex}
            className="grid min-h-[52px] grid-cols-[1fr_36px_36px_36px_36px] items-center gap-1 rounded-md border border-transparent px-3 py-3 transition-colors hover:border-white/10 hover:bg-white/[0.03] sm:grid-cols-[1fr_42px_42px_42px_42px]"
          >
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="h-6 w-6 shrink-0 rounded-md border border-white/[0.07] bg-white/[0.025]" />

              <span className="h-3 w-20 max-w-[65%] rounded-sm bg-white/[0.035]" />
            </div>

            <span className="text-center font-mono text-xs text-white/35">
              —
            </span>

            <span className="text-center font-mono text-xs text-white/35">
              —
            </span>

            <span className="text-center font-mono text-xs text-white/35">
              —
            </span>

            <span className="text-center font-mono text-xs font-bold text-white/60">
              —
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-white/[0.07] pt-3">
        <p className="text-[10px] text-white/30">
          Teams will be announced after the draw.
        </p>
      </div>
    </motion.div>
  );
}

function MatchSlot({ label }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-[#101010] transition-colors hover:border-[#d7ff3f]/30">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-3 py-2">
        <span className="text-[9px] font-bold tracking-[0.16em] text-white/40">
          {label}
        </span>

        <span className="text-[9px] text-white/25">UPCOMING</span>
      </div>

      <div className="space-y-1 p-3">
        {[0, 1].map((slot) => (
          <div
            key={`${label}-${slot}`}
            className="flex min-h-10 items-center justify-between gap-3 rounded-md bg-white/[0.03] px-3 py-2"
          >
            <div className="h-3 w-24 max-w-[65%] rounded-sm bg-white/[0.035]" />

            <span className="font-mono text-xs text-white/20">—</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function KnockoutStage() {
  return (
    <div className="space-y-10">
      {/* BRACKET */}
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
        {/* QUARTER-FINALS */}
        <div>
          <div className="mb-5">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#d7ff3f]">
              ROUND 01
            </p>

            <h3 className="mt-1 text-lg font-bold text-white">
              Quarter-finals
            </h3>
          </div>

          <div className="space-y-4">
            {knockoutMatches.quarterFinals.map((match) => (
              <MatchSlot key={match.label} label={match.label} />
            ))}
          </div>
        </div>

        {/* SEMI-FINALS */}
        <div className="lg:pt-16">
          <div className="mb-5">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#d7ff3f]">
              ROUND 02
            </p>

            <h3 className="mt-1 text-lg font-bold text-white">
              Semi-finals
            </h3>
          </div>

          <div className="space-y-8">
            {knockoutMatches.semiFinals.map((match) => (
              <MatchSlot key={match.label} label={match.label} />
            ))}
          </div>
        </div>

        {/* FINAL */}
        <div className="flex flex-col justify-center lg:pt-16">
          <div className="mb-5">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#d7ff3f]">
              GRAND FINAL
            </p>

            <h3 className="mt-1 text-lg font-bold text-white">
              The Final
            </h3>
          </div>

          <div className="rounded-xl border border-[#d7ff3f]/20 bg-gradient-to-b from-[#d7ff3f]/[0.06] to-transparent p-4">
            <div className="mb-4 text-center">
              <span className="text-[9px] font-bold tracking-[0.2em] text-[#d7ff3f]/70">
                CHAMPIONSHIP MATCH
              </span>
            </div>

            <div className="space-y-2">
              {[0, 1].map((slot) => (
                <div
                  key={slot}
                  className="flex min-h-12 items-center justify-between rounded-md border border-white/[0.07] bg-black/40 px-3"
                >
                  <div className="h-3 w-24 max-w-[65%] rounded-sm bg-white/[0.035]" />

                  <span className="font-mono text-xs text-white/20">—</span>
                </div>
              ))}
            </div>

            <div className="mt-4 border-t border-white/10 pt-4 text-center">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/25">
                WINNER TBD
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BracketPreview() {
  const [tab, setTab] = useState("group");

  return (
    <section className="bg-black py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-10">
          <p className="mb-3 text-center text-[10px] font-bold tracking-[0.3em] text-[#d7ff3f]">
            THE ROAD TO GLORY
          </p>

          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            TOURNAMENT <span className="text-white/40">BRACKET</span>
          </h2>

          <p className="mt-3 text-center text-sm text-white/40">
            Group stage standings and knockout rounds.
          </p>
        </div>

        {/* TAB SWITCHER */}
        <div className="mb-10 flex justify-center">
          <div className="flex rounded-lg border border-white/10 bg-[#101010] p-1">
            <button
              type="button"
              onClick={() => setTab("group")}
              className={`rounded-md px-5 py-3 text-[10px] font-bold tracking-[0.12em] transition-colors sm:px-7 ${
                tab === "group"
                  ? "bg-[#d7ff3f] text-black"
                  : "text-white/50 hover:text-white"
              }`}
            >
              GROUP STAGE
            </button>

            <button
              type="button"
              onClick={() => setTab("knockout")}
              className={`rounded-md px-5 py-3 text-[10px] font-bold tracking-[0.12em] transition-colors sm:px-7 ${
                tab === "knockout"
                  ? "bg-[#d7ff3f] text-black"
                  : "text-white/50 hover:text-white"
              }`}
            >
              KNOCKOUT STAGE
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          {tab === "group" ? (
            <motion.div
              key="group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid gap-5 md:grid-cols-2 xl:gap-6"
            >
              {groups.map((group, index) => (
                <GroupCard
                  key={group.name}
                  group={group}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="knockout"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <KnockoutStage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}