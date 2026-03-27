"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Teams() {
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

  const loopTeams = [...teams, ...teams];

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">

      {/* 🔥 BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)] -z-10" />

      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Participating Teams
        </h2>
        <p className="text-white/60 mt-2">
          All teams competing in the tournament
        </p>
      </div>

      {/* 🔥 AUTO SCROLL */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {loopTeams.map((team, i) => (
            <div
              key={i}
              className="
                min-w-[200px]
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-2xl p-6
                flex flex-col items-center justify-center
                hover:bg-white/10 hover:scale-[1.05]
                transition duration-300
              "
            >
              {/* LOGO */}
              <img
                src={team.logo}
                alt={team.name}
                className="h-12 object-contain mb-3 grayscale hover:grayscale-0 transition"
              />

              {/* NAME */}
              <span className="text-sm font-medium text-white/80 text-center">
                {team.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 🔥 BUTTON */}
      <div className="mt-14 flex justify-center">
        <Link
          href="/teams"
          className="
            px-6 py-3 rounded-full
            border border-white/20 text-white text-sm font-medium
            hover:bg-white/10
            transition-all duration-300
          "
        >
          View All Teams
        </Link>
      </div>

      {/* FADE LEFT */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-black to-transparent"></div>

      {/* FADE RIGHT */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-black to-transparent"></div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}