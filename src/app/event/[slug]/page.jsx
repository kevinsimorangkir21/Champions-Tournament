"use client";

import { useParams } from "next/navigation";
import { Trophy, Star, Medal, Crown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const ACCENT = "#d7ff3f";

const events = {
  "fifa-2025": {
    title: "FIFA Tournament 2025",
    year: "2025",
    image: "/events/event4.jpg",
    winner: "Bayern Munich",
    mvp: "Jamal Musiala",

    groups: [
      {
        name: "Group A",
        table: [
          { team: "Barcelona", pts: 7 },
          { team: "Arsenal", pts: 5 },
          { team: "Dortmund", pts: 3 },
          { team: "PSV", pts: 1 },
        ],
      },
      {
        name: "Group B",
        table: [
          { team: "Real Madrid", pts: 9 },
          { team: "Inter", pts: 6 },
          { team: "Leverkusen", pts: 3 },
          { team: "Aston Villa", pts: 0 },
        ],
      },
    ],

    bracket: {
      qf: [
        { a: "Barcelona", b: "Inter", score: "2–1" },
        { a: "Real Madrid", b: "Arsenal", score: "3–2" },
        { a: "Man City", b: "Lens", score: "1–0" },
        { a: "Bayern", b: "PSG", score: "2–0" },
      ],
      sf: [
        { a: "Barcelona", b: "Real Madrid", score: "1–2" },
        { a: "Man City", b: "Bayern", score: "1–3" },
      ],
      final: {
        a: "Real Madrid",
        b: "Bayern",
        score: "1–2",
      },
    },
  },
};

function SectionHeading({ eyebrow, title, icon: Icon }) {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center gap-2">
        <span className="h-px w-6 bg-[#d7ff3f]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d7ff3f]">
          {eyebrow}
        </span>
      </div>

      <h2 className="flex items-center gap-3 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
        {Icon && <Icon className="h-6 w-6 text-[#d7ff3f]" />}
        {title}
      </h2>
    </div>
  );
}

