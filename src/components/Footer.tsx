"use client";

import { useState } from "react";
import { Compass, ArrowRight } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
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

function YoutubeIcon({ size = 18 }: { size?: number }) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
      <path d="m10 15 5-3-5-3v6z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 2000);
  };

  return (
    <footer className="bg-luxury-bg border-t border-luxury-border py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Segment: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-luxury-border/30 items-start">
          {/* Brand Monogram */}
          <div className="lg:col-span-6">
            <h3 className="font-serif text-2xl tracking-[0.2em] text-luxury-dark mb-4 uppercase">
              Aura & Light
            </h3>
            <p className="font-sans font-light text-xs text-luxury-muted max-w-sm leading-relaxed mb-6">
              An award-winning editorial studio archiving raw connections and high-fashion wedding details globally. Based in Kochi, Kerala.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-5 text-luxury-muted">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-luxury-gold transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-luxury-gold transition-colors"
                aria-label="Youtube Channel"
              >
                <YoutubeIcon size={18} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-luxury-gold transition-colors"
                aria-label="Pinterest Profile"
              >
                <Compass size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Newsletter signup */}
          <div className="lg:col-span-6">
            <h4 className="font-serif text-sm font-medium text-luxury-dark tracking-[0.1em] mb-4 uppercase">
              Receive Visual Diaries
            </h4>
            <p className="font-sans font-light text-xs text-luxury-muted leading-relaxed mb-6 max-w-md">
              Subscribe to get seasonal wedding travel schedules, venue guides, photography advice, and collection openings.
            </p>

            <form onSubmit={handleSubscribe} className="relative max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-luxury-border/60 py-3 text-xs text-luxury-dark focus:outline-none focus:border-luxury-gold transition-colors font-sans font-light rounded-none placeholder-luxury-muted/50"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-luxury-muted hover:text-luxury-gold transition-colors p-1"
                aria-label="Subscribe"
              >
                {subscribed ? (
                  <span className="text-[10px] tracking-[0.15em] text-luxury-gold uppercase font-semibold">Subscribed</span>
                ) : (
                  <ArrowRight size={16} />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Segment: Links & Legals */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Quick Footer Navigation */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#portfolio" className="text-[9px] uppercase tracking-widest font-sans text-luxury-muted hover:text-luxury-dark transition-colors">
              Portfolio
            </a>
            <a href="#services" className="text-[9px] uppercase tracking-widest font-sans text-luxury-muted hover:text-luxury-dark transition-colors">
              Services
            </a>
            <a href="#stories" className="text-[9px] uppercase tracking-widest font-sans text-luxury-muted hover:text-luxury-dark transition-colors">
              Stories
            </a>
            <a href="#experience" className="text-[9px] uppercase tracking-widest font-sans text-luxury-muted hover:text-luxury-dark transition-colors">
              Experience
            </a>
            <a href="#destinations" className="text-[9px] uppercase tracking-widest font-sans text-luxury-muted hover:text-luxury-dark transition-colors">
              Destinations
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="font-sans font-light text-[10px] text-luxury-muted leading-relaxed">
              &copy; {new Date().getFullYear()} Aura & Light. All Archives Reserved.
            </p>
            <p className="font-sans font-light text-[9px] text-luxury-muted/60 mt-1">
              Bespoke Photography & Cinematography.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
