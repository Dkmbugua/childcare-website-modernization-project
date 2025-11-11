"use client";

import Image from "next/image";
import { Heart, BookHeart, Sparkles, Users, Award, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const stats = [
    { icon: Users, label: "Years of Excellence", value: "8+" },
    { icon: Award, label: "Certified Programs", value: "5+" },
    { icon: Star, label: "Happy Families", value: "100+" },
  ];

  return (
    <section
      id="our-story"
      className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-yellow/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Text Content Column */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-6">
            {/* Section Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-primary-yellow/10 border border-primary-yellow/20 rounded-full px-4 py-2 w-fit"
            >
              <Sparkles className="text-primary-yellow" size={16} />
              <span className="text-sm font-medium text-primary-yellow">About Us</span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Our Story
              </h2>
              <div className="h-1 w-24 bg-linear-to-r from-primary-yellow to-orange-400 rounded-full mb-4" />
              <p className="font-body text-xl md:text-2xl font-light italic text-white/90">
                Built on a dream, powered by passion
              </p>
            </motion.div>

            {/* Main Story Text */}
            <motion.p variants={itemVariants} className="font-body text-base md:text-lg text-white/85 leading-relaxed">
              New Life Child Care was founded by <span className="font-semibold text-white">Dr. Abraham Shanklin Jr.</span> and{" "}
              <span className="font-semibold text-white">Jerika S. Lopez</span> in 2017. What began as a casual meeting between
              two entrepreneurs has blossomed into an amazing partnership dedicated to serving our local community.
            </motion.p>

            <motion.p variants={itemVariants} className="font-body text-base md:text-lg text-white/85 leading-relaxed">
              Every aspect of New Life Child Care is infused with <span className="text-primary-yellow font-semibold">passion</span>,{" "}
              <span className="text-primary-yellow font-semibold">love</span>, and{" "}
              <span className="text-primary-yellow font-semibold">hope</span>. From our carefully curated curriculum to our nurturing
              environment, we're committed to providing the best possible experience for your child.
            </motion.p>

            {/* Christian Foundation Card */}
            <motion.div
              variants={itemVariants}
              className="relative group bg-linear-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-primary-yellow/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary-yellow/0 to-primary-yellow/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="font-semibold text-xl text-white mb-4 flex items-center gap-3">
                  <div className="p-2 bg-primary-yellow/20 rounded-lg">
                    <BookHeart className="text-primary-yellow" size={24} />
                  </div>
                  Our Christian Foundation
                </h3>
                <p className="text-sm md:text-base text-white/90 leading-relaxed mb-4">
                  We integrate faith-based values through age-appropriate Bible lessons using the Abeka curriculum, teaching
                  children about love, kindness, and character development.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Values-based character education",
                    "Age-appropriate faith integration",
                    "Welcoming environment for all families",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-white/80">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-primary-yellow/20 flex items-center justify-center">
                        <Heart className="text-primary-yellow" size={12} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center group cursor-default">
                  <div className="mb-2 inline-flex p-3 bg-primary-yellow/10 rounded-xl group-hover:bg-primary-yellow/20 transition-colors duration-300">
                    <stat.icon className="text-primary-yellow" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div variants={imageVariants} className="relative lg:order-last">
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-linear-to-r from-primary-yellow/20 to-orange-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50" />
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/beb3d5c9-c2e5-448f-a7ab-ae0e11311c93-nlchildcare-com/assets/images/fcaf38_d2ba9091c83641eea86f9e01c7d76b08_mv2-2.jpg"
                  alt="Child engaging with interactive learning technology at New Life Child Care"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-linear-to-br from-primary-yellow to-orange-400 text-slate-900 p-6 rounded-2xl shadow-2xl max-w-60 border-4 border-white/10"
              >
                <div className="flex items-start gap-3 mb-2">
                  <Sparkles className="text-slate-900 shrink-0" size={28} />
                  <div>
                    <p className="text-lg font-bold leading-tight">Serving Hanover families</p>
                    <p className="text-2xl font-black">since 2017</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative dots pattern */}
              <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20">
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-primary-yellow rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;