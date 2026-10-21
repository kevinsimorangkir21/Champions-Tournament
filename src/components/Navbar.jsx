"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/schedule", label: "SCHEDULE" },
  { href: "/teams", label: "TEAMS" },
  { href: "/event", label: "EVENT" },
  { href: "/news", label: "NEWS" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  // WIB CLOCK
  useEffect(() => {
    const updateTime = () => {
      const formatted = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());

      setTime(formatted);
    };

    updateTime();

    const interval = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(interval);
  }, []);

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // CLOSE MENU WHEN ROUTE CHANGES
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // ACTIVE ROUTE
  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9999] isolate border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#101010]/95 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-white/5 bg-[#101010]"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* LOGO */}
        <Link
          href="/"
          aria-label="Champions Tournament home"
          className="relative z-10 flex shrink-0 items-center"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/CT26.png"
              alt="Champions Tournament 2026"
              width={120}
              height={40}
              priority
              className="h-9 w-auto object-contain"
            />
          </motion.div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden h-full items-center gap-7 md:flex lg:gap-10"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`group relative flex h-full items-center text-[11px] font-bold tracking-[0.14em] transition-colors duration-200 lg:text-xs ${
                  active
                    ? "text-white"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {link.label}

                {/* ACTIVE INDICATOR */}
                <motion.span
                  initial={false}
                  animate={{
                    scaleX: active ? 1 : 0,
                    opacity: active ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-[#d7ff3f]"
                />

                {/* HOVER INDICATOR */}
                {!active && (
                  <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-white/30 transition-transform duration-200 group-hover:scale-x-100" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* WIB CLOCK */}
        <div className="hidden items-center gap-3 border-l border-white/10 pl-6 lg:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d7ff3f] opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d7ff3f]" />
          </span>

          <div className="flex flex-col gap-0.5">
            <span className="text-[9px] font-bold tracking-[0.2em] text-white/40">
              TOURNAMENT TIME
            </span>

            <span className="font-mono text-xs font-semibold tabular-nums text-white">
              {time || "--:--:--"}
              <span className="ml-1.5 text-[#d7ff3f]">WIB</span>
            </span>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center border border-white/10 text-white transition-colors hover:border-[#d7ff3f]/50 hover:text-[#d7ff3f] md:hidden"
        >
          <span className="text-xl leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-[#101010] md:hidden"
          >
            <div className="mx-auto max-w-[1440px] px-5 py-5 sm:px-8">
              {/* MOBILE HEADER */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/35">
                  NAVIGATION
                </span>

                <span className="font-mono text-xs text-white/50">
                  {time || "--:--:--"} WIB
                </span>
              </div>

              {/* MOBILE LINKS */}
              <div className="flex flex-col">
                {navLinks.map((link, index) => {
                  const active = isActive(link.href);

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: index * 0.035,
                      }}
                    >
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between border-b border-white/[0.07] py-4 text-sm font-bold tracking-[0.12em] transition-colors ${
                          active
                            ? "text-[#d7ff3f]"
                            : "text-white/65 hover:text-white"
                        }`}
                      >
                        <span>{link.label}</span>

                        <span className="text-lg" aria-hidden="true">
                          {active ? "↗" : "→"}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* MOBILE FOOTER */}
              <div className="mt-5 flex items-center gap-2 text-[10px] font-medium tracking-[0.15em] text-white/35">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d7ff3f]" />
                CHAMPIONS TOURNAMENT 2026
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}