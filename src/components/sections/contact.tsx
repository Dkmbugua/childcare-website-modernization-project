"use client";

import { useState, FormEvent } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real application, you would handle form submission here
  };

  const inputStyles = "w-full bg-transparent border-b border-white/40 text-white py-2 placeholder:text-white/70 focus:outline-none focus:border-white focus:border-b-2 transition-colors duration-300 font-body text-base";
  const selectStyles = "w-full bg-sky-blue border-b border-white/40 text-white py-2 focus:outline-none focus:border-white focus:border-b-2 transition-colors duration-300 font-body text-base";

  return (
    <section id="contact" className="bg-sky-blue text-white">
      <div className="max-w-[1200px] mx-auto py-12 md:py-20 px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
          <div className="lg:col-span-2">
            <h2 className="font-display text-[48px] leading-tight mb-8 text-center lg:text-left">
              Contact Us
            </h2>
            
            <div className="space-y-6 font-body text-base mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1331+Ashton+Road+Suite+D+Hanover+MD+United+States+21076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  1331 Ashton Road Suite D<br />
                  Hanover, MD 21076
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0" />
                <a href="mailto:newlifechildcare@yahoo.com" className="hover:underline break-words">
                  newlifechildcare@yahoo.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:410-440-3072" className="hover:underline text-lg font-semibold">
                  (410) 440-3072
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Hours of Operation:</p>
                  <p className="text-sm">Monday - Friday: 6:30 AM - 6:00 PM</p>
                  <p className="text-sm text-white/80">Closed Weekends & Major Holidays</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <p className="font-semibold mb-2">✓ MSDE Licensed #253492</p>
              <p className="text-sm text-white/90">Accepting children ages 6 weeks to 5 years</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm mb-6">
              <h3 className="text-xl font-semibold mb-2">Ready to Enroll?</h3>
              <p className="text-sm text-white/90">
                Fill out the form below and we'll contact you within 24 hours to discuss availability, 
                schedule a tour, and answer any questions you may have.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Parent/Guardian Name *" 
                  className={inputStyles} 
                  aria-label="Parent or Guardian Name"
                  required 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email *" 
                  className={inputStyles} 
                  aria-label="Email"
                  required 
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number *" 
                  className={inputStyles} 
                  aria-label="Phone"
                  required 
                />
                <input 
                  type="text" 
                  name="childName" 
                  placeholder="Child's Name" 
                  className={inputStyles} 
                  aria-label="Child's Name" 
                />
                
                {/* Child's Age */}
                <div>
                  <select 
                    name="childAge" 
                    className={selectStyles}
                    aria-label="Child's Age"
                  >
                    <option value="">Child's Age *</option>
                    <option value="6weeks-12months">6 weeks - 12 months (Infant)</option>
                    <option value="12-18months">12-18 months (Infant)</option>
                    <option value="18-24months">18-24 months (Toddler)</option>
                    <option value="2years">2 years old</option>
                    <option value="3years">3 years old</option>
                    <option value="4-5years">4-5 years old (Pre-K)</option>
                  </select>
                </div>

                {/* Desired Start Date */}
                <div>
                  <input 
                    type="date" 
                    name="startDate" 
                    className={inputStyles}
                    aria-label="Desired Start Date"
                    placeholder="Desired Start Date"
                  />
                  <p className="text-xs text-white/60 mt-1">Desired Start Date</p>
                </div>

                <div className="md:col-span-2">
                  <select 
                    name="inquiryType" 
                    className={selectStyles}
                    aria-label="Inquiry Type"
                  >
                    <option value="">What are you interested in? *</option>
                    <option value="enrollment">Check Current Openings / Enroll</option>
                    <option value="tour">Schedule a Tour</option>
                    <option value="waitlist">Join the Waitlist</option>
                    <option value="pricing">Request Tuition Information</option>
                    <option value="general">General Information</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <textarea 
                    name="message" 
                    placeholder="Additional questions or comments..." 
                    rows={4} 
                    className={inputStyles} 
                    aria-label="Message"
                  />
                </div>
              </div>
              <div className="mt-10">
                <button 
                  type="submit" 
                  className="w-full bg-charcoal-black text-white font-semibold text-base py-4 tracking-[0.8px] hover:opacity-85 transition-opacity duration-300"
                >
                  Submit Inquiry
                </button>
                <p className="text-xs text-white/70 text-center mt-3">
                  We typically respond within 24 hours during business days
                </p>
              </div>
            </form>
            {submitted && (
              <div className="bg-white/20 p-4 rounded-lg mt-6 text-center backdrop-blur-sm">
                <p className="font-semibold text-lg">✓ Thanks for submitting!</p>
                <p className="text-sm mt-1">We'll be in touch within 24 hours.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}