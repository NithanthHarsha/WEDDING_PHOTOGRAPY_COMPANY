"use client";

import { motion } from "framer-motion";
import { Camera, Heart, Sparkles, Calendar, Film, Compass, Globe, BookOpen } from "lucide-react";

const SERVICES_DATA = [
  {
    icon: Camera,
    title: "Wedding Photography",
    desc: "Bespoke fine-art coverage capturing candid expressions, high-fashion editorial portraits, and authentic emotional peaks.",
  },
  {
    icon: Heart,
    title: "Pre Wedding Shoots",
    desc: "Cinematic pre-wedding portraits in breathtaking editorial settings, styled to tell your unique chemistry before the vows.",
  },
  {
    icon: Sparkles,
    title: "Engagement Sessions",
    desc: "Elegant capture of intimate engagement proposals and celebrations, archiving the spark of the beginning.",
  },
  {
    icon: Calendar,
    title: "Save The Date",
    desc: "Creative photo and video announcements tailored for luxury invites, establishing the tone for your grand day.",
  },
  {
    icon: Film,
    title: "Wedding Films",
    desc: "Cinematic, slow-crafted video productions containing rich documentary narratives, soundscapes, and color grading.",
  },
  {
    icon: Compass,
    title: "Drone Coverage",
    desc: "Timeless aerial cinematography of stunning venues, capturing the scale and scenic grandeur of your celebrations.",
  },
  {
    icon: Globe,
    title: "Destination Weddings",
    desc: "Full travel-ready documentary services for destination weddings, from the coasts of Goa to Lake Como, Italy.",
  },
  {
    icon: BookOpen,
    title: "Luxury Albums",
    desc: "Couture-bound, fine-art layflat wedding print albums handmade in Italy, bound in premium linen or full-grain leather.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-luxury-bg border-t border-luxury-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center mb-20">
          <span className="text-[10px] tracking-[0.35em] uppercase text-luxury-gold font-sans font-semibold block mb-2">
            WHAT WE ARCHIVE
          </span>
          <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl text-luxury-dark tracking-[0.02em]">
            Bespoke Creative Offerings
          </h2>
          <p className="font-sans font-light text-xs md:text-sm text-luxury-muted max-w-lg mx-auto mt-4 leading-relaxed">
            Tailored packages designed for high-end wedding collections. Every service is approached with an editorial eye and fine art sensibilities.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="relative group p-8 bg-luxury-bg border border-luxury-border hover:bg-luxury-sec/10 transition-all duration-700 ease-out flex flex-col justify-between min-h-[250px] overflow-hidden"
              >
                {/* Accent border highlight on hover */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-luxury-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                <div>
                  {/* Icon */}
                  <div className="text-luxury-gold mb-6 group-hover:-translate-y-1 transition-transform duration-500 inline-block">
                    <IconComponent size={28} strokeWidth={1} />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg text-luxury-dark font-medium mb-3 group-hover:text-luxury-gold transition-colors duration-500">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans font-light text-xs text-luxury-muted leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
