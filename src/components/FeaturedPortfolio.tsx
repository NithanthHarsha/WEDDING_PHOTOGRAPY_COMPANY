"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type PortfolioItem = {
  id: number;
  title: string;
  location: string;
  category: "portraits" | "destination" | "traditional" | "engagements" | "black-white";
  image: string;
  isGrayscale?: boolean;
};

const CATEGORIES = [
  { id: "all", label: "All Works" },
  { id: "portraits", label: "Couple Portraits" },
  { id: "destination", label: "Destination" },
  { id: "traditional", label: "Traditional" },
  { id: "engagements", label: "Engagements" },
  { id: "black-white", label: "Black & White" },
];

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Devan & Anjali",
    location: "Kochi, Kerala",
    category: "traditional",
    image: "/images/traditional_wedding.png",
  },
  {
    id: 2,
    title: "Matteo & Sofia",
    location: "Florence, Italy",
    category: "destination",
    image: "/images/italy_wedding.png",
  },
  {
    id: 3,
    title: "Kabir & Rhea",
    location: "Goa Beachfront",
    category: "engagements",
    image: "/images/goa_engagement.png",
  },
  {
    id: 4,
    title: "Arjun & Sneha",
    location: "Munnar Hills",
    category: "portraits",
    image: "/images/hero_large.png",
  },
  {
    id: 5,
    title: "Liam & Emma",
    location: "Maldives Private Island",
    category: "destination",
    image: "/images/maldives_wedding.png",
  },
  {
    id: 6,
    title: "Gautham & Meera",
    location: "Alappuzha Backwaters",
    category: "black-white",
    image: "/images/hero_medium.png",
    isGrayscale: true,
  },
  {
    id: 7,
    title: "Vikram & Priya",
    location: "Rajasthan Forts",
    category: "traditional",
    image: "/images/traditional_wedding.png",
  },
  {
    id: 8,
    title: "Aravind & Divya",
    location: "Kovalam Beach",
    category: "portraits",
    image: "/images/hero_large.png",
  },
];

export default function FeaturedPortfolio() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "black-white") return item.category === "black-white" || item.isGrayscale;
    return item.category === activeTab;
  });

  return (
    <section id="portfolio" className="py-24 bg-luxury-bg border-t border-luxury-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.35em] uppercase text-luxury-gold font-sans font-semibold block mb-2">
            CURATED ARCHIVES
          </span>
          <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl text-luxury-dark tracking-[0.02em]">
            Featured Wedding Stories
          </h2>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-16">
          {CATEGORIES.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-[10px] md:text-xs uppercase tracking-[0.25em] font-sans font-medium transition-colors py-2 relative ${
                activeTab === tab.id ? "text-luxury-dark" : "text-luxury-muted hover:text-luxury-dark"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.span
                  layoutId="portfolioActiveTab"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-gold"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Modern Unique Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                key={item.id}
                className={`relative overflow-hidden group border border-luxury-border shadow-sm cursor-pointer w-full ${
                  item.id % 2 === 0 ? "h-[450px]" : "h-[380px]"
                }`}
              >
                {/* Photo Image Wrapper */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 ${
                      item.isGrayscale || activeTab === "black-white" ? "grayscale hover:grayscale-0" : ""
                    }`}
                  />
                  
                  {/* Subtle Elegant Hover Overlay */}
                  <div className="absolute inset-0 bg-luxury-dark/45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="text-left"
                    >
                      <span className="text-[9px] tracking-[0.25em] uppercase text-luxury-gold font-sans font-semibold mb-1 block">
                        {item.category.replace("-", " & ")}
                      </span>
                      <h4 className="font-serif text-lg md:text-xl text-luxury-bg font-light mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[10px] tracking-wider text-luxury-bg/75 font-sans font-light">
                        {item.location}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Subtle static label for accessibility & mobile touch screens */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-luxury-dark/85 to-transparent flex justify-between items-end md:hidden z-10">
                  <div>
                    <h4 className="font-serif text-xs font-medium text-luxury-bg">
                      {item.title}
                    </h4>
                    <p className="text-[8px] text-luxury-sec uppercase tracking-wider font-sans mt-0.5">
                      {item.location}
                    </p>
                  </div>
                  <span className="text-[8px] tracking-widest text-luxury-gold uppercase font-semibold">
                    {item.category.replace("-", " & ")}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
