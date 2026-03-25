"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroInstagram() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/instagram")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 3)));
  }, []);

  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10">
          Latest Highlights
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 rounded-2xl overflow-hidden"
            >
              <img
                src={post.image}
                className="w-full h-60 object-cover"
              />

              <div className="p-4">
                <p className="text-sm text-white/80 line-clamp-2">
                  {post.caption}
                </p>

                <div className="flex gap-4 mt-2 text-xs text-white/50">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}