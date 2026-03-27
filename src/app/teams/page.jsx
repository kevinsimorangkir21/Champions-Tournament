"use client";
import { useState } from "react";
import { motion } from "framer-motion";

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
    team.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative min-h-screen py-24 bg-black text-white overflow-hidden">

      {/* 🔥 BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)] -z-10" />

      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 HEADER */}
        <div className="mb-10 md:mb-14">
          <h1 className="text-3xl md:text-4xl font-bold">
            Teams
          </h1>
          <p className="text-white/50 mt-2">
            All participating teams in the tournament
          </p>
        </div>

        {/* 🔍 SEARCH */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="Search team..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full md:w-80
              bg-white/5 border border-white/10
              rounded-xl px-4 py-2
              text-sm text-white
              placeholder:text-white/40
              focus:outline-none focus:border-white/30
            "
          />
        </div>

        {/* 🏆 GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {filteredTeams.map((team, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              viewport={{ once: true }}
              className="
                group
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-2xl p-6
                flex flex-col items-center text-center
                hover:bg-white/10 hover:scale-105
                hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
                transition-all duration-300
                cursor-pointer
              "
            >

              {/* LOGO */}
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={team.logo}
                  alt={team.name}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition"
                />
              </div>

              {/* NAME */}
              <h3 className="text-sm font-semibold leading-tight text-white/80 group-hover:text-white transition">
                {team.name}
              </h3>

            </motion.div>
          ))}

        </div>

        {/* EMPTY STATE */}
        {filteredTeams.length === 0 && (
          <p className="text-white/40 mt-10 text-center">
            No teams found
          </p>
        )}

      </div>
    </section>
  );
}