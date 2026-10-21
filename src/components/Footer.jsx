"use client";

import Link from "next/link";
import {
  Twitter,
  Instagram,
  Youtube,
  Twitch,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Schedule", href: "/schedule" },
    { name: "Teams", href: "/teams" },
    { name: "Event", href: "/event" },
    { name: "News", href: "/news" },
  ];

  const socials = [
    { name: "Twitter", icon: Twitter, url: "#" },
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "YouTube", icon: Youtube, url: "#" },
    { name: "Twitch", icon: Twitch, url: "#" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] pt-16 pb-8 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#d7ff3f]/[0.025] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-3 md:gap-16 md:px-10">
        {/* Brand */}
        <div>
          <Link href="/" className="mb-5 inline-flex items-center">
            <img
              src="/CT26.png"
              alt="Champions Tournament 2026"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <p className="max-w-sm text-sm leading-7 text-white/50">
            The ultimate competitive tournament platform. Compete with top
            teams, climb the bracket, and claim your victory.
          </p>

          <p className="mt-6 text-xs text-white/30">
            © 2026 Champions Tournament. All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-6 bg-[#d7ff3f]" />

            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">
              Navigation
            </h4>
          </div>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-white/50 transition-colors duration-300 hover:text-[#d7ff3f]"
                >
                  <span className="h-1 w-1 bg-white/20 transition-colors group-hover:bg-[#d7ff3f]" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-6 bg-[#d7ff3f]" />

            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">
              Follow Us
            </h4>
          </div>

          <p className="mb-5 max-w-xs text-sm leading-6 text-white/50">
            Stay updated with the latest matches, tournament highlights, and
            announcements.
          </p>

          <div className="flex flex-wrap gap-3">
            {socials.map(({ name, icon: Icon, url }) => (
              <a
                key={name}
                href={url}
                aria-label={name}
                target={url === "#" ? undefined : "_blank"}
                rel={url === "#" ? undefined : "noopener noreferrer"}
                className="group flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.02] text-white/50 transition-all duration-300 hover:border-[#d7ff3f]/50 hover:bg-[#d7ff3f] hover:text-black"
              >
                <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 mx-auto mt-14 max-w-7xl px-6 md:px-10">
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
            Built for competitive gaming
          </p>

          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-[#d7ff3f]"
          >
            Back to top
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}