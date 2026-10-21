"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const news = [
  {
    title: "EVOS vs RRQ Ends in Intense Battle",
    desc: "A thrilling match between EVOS and RRQ ends with a surprising comeback.",
    date: "25 Mar 2026",
    image: "/news/news1.jpg",
    category: "MATCH RECAP",
    number: "01",
  },
  {
    title: "ONIC Secures Semi Final Spot",
    desc: "ONIC dominates the quarter finals and advances to the next stage.",
    date: "24 Mar 2026",
    image: "/news/news2.jpg",
    category: "TOURNAMENT",
    number: "02",
  },
  {
    title: "Tournament Prize Pool Increased",
    desc: "Organizers officially announced an increase in the total prize pool.",
    date: "23 Mar 2026",
    image: "/news/news3.jpg",
    category: "ANNOUNCEMENT",
    number: "03",
  },
];

export default function News() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050505] py-20 text-white md:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
              Latest
              <br />
              <span className="text-[#d7ff3f]">News.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 md:text-base">
              Stay updated with the latest tournament highlights, match
              recaps, and announcements.
            </p>
          </div>

          <Link
            href="/news"
            className="group inline-flex w-fit items-center gap-3 border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-[#d7ff3f] hover:bg-[#d7ff3f] hover:text-black"
          >
            View All News
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>

        {/* News cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              className="group relative overflow-hidden border border-white/10 bg-[#101010] transition-colors duration-300 hover:border-[#d7ff3f]/60"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden sm:h-56">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/10 to-transparent opacity-90" />

                {/* Category */}
                <div className="absolute left-5 top-5">
                  <span className="border border-[#d7ff3f]/40 bg-black/70 px-3 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#d7ff3f] backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                {/* Number */}
                <span className="absolute bottom-4 right-5 text-5xl font-black italic text-white/20 transition-colors duration-300 group-hover:text-[#d7ff3f]/50">
                  {item.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative p-5 md:p-6">
                {/* Date */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-[#d7ff3f]" />

                  <time className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                    {item.date}
                  </time>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-black uppercase leading-snug tracking-wide text-white transition-colors duration-300 group-hover:text-[#d7ff3f] md:text-xl">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-6 text-white/50">
                  {item.desc}
                </p>

                {/* Card bottom */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                    News Update
                  </span>

                  <span className="text-lg text-[#d7ff3f] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d7ff3f] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}