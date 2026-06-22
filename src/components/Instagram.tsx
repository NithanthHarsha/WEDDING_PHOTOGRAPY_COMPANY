"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: size, height: size }}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const INSTA_POSTS = [
  {
    id: 1,
    image: "/images/hero_medium.png",
    link: "https://instagram.com",
    caption: "The morning light draping over the veil.",
  },
  {
    id: 2,
    image: "/images/goa_engagement.png",
    link: "https://instagram.com",
    caption: "A promise sealed in Goa.",
  },
  {
    id: 3,
    image: "/images/detail_decor.png",
    link: "https://instagram.com",
    caption: "Couture tablescapes and warm champagne glows.",
  },
  {
    id: 4,
    image: "/images/detail_rings.png",
    link: "https://instagram.com",
    caption: "Dancing under a canopy of sparklers.",
  },
];

export default function InstagramFeed() {
  return (
    <section id="instagram" className="py-24 bg-luxury-bg border-t border-luxury-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.35em] uppercase text-luxury-gold font-sans font-semibold block mb-2">
            BEHIND THE SCENES
          </span>
          <h2 className="font-serif font-light text-3xl md:text-4xl text-luxury-dark tracking-[0.02em] mb-2">
            Journaling The Moments
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-semibold text-[10px] tracking-[0.25em] text-luxury-gold uppercase hover:text-luxury-dark transition-colors inline-flex items-center space-x-2"
          >
            <InstagramIcon size={12} />
            <span className="ml-1">@auraandlight.weddings</span>
          </a>
        </div>

        {/* Infinite Moving Marquee Track */}
        <div className="w-full overflow-hidden relative py-4">
          <motion.div
            animate={{ x: [0, "-50%"] }}
            style={{ willChange: "transform" }}
            transition={{
              ease: "linear",
              duration: 22,
              repeat: Infinity,
            }}
            className="flex gap-6 w-max"
          >
            {[...INSTA_POSTS, ...INSTA_POSTS].map((post, idx) => (
              <motion.a
                key={idx}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square w-[240px] sm:w-[280px] flex-shrink-0 overflow-hidden border border-luxury-border group shadow-sm block cursor-pointer"
              >
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  sizes="(max-width: 768px) 240px, 280px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Instagram Hover Card overlay */}
                <div className="absolute inset-0 bg-luxury-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center text-luxury-bg">
                  <div className="text-luxury-gold mb-3">
                    <InstagramIcon size={24} />
                  </div>
                  <p className="font-sans font-light text-[10px] tracking-wider leading-relaxed">
                    {post.caption}
                  </p>
                  <span className="text-[9px] tracking-widest uppercase font-semibold text-luxury-gold mt-4">
                    View Post &rarr;
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
