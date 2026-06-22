"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";

export default function CinematicFilms() {
  const [isOpen, setIsOpen] = useState(false);

  // High quality sample luxury wedding film on YouTube
  const videoUrl = "https://www.youtube.com/embed/5F_C1z7c6m0?autoplay=1&mute=0";

  return (
    <section id="films" className="relative py-32 bg-luxury-dark overflow-hidden">
      {/* Background Image / Thumbnail with deep dark overlay and Ken Burns movement */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            x: [0, 30, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="w-[110%] h-[110%] absolute -left-[5%] -top-[5%]"
        >
          <Image
            src="/images/detail_decor.png"
            alt="Luxury reception cinematic capture"
            fill
            className="object-cover object-center brightness-[0.25]"
          />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-luxury-bg flex flex-col items-center">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-3 mb-6"
        >
          <span className="w-8 h-[1px] bg-luxury-gold" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-luxury-gold font-sans font-semibold">
            MOTION PICTURES
          </span>
          <span className="w-8 h-[1px] bg-luxury-gold" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif font-light text-4xl sm:text-5xl md:text-6xl text-luxury-bg tracking-[0.03em] mb-6"
        >
          Cinematic Wedding Films
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans font-light text-sm text-luxury-sec max-w-xl mb-12 leading-relaxed"
        >
          We capture the rhythm, the sighs, the laughter, and the tears in motion. High-definition films that feel like independent cinema.
        </motion.p>

        {/* Floating Play Button with Ripples */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() => setIsOpen(true)}
          className="relative w-24 h-24 flex items-center justify-center rounded-full bg-luxury-gold text-luxury-dark shadow-xl hover:bg-luxury-bg hover:text-luxury-gold hover:scale-105 transition-all duration-500 cursor-pointer"
        >
          {/* Animated Gold Waves */}
          <span className="absolute inset-0 rounded-full bg-luxury-gold/30 animate-ping" />
          <span className="absolute -inset-4 rounded-full border border-luxury-gold/40 animate-[spin_10s_linear_infinite]" />
          
          <Play size={28} className="translate-x-[2px]" />
        </motion.button>
      </div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-luxury-dark/95 z-50 flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-luxury-bg hover:text-luxury-gold transition-colors p-2 z-55 bg-luxury-dark/50 rounded-full"
              aria-label="Close video player"
            >
              <X size={30} />
            </button>

            {/* Scale Video Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-5xl aspect-video bg-black border border-luxury-border shadow-2xl relative overflow-hidden"
            >
              <video
                src="/videos/wedding.mp4"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
