import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, Users, Calendar, Download, Phone } from "lucide-react";

const AdmissionsSection = () => {
  const admissionSteps = [
    {
      step: "1",
      title: "Inquiry & School Visit",
      description: "Contact us to schedule a personalized tour and meet with our admissions team.",
      icon: Phone
    },
    {
      step: "2",
      title: "Application Submission",
      description: "Complete and submit the online application form with required documents.",
      icon: FileText
    },
    {
      step: "3",
      title: "Assessment & Interview",
      description: "Student assessment and parent interview to ensure a good fit for our community.",
      icon: Users
    },
    {
      step: "4",
      title: "Admission Decision",
      description: "Receive admission decision and complete enrollment procedures.",
      icon: CheckCircle
    }
  ];

  const requirements = [
    {
      level: "Crèche & Nursery",
      documents: [
        "Birth Certificate",
        "Immunization Records",
        "Recent Passport Photographs",
        "Previous School Report (if applicable)"
      ],
      assessment: "Play-based interaction and observation"
    },
    {
      level: "Primary School",
      documents: [
        "Birth Certificate",
        "Previous School Reports",
        "Transfer Certificate",
        "Recent Passport Photographs",
        "Medical Report"
      ],
      assessment: "English and Mathematics placement test"
    },
    {
      level: "Secondary School",
      documents: [
        "Birth Certificate",
        "Primary School Leaving Certificate",
        "First School Leaving Certificate",
        "Previous School Reports",
        "Recent Passport Photographs"
      ],
      assessment: "Entrance examination in core subjects"
    }
  ];

  const fees = [
    { item: "Application Fee", amount: "₦5,000", note: "Non-refundable" },
    { item: "Registration Fee", amount: "₦50,000", note: "One-time payment" },
    { item: "Development Levy", amount: "₦100,000", note: "Annual payment" },
    { item: "Tuition (Term)", amount: "Contact Bursar", note: "Varies by level" }
  ];

  return (
    <section id="admissions" className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-school-navy mb-6">
            Admissions Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We welcome applications throughout the year and are committed to making the admission 
            process as smooth as possible for families. Join our community of learners today.
          </p>
        </div>

        {/* Admission Steps */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-school-navy text-center mb-12">
            4 Simple Steps to Join Us
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="school-card text-center group hover:scale-105 transition-transform duration-300">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-school-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-school-navy" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-school-navy text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-school-navy mb-4">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements by Level */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-school-navy text-center mb-12">
            Admission Requirements
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} className="school-card">
                <h4 className="text-2xl font-bold text-school-navy mb-6">{req.level}</h4>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-school-navy mb-3">Required Documents:</h5>
                  <ul className="space-y-2">
                    {req.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-center text-sm text-school-text">
                        <CheckCircle className="h-4 w-4 text-school-gold mr-2 flex-shrink-0" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-border pt-4">
                  <h5 className="font-semibold text-school-navy mb-2">Assessment:</h5>
                  <p className="text-sm text-muted-foreground">{req.assessment}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Fee Structure */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <h3 className="text-3xl font-bold text-school-navy mb-8">Fee Structure</h3>
            <div className="school-card">
              <div className="space-y-4">
                {fees.map((fee, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                    <div>
                      <h5 className="font-semibold text-school-navy">{fee.item}</h5>
                      <p className="text-xs text-muted-foreground">{fee.note}</p>
                    </div>
                    <span className="font-bold text-school-gold">{fee.amount}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-school-gold/10 rounded-lg">
                <p className="text-sm text-school-text">
                  <strong>Note:</strong> Payment plans available. Contact our bursar for detailed 
                  fee information and payment schedules for each class level.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-school-navy mb-8">Ready to Apply?</h3>
            <div className="school-card-premium">
              <Calendar className="h-16 w-16 text-school-gold mx-auto mb-6" />
              <h4 className="text-2xl font-bold text-school-navy mb-4 text-center">
                Applications Now Open
              </h4>
              <p className="text-muted-foreground mb-6 text-center">
                2024/2025 Academic Session. Limited spaces available. 
                Apply early to secure your child's place in our community.
              </p>
              
              <div className="space-y-4">
                <Button variant="hero" size="lg" className="w-full">
                  Apply Online Now
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Application Form
                </Button>
                <Button variant="admission" size="lg" className="w-full">
                  Schedule School Visit
                </Button>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Need help? Call our admissions office at
                </p>
                <p className="font-bold text-school-navy">+234 809 123 4567</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <div className="school-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-school-navy mb-4">
              Questions About Admissions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our admissions team is here to help guide you through the process and answer 
              any questions you may have about joining the Prime Scholars Academy family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="admission" size="lg">
                <Phone className="h-4 w-4 mr-2" />
                Call Admissions
              </Button>
              <Button variant="outline" size="lg">
                Send Email Inquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;