
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  ArrowUpRight,
  Trophy,
} from "lucide-react";

const isGroupFinished = false;

const drawGroup = {
  day: "Minggu",
  date: "25 Oktober 2026",
  time: "19:00 WIB",
  location: "Jakarta, Indonesia",
};

export default function SchedulePage() {
  const [tab, setTab] = useState("schedule");

  return (
    <section className="relative overflow-hidden bg-black py-20 text-white md:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-[#d7ff3f]/[0.035] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        {/* DRAW GROUP ANNOUNCEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="group relative mb-12 overflow-hidden rounded-2xl border border-[#d7ff3f]/20 bg-[#0b0b0b]"
        >
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#d7ff3f] to-transparent" />

          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#d7ff3f]/[0.06] blur-[90px]" />

          <div className="relative grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d7ff3f]/20 bg-[#d7ff3f]/[0.06] px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d7ff3f]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7ff3f]">
                  Tournament Announcement
                </span>
              </div>

              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Draw
                <span className="ml-2 text-[#d7ff3f]">Group.</span>
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-white/45">
                Saksikan penentuan grup resmi Champions Tournament.
                Informasi jadwal dan lokasi akan diumumkan segera.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-white/[0.08] bg-white/[0.025] p-4">
                  <CalendarDays className="mb-3 h-5 w-5 text-[#d7ff3f]" />
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                    Hari / Tanggal
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    {drawGroup.day}, {drawGroup.date}
                  </p>
                </div>

                <div className="rounded-lg border border-white/[0.08] bg-white/[0.025] p-4">
                  <Clock3 className="mb-3 h-5 w-5 text-[#d7ff3f]" />
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                    Waktu
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    {drawGroup.time}
                  </p>
                </div>

                <div className="rounded-lg border border-white/[0.08] bg-white/[0.025] p-4 sm:col-span-2 lg:col-span-1">
                  <MapPin className="mb-3 h-5 w-5 text-[#d7ff3f]" />
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                    Lokasi
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    {drawGroup.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="md:pl-4">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("tournament-schedule")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="group/button flex w-full items-center justify-center gap-3 rounded-lg bg-[#d7ff3f] px-6 py-4 text-xs font-black uppercase tracking-[0.15em] text-black transition-colors hover:bg-white md:w-auto"
              >
                View Schedule
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
              </button>

              <p className="mt-3 text-center text-[10px] text-white/30 md:text-right">
                Official details coming soon
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-white/[0.05]" />
        </motion.div>

        {/* SCHEDULE TABS */}
        <div id="tournament-schedule" className="mb-8 flex justify-center scroll-mt-8">
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
          {/* GROUP STAGE */}
          {tab === "schedule" && (
            <motion.div
              key="schedule"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#d7ff3f]/70 to-transparent" />

                <div className="relative flex min-h-[360px] flex-col items-center justify-center px-6 py-16 text-center md:min-h-[420px]">
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7ff3f]/[0.045] blur-[80px]" />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45 }}
                    className="relative mb-7 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#d7ff3f]/20 bg-[#d7ff3f]/[0.06]"
                  >
                    <CalendarDays className="h-9 w-9 text-[#d7ff3f]" />
                  </motion.div>

                  <div className="relative mb-5 inline-flex items-center gap-2 rounded-full border border-[#d7ff3f]/20 bg-[#d7ff3f]/[0.06] px-3.5 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d7ff3f]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7ff3f]">
                      Schedule TBA
                    </span>
                  </div>

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

                  <div className="relative mt-8 flex items-center gap-3">
                    <span className="h-px w-8 bg-white/15" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                      Stay Tuned
                    </span>
                    <span className="h-px w-8 bg-white/15" />
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
              </div>
            </motion.div>
          )}

          {/* PLAYOFF */}
          {tab === "playoff" && (
            <motion.div
              key="playoff"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-3"
            >
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

              <div className="flex items-center">
                <div className="w-full rounded-xl border border-[#d7ff3f]/20 bg-[#d7ff3f]/[0.035] p-8 text-center">
                  <Trophy className="mx-auto mb-4 h-6 w-6 text-[#d7ff3f]" />
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
