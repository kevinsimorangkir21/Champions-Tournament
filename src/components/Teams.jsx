
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const teams = [
  { id: 1, name: "Barcelona", league: "LaLiga", leagueNumber: 1, logo: "/teams/barcelona.png" },
  { id: 2, name: "Arsenal", league: "Premier League", leagueNumber: 1, logo: "/teams/arsenal.png" },
  { id: 3, name: "Dortmund", league: "Bundesliga", leagueNumber: 1, logo: "/teams/dortmund.png" },
  { id: 4, name: "PSV Eindhoven", league: "Eredivisie", leagueNumber: 1, logo: "/teams/psv.png" },
  { id: 5, name: "Real Madrid", league: "LaLiga", leagueNumber: 2, logo: "/teams/realmadrid.png" },
  { id: 6, name: "Aston Villa", league: "Premier League", leagueNumber: 2, logo: "/teams/villa.png" },
  { id: 7, name: "Leverkusen", league: "Bundesliga", leagueNumber: 2, logo: "/teams/leverkusen.png" },
  { id: 8, name: "Inter Milan", league: "Serie A", leagueNumber: 1, logo: "/teams/inter.png" },
  { id: 9, name: "Man City", league: "Premier League", leagueNumber: 3, logo: "/teams/mancity.png" },
  { id: 10, name: "Atletico", league: "LaLiga", leagueNumber: 3, logo: "/teams/atletico.png" },
  { id: 11, name: "PSG", league: "Ligue 1", leagueNumber: 1, logo: "/teams/psg.png" },
  { id: 12, name: "Ajax", league: "Eredivisie", leagueNumber: 2, logo: "/teams/ajax.png" },
  { id: 13, name: "Munich", league: "Bundesliga", leagueNumber: 3, logo: "/teams/bayern.png" },
  { id: 14, name: "Al-Nassr", league: "Saudi Pro League", leagueNumber: 1, logo: "/teams/alnassr.png" },
  { id: 15, name: "Lens", league: "Ligue 1", leagueNumber: 2, logo: "/teams/lens.png" },
  { id: 16, name: "Marseille", league: "Ligue 1", leagueNumber: 3, logo: "/teams/marseille.png" },
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
                  16 klub dari berbagai liga akan bersaing untuk meraih gelar
                  juara Champions Tournament 2026. Saksikan hasil drawing dan
                  perjalanan setiap tim menuju puncak kompetisi.
                </p>
              </div>

              <div className="flex items-center gap-4 border-l border-white/10 pl-5">
                <div>
                  <p className="text-3xl font-black tabular-nums text-white">16</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Teams
                  </p>
                </div>

                <div className="h-12 w-px bg-white/10" />

                <div>
                  <p className="text-3xl font-black tabular-nums text-[#d7ff3f]">07</p>
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
                className="group relative flex h-[260px] w-[190px] shrink-0 flex-col justify-between overflow-hidden border border-white/10 bg-[#101010] p-5 transition-colors duration-300 hover:border-[#d7ff3f]/70 md:h-[290px] md:w-[230px] md:p-6"
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
                    Team {String(team.id).padStart(2, "0")}
                  </span>
                  <span className="h-2 w-2 bg-[#d7ff3f] opacity-70 transition-opacity group-hover:opacity-100" />
                </div>

                {/* Club logo */}
                <div className="relative z-10 flex flex-1 flex-col items-center justify-center">
                  <div className="relative flex h-24 w-24 items-center justify-center transition-transform duration-500 group-hover:scale-110 md:h-28 md:w-28">
                    <Image
                      src={team.logo}
                      alt={`Logo ${team.name}`}
                      width={112}
                      height={112}
                      sizes="112px"
                      className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.04)] transition-all duration-500 group-hover:drop-shadow-[0_0_18px_rgba(215,255,63,0.12)]"
                    />
                  </div>

                  <h3 className="mt-4 line-clamp-2 text-center text-base font-black uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-[#d7ff3f] md:text-lg">
                    {team.name}
                  </h3>

                  <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-white/40 transition-colors group-hover:text-white/70 md:text-xs">
                    {team.league}
                  </p>
                </div>

                {/* Card bottom */}
                <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                    Champions 2026
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
              16 Clubs. One Champion.
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
