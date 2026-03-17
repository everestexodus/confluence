import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import schoolCampus from "@/assets/school-campus.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex justify-center items-center py-24 min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={schoolCampus}
          alt="Confluence Int School Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-school-navy/80 to-school-navy/60"></div>
      </div>

      {/* Content */}
      <div className="z-10 relative mx-auto px-4 lg:px-6 text-center container">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-school-gold/20 mb-6 px-4 py-2 border border-school-gold/30 rounded-full">
            <Star className="w-4 h-4 text-school-gold" />
            <span className="font-medium text-school-gold">Nigeria's Premier Educational Institution</span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-tight">
            Nurturing Tomorrow's
            <span className="block text-school-gold">Leaders, Today</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-8 max-w-2xl text-white/90 text-lg md:text-xl">
            Confluence Int School, kogi - Where academic excellence meets character development. 
            Providing world-class education from Crèche to Secondary level.
          </p>

          {/* CTA Buttons */}
          <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
            <Button variant="hero" size="xl" className="group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 hover:bg-white border-white/30 text-white hover:text-school-navy">
              Virtual Tour
            </Button>
          </div>

          {/* Key Stats */}
          <div className="gap-8 grid grid-cols-2 md:grid-cols-4 mx-auto mt-16 max-w-3xl">
            <div className="text-center">
              <div className="mb-2 font-bold text-school-gold text-3xl md:text-4xl">15+</div>
              <div className="text-white/80 text-sm">Years Excellence</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-bold text-school-gold text-3xl md:text-4xl">500+</div>
              <div className="text-white/80 text-sm">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-bold text-school-gold text-3xl md:text-4xl">98%</div>
              <div className="text-white/80 text-sm">WAEC Success</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-bold text-school-gold text-3xl md:text-4xl">50+</div>
              <div className="text-white/80 text-sm">Expert Teachers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="bottom-8 left-1/2 absolute text-white/70 -translate-x-1/2 animate-bounce transform">
        <div className="flex justify-center border-2 border-white/30 rounded-full w-6 h-10">
          <div className="bg-white/70 mt-2 rounded-full w-1 h-3"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;