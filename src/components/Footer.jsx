"use client";
import Link from "next/link";
import { Twitter, Instagram, Youtube, Twitch } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white/70 pt-16 pb-10">

      {/* 🔥 BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-10 relative z-10">

        {/* 🔹 BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/CT26.png" alt="Tournament" className="w-30 h-9" />
          </div>

          <p className="text-sm leading-relaxed text-white/60">
            The ultimate esports competition platform. Compete with top teams,
            climb the bracket, and claim your victory.
          </p>

          <p className="text-sm mt-4 text-white/40">
            © 2026 Tournament. All rights reserved.
          </p>
        </div>

        {/* 🔹 NAVIGATION */}
        <div>
          <h4 className="font-semibold text-white mb-3">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "Schedule", href: "/schedule" },
              { name: "Teams", href: "/teams" },
              { name: "Event", href: "/event" },
              { name: "News", href: "/news" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-white/60 hover:text-white transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔹 SOCIAL */}
        <div>
          <h4 className="font-semibold text-white mb-3">
            Follow Us
          </h4>
          <p className="text-sm mb-4 text-white/50">
            Stay updated with the latest matches and announcements.
          </p>

          <div className="flex gap-4">
            {[
              { icon: Twitter, url: "#" },
              { icon: Instagram, url: "#" },
              { icon: Youtube, url: "#" },
              { icon: Twitch, url: "#" },
            ].map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-9 h-9 flex items-center justify-center
                  rounded-full border border-white/10
                  text-white/60
                  hover:bg-white/10 hover:text-white
                  hover:scale-110
                  transition-all duration-300
                "
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* 🔻 BOTTOM */}
      <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-white/40 relative z-10">
        Built for competitive gaming ⚔️
      </div>

    </footer>
  );
}