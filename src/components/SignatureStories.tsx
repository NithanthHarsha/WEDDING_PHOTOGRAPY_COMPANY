"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
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
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  
  // Track scroll position of this container relative to viewport (start to end)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to horizontal translation (from 0% to -66.67% for 3 items)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.67%"]);

  // Update active index based on scroll progress to animate slide indicator dots (desktop)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.floor(latest * STORIES.length),
      STORIES.length - 1
    );
    setActiveIndex(index);
  });

  // Handle scroll event for mobile horizontal track
  const handleMobileScroll = () => {
    if (mobileTrackRef.current) {
      const scrollLeft = mobileTrackRef.current.scrollLeft;
      const width = mobileTrackRef.current.clientWidth;
      if (width > 0) {
        const index = Math.min(
          Math.round(scrollLeft / width),
          STORIES.length - 1
        );
        setMobileActiveIndex(index);
      }
    }
  };

  return (
    <section id="stories" className="relative bg-luxury-dark">
      
      {/* 1. DESKTOP VIEW: Full viewport sticky vertical-to-horizontal scrolling spreads */}
      <div ref={containerRef} className="hidden md:block relative h-[300vh]">
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
                    className="object-cover object-top brightness-[0.35]"
                  />
                </div>

                {/* Story Content Overlay */}
                <div className="relative z-10 max-w-5xl mx-auto px-12 w-full text-center text-luxury-bg flex flex-col justify-center items-center h-full">
                  
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
                  <h3 className="font-serif font-light text-6xl md:text-7xl lg:text-8xl tracking-[0.03em] mb-4">
                    {story.couple}
                  </h3>

                  {/* Location */}
                  <p className="font-serif italic text-xl text-luxury-sec mb-10">
                    {story.location}
                  </p>

                  {/* Testimonial Quote */}
                  <p className="font-serif font-light italic text-xl md:text-2xl text-luxury-bg/90 max-w-3xl leading-relaxed mb-12 border-t border-b border-luxury-border/20 py-8 px-6">
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
              const isActive = idx === activeIndex;
              return (
                <div
                  key={idx}
                  className="w-2.5 h-2.5 rounded-full border transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? "#C8B6A6" : "transparent",
                    borderColor: "#C8B6A6",
                    transform: isActive ? "scale(1.2)" : "scale(1)",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. MOBILE VIEW: Natural touch-swipe horizontal carousel (no sticky lock lag) */}
      <div className="block md:hidden relative w-full h-[85vh] min-h-[600px] overflow-hidden">
        <div
          ref={mobileTrackRef}
          onScroll={handleMobileScroll}
          className="flex w-full h-full overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
        >
          {STORIES.map((story) => (
            <div
              key={story.id}
              className="relative w-full h-full flex-shrink-0 snap-center flex items-center justify-center overflow-hidden"
            >
              {/* Background Image with Dark Tint */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={story.image}
                  alt={story.couple}
                  fill
                  priority
                  className="object-cover object-top brightness-[0.3]"
                />
              </div>

              {/* Story Content Overlay */}
              <div className="relative z-10 w-full px-6 text-center text-luxury-bg flex flex-col justify-center items-center h-full">
                {/* Accent line */}
                <div className="h-[1px] w-12 bg-luxury-gold mb-6" />

                <span className="text-[9px] tracking-[0.3em] uppercase text-luxury-gold font-sans font-semibold mb-3 block">
                  SIGNATURE STORIES
                </span>

                {/* Couple Names */}
                <h3 className="font-serif font-light text-4xl sm:text-5xl tracking-[0.02em] mb-3">
                  {story.couple}
                </h3>

                {/* Location */}
                <p className="font-serif italic text-sm text-luxury-sec mb-8">
                  {story.location}
                </p>

                {/* Testimonial Quote */}
                <p className="font-serif font-light italic text-sm sm:text-base text-luxury-bg/95 max-w-md leading-relaxed mb-8 border-t border-b border-luxury-border/10 py-6 px-4">
                  {story.quote}
                </p>

                {/* Subtitle / Chapter Name */}
                <p className="text-[9px] tracking-[0.2em] uppercase text-luxury-sec/60 font-sans font-light">
                  CHAPTER {story.id} &mdash; {story.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Swipe Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
          {STORIES.map((_, idx) => {
            const isActive = idx === mobileActiveIndex;
            return (
              <div
                key={idx}
                className="w-2 h-2 rounded-full border transition-all duration-300"
                style={{
                  backgroundColor: isActive ? "#C8B6A6" : "transparent",
                  borderColor: "#C8B6A6",
                  transform: isActive ? "scale(1.2)" : "scale(1)",
                }}
              />
            );
          })}
        </div>
      </div>

    </section>
  );
}
