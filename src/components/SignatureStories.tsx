"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const STORIES = [
  {
    id: 1,
    title: "A Royal Heritage",
    couple: "Vikram & Priya",
    location: "Umaid Bhawan Palace, Rajasthan",
    quote: "“The grandeur of the palace was nothing compared to the warmth of the looks they shared.”",
    image: "/images/traditional_wedding.png",
  },
  {
    id: 2,
    title: "Mist & Promises",
    couple: "Arjun & Sneha",
    location: "Munnar Tea Estates, Kerala",
    quote: "“They stood hand-in-hand as the morning fog wrapped their vows in a quiet embrace.”",
    image: "/images/hero_large.png",
  },
  {
    id: 3,
    title: "Venetian Romance",
    couple: "Matteo & Sofia",
    location: "Grand Canal, Venice, Italy",
    quote: "“Every canal, bridge, and historic palazzo seemed to exist only to frame their story.”",
    image: "/images/italy_wedding.png",
  },
];

export default function SignatureStories() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Map scroll progress to horizontal translation (from 0% to -66.6% for 3 items)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

  return (
    <div id="stories" ref={containerRef} className="relative h-[300vh] bg-luxury-dark">
      {/* Sticky screen container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        
        {/* Horizontal scroll track with GPU acceleration */}
        <motion.div style={{ x, willChange: "transform" }} className="flex w-[300vw] h-full">
          {STORIES.map((story) => (
            <div
              key={story.id}
              className="relative w-screen h-full flex-shrink-0 flex items-center justify-center overflow-hidden"
            >
              {/* Background Image with Dark Tint */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={story.image}
                  alt={story.couple}
                  fill
                  priority
                  className="object-cover object-top brightness-[0.4]"
                />
              </div>

              {/* Story Content Overlay */}
              <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 w-full text-center text-luxury-bg flex flex-col justify-center items-center h-full">
                
                {/* Accent line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-[1px] bg-luxury-gold mb-8"
                />

                <span className="text-[10px] tracking-[0.4em] uppercase text-luxury-gold font-sans font-semibold mb-4 block">
                  SIGNATURE WEDDING STORIES
                </span>

                {/* Couple Names */}
                <h3 className="font-serif font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.03em] mb-4">
                  {story.couple}
                </h3>

                {/* Location */}
                <p className="font-serif italic text-lg sm:text-xl text-luxury-sec mb-10">
                  {story.location}
                </p>

                {/* Testimonial Quote */}
                <p className="font-serif font-light italic text-base sm:text-xl md:text-2xl text-luxury-bg/90 max-w-3xl leading-relaxed mb-12 border-t border-b border-luxury-border/20 py-8 px-6">
                  {story.quote}
                </p>

                {/* Subtitle / Chapter Name */}
                <p className="text-[10px] tracking-[0.3em] uppercase text-luxury-sec/60 font-sans font-light">
                  CHAPTER {story.id} &mdash; {story.title}
                </p>

              </div>
            </div>
          ))}
        </motion.div>

        {/* Dynamic Indicator Dots in bottom corner */}
        <div className="absolute bottom-12 right-12 flex space-x-3 z-30">
          {STORIES.map((_, idx) => {
            return (
              <div
                key={idx}
                className="w-2 h-2 rounded-full border border-luxury-gold/50 bg-transparent transition-all duration-300"
                style={{
                  borderColor: "#C8B6A6",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
