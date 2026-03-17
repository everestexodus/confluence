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
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-school-navy mb-6">
            About Prime Scholars Academy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            For over 15 years, we have been shaping young minds and nurturing future leaders through 
            world-class education and character development in the heart of Abuja.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Principal's Message */}
          <div>
            <div className="school-card-premium">
              <div className="flex items-start gap-6 mb-6">
                <img
                  src={principalImage}
                  alt="Dr. Adanna Okoro, Principal"
                  className="w-20 h-20 rounded-full object-cover border-4 border-school-gold"
                />
                <div>
                  <h3 className="text-2xl font-bold text-school-navy mb-2">Dr. Adanna Okoro</h3>
                  <p className="text-school-gold font-semibold">Principal & CEO</p>
                </div>
              </div>
              
              <blockquote className="text-lg text-school-text italic mb-6">
                "At Prime Scholars Academy, we believe every child is uniquely gifted. Our mission is to 
                provide an environment where these gifts can flourish, where academic excellence meets 
                character development, and where young minds are prepared to make meaningful contributions 
                to society."
              </blockquote>
              
              <div className="text-school-navy font-semibold">
                - PhD Educational Leadership, Cambridge University
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="school-card">
              <h3 className="text-2xl font-bold text-school-navy mb-4">Our Mission</h3>
              <p className="text-school-text leading-relaxed">
                To provide holistic, world-class education that develops academic excellence, 
                character, and leadership skills in every student, preparing them to become 
                responsible global citizens who will positively impact their communities.
              </p>
            </div>

            <div className="school-card">
              <h3 className="text-2xl font-bold text-school-navy mb-4">Our Vision</h3>
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
          <h3 className="text-3xl font-bold text-school-navy text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="school-card text-center group hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-school-gold/10 rounded-full mb-6 group-hover:bg-school-gold/20 transition-colors">
                  <value.icon className="h-8 w-8 text-school-gold" />
                </div>
                <h4 className="text-xl font-bold text-school-navy mb-4">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="school-card-premium max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-school-navy mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-muted-foreground mb-6">
              Discover how Prime Scholars Academy can help your child reach their full potential. 
              Schedule a visit today and see our world-class facilities firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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