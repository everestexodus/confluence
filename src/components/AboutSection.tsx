import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Heart } from "lucide-react";
import principalImage from "@/assets/principal.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Academic Excellence",
      description: "Comprehensive curriculum combining Nigerian and international standards for optimal learning outcomes."
    },
    {
      icon: Users,
      title: "Character Development",
      description: "Building confident, responsible, and morally grounded future leaders through holistic education."
    },
    {
      icon: Award,
      title: "Innovation & Technology",
      description: "Modern teaching methods and cutting-edge facilities to prepare students for the digital age."
    },
    {
      icon: Heart,
      title: "Nurturing Environment",
      description: "A caring, supportive community where every child feels valued and empowered to reach their potential."
    }
  ];

  return (
    <section id="about" className="academic-section">
      <div className="mx-auto px-4 lg:px-6 container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-bold text-school-navy text-3xl md:text-5xl">
            About Confluence Int School
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground text-lg">
            For over 15 years, we have been shaping young minds and nurturing future leaders through 
            world-class education and character development in the heart of kogi.
          </p>
        </div>

        <div className="items-center gap-16 grid lg:grid-cols-2 mb-20">
          {/* Principal's Message */}
          <div>
            <div className="school-card-premium">
              <div className="flex items-start gap-6 mb-6">
                <img
                  src={principalImage}
                  alt="Dr. Adanna Okoro, Principal"
                  className="border-4 border-school-gold rounded-full w-20 h-20 object-cover"
                />
                <div>
                  <h3 className="mb-2 font-bold text-school-navy text-2xl">Dr. Adanna Okoro</h3>
                  <p className="font-semibold text-school-gold">Principal & CEO</p>
                </div>
              </div>
              
              <blockquote className="mb-6 text-school-text text-lg italic">
                "At Confluence Int School, we believe every child is uniquely gifted. Our mission is to 
                provide an environment where these gifts can flourish, where academic excellence meets 
                character development, and where young minds are prepared to make meaningful contributions 
                to society."
              </blockquote>
              
              <div className="font-semibold text-school-navy">
                - PhD Educational Leadership, Cambridge University
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="school-card">
              <h3 className="mb-4 font-bold text-school-navy text-2xl">Our Mission</h3>
              <p className="text-school-text leading-relaxed">
                To provide holistic, world-class education that develops academic excellence, 
                character, and leadership skills in every student, preparing them to become 
                responsible global citizens who will positively impact their communities.
              </p>
            </div>

            <div className="school-card">
              <h3 className="mb-4 font-bold text-school-navy text-2xl">Our Vision</h3>
              <p className="text-school-text leading-relaxed">
                To be Nigeria's premier educational institution, recognized internationally 
                for academic excellence, innovative teaching methods, and the development 
                of future leaders who will drive positive change in Africa and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="mb-12 font-bold text-school-navy text-3xl text-center">Our Core Values</h3>
          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="group text-center hover:scale-105 transition-transform duration-300 school-card">
                <div className="inline-flex justify-center items-center bg-school-gold/10 group-hover:bg-school-gold/20 mb-6 rounded-full w-16 h-16 transition-colors">
                  <value.icon className="w-8 h-8 text-school-gold" />
                </div>
                <h4 className="mb-4 font-bold text-school-navy text-xl">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="mx-auto max-w-2xl school-card-premium">
            <h3 className="mb-4 font-bold text-school-navy text-2xl">
              Ready to Join Our Community?
            </h3>
            <p className="mb-6 text-muted-foreground">
              Discover how Confluence Int School can help your child reach their full potential. 
              Schedule a visit today and see our world-class facilities firsthand.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <Button variant="admission" size="lg">
                Schedule a Visit
              </Button>
              <Button variant="outline" size="lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;