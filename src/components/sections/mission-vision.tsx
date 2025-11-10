import Image from 'next/image';
import { Award, Heart, ShieldCheck, Users } from 'lucide-react';

const MissionVision = () => {
  return (
    <section id="our-mission">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column: Content on Yellow Background */}
        <div className="bg-[#F4F412] flex items-center justify-center lg:justify-end py-12 px-6 sm:px-12 lg:py-20 lg:px-12 xl:px-16">
          <div className="w-full max-w-[600px]">
            <h2 className="font-display text-4xl lg:text-[48px] lg:leading-[1.3] font-bold mb-8 text-[#1a1a1a]">
              Our Mission and Vision
            </h2>
            <h3 className="font-body text-xl font-semibold mb-6 text-[#2a2a2a]">
              At New Life Child Care
            </h3>
            <div className="font-body text-base leading-[1.7] text-[#3D3D3D] space-y-6">
              <p>
                We believe that a safe, healthy, stable, comfortable, and culturally
                relevant environment is crucial to a child's growth. At New Life Child
                Care our mission is to develop a wholesome child experience while
                meeting the academic, physical, cognitive, and social emotional
                development standards. We will provide families with complete peace of
                mind and comfort knowing New Life Child Care is the perfect place for
                their child to learn and grow through play, movement, and premium
                loving care.
              </p>
              
              {/* Staff Qualifications Highlight */}
              <div className="bg-charcoal-black/10 rounded-lg p-5 my-6">
                <h4 className="font-bold text-lg mb-3 text-[#1a1a1a] flex items-center gap-2">
                  <Award className="text-charcoal-black" size={20} />
                  Our Exceptional Staff
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="text-charcoal-black flex-shrink-0 mt-0.5" size={16} />
                    <p>
                      <strong>Exceed MSDE Requirements:</strong> All staff meet or exceed Maryland State Department of Education licensing standards
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Heart className="text-charcoal-black flex-shrink-0 mt-0.5" size={16} />
                    <p>
                      <strong>Certified in First Aid & CPR:</strong> Every team member maintains current emergency response certifications
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="text-charcoal-black flex-shrink-0 mt-0.5" size={16} />
                    <p>
                      <strong>Ongoing Training:</strong> Regular professional development programs ensure cutting-edge childcare practices
                    </p>
                  </div>
                </div>
              </div>

              <p>
                Our staff is highly trained and meet, or exceed, the Maryland State
                Department of Education (MSDE) licensing requirements. All staff
                members are certified in first aid and CPR as well as participate in
                ongoing professional development programs. We believe the quality of
                staff is the most important aspect to an exceptional child care
                program.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Image on Dark Background */}
        <div className="bg-[#231F20] flex items-center justify-center lg:justify-start py-12 px-6 sm:px-12 lg:py-20 lg:px-12 xl:px-16">
          <div className="relative w-full max-w-sm lg:max-w-md">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/beb3d5c9-c2e5-448f-a7ab-ae0e11311c93-nlchildcare-com/assets/images/fcaf38_6d8d7b64ecfe4894be28e1ca3765d71c_mv2-4.jpg"
              alt="Happy child smiling in classroom at New Life Child Care"
              width={400}
              height={533}
              className="rounded-2xl object-cover w-full h-auto shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;