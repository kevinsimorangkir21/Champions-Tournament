"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  // ⏱️ TIME WIB
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-GB", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ❗ CLOSE MENU ON ROUTE CHANGE
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/schedule", label: "Schedule" },
    { href: "/teams", label: "Teams" },
    { href: "/event", label: "Event" },
    { href: "/news", label: "News" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9999] isolate transition-all duration-300
      ${
        scrolled
          ? "bg-black shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
          : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-3 md:py-4">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src="/CT26.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </motion.div>
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition ${
                  active
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="activeLink"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-white"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT INFO */}
        <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full border border-white/10">
          <span className="flex items-center gap-1 text-red-500 text-xs font-semibold">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            LIVE
          </span>

          <span className="text-white text-sm font-medium">
            {time} <span className="text-white/50">WIB</span>
          </span>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/10 text-white"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-5 space-y-4">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg ${
                      active
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}