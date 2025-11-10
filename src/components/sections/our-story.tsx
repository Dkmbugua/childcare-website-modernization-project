import Image from "next/image";
import { Heart, BookHeart, Sparkles } from "lucide-react";

const OurStory = () => {
  return (
    <section
      id="our-story"
      className="bg-secondary text-secondary-foreground py-12 md:py-20"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-[60px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content Column */}
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-4xl md:text-5xl font-normal text-white mb-4">
            Our Story
          </h2>
          <p className="font-body text-xl font-medium italic text-white/95 mb-6">
            We are built on a dream
          </p>
          <p className="font-body text-base text-white leading-[1.7] mb-6">
            New Life Child Care was founded by Dr. Abraham Shanklin Jr. and Jerika
            S. Lopez in 2017. What begun as a casual meeting between two
            entrepreneurs has become an amazing business relationship to serve
            our local community. New Life Child Care is filled with passion,
            love and hope. Each detail that goes into the daily operations of
            the center is carefully selected. We offer the best experience for
            your child.
          </p>

          {/* Christian Center Explanation */}
          <div className="bg-white/10 rounded-lg p-5 mb-6 backdrop-blur-sm">
            <h3 className="font-semibold text-lg text-white mb-3 flex items-center gap-2">
              <BookHeart className="text-primary-yellow" size={22} />
              Our Christian Foundation
            </h3>
            <p className="text-sm text-white/90 leading-relaxed mb-3">
              We are a Christian center that integrates faith-based values into our curriculum through age-appropriate Bible lessons using the Abeka curriculum. Our approach teaches children about love, kindness, and character development in a way that complements their academic and social growth.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-white/80">
                <Heart className="flex-shrink-0 mt-0.5 text-primary-yellow" size={14} />
                <span>Values-based character education</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white/80">
                <Heart className="flex-shrink-0 mt-0.5 text-primary-yellow" size={14} />
                <span>Age-appropriate faith integration</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white/80">
                <Heart className="flex-shrink-0 mt-0.5 text-primary-yellow" size={14} />
                <span>Welcoming environment for all families</span>
              </div>
            </div>
          </div>

          <p className="font-body text-base text-white leading-[1.7]">
            We are filled with lots of Enrichment opportunities for each and every child, creating a well-rounded educational experience that nurtures the whole child—academically, socially, emotionally, and spiritually.
          </p>
        </div>

        {/* Image Column */}
        <div className="relative">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/beb3d5c9-c2e5-448f-a7ab-ae0e11311c93-nlchildcare-com/assets/images/fcaf38_d2ba9091c83641eea86f9e01c7d76b08_mv2-2.jpg"
            alt="Child engaging with interactive learning technology at New Life Child Care"
            width={490}
            height={700}
            className="w-full h-auto object-cover rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-primary-yellow text-charcoal-black p-4 rounded-lg shadow-lg max-w-[200px]">
            <Sparkles className="text-charcoal-black mb-2" size={24} />
            <p className="text-sm font-bold">Serving Hanover families since 2017</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;