"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  // ⏱️ TIME
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-GB", {
        timeZone: "Europe/Paris",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // 📜 SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/schedule", label: "Schedule" },
    { href: "/teams", label: "Teams" },
    { href: "/event", label: "Event" },
    { href: "/news", label: "News" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-3 md:py-4">

        {/* 🔹 LOGO */}
        <Link href="/" className="flex items-center">
          <motion.img
            src="/CT26.png"
            alt="Logo"
            className="h-8 md:h-10 w-auto"
            whileHover={{ rotate: 8, scale: 1.05 }}
          />
        </Link>

        {/* 🔹 MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition ${
                  active
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="activeLink"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-white rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* 🔹 RIGHT INFO (DESKTOP) */}
        <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
          <span className="flex items-center gap-1 text-red-500 text-xs font-semibold">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            LIVE
          </span>

          <span className="text-white/80 text-sm font-medium">
            {time} <span className="text-white/40">CEST</span>
          </span>
        </div>

        {/* 🔹 MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-5 space-y-4">

              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-lg transition ${
                      active
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* TIME */}
              <div className="pt-4 border-t border-white/10 flex justify-center">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full">

                  <span className="flex items-center gap-1 text-red-500 text-xs font-semibold">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    LIVE
                  </span>

                  <span className="text-white/70 text-sm">
                    {time} <span className="text-white/40">CEST</span>
                  </span>

                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}