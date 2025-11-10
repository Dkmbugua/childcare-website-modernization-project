"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Music, Languages, Dumbbell, PartyPopper, ChefHat, BookOpen, Hand, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const images = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/beb3d5c9-c2e5-448f-a7ab-ae0e11311c93-nlchildcare-com/assets/images/fcaf38_5f42aaa9eafb4b2da708e093985eb4e3_mv2-3.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/beb3d5c9-c2e5-448f-a7ab-ae0e11311c93-nlchildcare-com/assets/images/d819bec87997135f0c7853f8dbeea370-5.jpg",
];

const programs = [
  {
    title: "¡ Yo Hablo Español!",
    description:
      "Yo Hablo Español is a revolutionary Spanish bilingual class that focuses on submerging the children in the Spanish language in a fun and interactive way.",
    icon: Languages,
  },
  {
    title: "KID-FIT",
    description:
      "KID-FIT is a fitness class designed exclusively for toddler. Children will learn all about healthy habits and exercise through a series of lessons.",
    icon: Dumbbell,
  },
  {
    title: "Music class",
    description:
      "Our very own Ms. Brianca takes the children on a musical adventure weekly. Rock on ukulele style.",
    icon: Music,
  },
  {
    title: "Dance Classes",
    description:
      "The children learn how to move and groove during our fun dance class.",
    icon: PartyPopper,
  },
  {
    title: "Cooking classes",
    description:
      "We host cooking class every week. Cooking classes usually mirror the lesson plan for the week.",
    icon: ChefHat,
  },
  {
    title: "Lending library",
    description:
      "Reading is the one most important skills your child will learn in school. The New Life Child Care library offers a weekly lending library program to our students.",
    icon: BookOpen,
  },
  {
    title: "Sign Language classes",
    description:
      "During our sign language classes the children learn the basic signs.",
    icon: Hand,
  },
  {
    title: "Bible lessons",
    description:
      "We use the Abeka curriculum to teach the children about God and how God is present in our every day lives.",
    icon: Heart,
  },
];

export default function EnrichmentPrograms() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as any }
    }
  };

  return (
    <section id="enrichment-programs" className="relative w-full min-h-[800px] md:min-h-[700px] sm:min-h-fit flex items-center justify-center overflow-hidden bg-[#aca598]">
      {/* Background Carousel - Subtle overlay */}
      <Carousel
        setApi={setApi}
        plugins={[autoplayPlugin.current]}
        opts={{ loop: true }}
        className="absolute inset-0 w-full h-full -z-10"
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Enrichment activity ${index + 1}`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="w-full h-full opacity-30"
                  priority={index === 0}
                />
                {/* Light overlay to blend with background */}
                <div className="absolute inset-0 bg-[#aca598]/60" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Content */}
      <div className="relative z-10 container max-w-6xl mx-auto px-5 md:px-12 py-20">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-charcoal-black/15 border border-charcoal-black/25 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">
              <Sparkles className="text-charcoal-black" size={18} />
              <span className="text-sm font-bold text-charcoal-black uppercase tracking-wide">Extra Activities</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight font-bold mb-4 text-charcoal-black">
              Enrichment Programs
            </h2>
            <div className="h-1 w-32 bg-linear-to-r from-primary-yellow to-orange-400 rounded-full mx-auto mb-4" />
            <p className="text-lg text-charcoal-black/85 max-w-2xl mx-auto font-medium">
              Comprehensive programs designed to nurture creativity, physical development, and cultural awareness
            </p>
          </motion.div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-linear-to-r from-orange-400/40 to-amber-500/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
                  
                  {/* Card */}
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-charcoal-black/15 group-hover:border-orange-400/50 transition-all duration-300 h-full flex flex-col shadow-lg group-hover:shadow-xl">
                    <div className="flex items-start gap-4 mb-3">
                      {/* Icon */}
                      <div className="shrink-0 w-12 h-12 bg-primary-yellow/25 rounded-xl flex items-center justify-center group-hover:bg-orange-400/30 transition-colors duration-300 group-hover:scale-110 transform border border-primary-yellow/40">
                        <IconComponent className="text-charcoal-black" size={24} />
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-bold text-xl md:text-2xl text-amber-500 leading-tight group-hover:text-orange-600 transition-colors duration-300 flex-1">
                        {program.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-base text-charcoal-black/90 leading-relaxed font-medium">
                      {program.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current 
                ? "bg-charcoal-black w-10 shadow-lg shadow-charcoal-black/50" 
                : "bg-charcoal-black/40 hover:bg-charcoal-black/60 w-2.5"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}