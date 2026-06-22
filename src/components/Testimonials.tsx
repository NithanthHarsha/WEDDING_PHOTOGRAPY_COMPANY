"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Aura & Light did not just take photos; they painted our wedding with light. Their presence was calm, and looking back at the archives, we feel every ounce of raw emotion. The best decision we made.",
    author: "Anjali & Devan",
    style: "Traditional Kerala & Reception",
    venue: "Kochi, India",
  },
  {
    id: 2,
    quote: "We flew the team to Florence for our destination wedding, and they exceeded every dream. They have an editorial eye that matches high-fashion magazine spreads. Every single frame is an absolute art piece.",
    author: "Sofia & Matteo",
    style: "Vogue Editorial Wedding",
    venue: "Florence, Italy",
  },
  {
    id: 3,
    quote: "The cinematography is breathtaking. Our wedding film feels like independent cinema. From the audio layers to the color grading, they captured the pure, honest soul of our celebrations.",
    author: "Rhea & Kabir",
    style: "Cinematic Beach Wedding",
    venue: "Goa Beachfront",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-luxury-bg border-t border-luxury-border/30 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative">
        
        {/* Decorative Quote Icon */}
        <div className="font-serif text-[120px] text-luxury-gold/10 absolute -top-16 left-4 pointer-events-none select-none">
          “
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[320px] sm:min-h-[250px] flex flex-col justify-center text-center">
          
          <div className="mb-4 flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-luxury-gold text-luxury-gold" />
            ))}
          </div>

          {/* Testimonial Text */}
          <div className="relative overflow-hidden w-full">
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={item.id}
                className={`transition-all duration-1000 ease-in-out ${
                  idx === current
                    ? "opacity-100 translate-y-0 relative"
                    : "opacity-0 absolute -translate-y-8 pointer-events-none"
                }`}
              >
                <p className="font-serif italic font-light text-lg sm:text-2xl md:text-3xl text-luxury-dark leading-relaxed mb-8 px-4">
                  {item.quote}
                </p>

                {/* Author Info */}
                <div>
                  <h4 className="font-sans font-medium text-xs tracking-[0.2em] uppercase text-luxury-dark mb-1">
                    {item.author}
                  </h4>
                  <p className="font-sans font-light text-[10px] tracking-wider text-luxury-muted">
                    {item.style} &mdash; {item.venue}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slider controls */}
          <div className="flex justify-center space-x-6 mt-12">
            <button
              onClick={handlePrev}
              className="w-10 h-10 border border-luxury-border flex items-center justify-center text-luxury-dark hover:bg-luxury-gold hover:text-luxury-bg hover:border-luxury-gold transition-colors duration-500 rounded-none cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 border border-luxury-border flex items-center justify-center text-luxury-dark hover:bg-luxury-gold hover:text-luxury-bg hover:border-luxury-gold transition-colors duration-500 rounded-none cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-20 pt-10 border-t border-luxury-border/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <span className="font-serif text-sm font-semibold text-luxury-dark">Google Verified Partner</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
            <p className="font-sans font-light text-[11px] text-luxury-muted mt-1">
              Refined archival and editorial feedback from top wedding portals.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <div className="font-serif text-lg font-light text-luxury-dark">5.0 / 5.0 Rating</div>
              <div className="font-sans text-[9px] tracking-widest text-luxury-muted uppercase">120+ Client Audits</div>
            </div>
            <div className="flex space-x-0.5 bg-luxury-sec/25 p-3 border border-luxury-border">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-luxury-gold text-luxury-gold" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
