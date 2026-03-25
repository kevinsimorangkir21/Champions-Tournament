"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

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
    <section className="py-24 bg-[#0a0a0a] text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-6">News</h1>

        {/* 🔥 FILTER */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setVisible(3);
              }}
              className={`px-4 py-2 rounded-full text-sm ${
                filter === cat
                  ? "bg-white text-black"
                  : "bg-white/10 text-white/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 📰 LIST */}
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.slice(0, visible).map((item, i) => (
            <Link key={i} href={`/news/${item.slug}`}>
              <div className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 cursor-pointer">

                <img src={item.image} className="h-40 w-full object-cover" />

                <div className="p-4">
                  <span className="text-green-400 text-xs">
                    {item.category}
                  </span>

                  <h3 className="mt-2 font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-white/50 text-xs mt-2">
                    {item.date}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* 🔥 LOAD MORE */}
        {visible < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisible((prev) => prev + 3)}
              className="px-6 py-3 bg-white text-black rounded-xl"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </section>
  );
}