"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-luxury-bg pt-28 pb-16 flex items-center overflow-hidden">
      {/* Background Subtle Signature Emblem Overlay */}
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] opacity-5 pointer-events-none select-none animate-[spin_100s_linear_infinite]">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke="#C8B6A6" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="75" stroke="#C8B6A6" strokeWidth="0.75" strokeDasharray="4 4" />
          <path d="M100 10v180M10 100h180" stroke="#C8B6A6" strokeWidth="0.5" />
          <text x="100" y="94" textAnchor="middle" fill="#C8B6A6" className="font-serif text-[10px] tracking-[0.3em]">EST. 2016</text>
          <text x="100" y="112" textAnchor="middle" fill="#C8B6A6" className="font-serif text-[18px] tracking-[0.25em] font-light">A & L</text>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Heading and Description */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          {/* Subtle Accent Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-luxury-gold" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold font-sans font-semibold">
              KERALA & DESTINATIONS WORLDWIDE
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="font-serif font-light text-[38px] sm:text-[48px] md:text-[56px] lg:text-[62px] leading-[1.1] text-luxury-dark tracking-[0.02em] mb-8">
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Editorial Wedding
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1 italic font-normal text-luxury-gold">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Photography
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                With Soul.
              </motion.span>
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base font-sans font-light leading-relaxed text-luxury-muted max-w-lg mb-10"
          >
            Crafting premium visual narratives for high-end celebrations. Inspired by fashion magazines, cinema, and the raw, timeless elegance of real connections.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 sm:gap-6"
          >
            <a
              href="#portfolio"
              className="px-8 py-3.5 text-xs font-sans uppercase tracking-[0.2em] bg-luxury-dark text-luxury-bg hover:bg-luxury-gold transition-colors duration-500 rounded-none shadow-sm"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 text-xs font-sans uppercase tracking-[0.2em] border border-luxury-border text-luxury-dark hover:bg-luxury-sec/30 transition-colors duration-500 rounded-none"
            >
              Check Availability
            </a>
          </motion.div>
        </div>

        {/* Right Column: Asymmetric Image Grid */}
        <div className="lg:col-span-6 relative h-[500px] sm:h-[600px] md:h-[650px] w-full flex items-center justify-center">
          
          {/* Main Large Portrait (Image 1) */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[15%] w-[60%] h-[75%] overflow-hidden border border-luxury-border shadow-md z-10"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              <Image
                src="/images/hero_large.png"
                alt="Editorial Wedding Couple hug"
                fill
                priority
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="object-cover object-center scale-[1.02]"
              />
            </motion.div>
          </motion.div>

          {/* Floating Medium Portrait (Image 2) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-[8%] w-[40%] h-[45%] overflow-hidden border border-luxury-border shadow-lg z-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              <Image
                src="/images/hero_medium.png"
                alt="Close-up fine art wedding gaze"
                fill
                priority
                sizes="(max-width: 1024px) 40vw, 20vw"
                className="object-cover object-center scale-[1.02]"
              />
            </motion.div>
          </motion.div>

          {/* Floating Small Artistic Portrait (Image 3) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 bottom-[5%] w-[35%] h-[40%] overflow-hidden border border-luxury-border shadow-lg z-20"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              <Image
                src="/images/hero_artistic.png"
                alt="Bride veil waving artistic portrait"
                fill
                priority
                sizes="(max-width: 1024px) 35vw, 15vw"
                className="object-cover object-center scale-[1.02]"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
