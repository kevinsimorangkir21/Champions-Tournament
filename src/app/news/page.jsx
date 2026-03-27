"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Tag } from "lucide-react";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [visible, setVisible] = useState(3);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then(setNews);
  }, []);

  const categories = ["All", "Match", "Update", "News", "Analysis"];

  const filtered =
    filter === "All"
      ? news
      : news.filter((n) => n.category === filter);

  return (
    <section className="relative py-24 bg-black text-white min-h-screen overflow-hidden">

      {/* 🔥 BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)] -z-10" />

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            News
          </h1>
          <p className="text-white/50 mt-2">
            Latest updates from the tournament
          </p>
        </div>

        {/* 🔥 FILTER */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setVisible(3);
              }}
              className={`
                px-4 py-2 rounded-full text-sm transition
                ${
                  filter === cat
                    ? "bg-white text-black font-medium"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 📰 GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.slice(0, visible).map((item, i) => (
            <Link key={i} href={`/news/${item.slug}`}>
              <div
                className="
                  group
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  rounded-2xl overflow-hidden
                  hover:bg-white/10
                  hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
                  transition-all duration-300
                  cursor-pointer
                "
              >

                {/* IMAGE */}
                <div className="h-40 overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  {/* CATEGORY */}
                  <span className="flex items-center gap-1 text-green-400 text-xs">
                    <Tag className="w-3 h-3" />
                    {item.category}
                  </span>

                  {/* TITLE */}
                  <h3 className="mt-2 font-semibold text-white/80 group-hover:text-white transition">
                    {item.title}
                  </h3>

                  {/* DATE */}
                  <p className="flex items-center gap-1 text-white/40 text-xs mt-3">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </p>

                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* 🔥 LOAD MORE */}
        {visible < filtered.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisible((prev) => prev + 3)}
              className="
                px-6 py-3 rounded-full
                border border-white/20 text-white text-sm
                hover:bg-white/10
                transition
              "
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </section>
  );
}