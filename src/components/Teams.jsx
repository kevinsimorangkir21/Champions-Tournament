"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const teams = [
  { id: 1, league: "LaLiga", leagueNumber: 1, logo: "/teams/barcelona.png" },
  { id: 2, league: "Premier League", leagueNumber: 1, logo: "/teams/arsenal.png" },
  { id: 3, league: "Bundesliga", leagueNumber: 1, logo: "/teams/dortmund.png" },
  { id: 4, league: "Eredivisie", leagueNumber: 1, logo: "/teams/psv.png" },
  { id: 5, league: "LaLiga", leagueNumber: 2, logo: "/teams/realmadrid.png" },
  { id: 6, league: "Premier League", leagueNumber: 2, logo: "/teams/villa.png" },
  { id: 7, league: "Bundesliga", leagueNumber: 2, logo: "/teams/leverkusen.png" },
  { id: 8, league: "Serie A", leagueNumber: 1, logo: "/teams/inter.png" },
  { id: 9, league: "Premier League", leagueNumber: 3, logo: "/teams/mancity.png" },
  { id: 10, league: "LaLiga", leagueNumber: 3, logo: "/teams/atletico.png" },
  { id: 11, league: "Ligue 1", leagueNumber: 1, logo: "/teams/psg.png" },
  { id: 12, league: "Eredivisie", leagueNumber: 2, logo: "/teams/ajax.png" },
  { id: 13, league: "Bundesliga", leagueNumber: 3, logo: "/teams/bayern.png" },
  { id: 14, league: "Saudi Pro League", leagueNumber: 1, logo: "/teams/alnassr.png" },
  { id: 15, league: "Ligue 1", leagueNumber: 2, logo: "/teams/lens.png" },
  { id: 16, league: "Ligue 1", leagueNumber: 3, logo: "/teams/marseille.png" },
];

const loopTeams = [...teams, ...teams];

export default function Teams() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050505] py-20 text-white md:py-28">

      <div className="relative z-10">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-7xl px-6 md:mb-20 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#d7ff3f]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#d7ff3f]">
                Champions Tournament 2026
              </span>
            </div>

            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
                  Participating
                  <br />
                  <span className="text-[#d7ff3f]">Teams.</span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 md:text-base">
                  Daftar tim peserta akan ditampilkan setelah proses drawing
                  Champions Tournament 2026 selesai dilaksanakan.
                </p>
              </div>

              <div className="flex items-center gap-4 border-l border-white/10 pl-5">
                <div>
                  <p className="text-3xl font-black tabular-nums text-white">
                    16
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Team Slots
                  </p>
                </div>

                <div className="h-12 w-px bg-white/10" />

                <div>
                  <p className="text-3xl font-black tabular-nums text-[#d7ff3f]">
                    07
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Leagues
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team marquee */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-[#050505] to-transparent md:w-32" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-[#050505] to-transparent md:w-32" />

          <motion.div
            className="flex w-max gap-4 py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 45,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {loopTeams.map((team, index) => (
              <motion.div
                key={`${team.id}-${index}`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="group relative flex h-[240px] w-[190px] shrink-0 flex-col justify-between overflow-hidden border border-white/10 bg-[#101010] p-5 transition-colors duration-300 hover:border-[#d7ff3f]/70 md:h-[280px] md:w-[230px] md:p-6"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#d7ff3f]/[0.09] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Decorative number */}
                <div className="pointer-events-none absolute -right-3 top-10 select-none text-8xl font-black italic text-white/[0.025] transition-colors duration-300 group-hover:text-[#d7ff3f]/[0.06]">
                  {String(team.id).padStart(2, "0")}
                </div>

                {/* Card top */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Champions 2026
                  </span>

                  <span className="h-2 w-2 bg-[#d7ff3f] opacity-70 transition-opacity group-hover:opacity-100" />
                </div>

                {/* Anonymous team identity */}
                <div className="relative z-10 flex flex-1 flex-col items-center justify-center">
                  <div className="relative flex h-20 w-20 items-center justify-center border border-white/10 bg-white/[0.025] transition-all duration-300 group-hover:border-[#d7ff3f]/40 group-hover:bg-[#d7ff3f]/[0.04] md:h-24 md:w-24">
                    <span className="text-4xl font-black italic text-white/15 transition-colors duration-300 group-hover:text-[#d7ff3f]/50">
                      ?
                    </span>

                    <span className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-[#d7ff3f]/50" />

                    <span className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-[#d7ff3f]/50" />
                  </div>

                  <p className="mt-4 text-center text-lg font-black uppercase tracking-[0.08em] text-white transition-colors group-hover:text-[#d7ff3f] md:text-xl">
                    TEAM {String(team.id).padStart(2, "0")}
                  </p>

                  <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 transition-colors group-hover:text-white/70 md:text-xs">
                    {team.league} #{team.leagueNumber}
                  </p>
                </div>

                {/* Card bottom */}
                <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                    Identity classified
                  </span>

                  <span className="text-xs font-black text-[#d7ff3f]/60">
                    {String((index % teams.length) + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d7ff3f] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-5 px-6 sm:flex-row sm:items-center md:px-10">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping bg-[#d7ff3f] opacity-50" />
              <span className="relative inline-flex h-2 w-2 bg-[#d7ff3f]" />
            </span>

            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
              Team identities remain confidential until drawing
            </p>
          </div>

          <Link
            href="/teams"
            className="group inline-flex w-fit items-center gap-3 border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-[#d7ff3f] hover:bg-[#d7ff3f] hover:text-black"
          >
            View All Teams
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}