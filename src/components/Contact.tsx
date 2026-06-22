"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    venue: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      venue: "",
      budget: "",
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-luxury-bg border-t border-luxury-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Big Invitation Title */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-[10px] tracking-[0.35em] uppercase text-luxury-gold font-sans font-semibold block mb-4">
                RESERVE YOUR DATE
              </span>
              <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-luxury-dark leading-tight tracking-[0.01em] mb-8">
                Let’s Create <br />
                Something <br />
                <span className="italic font-normal text-luxury-gold">Beautiful</span> <br />
                Together
              </h2>
              <p className="font-sans font-light text-sm text-luxury-muted leading-relaxed max-w-sm mb-12">
                We capture a highly limited number of weddings each year to maintain an uncompromised level of artistic quality and individual detail.
              </p>
            </div>

            {/* Coordinates / Details */}
            <div className="space-y-4 pt-8 border-t border-luxury-border/30">
              <div>
                <span className="text-[9px] tracking-widest text-luxury-gold uppercase font-semibold font-sans">Direct Inquiries</span>
                <p className="font-serif text-base text-luxury-dark mt-1">hello@auraandlight.com</p>
              </div>
              <div>
                <span className="text-[9px] tracking-widest text-luxury-gold uppercase font-semibold font-sans">Studio Office</span>
                <p className="font-serif text-base text-luxury-dark mt-1">Fort Kochi, Kerala, India</p>
                <p className="font-serif text-sm text-luxury-muted mt-0.5">+91 484 221 4321</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7 bg-luxury-bg border border-luxury-border p-8 md:p-12 shadow-sm relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div className="relative group">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-luxury-border py-3 text-sm text-luxury-dark focus:outline-none focus:border-luxury-gold transition-colors font-sans font-light rounded-none placeholder-luxury-muted/40"
                        placeholder="Your Name *"
                      />
                    </div>

                    {/* Phone input */}
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-luxury-border py-3 text-sm text-luxury-dark focus:outline-none focus:border-luxury-gold transition-colors font-sans font-light rounded-none placeholder-luxury-muted/40"
                        placeholder="Phone Number *"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email input */}
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-luxury-border py-3 text-sm text-luxury-dark focus:outline-none focus:border-luxury-gold transition-colors font-sans font-light rounded-none placeholder-luxury-muted/40"
                        placeholder="Email Address *"
                      />
                    </div>

                    {/* Event Date input */}
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-transparent border-b border-luxury-border py-3 text-sm text-luxury-dark focus:outline-none focus:border-luxury-gold transition-colors font-sans font-light rounded-none placeholder-luxury-muted/40"
                        placeholder="Event Date (e.g. DD/MM/YYYY) *"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Venue input */}
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.venue}
                        onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                        className="w-full bg-transparent border-b border-luxury-border py-3 text-sm text-luxury-dark focus:outline-none focus:border-luxury-gold transition-colors font-sans font-light rounded-none placeholder-luxury-muted/40"
                        placeholder="Venue / Destination City *"
                      />
                    </div>

                    {/* Budget input */}
                    <div className="relative">
                      <select
                        required
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-transparent border-b border-luxury-border py-3 text-sm text-luxury-dark focus:outline-none focus:border-luxury-gold transition-colors font-sans font-light rounded-none text-luxury-muted"
                      >
                        <option value="" disabled>Approx. Wedding Budget *</option>
                        <option value="5-10L" className="bg-luxury-bg text-luxury-dark">5L &mdash; 10L INR</option>
                        <option value="10-25L" className="bg-luxury-bg text-luxury-dark">10L &mdash; 25L INR</option>
                        <option value="25L+" className="bg-luxury-bg text-luxury-dark">25L+ INR (Luxury Collection)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message input */}
                  <div className="relative">
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-luxury-border py-3 text-sm text-luxury-dark focus:outline-none focus:border-luxury-gold transition-colors font-sans font-light resize-none rounded-none placeholder-luxury-muted/40"
                      placeholder="Tell us about your story and plans..."
                    />
                  </div>

                  {/* Submit button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 text-xs font-sans font-semibold uppercase tracking-[0.25em] bg-luxury-dark text-luxury-bg hover:bg-luxury-gold hover:text-luxury-bg transition-colors duration-500 rounded-none disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? "Sending details..." : "Send Commission Request"}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-12 flex flex-col justify-center items-center"
                >
                  {/* Custom Success Monogram Symbol */}
                  <div className="w-16 h-16 rounded-full border border-luxury-gold/50 flex items-center justify-center text-luxury-gold mb-6">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-8 h-8"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>

                  <h3 className="font-serif text-3xl font-light text-luxury-dark mb-4">
                    Request Received
                  </h3>
                  <p className="font-sans font-light text-xs sm:text-sm text-luxury-muted max-w-sm leading-relaxed mb-8">
                    Thank you, {formData.name}. We have saved your event date and details. Our editorial team will review our calendar schedule and email you within 24 hours.
                  </p>
                  
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-[10px] tracking-[0.2em] font-sans uppercase text-luxury-dark border border-luxury-gold hover:bg-luxury-gold hover:text-luxury-bg transition-colors duration-500 rounded-none"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
