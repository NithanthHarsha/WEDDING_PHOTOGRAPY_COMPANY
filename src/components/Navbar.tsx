"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Stories", href: "#stories" },
  { label: "Experience", href: "#experience" },
  { label: "Destinations", href: "#destinations" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-luxury-bg/85 backdrop-blur-md border-b border-luxury-border/30 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Monogram / Logo */}
          <a
            href="#"
            className="font-serif text-xl md:text-2xl font-light tracking-[0.2em] text-luxury-dark hover:opacity-85 transition-opacity"
          >
            AURA & LIGHT
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-luxury-muted hover:text-luxury-dark transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Inquire Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-block px-6 py-2.5 text-[10px] tracking-[0.25em] font-sans uppercase text-luxury-dark border border-luxury-gold hover:bg-luxury-gold hover:text-luxury-bg transition-all duration-500 rounded-none bg-transparent"
            >
              Inquire Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-luxury-dark focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-luxury-bg z-40 lg:hidden flex flex-col justify-center px-12 py-24"
          >
            <div className="flex flex-col space-y-8 font-serif text-3xl font-light tracking-wide text-luxury-dark">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-luxury-gold transition-colors py-2 border-b border-luxury-border/30"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.08 }}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-block text-center mt-6 px-6 py-4 text-xs tracking-[0.25em] font-sans uppercase text-luxury-bg bg-luxury-dark hover:bg-luxury-gold transition-colors"
              >
                Inquire Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
