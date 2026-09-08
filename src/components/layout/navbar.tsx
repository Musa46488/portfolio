"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Container, Button } from "../ui";
import { navLinks, site } from "../../data";
import { useActiveSection } from "@/src/hooks/useactivesection";
import { cn } from "../../lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(
    navLinks.map((l) => l.href.replace("#", "")),
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-bg/70 backdrop-blur-lg"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-text-primary"
        >
          MZK
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative font-body text-sm text-text-secondary transition-colors hover:text-text-primary",
                  isActive && "text-text-primary",
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-accent-light"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button
            href="#contact"
            variant="secondary"
            className="px-5! py-2.5! text-xs"
          >
            Let&rsquo;s Talk
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative h-4 w-6">
            <motion.span
              className="absolute left-0 top-0 h-px w-6 bg-text-primary"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
            />
            <motion.span
              className="absolute left-0 top-1.75 h-px w-6 bg-text-primary"
              animate={{ opacity: menuOpen ? 0 : 1 }}
            />
            <motion.span
              className="absolute left-0 top-3.5 h-px w-6 bg-text-primary"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
            />
          </div>
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 flex flex-col justify-between bg-bg px-6 pb-10 pt-8 md:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 * i,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-b border-border py-5 font-display text-4xl text-text-primary"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <Button href="#contact" onClick={() => setMenuOpen(false)}>
                Let&rsquo;s Talk
              </Button>
              <p className="font-body text-sm text-text-secondary">
                {site.email}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
