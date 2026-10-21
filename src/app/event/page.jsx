"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const events = [
  {
    slug: "fifa-2022-1",
    title: "FIFA Tournament 2022 #1",
    year: "2022",
    status: "FINISHED",
    image: "/events/event1.jpg",
    winner: "Barcelona",
  },
  {
    slug: "fifa-2022-2",
    title: "FIFA Tournament 2022 #2",
    year: "2022",
    status: "FINISHED",
    image: "/events/event2.jpg",
    winner: "Real Madrid",
  },
  {
    slug: "fifa-2024",
    title: "FIFA Tournament 2024",
    year: "2024",
    status: "FINISHED",
    image: "/events/event3.jpg",
    winner: "Man City",
  },
  {
    slug: "fifa-2025",
    title: "FIFA Tournament 2025",
    year: "2025",
    status: "FINISHED",
    image: "/events/event4.jpg",
    winner: "Bayern",
  },
  {
    slug: "fifa-2026",
    title: "FIFA Champions Tournament 2026",
    year: "2026",
    status: "ONGOING",
    image: "/events/event5.jpg",
    winner: null,
  },
  {
    slug: "fifa-2027",
    title: "FIFA Tournament 2027",
    year: "2027",
    status: "SOON",
    image: "/events/event6.jpg",
    winner: null,
  },
];

const statusStyles = {
  FINISHED: "border-white/10 bg-white/[0.06] text-white/50",
  ONGOING: "border-[#d7ff3f]/20 bg-[#d7ff3f]/10 text-[#d7ff3f]",
  SOON: "border-white/10 bg-white/[0.04] text-white/40",
};

const statusLabels = {
  FINISHED: "FINISHED",
  ONGOING: "ONGOING",
  SOON: "COMING SOON",
};

export default function EventPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black py-20 text-white md:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#d7ff3f]/[0.035] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#d7ff3f]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d7ff3f]">
              Tournament Archive
            </span>
          </div>

          <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl">
            Our <span className="text-[#d7ff3f]">Events.</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/45 md:text-base">
            Explore past tournaments, relive the competition, and discover
            what&apos;s next.
          </p>

          {/* Event count */}
          <div className="mt-8 flex items-center gap-3">
            <span className="text-3xl font-black tabular-nums text-[#d7ff3f]">
              {String(events.length).padStart(2, "0")}
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              Tournaments
            </span>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mb-8 h-px bg-white/10" />

        {/* Events grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => {
            const isClickable = event.status === "FINISHED";

            const cardContent = (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: (index % 3) * 0.07,
                }}
                whileHover={isClickable ? { y: -5 } : undefined}
                className={`group relative h-full overflow-hidden rounded-xl border bg-[#080808] transition-colors duration-300 ${
                  isClickable
                    ? "border-white/10 hover:border-[#d7ff3f]/40"
                    : "cursor-default border-white/[0.07]"
                }`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-[#101010] sm:h-56">
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    className={`h-full w-full object-cover transition-transform duration-700 ${
                      isClickable
                        ? "group-hover:scale-105"
                        : "opacity-60"
                    }`}
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/20 to-black/10" />

                  {/* Hover accent */}
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#d7ff3f] transition-all duration-500 group-hover:w-full" />

                  {/* Year */}
                  <div className="absolute left-5 top-5">
                    <span className="text-xs font-black tracking-[0.2em] text-white drop-shadow-md">
                      {event.year}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="absolute right-4 top-4">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[9px] font-bold tracking-[0.12em] backdrop-blur-md ${
                        statusStyles[event.status] || statusStyles.SOON
                      }`}
                    >
                      {event.status === "ONGOING" && (
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d7ff3f] opacity-60" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#d7ff3f]" />
                        </span>
                      )}

                      {statusLabels[event.status] || event.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative px-5 pb-5 pt-2 sm:px-6 sm:pb-6">
                  <h2
                    className={`text-lg font-bold leading-snug tracking-tight transition-colors duration-300 sm:text-xl ${
                      isClickable
                        ? "text-white/85 group-hover:text-white"
                        : "text-white/60"
                    }`}
                  >
                    {event.title}
                  </h2>

                  {/* Winner */}
                  {event.winner && (
                    <div className="mt-5 flex items-center gap-3 border-t border-white/[0.08] pt-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#d7ff3f]/15 bg-[#d7ff3f]/[0.07]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-[#d7ff3f]"
                          aria-hidden="true"
                        >
                          <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
                          <path d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4" />
                        </svg>
                      </div>

                      <div className="min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                          Tournament Winner
                        </p>

                        <p className="mt-1 truncate text-sm font-semibold text-white/85">
                          {event.winner}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Ongoing state */}
                  {event.status === "ONGOING" && (
                    <div className="mt-5 flex items-center gap-3 border-t border-white/[0.08] pt-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#d7ff3f]" />

                      <p className="text-xs font-medium text-white/45">
                        Tournament in progress
                      </p>
                    </div>
                  )}

                  {/* Upcoming state */}
                  {event.status === "SOON" && (
                    <div className="mt-5 flex items-center gap-3 border-t border-white/[0.08] pt-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/25" />

                      <p className="text-xs font-medium text-white/35">
                        More details coming soon
                      </p>
                    </div>
                  )}

                  {/* View event */}
                  {isClickable && (
                    <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 transition-colors group-hover:text-[#d7ff3f]">
                        Explore Event
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#d7ff3f]"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.article>
            );

            return isClickable ? (
              <Link
                key={event.slug}
                href={`/event/${event.slug}`}
                className="block h-full rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#d7ff3f]"
                aria-label={`Explore ${event.title}`}
              >
                {cardContent}
              </Link>
            ) : (
              <div key={event.slug} className="h-full">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}