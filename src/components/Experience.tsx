"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "The Inquiry",
    subtitle: "Connecting Stories",
    desc: "Share your date, location, and vision through our premium contact form. We limit our commissions to 20 weddings a year to ensure hyper-focused creative attention.",
  },
  {
    num: "02",
    title: "The Consultation",
    subtitle: "Aesthetic Alignment",
    desc: "A virtual or in-person alignment meeting. We talk styling, venue light profiles, mood boards, and curate a bespoke photography timeline for your day.",
  },
  {
    num: "03",
    title: "The Booking",
    subtitle: "Securing the Legacy",
    desc: "We formalize our partnership through a signed digital agreement and retainer, officially reserving your date in our calendar.",
  },
  {
    num: "04",
    title: "The Planning",
    subtitle: "Fine Details & Scouting",
    desc: "Detailed location scouting, venue site visits, and coordinate alignment with your wedding designer or planner.",
  },
  {
    num: "05",
    title: "The Wedding Day",
    subtitle: "The Symphony of Light",
    desc: "An unobtrusive, documentary-meets-fashion capture of your celebrations. Capturing both the grand gestures and the quiet, unseen instances.",
  },
  {
    num: "06",
    title: "The Slow Craft",
    subtitle: "Artisanal Curation & Grading",
    desc: "Every single frame goes through an editorial selection. We hand-color and black-and-white grade each photo to match our timeless, rich-beige signature look.",
  },
  {
    num: "07",
    title: "The Delivery",
    subtitle: "Timeless Heirlooms",
    desc: "You receive your high-resolution digital archives via a password-protected online gallery, followed by the delivery of your custom linen and leather Italian print albums.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-luxury-bg border-t border-luxury-border/30">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center mb-24">
          <span className="text-[10px] tracking-[0.35em] uppercase text-luxury-gold font-sans font-semibold block mb-2">
            OUR PROCESS
          </span>
          <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl text-luxury-dark tracking-[0.02em]">
            The Journey to Timelessness
          </h2>
          <p className="font-sans font-light text-xs md:text-sm text-luxury-muted max-w-md mx-auto mt-4 leading-relaxed">
            From the initial spark of inquiry to the arrival of your custom Italian layflat album, we offer a high-touch editorial journey.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative">
          {/* Vertical Center Connection Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-luxury-border/50 -translate-x-1/2 z-0" />

          {/* Timeline Nodes */}
          <div className="space-y-16 relative z-10">
            {STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left Column (or Right Column when Even on desktop) */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12 flex justify-start md:justify-end">
                    <div className={`max-w-md ${isEven ? "md:text-left" : "md:text-right"}`}>
                      <span className="font-serif italic text-2xl text-luxury-gold block mb-1">
                        {step.subtitle}
                      </span>
                      <h3 className="font-serif text-xl font-medium text-luxury-dark mb-4">
                        {step.title}
                      </h3>
                      <p className="font-sans font-light text-xs text-luxury-muted leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Symbol */}
                  <div className="absolute left-[30px] md:left-1/2 w-8 h-8 rounded-full border border-luxury-gold bg-luxury-bg flex items-center justify-center -translate-x-1/2 z-20">
                    <span className="text-[10px] font-sans font-medium text-luxury-gold">
                      {step.num}
                    </span>
                  </div>

                  {/* Spacer Column for Desktop grid alignment */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
