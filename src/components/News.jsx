"use client";
import { motion } from "framer-motion";

export default function News() {
  const news = [
    {
      title: "EVOS vs RRQ Ends in Intense Battle",
      desc: "A thrilling match between EVOS and RRQ ends with a surprising comeback.",
      date: "25 Mar 2026",
      image: "/news/news1.jpg",
    },
    {
      title: "ONIC Secures Semi Final Spot",
      desc: "ONIC dominates the quarter finals and advances to the next stage.",
      date: "24 Mar 2026",
      image: "/news/news2.jpg",
    },
    {
      title: "Tournament Prize Pool Increased",
      desc: "Organizers officially announced an increase in the total prize pool.",
      date: "23 Mar 2026",
      image: "/news/news3.jpg",
    },
  ];

  return (
    <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 🔹 Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Latest News
            </h2>
            <p className="text-white/60 mt-2">
              Stay updated with tournament highlights
            </p>
          </div>

          <button className="text-sm border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10 transition">
            View All
          </button>
        </div>

        {/* 🔥 News Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                group
                bg-white/5 border border-white/10
                rounded-2xl overflow-hidden
                hover:bg-white/10 transition
              "
            >
              
              {/* 🖼️ Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* 📝 Content */}
              <div className="p-5">
                
                {/* Date */}
                <p className="text-xs text-white/40 mb-2">
                  {item.date}
                </p>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-white/60">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* 🔻 Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}