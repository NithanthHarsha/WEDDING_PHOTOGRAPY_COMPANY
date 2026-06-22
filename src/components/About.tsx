"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

// Helper component for counting up numbers
function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const end = value;
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.min(Math.max(Math.floor(totalMiliseconds / end), 10), 100);
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, value, duration]);

  return <span ref={ref}>{count}</span>;
}

const TIMELINE = [
  { year: "2016", title: "The Genesis", desc: "Founded Aura & Light in Kerala, driven by a vision to capture the silent language of love." },
  { year: "2019", title: "Crossing Borders", desc: "Shot our first international destination wedding in Florence, Italy, establishing a global presence." },
  { year: "2022", title: "Editorial Recognition", desc: "Featured in leading luxury magazines including Vogue Weddings and Harper's Bazaar." },
  { year: "2025", title: "A Decade of Light", desc: "Recognized as a leading light in candid wedding photography, expanding our legacy of timeless visuals." },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-luxury-bg border-t border-luxury-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Luxury Overlay */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] w-full overflow-hidden border border-luxury-border bg-luxury-sec/30"
            >
              <Image
                src="/images/photographer.png"
                alt="Photographer Portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
              />
            </motion.div>
            
            {/* Framed Offset Accent Border */}
            <div className="absolute inset-4 -right-4 -bottom-4 border border-luxury-gold/30 -z-10" />
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] tracking-[0.35em] uppercase text-luxury-gold font-sans font-semibold mb-3 block">
                THE ARTIST STATEMENT
              </span>
              <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl text-luxury-dark leading-tight mb-8">
                Capturing the Poetry of <br />
                <span className="italic font-normal text-luxury-gold">Unspoken Promises</span>
              </h2>
              
              <div className="space-y-6 text-sm font-sans font-light text-luxury-muted leading-relaxed max-w-2xl">
                <p>
                  We believe that weddings are not just events; they are symphonies of fleeting glances, quiet gasps, tearful smiles, and unspoken promises. Our lens does not merely capture the surface; it seeks the soul of the celebration.
                </p>
                <p>
                  Inspired by the editorial aesthetics of *Vogue* and the raw narrative energy of cinema, we craft highly personalized visual archives. Based out of Kerala, we document love stories worldwide, delivering timeless, organic, and deeply emotional imagery.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 pt-12 border-t border-luxury-border/30 mt-12">
                <div>
                  <div className="font-serif text-3xl md:text-4xl text-luxury-dark font-light">
                    <Counter value={10} />+
                  </div>
                  <div className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-luxury-muted mt-2">
                    Years of Light
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl md:text-4xl text-luxury-dark font-light">
                    <Counter value={250} />+
                  </div>
                  <div className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-luxury-muted mt-2">
                    Weddings Documented
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl md:text-4xl text-luxury-dark font-light">
                    <Counter value={15} />+
                  </div>
                  <div className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-luxury-muted mt-2">
                    Global Destinations
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-24 pt-16 border-t border-luxury-border/30">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold font-sans font-semibold block mb-2">
              OUR CHRONICLES
            </span>
            <h3 className="font-serif font-light text-2xl md:text-3xl text-luxury-dark">
              A Decade-Long Journey of Visual Storytelling
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TIMELINE.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-6 bg-luxury-sec/10 border border-luxury-border/40 hover:border-luxury-gold/50 transition-colors duration-500 flex flex-col justify-between h-[200px]"
              >
                <div>
                  <div className="font-serif italic text-3xl text-luxury-gold mb-3">
                    {item.year}
                  </div>
                  <div className="font-sans font-medium text-xs tracking-wider text-luxury-dark uppercase mb-2">
                    {item.title}
                  </div>
                  <div className="font-sans font-light text-[11px] leading-relaxed text-luxury-muted">
                    {item.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
