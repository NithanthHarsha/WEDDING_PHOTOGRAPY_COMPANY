"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "What is your booking process?",
    answer: "We require a signed digital agreement and a 40% booking retainer to reserve your wedding date. Due to high commission demand and global destination travel schedules, dates cannot be held without these two steps completed.",
  },
  {
    question: "What is the delivery timeline for our wedding gallery?",
    answer: "A 'Sneak Peek' of 30-40 editorial highlights will be delivered to you within 7 days of your celebration. Your final, fully edited high-resolution digital archives will be delivered within 8-12 weeks.",
  },
  {
    question: "How do you handle pricing and packages?",
    answer: "Every wedding is a unique story. We offer baseline investment collections for fine-art photography and cinematography, which can be fully customized with destination travel bundles, extended shooting hours, and couture layflat albums.",
  },
  {
    question: "Are travel and accommodation included for destination weddings?",
    answer: "For destination weddings outside Kerala, actual travel expenses (economy flights and basic partner hotel accommodation) are covered by the client. We manage all travel booking logistics ourselves to keep your planning process seamless.",
  },
  {
    question: "What is the process for creating our luxury wedding album?",
    answer: "Once you receive your digital gallery, you select your favorite 80-100 highlight images. Our in-house designers create a custom editorial draft layout. Upon your design approval, it is handcrafted and bound in linen or full-grain leather by our boutique partners in Italy.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-24 bg-luxury-bg border-t border-luxury-border/30">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center mb-20">
          <span className="text-[10px] tracking-[0.35em] uppercase text-luxury-gold font-sans font-semibold block mb-2">
            COMMON INQUIRIES
          </span>
          <h2 className="font-serif font-light text-3xl md:text-4xl text-luxury-dark tracking-[0.02em]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-6">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-b border-luxury-border/40 pb-6 transition-all duration-300"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between text-left py-4 hover:text-luxury-gold transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-luxury-dark hover:text-luxury-gold transition-colors">
                    {item.question}
                  </span>
                  <span className="text-luxury-gold ml-4 flex-shrink-0">
                    {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                  </span>
                </button>

                {/* Answer Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans font-light text-xs sm:text-sm text-luxury-muted leading-relaxed pt-2 pr-8">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
