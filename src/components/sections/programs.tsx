import React from 'react';
import { Baby, GraduationCap, Heart, BookOpen, Users } from 'lucide-react';

const programsData = [
  {
    icon: Baby,
    title: "Infant Room",
    ageRange: "6 weeks - 18 months",
    description: "Our infant room celebrates each baby as an individual. Our highly qualified staff is the best in the industry. Our infant room does follow a curriculum and we offer lots of activities and opportunities for your baby to grow.",
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
    highlights: [
      "Kindergarten preparation focus",
      "Grammar, writing, and reading skills",
      "Math concepts and problem solving",
      "Socialization and teamwork"
    ]
  },
];

const Programs = () => {
  return (
    <section id="our-programs" className="bg-charcoal-black py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-sky-blue text-4xl md:text-5xl font-normal leading-[1.3] mb-6">
            Our Programs
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Age-appropriate curriculum designed to nurture growth, curiosity, and learning at every developmental stage.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {programsData.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div 
                key={index} 
                className="bg-white/5 rounded-lg p-6 md:p-8 hover:bg-white/10 transition-colors border border-white/10 hover:border-sky-blue/50 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-blue/20 rounded-full flex items-center justify-center group-hover:bg-sky-blue/30 transition-colors">
                    <IconComponent className="text-sky-blue" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-body text-xl md:text-2xl font-bold text-white mb-1">
                      {program.title}
                    </h3>
                    <p className="text-sky-blue text-sm font-semibold">
                      {program.ageRange}
                    </p>
                  </div>
                </div>

                <p className="font-body text-base text-white/80 leading-relaxed mb-4">
                  {program.description}
                </p>

                {program.highlights && (
                  <ul className="space-y-2 mb-4">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="text-primary-yellow mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {program.note && (
                  <p className="text-primary-yellow text-sm font-medium italic mt-4 pt-4 border-t border-white/10">
                    {program.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Curriculum Information */}
        <div className="max-w-4xl mx-auto mt-12 md:mt-16 bg-sky-blue/10 border border-sky-blue/30 rounded-lg p-6 md:p-8">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Our Educational Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/90">
            <div>
              <h4 className="font-semibold text-sky-blue mb-2">Academic Curriculum:</h4>
              <p className="text-sm leading-relaxed">
                We use a comprehensive, developmentally appropriate curriculum that prepares children for kindergarten success. Our program integrates early literacy, mathematics, science, and social studies through hands-on learning experiences.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sky-blue mb-2">Christian Foundation:</h4>
              <p className="text-sm leading-relaxed">
                We incorporate Abeka curriculum for Bible lessons, teaching children about faith, values, and character development in age-appropriate ways that complement our academic program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;