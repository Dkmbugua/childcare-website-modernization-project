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
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/beb3d5c9-c2e5-448f-a7ab-ae0e11311c93-nlchildcare-com/assets/images/fcaf38_5f42aaa9eafb4b2da708e093985eb4e3_mv2-3.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/beb3d5c9-c2e5-448f-a7ab-ae0e11311c93-nlchildcare-com/assets/images/d819bec87997135f0c7853f8dbeea370-5.jpg",
];

const programs = [
  {
    title: "¡ Yo Hablo Español!",
    description:
      "Yo Hablo Español is a revolutionary Spanish bilingual class that focuses on submerging the children in the Spanish language in a fun and interactive way.",
  },
  {
    title: "KID-FIT",
    description:
      "KID-FIT is a fitness class designed exclusively for toddler. Children will learn all about healthy habits and exercise through a series of lessons.",
  },
  {
    title: "Music class",
    description:
      "Our very own Ms. Brianca takes the children on a musical adventure weekly. Rock on ukulele style.",
  },
  {
    title: "Dance Classes",
    description:
      "The children learn how to move and groove during our fun dance class.",
  },
  {
    title: "Cooking classes",
    description:
      "We host cooking class every week. Cooking classes usually mirror the lesson plan for the week.",
  },
  {
    title: "Lending library",
    description:
      "Reading is the one most important skills your child will learn in school. The New Life Child Care library offers a weekly lending library program to our students.",
  },
  {
    title: "Sign Language classes",
    description:
      "During our sign language classes the children learn the basic signs.",
  },
  {
    title: "Bible lessons",
    description:
      "We use the Abeka curriculum to teach the children about God and how God is present in our every day lives.",
  },
];

export default function EnrichmentPrograms() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

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

  return (
    <section className="relative w-full min-h-[700px] md:min-h-[600px] sm:min-h-fit flex items-center justify-center text-white overflow-hidden">
      <Carousel
        setApi={setApi}
        plugins={[autoplayPlugin.current]}
        opts={{ loop: true }}
        className="absolute inset-0 w-full h-full -z-10"
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <Image
                src={src}
                alt={`Enrichment activity ${index + 1}`}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="w-full h-full"
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.6)] z-0" />

      <div className="relative z-10 container max-w-[900px] mx-auto px-5 md:px-12 py-20 text-center">
        <h2
          className="font-display text-[48px] leading-[1.3] font-bold mb-8 text-center sm:text-[32px] sm:leading-[1.4]"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
        >
          Enrichment Programs
        </h2>
        <div className="space-y-6">
          {programs.map((program, index) => (
            <p
              key={index}
              className="font-body text-white leading-[1.7]"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
            >
              <strong className="font-bold text-xl text-primary-yellow">
                {program.title}
              </strong>
              <span className="text-base"> - {program.description}</span>
            </p>
          ))}
        </div>
      </div>

      <button
        onClick={() => api?.scrollPrev()}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 h-9 w-9 md:h-12 md:w-12 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-[8px] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 text-white" />
      </button>
      <button
        onClick={() => api?.scrollNext()}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 h-9 w-9 md:h-12 md:w-12 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-[8px] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}