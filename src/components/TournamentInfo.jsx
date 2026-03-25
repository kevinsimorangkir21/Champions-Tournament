"use client";
import { motion } from "framer-motion";

export default function TournamentInfo() {
  const info = [
    {
      title: "Prize Pool",
      value: "$5,000",
      icon: "🏆",
    },
    {
      title: "Start Date",
      value: "25 Mar 2026",
      icon: "📅",
    },
    {
      title: "Teams",
      value: "32 Teams",
      icon: "👥",
    },
    {
      title: "Format",
      value: "Single Elimination (BO3)",
      icon: "🎮",
    },
  ];

  return (
    <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* 🔹 Content */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tournament Information
        </h2>

        <p className="text-white/60 max-w-2xl mx-auto mb-12">
          Everything you need to know before joining the competition.
        </p>

        {/* 🔥 Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {info.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-white/5 border border-white/10
                rounded-2xl p-6
                backdrop-blur-md
                hover:bg-white/10
                hover:scale-[1.03]
                transition duration-300
              "
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{item.icon}</div>

              {/* Value */}
              <h3 className="text-xl font-semibold">
                {item.value}
              </h3>

              {/* Label */}
              <p className="text-white/60 text-sm mt-1">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* 🔻 Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}