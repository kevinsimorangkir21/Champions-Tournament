"use client";

import { motion } from "framer-motion";

export default function SchedulePreview() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050505] py-20 text-white sm:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#050505]" />

      <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-80 w-80 rounded-full bg-[#d7ff3f]/[0.035] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end md:mb-16"
        >
          <div>

            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
              Match
              <br />
              <span className="text-[#d7ff3f]">Schedule.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 md:text-base">
              All the action. One destination.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 border border-white/10 bg-white/[0.02] px-4 py-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping bg-[#d7ff3f] opacity-50" />
              <span className="relative h-2 w-2 bg-[#d7ff3f]" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
              Tournament 2026
            </span>
          </div>
        </motion.div>

        {/* Empty Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative overflow-hidden border border-white/10 bg-[#101010] px-5 py-16 transition-colors duration-300 hover:border-[#d7ff3f]/30 sm:py-24"
        >
          {/* Subtle glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#d7ff3f]/[0.035] blur-[100px] transition-opacity duration-500 group-hover:bg-[#d7ff3f]/[0.06]" />

          {/* Decorative number */}
          <span className="pointer-events-none absolute -right-4 top-0 select-none text-[180px] font-black italic leading-none text-white/[0.02] sm:text-[240px]">
            26
          </span>

          <div className="relative mx-auto flex max-w-xl flex-col items-center text-center">
            {/* Calendar icon */}
            <div className="relative mb-7 flex h-20 w-20 items-center justify-center border border-[#d7ff3f]/20 bg-[#d7ff3f]/[0.04] transition-colors duration-300 group-hover:border-[#d7ff3f]/50 group-hover:bg-[#d7ff3f]/[0.07]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-8 w-8 text-[#d7ff3f]"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="16" rx="1" />
                <path d="M16 3v4M8 3v4M3 10h18" />
                <path d="m9 15 2 2 4-4" />
              </svg>

              <span className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-[#d7ff3f]" />

              <span className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-[#d7ff3f]" />
            </div>

            {/* Status */}
            <span className="mb-5 border border-[#d7ff3f]/20 bg-[#d7ff3f]/[0.04] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7ff3f]">
              Awaiting Draw
            </span>

            {/* Title */}
            <h3 className="text-2xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
              Jadwal Pertandingan
              <span className="mt-2 block text-[#d7ff3f]">
                Belum Ditentukan
              </span>
            </h3>

            {/* Description */}
            <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
              Jadwal pertandingan, pasangan tim, dan waktu kick-off akan
              diumumkan setelah proses drawing Champions Tournament 2026
              selesai dilaksanakan.
            </p>

            {/* Waiting indicator */}
            <div className="mt-9 flex items-center gap-3 border-t border-white/10 pt-5">
              <span className="h-1.5 w-1.5 animate-pulse bg-[#d7ff3f]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                Waiting for official draw
              </span>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d7ff3f] transition-all duration-700 group-hover:w-full" />
        </motion.div>
      </div>
    </section>
  );
}