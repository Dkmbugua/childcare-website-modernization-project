"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Calendar, Phone, Award, Shield, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 }
    }
  };

  return (
    <section className="relative bg-linear-to-br from-gray-50 via-white to-gray-50 overflow-hidden" aria-label="Welcome section">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-yellow/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        <div className="flex min-h-[700px] flex-col overflow-hidden lg:flex-row items-stretch">
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full min-h-[450px] lg:w-1/2 lg:min-h-full group"
          >
            {/* Image container with overlay effects */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/beb3d5c9-c2e5-448f-a7ab-ae0e11311c93-nlchildcare-com/assets/images/fcaf38_0324d3cd8e7b4999ad939ac150416240_mv2-1.jpg"
                alt="Children coloring and engaging in activities at a table"
                fill
                className="object-cover object-[52%_27%] transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-charcoal-black/5 via-transparent to-transparent" />
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-linear-to-br from-primary-yellow/30 to-transparent" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-sky-blue/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 border border-gray-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-yellow rounded-xl flex items-center justify-center">
                  <Award className="text-charcoal-black" size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-charcoal-black/60 uppercase tracking-wide">MSDE Licensed</p>
                  <p className="text-sm font-bold text-charcoal-black">#253492</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex w-full items-center justify-center bg-white p-8 lg:w-1/2 lg:px-12 lg:py-16"
          >
            <div className="w-full max-w-xl">
              {/* Badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-primary-yellow/10 border border-primary-yellow/20 rounded-full px-4 py-2 mb-6">
                <Heart className="text-primary-yellow" size={16} />
                <span className="text-sm font-semibold text-charcoal-black">Caring for Your Little Ones</span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-charcoal-black mb-4"
              >
                Welcome
              </motion.h1>

              {/* Accent line */}
              <motion.div variants={itemVariants} className="h-1 w-24 bg-linear-to-r from-primary-yellow to-orange-400 rounded-full mb-6" />

              {/* Subheading */}
              <motion.p
                variants={itemVariants}
                className="font-body text-2xl md:text-3xl font-semibold leading-[1.4] text-charcoal-black mb-6"
              >
                New Life Child Care believes in a{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">"wholesome"</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-primary-yellow/30 z-0" />
                </span>{" "}
                experience for your child.
              </motion.p>

              {/* Description */}
              <motion.div variants={itemVariants} className="space-y-4 font-body text-base md:text-lg leading-relaxed text-charcoal-black/80 mb-8">
                <p>
                  Welcome to New Life Child Care - a place for children to grow,
                  learn and play. Your children deserve nothing but the
                  best. New Life Child Care offers an environment that
                  encourages curiosity and fun.
                </p>
              </motion.div>

              {/* License Info Card */}
              <motion.div variants={itemVariants} className="relative group mb-8">
                <div className="absolute -inset-0.5 bg-linear-to-r from-primary-yellow to-orange-400 rounded-2xl opacity-20 group-hover:opacity-30 blur transition-all duration-300" />
                <div className="relative bg-linear-to-br from-charcoal-black/5 to-charcoal-black/10 p-5 rounded-2xl border border-charcoal-black/10">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <Shield className="text-charcoal-black" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm text-charcoal-black mb-1">
                        MSDE Licensed Center #253492
                      </p>
                      <p className="text-sm text-charcoal-black/70 leading-relaxed">
                        Fully licensed by the Maryland State Department of Education
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Call-to-Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="group relative overflow-hidden flex items-center justify-center gap-2 bg-charcoal-black text-white px-8 py-4 font-bold text-sm tracking-wide rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Calendar size={20} className="transition-transform group-hover:rotate-12" />
                  <span>SCHEDULE A TOUR</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-linear-to-r from-primary-yellow/0 via-primary-yellow/20 to-primary-yellow/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
                
                <a
                  href="tel:410-440-3072"
                  className="group flex items-center justify-center gap-2 border-2 border-charcoal-black text-charcoal-black px-8 py-4 font-bold text-sm tracking-wide rounded-lg hover:bg-charcoal-black hover:text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <Phone size={20} className="transition-transform group-hover:rotate-12" />
                  <span>CALL NOW</span>
                </a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-charcoal-black/10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="group cursor-default">
                    <div className="text-3xl font-bold text-charcoal-black mb-1 group-hover:text-primary-yellow transition-colors">8+</div>
                    <div className="text-xs text-charcoal-black/60 uppercase tracking-wide">Years</div>
                  </div>
                  <div className="group cursor-default">
                    <div className="text-3xl font-bold text-charcoal-black mb-1 group-hover:text-primary-yellow transition-colors">5+</div>
                    <div className="text-xs text-charcoal-black/60 uppercase tracking-wide">Programs</div>
                  </div>
                  <div className="group cursor-default">
                    <div className="text-3xl font-bold text-charcoal-black mb-1 group-hover:text-primary-yellow transition-colors">100+</div>
                    <div className="text-xs text-charcoal-black/60 uppercase tracking-wide">Families</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;