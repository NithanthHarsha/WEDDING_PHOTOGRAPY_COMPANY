"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const DESTINATIONS = [
  {
    name: "Kerala",
    country: "India",
    note: "Serene backwaters, slow-moving houseboats, and lush coconut groves under golden tropical sunbeams.",
    image: "/images/traditional_wedding.png",
    status: "Home Base & Local Rates",
  },
  {
    name: "Goa",
    country: "India",
    note: "Salty sea vows, Portuguese heritage chapels, and breathtaking clifftop sunsets along the Arabian sea.",
    image: "/images/goa_engagement.png",
    status: "Booking Autumn 2026",
  },
  {
    name: "Italy",
    country: "Europe",
    note: "Fine art palazzos of Florence, dramatic Lake Como backdrops, and sun-soaked Tuscan vineyard estates.",
    image: "/images/italy_wedding.png",
    status: "Travel Schedule Set",
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    note: "Infinite turquoise horizons, private sandbar proposals, and water villas surrounded by crystal reefs.",
    image: "/images/maldives_wedding.png",
    status: "Available Year-Round",
  },
  {
    name: "Bali",
    country: "Indonesia",
    note: "Tropical rainforest structures, volcanic black sand coastlines, and ancient temples cloaked in early mist.",
    image: "/images/bali_wedding.png",
    status: "Booking Winter 2026",
  },
  {
    name: "Dubai",
    country: "UAE",
    note: "Striking desert dunes under burning crimson skies, modern architecture, and high-fashion city backdrops.",
    image: "/images/dubai_wedding.png",
    status: "Available on Commission",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-luxury-bg border-t border-luxury-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center mb-20">
          <span className="text-[10px] tracking-[0.35em] uppercase text-luxury-gold font-sans font-semibold block mb-2">
            GLOBAL COMMISSIONS
          </span>
          <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl text-luxury-dark tracking-[0.02em]">
            Destination Weddings
          </h2>
          <p className="font-sans font-light text-xs md:text-sm text-luxury-muted max-w-lg mx-auto mt-4 leading-relaxed">
            We travel where love takes us. Review our upcoming destinations and calendar highlights to align your timelines with our travel schedule.
          </p>
        </div>

        {/* Postcard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {DESTINATIONS.map((dest, idx) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group bg-luxury-bg border border-luxury-border p-5 flex flex-col justify-between h-[450px] shadow-sm hover:shadow-md transition-all duration-700 ease-out"
            >
              <div>
                {/* Image Container with subtle framing */}
                <div className="relative aspect-[3/2] w-full overflow-hidden border border-luxury-border mb-6">
                  <Image
                    src={dest.image}
                    alt={`${dest.name}, ${dest.country}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  
                  {/* Status Overlay Tag */}
                  <span className="absolute bottom-3 left-3 bg-luxury-bg/90 backdrop-blur-sm text-[8px] font-sans font-semibold tracking-widest text-luxury-gold uppercase px-2.5 py-1 border border-luxury-border">
                    {dest.status}
                  </span>
                </div>

                {/* Country Subtitle */}
                <span className="text-[9px] tracking-[0.25em] uppercase text-luxury-gold font-sans font-semibold block mb-1">
                  {dest.country}
                </span>

                {/* Title */}
                <h3 className="font-serif text-2xl font-light text-luxury-dark mb-3">
                  {dest.name}
                </h3>

                {/* Note */}
                <p className="font-sans font-light text-xs text-luxury-muted leading-relaxed">
                  {dest.note}
                </p>
              </div>

              {/* Minimal "Inquire" footer */}
              <div className="pt-4 border-t border-luxury-border/30 flex items-center justify-between">
                <span className="text-[8px] tracking-[0.2em] uppercase font-sans font-medium text-luxury-muted">
                  Bespoke Travel Guide
                </span>
                <a
                  href="#contact"
                  className="text-[9px] tracking-[0.2em] uppercase font-sans font-semibold text-luxury-dark hover:text-luxury-gold transition-colors"
                >
                  Inquire Travel &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
