"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const isGroupFinished = false;

export default function SchedulePage() {
  const [tab, setTab] = useState("schedule");

  return (
    <section className="relative overflow-hidden bg-black py-20 text-white md:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-[#d7ff3f]/[0.035] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        {/* Tabs */}
        <div className="mb-12 flex justify-center">
          <div className="flex rounded-full border border-white/10 bg-white/[0.04] p-1">
            <button
              type="button"
              onClick={() => setTab("schedule")}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                tab === "schedule"
                  ? "bg-[#d7ff3f] text-black"
                  : "text-white/50 hover:text-white"
              }`}
            >
              Group Stage
            </button>

            <button
              type="button"
              onClick={() => isGroupFinished && setTab("playoff")}
              disabled={!isGroupFinished}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                tab === "playoff"
                  ? "bg-[#d7ff3f] text-black"
                  : "cursor-not-allowed text-white/25"
              }`}
            >
              Playoff
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Group Stage */}
          {tab === "schedule" && (
            <motion.div
              key="schedule"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">
                {/* Decorative accent */}
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#d7ff3f]/70 to-transparent" />

                <div className="relative flex min-h-[360px] flex-col items-center justify-center px-6 py-16 text-center md:min-h-[420px]">
                  {/* Decorative glow */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7ff3f]/[0.045] blur-[80px]" />

                  {/* Calendar icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45 }}
                    className="relative mb-7 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#d7ff3f]/20 bg-[#d7ff3f]/[0.06]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-9 w-9 text-[#d7ff3f]"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="16"
                        rx="2"
                      />
                      <path d="M16 3v4M8 3v4M3 10h18" />
                      <path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
                    </svg>
                  </motion.div>

                  {/* Status */}
                  <div className="relative mb-5 inline-flex items-center gap-2 rounded-full border border-[#d7ff3f]/20 bg-[#d7ff3f]/[0.06] px-3.5 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d7ff3f]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7ff3f]">
                      Schedule TBA
                    </span>
                  </div>

                  {/* Main message */}
                  <motion.h2
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="relative max-w-xl text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl"
                  >
                    Fixtures
                    <span className="mt-1 block text-white/35">
                      Coming Soon
                    </span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="relative mt-5 max-w-md text-sm leading-7 text-white/45 md:text-base"
                  >
                    Jadwal pertandingan akan diumumkan setelah penentuan
                    jadwal resmi turnamen.
                  </motion.p>

                  {/* Bottom accent */}
                  <div className="relative mt-8 flex items-center gap-3">
                    <span className="h-px w-8 bg-white/15" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                      Stay Tuned
                    </span>
                    <span className="h-px w-8 bg-white/15" />
                  </div>
                </div>

                {/* Bottom border accent */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
              </div>
            </motion.div>
          )}

          {/* Playoff */}
          {tab === "playoff" && (
            <motion.div
              key="playoff"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-3"
            >
              {/* Quarter-finals */}
              <div className="space-y-4">
                {[1, 2, 3, 4].map((match) => (
                  <div
                    key={match}
                    className="rounded-xl border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-[#d7ff3f]/20"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                      Quarter-final {match}
                    </span>

                    <div className="mt-4 text-sm font-semibold text-white/25">
                      TBD
                    </div>
                  </div>
                ))}
              </div>

              {/* Semi-finals */}
              <div className="flex flex-col justify-around gap-6">
                {[1, 2].map((match) => (
                  <div
                    key={match}
                    className="rounded-xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-[#d7ff3f]/20"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                      Semi-final {match}
                    </span>

                    <div className="mt-4 text-sm font-semibold text-white/25">
                      TBD
                    </div>
                  </div>
                ))}
              </div>

              {/* Final */}
              <div className="flex items-center">
                <div className="w-full rounded-xl border border-[#d7ff3f]/20 bg-[#d7ff3f]/[0.035] p-8 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7ff3f]">
                    Grand Final
                  </span>

                  <div className="mt-5 text-lg font-bold text-white/25">
                    TBD
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}