"use client";

export default function GroupTable() {
  const groups = [
    {
      name: "GROUP A",
      teams: [
        { name: "FC BARCELONA", wdl: "1-0-0", pts: 3 },
        { name: "ARSENAL", wdl: "1-0-0", pts: 3 },
        { name: "DORTMUND", wdl: "0-0-1", pts: 0 },
        { name: "PSV EINDHOVEN", wdl: "0-0-1", pts: 0 },
      ],
    },
    {
      name: "GROUP B",
      teams: [
        { name: "REAL MADRID", wdl: "1-0-0", pts: 3 },
        { name: "INTER MILAN", wdl: "1-0-0", pts: 3 },
        { name: "LEVERKUSEN", wdl: "0-0-1", pts: 0 },
        { name: "ASTON VILLA", wdl: "0-0-1", pts: 0 },
      ],
    },
    {
      name: "GROUP C",
      teams: [
        { name: "MANCHESTER CITY", wdl: "1-0-0", pts: 3 },
        { name: "PSG", wdl: "1-0-0", pts: 3 },
        { name: "ATLETICO MADRID", wdl: "0-0-1", pts: 0 },
        { name: "AJAX", wdl: "0-0-1", pts: 0 },
      ],
    },
    {
      name: "GROUP D",
      teams: [
        { name: "BAYERN MUNICH", wdl: "1-0-0", pts: 3 },
        { name: "AL NASSR", wdl: "1-0-0", pts: 3 },
        { name: "MARSEILLE", wdl: "0-0-1", pts: 0 },
        { name: "RC LENS", wdl: "0-0-1", pts: 0 },
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* 🔹 HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Group Standings
          </h2>
          <p className="text-white/60 mt-2">
            Tournament group stage rankings
          </p>
        </div>

        {/* 🔥 GRID GROUP */}
        <div className="grid md:grid-cols-2 gap-8">
          {groups.map((group, gIndex) => (
            <div
              key={gIndex}
              className="overflow-hidden rounded-xl border border-white/10"
            >

              {/* HEADER */}
              <div className="flex justify-between items-center bg-gray-200 text-black px-6 py-3 font-bold tracking-wide">
                <span>{group.name}</span>

                <div className="flex gap-10 text-sm">
                  <span>W-D-L</span>
                  <span>PTS</span>
                </div>
              </div>

              {/* ROWS */}
              {group.teams.map((team, i) => (
                <div
                  key={i}
                  className={`
                    flex justify-between items-center px-6 py-4 text-sm font-semibold
                    border-b border-black/20
                    ${
                      i === 0
                        ? "bg-[#6b4c8a]"
                        : i === 1
                        ? "bg-[#7a5a9a]"
                        : i === 2
                        ? "bg-black"
                        : "bg-[#7a5a9a]"
                    }
                  `}
                >
                  
                  {/* TEAM */}
                  <div className="flex items-center gap-2">
                    <span>{team.name}</span>
                    <span className="text-white/40">—</span>
                  </div>

                  {/* STATS */}
                  <div className="flex gap-10">
                    <span>{team.wdl}</span>
                    <span className="font-bold">{team.pts}</span>
                  </div>

                </div>
              ))}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}