import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mrs. Chioma Adebayo",
      role: "Parent of Kemi (SS2 Student)",
      content: "Prime Scholars Academy has transformed my daughter's approach to learning. The teachers are dedicated, the facilities are excellent, and the moral values instilled are outstanding. I couldn't have made a better choice.",
      rating: 5,
      location: "Abuja"
    },
    {
      name: "Mr. Ibrahim Hassan",
      role: "Parent of Aisha & Yusuf",
      content: "Both my children have flourished at Prime Scholars. The school's emphasis on character development alongside academic excellence is remarkable. The individual attention each child receives is truly commendable.",
      rating: 5,
      location: "Abuja"
    },
    {
      name: "Dr. Emeka Okafor",
      role: "Parent of Chinedu (Primary 6)",
      content: "The technology integration and modern teaching methods at Prime Scholars are impressive. My son is not just learning; he's developing critical thinking skills that will serve him throughout life.",
      rating: 5,
      location: "Abuja"
    },
    {
      name: "Mrs. Funmi Adeola",
      role: "Parent of Temi (JSS3 Student)",
      content: "The nurturing environment at Prime Scholars has helped my shy daughter become confident and outgoing. The extracurricular activities have revealed talents we never knew she had.",
      rating: 5,
      location: "Abuja"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-school-navy mb-6">
            What Parents Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what parents in our community have to say 
            about their experience with Prime Scholars Academy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card">
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-school-gold mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-school-gold text-school-gold" />
                ))}
              </div>
              
              {/* Testimonial Content */}
              <p className="text-school-text italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author Info */}
              <div className="border-t border-border pt-4">
                <h4 className="font-bold text-school-navy">{testimonial.name}</h4>
                <p className="text-sm text-school-gold font-medium">{testimonial.role}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="school-card-premium">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-school-navy mb-4">
              Proven Track Record
            </h3>
            <p className="text-muted-foreground">
              Our commitment to excellence is reflected in our outstanding results and achievements.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-school-gold mb-2">98%</div>
              <div className="text-sm text-muted-foreground">WAEC Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-school-gold mb-2">85%</div>
              <div className="text-sm text-muted-foreground">University Admission</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-school-gold mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-school-gold mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Parent Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;