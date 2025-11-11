"use client";

import React from 'react';
import { Baby, GraduationCap, Heart, BookOpen, Users, CheckCircle2, Sparkles, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const programsData = [
  {
    icon: Baby,
    title: "Infant Room",
    ageRange: "6 weeks - 18 months",
    description: "Our infant room celebrates each baby as an individual. Our highly qualified staff is the best in the industry. Our infant room does follow a curriculum and we offer lots of activities and opportunities for your baby to grow.",
    color: "from-pink-500 to-rose-500",
    highlights: [
      "Individual attention and care plans",
      "Age-appropriate developmental activities",
      "Secure, nurturing environment",
      "Daily parent communication"
    ]
  },
  {
    icon: Heart,
    title: "Toddler Room",
    ageRange: "18 months - 24 months",
    description: "Our toddler room is the perfect transitional room for the older babies. Routines and structural play based on our curriculum are introduced as we prepared our young scholars for an amazing pre-school experience.",
    note: "*Enrichment classes begin at this age group.*",
    color: "from-orange-500 to-amber-500",
    highlights: [
      "Introduction to structured routines",
      "Language development focus",
      "Enrichment classes begin",
      "Social interaction skills"
    ]
  },
  {
    icon: Users,
    title: "Two Year Old Program",
    ageRange: "2 years old",
    description: "Our two year old program continues to build on our routines and curriculum. Potty training support and plenty of love is offered to our youngest pre-school curriculum students.",
    color: "from-yellow-500 to-lime-500",
    highlights: [
      "Potty training support",
      "Pre-school readiness skills",
      "Creative play and exploration",
      "Building independence"
    ]
  },
  {
    icon: BookOpen,
    title: "Three Year Old Program",
    ageRange: "3 years old",
    description: "Our three year old program focuses on building the base for a successful Pre-K experience. Our three year olds get plenty of opportunities to learn pre-school concepts and routines. Learning through play is an essential part of this program.",
    color: "from-green-500 to-emerald-500",
    highlights: [
      "Pre-K foundation building",
      "Play-based learning approach",
      "Early literacy and numeracy",
      "Social-emotional development"
    ]
  },
  {
    icon: GraduationCap,
    title: "Pre-K Program",
    ageRange: "4-5 years old",
    description: "Our Pre-K program is the perfect program for your almost kindergartner. We will submerge your pre-schooler in opportunities that offer structural activities as well as 'play' based activities. Our Pre-K program focuses on grammar, socialization, writing, and many other important skills.",
    color: "from-blue-500 to-cyan-500",
    highlights: [
      "Kindergarten preparation focus",
      "Grammar, writing, and reading skills",
      "Math concepts and problem solving",
      "Socialization and teamwork"
    ]
  },
];

const Programs = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <section id="our-programs" className="relative bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-sky-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary-yellow/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-sky-blue/10 border border-sky-blue/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="text-sky-blue" size={16} />
            <span className="text-sm font-medium text-sky-blue">Age-Based Learning</span>
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Our Programs
          </h2>
          <div className="h-1 w-32 bg-linear-to-r from-sky-blue to-primary-yellow rounded-full mx-auto mb-6" />
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Age-appropriate curriculum designed to nurture growth, curiosity, and learning at every developmental stage.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {programsData.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                {/* Hover glow effect */}
                <div className={`absolute -inset-0.5 bg-linear-to-r ${program.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
                
                {/* Card content */}
                <div className="relative bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                  {/* Header with icon */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`relative shrink-0 w-16 h-16 rounded-2xl bg-linear-to-br ${program.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                        <IconComponent className="text-white" size={28} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-sky-blue transition-colors duration-300">
                        {program.title}
                      </h3>
                      <div className="inline-flex items-center gap-2 bg-sky-blue/20 rounded-full px-3 py-1">
                        <div className="w-2 h-2 bg-sky-blue rounded-full animate-pulse" />
                        <p className="text-sky-blue text-sm font-semibold">
                          {program.ageRange}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body text-base text-white/80 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Highlights */}
                  {program.highlights && (
                    <div className="space-y-3 mb-6 grow">
                      {program.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={cardsInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.15 + idx * 0.1 }}
                          className="flex items-start gap-3 text-sm text-white/70 group/item hover:text-white/90 transition-colors"
                        >
                          <div className="shrink-0 mt-0.5">
                            <CheckCircle2 className="text-primary-yellow group-hover/item:text-green-400 transition-colors" size={18} />
                          </div>
                          <span className="leading-relaxed">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Note */}
                  {program.note && (
                    <div className="mt-auto pt-5 border-t border-white/10">
                      <div className="flex items-start gap-2">
                        <Sparkles className="text-primary-yellow shrink-0 mt-0.5" size={16} />
                        <p className="text-primary-yellow text-sm font-medium italic">
                          {program.note}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Educational Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-5xl mx-auto mt-16 md:mt-20"
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-linear-to-r from-sky-blue to-primary-yellow rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500" />
            
            {/* Content */}
            <div className="relative bg-linear-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Award className="text-primary-yellow" size={32} />
                <h3 className="text-3xl md:text-4xl font-bold text-white text-center">
                  Our Educational Approach
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-blue/20 flex items-center justify-center">
                      <BookOpen className="text-sky-blue" size={20} />
                    </div>
                    <h4 className="font-semibold text-xl text-white">Academic Curriculum</h4>
                  </div>
                  <p className="text-base text-white/80 leading-relaxed pl-13">
                    We use a comprehensive, developmentally appropriate curriculum that prepares children for kindergarten success. Our program integrates early literacy, mathematics, science, and social studies through hands-on learning experiences.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-yellow/20 flex items-center justify-center">
                      <Heart className="text-primary-yellow" size={20} />
                    </div>
                    <h4 className="font-semibold text-xl text-white">Christian Foundation</h4>
                  </div>
                  <p className="text-base text-white/80 leading-relaxed pl-13">
                    We incorporate Abeka curriculum for Bible lessons, teaching children about faith, values, and character development in age-appropriate ways that complement our academic program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;