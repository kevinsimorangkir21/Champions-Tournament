"use client";
import { useParams } from "next/navigation";
import { Trophy, Star, Medal } from "lucide-react";

// 🔥 DATA
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
        { a: "Barcelona", b: "Inter", score: "2-1" },
        { a: "Real Madrid", b: "Arsenal", score: "3-2" },
        { a: "Man City", b: "Lens", score: "1-0" },
        { a: "Bayern", b: "PSG", score: "2-0" },
      ],
      sf: [
        { a: "Barcelona", b: "Real Madrid", score: "1-2" },
        { a: "Man City", b: "Bayern", score: "1-3" },
      ],
      final: {
        a: "Real Madrid",
        b: "Bayern",
        score: "1-2",
      },
    },
  },
};

export default function EventDetail() {
  const { slug } = useParams();
  const event = events[slug];

  if (!event) return <div className="text-white p-10">Not Found</div>;

  return (
    <section className="bg-black text-white min-h-screen">

      {/* HERO */}
      <div className="relative h-[300px]">
        <img src={event.image} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-6 left-6">
          <h1 className="text-3xl font-bold">{event.title}</h1>
          <p className="text-white/60">{event.year}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">

        {/* 🏆 WINNER & MVP */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* CHAMPION */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-white/50 text-sm">Champion</p>
              <h2 className="text-2xl font-bold mt-1">{event.winner}</h2>
            </div>
            <Trophy className="w-8 h-8 text-yellow-400" />
          </div>

          {/* MVP */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-white/50 text-sm">MVP</p>
              <h2 className="text-2xl font-bold mt-1">{event.mvp}</h2>
            </div>
            <Star className="w-8 h-8 text-yellow-300" />
          </div>

        </div>

        {/* 📊 GROUP STAGE */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Medal className="w-5 h-5 text-white/60" />
            Final Standings
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {event.groups.map((group, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4"
              >
                <h3 className="text-sm text-white/40 mb-3">
                  {group.name}
                </h3>

                {group.table.map((t, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between px-3 py-2 rounded ${
                      idx === 0
                        ? "bg-yellow-500/10 text-white"
                        : idx === 1
                        ? "bg-white/5"
                        : "text-white/50"
                    }`}
                  >
                    <span>{t.team}</span>
                    <span>{t.pts}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 🏆 BRACKET */}
        <div>
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-white/60" />
            Playoff Bracket
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* QF */}
            <div className="space-y-4">
              <h3 className="text-white/40 text-xs">Quarter Final</h3>
              {event.bracket.qf.map((m, i) => (
                <div key={i} className="bg-white/5 p-3 rounded-lg text-sm">
                  {m.a} <span className="font-bold">{m.score}</span> {m.b}
                </div>
              ))}
            </div>

            {/* SF */}
            <div className="space-y-8">
              <h3 className="text-white/40 text-xs">Semi Final</h3>
              {event.bracket.sf.map((m, i) => (
                <div key={i} className="bg-white/5 p-3 rounded-lg text-sm">
                  {m.a} <span className="font-bold">{m.score}</span> {m.b}
                </div>
              ))}
            </div>

            {/* FINAL */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-white/40 text-xs mb-4">Final</h3>

              <div className="bg-white/5 p-4 rounded-xl text-center">
                {event.bracket.final.a}{" "}
                <span className="font-bold">
                  {event.bracket.final.score}
                </span>{" "}
                {event.bracket.final.b}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}