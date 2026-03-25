"use client";
import { useState } from "react";

export default function TournamentEngine() {
  const [groups, setGroups] = useState([
    {
      name: "Group A",
      teams: [
        { name: "Barcelona", pts: 0, played: 0 },
        { name: "Arsenal", pts: 0, played: 0 },
        { name: "Dortmund", pts: 0, played: 0 },
        { name: "PSV", pts: 0, played: 0 },
      ],
      matches: [],
    },
  ]);

  // 🔥 GENERATE ROUND ROBIN MATCHES
  function generateMatches(group) {
    const matches = [];
    const teams = group.teams;

    for (let i = 0; i < teams.length; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        matches.push({
          teamA: i,
          teamB: j,
          scoreA: null,
          scoreB: null,
        });
      }
    }

    return matches;
  }

  // 🔥 INIT MATCHES
  function initMatches(groupIndex) {
    const newGroups = [...groups];
    newGroups[groupIndex].matches = generateMatches(newGroups[groupIndex]);
    setGroups(newGroups);
  }

  // 🔥 UPDATE SCORE
  function updateScore(groupIndex, matchIndex, scoreA, scoreB) {
    const newGroups = [...groups];
    const group = newGroups[groupIndex];
    const match = group.matches[matchIndex];

    const teamA = group.teams[match.teamA];
    const teamB = group.teams[match.teamB];

    // reset old score if already played
    if (match.scoreA !== null) {
      teamA.played -= 1;
      teamB.played -= 1;
    }

    match.scoreA = scoreA;
    match.scoreB = scoreB;

    teamA.played += 1;
    teamB.played += 1;

    // reset points (recalculate)
    group.teams.forEach((t) => (t.pts = 0));

    // 🔥 RECALCULATE ALL MATCHES
    group.matches.forEach((m) => {
      if (m.scoreA === null) return;

      const A = group.teams[m.teamA];
      const B = group.teams[m.teamB];

      if (m.scoreA > m.scoreB) {
        A.pts += 3;
      } else if (m.scoreA < m.scoreB) {
        B.pts += 3;
      } else {
        A.pts += 1;
        B.pts += 1;
      }
    });

    // 🔥 SORT
    group.teams.sort((a, b) => b.pts - a.pts);

    setGroups(newGroups);
  }

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-2xl font-bold mb-6">
          Tournament Engine (Round Robin)
        </h1>

        {groups.map((group, gIdx) => (
          <div key={gIdx} className="mb-12">

            {/* GROUP TITLE */}
            <h2 className="text-lg mb-4">{group.name}</h2>

            {/* INIT BUTTON */}
            {group.matches.length === 0 && (
              <button
                onClick={() => initMatches(gIdx)}
                className="mb-4 px-4 py-2 bg-white text-black rounded"
              >
                Generate Matches
              </button>
            )}

            {/* MATCH LIST */}
            {group.matches.map((match, mIdx) => (
              <div
                key={mIdx}
                className="flex items-center justify-between bg-white/5 p-3 rounded mb-2"
              >
                <span>
                  {group.teams[match.teamA].name} vs{" "}
                  {group.teams[match.teamB].name}
                </span>

                <div className="flex gap-2">
                  <input
                    type="number"
                    className="w-12 bg-black border border-white/20 text-center"
                    onChange={(e) =>
                      updateScore(
                        gIdx,
                        mIdx,
                        parseInt(e.target.value || 0),
                        match.scoreB ?? 0
                      )
                    }
                  />
                  <span>-</span>
                  <input
                    type="number"
                    className="w-12 bg-black border border-white/20 text-center"
                    onChange={(e) =>
                      updateScore(
                        gIdx,
                        mIdx,
                        match.scoreA ?? 0,
                        parseInt(e.target.value || 0)
                      )
                    }
                  />
                </div>
              </div>
            ))}

            {/* TABLE */}
            <div className="mt-6 border border-white/10 rounded">
              {group.teams.map((team, i) => (
                <div
                  key={i}
                  className={`flex justify-between px-4 py-2 ${
                    i < 2 ? "bg-green-500/10" : ""
                  }`}
                >
                  <span>{team.name}</span>
                  <span>{team.pts} pts</span>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}