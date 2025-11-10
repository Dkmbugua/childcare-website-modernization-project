import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah M.",
    role: "Parent of 3-year-old",
    content: "New Life Child Care has been an absolute blessing for our family. The staff genuinely cares about each child's development, and the enrichment programs are fantastic. My daughter comes home excited to tell us what she learned every day!",
    rating: 5,
  },
  {
    name: "Michael T.",
    role: "Parent of infant & toddler",
    content: "We have both our children enrolled here and couldn't be happier. The infant room is so nurturing, and the communication from the teachers is excellent. Knowing our kids are in such a safe, loving environment gives us complete peace of mind.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    role: "Parent of Pre-K student",
    content: "The Pre-K program has done wonders preparing our son for kindergarten. The teachers are professional, caring, and truly invested in the children's success. The Christian values integrated into the curriculum align perfectly with our family values.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Parent of 2-year-old",
    content: "From the moment we toured the facility, we knew this was the right place. The MSDE licensed status, combined with staff that exceeds requirements, made our decision easy. Our daughter loves going to 'school' every day!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-normal text-charcoal-black mb-4">
            What Parents Say
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Don't just take our word for it. Here's what families in our community have to say about their experience with New Life Child Care.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-secondary/5 border border-secondary/20 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 text-primary-yellow opacity-20" size={48} />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-primary-yellow fill-primary-yellow" size={18} />
                ))}
              </div>

              <p className="text-text-gray leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-sky-blue/20 rounded-full flex items-center justify-center">
                  <span className="text-sky-blue font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-charcoal-black">{testimonial.name}</p>
                  <p className="text-sm text-text-gray">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-text-gray mb-4">
            Want to share your experience? We'd love to hear from you!
          </p>
          <a 
            href="https://www.facebook.com/NewLifeChildCare1331/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sky-blue hover:text-deep-teal font-semibold text-sm transition-colors"
          >
            Leave a Review on Facebook →
          </a>
        </div>
      </div>
    </section>
  );
}