function MatchCard({ match, index, highlight = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className={`group rounded-xl border p-4 transition-colors ${
        highlight
          ? "border-[#d7ff3f]/30 bg-[#d7ff3f]/[0.06]"
          : "border-white/[0.08] bg-white/[0.025] hover:border-white/20"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="min-w-0 flex-1 truncate text-sm font-semibold text-white">
          {match.a}
        </span>

        <span className="shrink-0 rounded-md border border-white/10 bg-black/50 px-3 py-1.5 text-sm font-black tabular-nums text-[#d7ff3f]">
          {match.score}
        </span>

        <span className="min-w-0 flex-1 truncate text-right text-sm font-semibold text-white">
          {match.b}
        </span>
      </div>
    </motion.div>
  );
}

function GroupTable({ group, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101010]"
    >
      <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
        <h3 className="text-sm font-black uppercase tracking-[0.15em] text-white">
          {group.name}
        </h3>
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
          Standings
        </span>
      </div>

      <div className="grid grid-cols-[36px_minmax(0,1fr)_48px] items-center border-b border-white/[0.06] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
        <span>Pos</span>
        <span>Team</span>
        <span className="text-right">Pts</span>
      </div>

      {group.table.map((team, teamIndex) => (
        <div
          key={team.team}
          className={`grid grid-cols-[36px_minmax(0,1fr)_48px] items-center border-b border-white/[0.05] px-5 py-4 last:border-b-0 ${
            teamIndex === 0
              ? "bg-[#d7ff3f]/[0.055]"
              : "transition-colors hover:bg-white/[0.025]"
          }`}
        >
          <span
            className={`text-xs font-bold tabular-nums ${
              teamIndex === 0 ? "text-[#d7ff3f]" : "text-white/30"
            }`}
          >
            {String(teamIndex + 1).padStart(2, "0")}
          </span>

          <span className="flex min-w-0 items-center gap-3">
            {teamIndex === 0 && (
              <span className="h-5 w-1 shrink-0 rounded-full bg-[#d7ff3f]" />
            )}
            <span
              className={`truncate text-sm font-semibold ${
                teamIndex === 0 ? "text-white" : "text-white/65"
              }`}
            >
              {team.team}
            </span>
          </span>

          <span
            className={`text-right text-sm font-black tabular-nums ${
              teamIndex === 0 ? "text-[#d7ff3f]" : "text-white/70"
            }`}
          >
            {team.pts}
          </span>
        </div>
      ))}
    </motion.div>
  );
}

export default function EventDetail() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const event = slug ? events[slug] : null;

  if (!event) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#080808] px-6 text-white">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d7ff3f]">
            Event Not Found
          </p>
          <h1 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">
            No Data Available
          </h1>
          <p className="mt-4 text-sm text-white/45">
            The tournament you are looking for does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* HERO */}
      <section className="relative isolate min-h-[390px] overflow-hidden sm:min-h-[480px]">
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#080808] via-transparent to-black/30" />

        <div className="absolute right-[-100px] top-[-120px] -z-10 h-[350px] w-[350px] rounded-full bg-[#d7ff3f]/[0.07] blur-[110px]" />

        <div className="mx-auto flex min-h-[390px] max-w-7xl items-end px-5 pb-12 pt-32 sm:min-h-[480px] sm:px-8 sm:pb-16 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-sm bg-[#d7ff3f] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-black">
                Tournament Archive
              </span>
              <span className="text-xs font-semibold tracking-[0.15em] text-white/60">
                {event.year}
              </span>
            </div>

            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              {event.title}
              <span className="mt-2 block text-[#d7ff3f]">The Results.</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
              Relive the competition, explore the final standings, and revisit
              the moments that defined the tournament.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.15em] text-white/50">
              <span className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-[#d7ff3f]" />
                Official Results
              </span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>{event.groups.length} Groups</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>Playoffs</span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#d7ff3f]/50 to-transparent" />
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-5 py-12 sm:px-8 sm:py-16 lg:space-y-20 lg:px-12">
        {/* CHAMPION & MVP */}
        <section>
          <SectionHeading
            eyebrow="Hall of Fame"
            title="The Standouts"
            icon={Crown}
          />

          <div className="grid gap-5 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-[#d7ff3f]/25 bg-[#101010] p-6 sm:p-8"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#d7ff3f]/[0.07] blur-[65px] transition-opacity group-hover:bg-[#d7ff3f]/[0.12]" />

              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d7ff3f]">
                    Tournament Champion
                  </p>
                  <h3 className="mt-4 text-2xl font-black uppercase tracking-tight sm:text-3xl">
                    {event.winner}
                  </h3>
                  <p className="mt-2 text-sm text-white/40">
                    {event.year} Champion
                  </p>
                </div>

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#d7ff3f]/20 bg-[#d7ff3f]/[0.08]">
                  <Trophy className="h-8 w-8 text-[#d7ff3f]" />
                </div>
              </div>

              <div className="relative mt-7 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full w-2/3 rounded-full bg-[#d7ff3f]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#101010] p-6 transition-colors hover:border-white/20 sm:p-8"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/[0.035] blur-[65px]" />

              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                    Most Valuable Player
                  </p>
                  <h3 className="mt-4 text-2xl font-black uppercase tracking-tight sm:text-3xl">
                    {event.mvp}
                  </h3>
                  <p className="mt-2 text-sm text-white/40">
                    {event.year} MVP
                  </p>
                </div>

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Star className="h-8 w-8 text-white/80 transition-colors group-hover:text-[#d7ff3f]" />
                </div>
              </div>

              <div className="relative mt-7 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full w-1/2 rounded-full bg-white/30 transition-colors group-hover:bg-[#d7ff3f]" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* GROUP STANDINGS */}
        <section>
          <SectionHeading
            eyebrow="Group Stage"
            title="Final Standings"
            icon={Medal}
          />

          <div className="grid gap-5 md:grid-cols-2">
            {event.groups.map((group, index) => (
              <GroupTable key={group.name} group={group} index={index} />
            ))}
          </div>

          <p className="mt-4 text-xs leading-5 text-white/30">
            Pts = total points earned during the group stage.
          </p>
        </section>

        {/* PLAYOFF BRACKET */}
        <section>
          <SectionHeading
            eyebrow="Road to the Title"
            title="Playoff Bracket"
            icon={Trophy}
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {/* QUARTER FINALS */}
            <div>
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/60">
                  Quarter-finals
                </h3>
                <span className="text-[10px] font-bold text-white/30">01</span>
              </div>

              <div className="space-y-3">
                {event.bracket.qf.map((match, index) => (
                  <MatchCard key={`${match.a}-${match.b}`} match={match} index={index} />
                ))}
              </div>
            </div>

            {/* SEMI FINALS */}
            <div>
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/60">
                  Semi-finals
                </h3>
                <span className="text-[10px] font-bold text-white/30">02</span>
              </div>

              <div className="space-y-3 lg:pt-8">
                {event.bracket.sf.map((match, index) => (
                  <MatchCard key={`${match.a}-${match.b}`} match={match} index={index} />
                ))}
              </div>
            </div>

            {/* FINAL */}
            <div>
              <div className="mb-4 flex items-center justify-between border-b border-[#d7ff3f]/30 pb-3">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#d7ff3f]">
                  Grand Final
                </h3>
                <span className="text-[10px] font-bold text-[#d7ff3f]/50">03</span>
              </div>

              <div className="flex min-h-[180px] flex-col justify-center rounded-2xl border border-[#d7ff3f]/20 bg-[#d7ff3f]/[0.035] p-5">
                <div className="mb-5 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#d7ff3f]">
                  <Trophy className="h-3.5 w-3.5" />
                  Championship Match
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-bold text-white">
                      {event.bracket.final.a}
                    </span>
                    <span className="text-lg font-black tabular-nums text-white">
                      {event.bracket.final.score.split("–")[0] ||
                        event.bracket.final.score.split("-")[0]}
                    </span>
                  </div>

                  <div className="h-px bg-white/[0.08]" />

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-bold text-white">
                      {event.bracket.final.b}
                    </span>
                    <span className="text-lg font-black tabular-nums text-[#d7ff3f]">
                      {event.bracket.final.score.split("–")[1] ||
                        event.bracket.final.score.split("-")[1]}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-center gap-2 border-t border-white/[0.08] pt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                  <Crown className="h-3.5 w-3.5 text-[#d7ff3f]" />
                  Champion: {event.winner}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/[0.08] pt-6">
          <div className="flex flex-col justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 sm:flex-row">
            <span>Champions Tournament</span>
            <span>{event.title} · {event.year}</span>
          </div>
        </footer>
      </div>
    </main>
  );
}