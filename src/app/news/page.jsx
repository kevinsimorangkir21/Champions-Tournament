"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Tag, ArrowUpRight, Newspaper } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ACCENT = "#d7ff3f";

const categories = ["All", "Match", "Update", "News", "Analysis"];

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [visible, setVisible] = useState(6);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchNews() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch("/api/news", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid news response");
        }

        setNews(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchNews();

    return () => controller.abort();
  }, []);

  const filtered =
    filter === "All"
      ? news
      : news.filter(
          (item) =>
            item.category?.toLowerCase() === filter.toLowerCase()
        );

  const featured = filtered[0];
  const remainingNews = filtered.slice(1, visible);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] pb-24 text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#d7ff3f]/[0.035] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 pt-28 sm:px-8 sm:pt-36 lg:px-12">
        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 border-b border-white/10 pb-10 sm:mb-16 sm:pb-12"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#d7ff3f]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d7ff3f]">
              Champions Tournament
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
                The
                <span className="block text-[#d7ff3f]">Latest.</span>
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-6 text-white/45 sm:text-base">
                Match reports, tournament updates, and stories from the
                Champions Tournament community.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 md:self-auto">
              <Newspaper className="h-5 w-5 text-[#d7ff3f]" />
              <div>
                <p className="text-xl font-black tabular-nums">
                  {loading ? "—" : news.length.toString().padStart(2, "0")}
                </p>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                  Total Stories
                </p>
              </div>
            </div>
          </div>
        </motion.header>

        {/* CATEGORY FILTER */}
        <div className="mb-8">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
            Explore by category
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => {
              const active = filter === category;

              return (
                <button
                  key={category}
                  onClick={() => {
                    setFilter(category);
                    setVisible(6);
                  }}
                  className={`shrink-0 rounded-md border px-4 py-2.5 text-xs font-bold transition-all duration-200 ${
                    active
                      ? "border-[#d7ff3f] bg-[#d7ff3f] text-black"
                      : "border-white/10 bg-white/[0.025] text-white/55 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="animate-pulse overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025]"
              >
                <div className="aspect-[16/10] bg-white/[0.05]" />
                <div className="space-y-3 p-5">
                  <div className="h-3 w-20 rounded bg-white/10" />
                  <div className="h-5 w-full rounded bg-white/10" />
                  <div className="h-3 w-28 rounded bg-white/[0.06]" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="rounded-xl border border-white/10 bg-white/[0.025] px-6 py-16 text-center">
            <Newspaper className="mx-auto mb-4 h-8 w-8 text-white/30" />
            <h2 className="text-lg font-black uppercase">
              Unable to Load News
            </h2>
            <p className="mt-2 text-sm text-white/40">
              Something went wrong while retrieving the latest stories.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 rounded-md bg-[#d7ff3f] px-5 py-3 text-xs font-black uppercase tracking-wider text-black transition hover:bg-white"
            >
              Try Again
            </button>
          </div>
        )}

        {/* NEWS CONTENT */}
        {!loading && !error && filtered.length > 0 && (
          <>
            {/* FEATURED STORY */}
            {featured && (
              <motion.div
                key={`${filter}-${featured.slug}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mb-10"
              >
                <Link
                  href={`/news/${featured.slug}`}
                  className="group grid overflow-hidden rounded-2xl border border-white/10 bg-[#101010] transition-colors hover:border-[#d7ff3f]/30 md:grid-cols-2"
                >
                  <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[350px]">
                    {featured.image ? (
                      <img
                        src={featured.image}
                        alt={featured.title || "Featured news"}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-white/[0.04]" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#101010]/40" />

                    <span className="absolute left-5 top-5 rounded-sm bg-[#d7ff3f] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-black">
                      Featured Story
                    </span>
                  </div>

                  <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
                    <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em]">
                      <span className="flex items-center gap-1.5 text-[#d7ff3f]">
                        <Tag className="h-3 w-3" />
                        {featured.category || "News"}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-white/25" />

                      <span className="flex items-center gap-1.5 text-white/35">
                        <Calendar className="h-3 w-3" />
                        {featured.date || "Tournament Update"}
                      </span>
                    </div>

                    <h2 className="text-2xl font-black uppercase leading-tight tracking-tight transition-colors group-hover:text-[#d7ff3f] sm:text-3xl lg:text-4xl">
                      {featured.title}
                    </h2>

                    {featured.excerpt && (
                      <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/45">
                        {featured.excerpt}
                      </p>
                    )}

                    <div className="mt-8 flex items-center gap-3 text-xs font-black uppercase tracking-[0.15em] text-[#d7ff3f]">
                      Read Story
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* NEWS GRID */}
            {remainingNews.length > 0 && (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {remainingNews.map((item, index) => (
                    <motion.div
                      key={item.slug || `${item.title}-${index}`}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{
                        duration: 0.3,
                        delay: Math.min(index * 0.04, 0.2),
                      }}
                    >
                      <Link
                        href={`/news/${item.slug}`}
                        className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-[#d7ff3f]/30 hover:bg-white/[0.04]"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.04]">
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.title || "Tournament news"}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          )}

                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />

                          <span className="absolute left-4 top-4 rounded-sm border border-white/15 bg-black/60 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm">
                            {item.category || "News"}
                          </span>
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                          <div className="mb-3 flex items-center gap-1.5 text-[10px] font-semibold text-white/35">
                            <Calendar className="h-3 w-3" />
                            {item.date || "Tournament Update"}
                          </div>

                          <h3 className="line-clamp-3 text-lg font-extrabold uppercase leading-snug tracking-tight text-white/85 transition-colors group-hover:text-[#d7ff3f]">
                            {item.title}
                          </h3>

                          {item.excerpt && (
                            <p className="mt-3 line-clamp-2 text-xs leading-5 text-white/40">
                              {item.excerpt}
                            </p>
                          )}

                          <div className="mt-auto flex items-center justify-between border-t border-white/[0.07] pt-4 mt-5">
                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                              Read Article
                            </span>
                            <ArrowUpRight className="h-4 w-4 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d7ff3f]" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}

            {/* LOAD MORE */}
            {visible < filtered.length && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setVisible((current) => current + 3)}
                  className="group flex items-center gap-3 rounded-md border border-white/15 px-6 py-3.5 text-xs font-black uppercase tracking-[0.15em] text-white/70 transition-all hover:border-[#d7ff3f] hover:bg-[#d7ff3f] hover:text-black"
                >
                  Load More Stories
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </div>
            )}

            <div className="mt-12 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
              Showing {Math.min(visible, filtered.length)} of {filtered.length}{" "}
              stories
            </div>
          </>
        )}

        {/* EMPTY STATE */}
        {!loading && !error && filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-6 py-20 text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
              <Newspaper className="h-6 w-6 text-white/30" />
            </div>

            <h2 className="mt-6 text-xl font-black uppercase tracking-tight">
              No Stories Found
            </h2>

            <p className="mt-2 text-sm text-white/40">
              There are no articles in this category yet.
            </p>

            {filter !== "All" && (
              <button
                onClick={() => {
                  setFilter("All");
                  setVisible(6);
                }}
                className="mt-6 rounded-md bg-[#d7ff3f] px-5 py-3 text-xs font-black uppercase tracking-wider text-black transition hover:bg-white"
              >
                View All Stories
              </button>
            )}
          </motion.div>
        )}
      </div>
    </main>
  );
}