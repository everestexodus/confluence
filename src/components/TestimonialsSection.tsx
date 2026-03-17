import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mrs. Chioma Adebayo",
      role: "Parent of Kemi (SS2 Student)",
      content: "Confluence Int School has transformed my daughter's approach to learning. The teachers are dedicated, the facilities are excellent, and the moral values instilled are outstanding. I couldn't have made a better choice.",
      rating: 5,
      location: "kogi"
    },
    {
      name: "Mr. Ibrahim Hassan",
      role: "Parent of Aisha & Yusuf",
      content: "Both my children have flourished at Prime Scholars. The school's emphasis on character development alongside academic excellence is remarkable. The individual attention each child receives is truly commendable.",
      rating: 5,
      location: "kogi"
    },
    {
      name: "Dr. Emeka Okafor",
      role: "Parent of Chinedu (Primary 6)",
      content: "The technology integration and modern teaching methods at Prime Scholars are impressive. My son is not just learning; he's developing critical thinking skills that will serve him throughout life.",
      rating: 5,
      location: "kogi"
    },
    {
      name: "Mrs. Funmi Adeola",
      role: "Parent of Temi (JSS3 Student)",
      content: "The nurturing environment at Prime Scholars has helped my shy daughter become confident and outgoing. The extracurricular activities have revealed talents we never knew she had.",
      rating: 5,
      location: "kogi"
    }
  ];

  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto px-4 lg:px-6 container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-bold text-school-navy text-3xl md:text-5xl">
            What Parents Say
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground text-lg">
            Don't just take our word for it. Here's what parents in our community have to say 
            about their experience with Confluence Int School.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="gap-8 grid md:grid-cols-2 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card">
              {/* Quote Icon */}
              <Quote className="mb-4 w-8 h-8 text-school-gold" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-school-gold w-5 h-5 text-school-gold" />
                ))}
              </div>
              
              {/* Testimonial Content */}
              <p className="mb-6 text-school-text italic leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author Info */}
              <div className="pt-4 border-border border-t">
                <h4 className="font-bold text-school-navy">{testimonial.name}</h4>
                <p className="font-medium text-school-gold text-sm">{testimonial.role}</p>
                <p className="text-muted-foreground text-xs">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="school-card-premium">
          <div className="mb-8 text-center">
            <h3 className="mb-4 font-bold text-school-navy text-2xl">
              Proven Track Record
            </h3>
            <p className="text-muted-foreground">
              Our commitment to excellence is reflected in our outstanding results and achievements.
            </p>
          </div>
          
          <div className="gap-8 grid grid-cols-2 md:grid-cols-4 text-center">
            <div>
              <div className="mb-2 font-bold text-school-gold text-3xl md:text-4xl">98%</div>
              <div className="text-muted-foreground text-sm">WAEC Success Rate</div>
            </div>
            <div>
              <div className="mb-2 font-bold text-school-gold text-3xl md:text-4xl">85%</div>
              <div className="text-muted-foreground text-sm">University Admission</div>
            </div>
            <div>
              <div className="mb-2 font-bold text-school-gold text-3xl md:text-4xl">50+</div>
              <div className="text-muted-foreground text-sm">Awards Won</div>
            </div>
            <div>
              <div className="mb-2 font-bold text-school-gold text-3xl md:text-4xl">100%</div>
              <div className="text-muted-foreground text-sm">Parent Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;