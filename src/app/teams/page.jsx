"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const teams = [
  { name: "FC Barcelona", logo: "/teams/barcelona.png" },
  { name: "Arsenal", logo: "/teams/arsenal.png" },
  { name: "Borussia Dortmund", logo: "/teams/dortmund.png" },
  { name: "PSV Eindhoven", logo: "/teams/psv.png" },

  { name: "Real Madrid", logo: "/teams/realmadrid.png" },
  { name: "Aston Villa", logo: "/teams/villa.png" },
  { name: "Bayer Leverkusen", logo: "/teams/leverkusen.png" },
  { name: "Inter Milan", logo: "/teams/inter.png" },

  { name: "Manchester City", logo: "/teams/mancity.png" },
  { name: "Atlético Madrid", logo: "/teams/atletico.png" },
  { name: "Paris Saint-Germain", logo: "/teams/psg.png" },
  { name: "Ajax", logo: "/teams/ajax.png" },

  { name: "Bayern Munich", logo: "/teams/bayern.png" },
  { name: "Al Nassr", logo: "/teams/alnassr.png" },
  { name: "RC Lens", logo: "/teams/lens.png" },
  { name: "Marseille", logo: "/teams/marseille.png" },
];

export default function TeamsPage() {
  const [search, setSearch] = useState("");

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-black py-20 text-white md:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#d7ff3f]/[0.035] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#d7ff3f]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d7ff3f]">
              Tournament Roster
            </span>
          </div>

          <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl">
            The <span className="text-[#d7ff3f]">Teams.</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/45 md:text-base">
            Meet the clubs competing for the Champions Tournament title.
          </p>
        </motion.div>

        {/* Search and team count */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>

            <input
              type="search"
              placeholder="Search team..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search teams"
              className="w-full rounded-lg border border-white/10 bg-white/[0.035] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#d7ff3f]/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-[#d7ff3f]/10"
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/40">
            <span className="font-bold tabular-nums text-[#d7ff3f]">
              {String(filteredTeams.length).padStart(2, "0")}
            </span>
            <span>Teams Found</span>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-white/10" />

        {/* Teams grid */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTeams.map((team, index) => (
              <motion.article
                layout
                key={team.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.25,
                  delay: Math.min(index * 0.025, 0.2),
                }}
                className="group relative overflow-hidden rounded-xl border border-white/[0.09] bg-[#080808] transition-colors duration-300 hover:border-[#d7ff3f]/40"
              >
                {/* Hover accent */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#d7ff3f] transition-all duration-300 group-hover:w-full" />

                {/* Card content */}
                <div className="relative flex min-h-[190px] flex-col items-center justify-center px-3 py-7 sm:min-h-[220px] sm:py-9">
                  {/* Logo glow */}
                  <div className="pointer-events-none absolute inset-0 bg-[#d7ff3f]/[0.025] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Team logo */}
                  <div className="relative mb-6 flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20">
                    <img
                      src={team.logo}
                      alt={`${team.name} logo`}
                      loading="lazy"
                      className="h-full w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>

                  {/* Team name */}
                  <h2 className="relative text-center text-xs font-bold leading-relaxed text-white/65 transition-colors duration-300 group-hover:text-white sm:text-sm">
                    {team.name}
                  </h2>

                  {/* Bottom accent */}
                  <div className="mt-4 h-[2px] w-5 bg-white/10 transition-all duration-300 group-hover:w-10 group-hover:bg-[#d7ff3f]" />
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredTeams.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex min-h-[260px] flex-col items-center justify-center rounded-xl border border-dashed border-white/10 px-6 text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-4 h-8 w-8 text-white/25"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>

            <h2 className="text-lg font-bold text-white">
              No Teams Found
            </h2>

            <p className="mt-2 text-sm text-white/40">
              Try searching with a different team name.
            </p>

            <button
              type="button"
              onClick={() => setSearch("")}
              className="mt-5 text-xs font-bold uppercase tracking-wider text-[#d7ff3f] transition hover:text-white"
            >
              Clear Search
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}