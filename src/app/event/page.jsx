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

export default function EventPage() {
  return (
    <section className="min-h-screen py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10">Events</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, i) => {
            const isClickable = event.status === "FINISHED";

            const Card = (
              <motion.div
                whileHover={isClickable ? { scale: 1.02 } : {}}
                className={`
                  relative overflow-hidden rounded-2xl border border-white/10
                  ${isClickable ? "cursor-pointer" : "cursor-not-allowed opacity-70"}
                `}
              >
                {/* IMAGE */}
                <img
                  src={event.image}
                  className="w-full h-52 object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-0 p-6 w-full">

                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-white/50">{event.year}</span>

                    {/* STATUS BADGE */}
                    <span
                      className={`
                        px-3 py-1 rounded-full font-semibold
                        ${
                          event.status === "FINISHED"
                            ? "bg-green-500/20 text-green-400"
                            : event.status === "ONGOING"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-white/10 text-white/50"
                        }
                      `}
                    >
                      {event.status}
                    </span>
                  </div>

                  <h2 className="font-semibold">
                    {event.title}
                  </h2>

                </div>
              </motion.div>
            );

            return isClickable ? (
              <Link key={i} href={`/event/${event.slug}`}>
                {Card}
              </Link>
            ) : (
              <div key={i}>{Card}</div>
            );
          })}
        </div>

      </div>
    </section>
  );
}