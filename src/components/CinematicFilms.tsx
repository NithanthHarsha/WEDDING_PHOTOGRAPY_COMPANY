"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CinematicFilms() {
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
      </div>
    </section>
  );
}
