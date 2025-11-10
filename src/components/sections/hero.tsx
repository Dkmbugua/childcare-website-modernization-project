import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Calendar, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-white" aria-label="Welcome section">
      <div className="mx-auto max-w-[980px]">
        <div className="flex min-h-[660px] flex-col overflow-hidden lg:flex-row">
          <div className="relative w-full min-h-[400px] lg:w-1/2 lg:min-h-full">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/beb3d5c9-c2e5-448f-a7ab-ae0e11311c93-nlchildcare-com/assets/images/fcaf38_0324d3cd8e7b4999ad939ac150416240_mv2-1.jpg"
              alt="Children coloring and engaging in activities at a table"
              fill
              className="object-cover object-[52%_27%]"
              priority
            />
          </div>
          <div className="flex w-full items-center justify-center bg-accent p-8 lg:w-1/2 lg:px-10 lg:py-12">
            <div className="w-full">
              <h1 className="font-display text-[65px] font-normal leading-[1.2] text-charcoal-black mb-6">
                Welcome
              </h1>
              <p className="font-body text-2xl font-semibold leading-[1.5] text-charcoal-black mb-6">
                New Life Child Care believes in a "wholesome" experience for your
                child.
              </p>
              <div className="space-y-4 font-body text-base font-normal leading-[1.6] text-charcoal-black mb-8">
                <p>
                  Welcome to New Life Child Care - a place for children to grow,
                  learn and play. Your children deserve nothing but the
                  best, New Life Child Care offers an environment that
                  encourages curiosity and fun.
                </p>
                <div className="bg-charcoal-black/5 p-4 rounded-lg">
                  <p className="font-semibold text-sm">
                    🏛️ MSDE Licensed Center #253492
                  </p>
                  <p className="text-sm mt-1 text-charcoal-black/80">
                    Fully licensed by the Maryland State Department of Education
                  </p>
                </div>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="flex items-center justify-center gap-2 bg-charcoal-black text-white px-6 py-3 font-semibold text-sm tracking-wider hover:opacity-85 transition-opacity"
                >
                  <Calendar size={18} />
                  SCHEDULE A TOUR
                </Link>
                <a
                  href="tel:410-440-3072"
                  className="flex items-center justify-center gap-2 border-2 border-charcoal-black text-charcoal-black px-6 py-3 font-semibold text-sm tracking-wider hover:bg-charcoal-black hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  CALL NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;