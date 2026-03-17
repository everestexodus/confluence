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
      <div className="mx-auto px-4 lg:px-6 container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-bold text-school-navy text-3xl md:text-5xl">
            Admissions Process
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground text-lg">
            We welcome applications throughout the year and are committed to making the admission 
            process as smooth as possible for families. Join our community of learners today.
          </p>
        </div>

        {/* Admission Steps */}
        <div className="mb-20">
          <h3 className="mb-12 font-bold text-school-navy text-3xl text-center">
            4 Simple Steps to Join Us
          </h3>
          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="group text-center hover:scale-105 transition-transform duration-300 school-card">
                <div className="relative mb-6">
                  <div className="flex justify-center items-center bg-school-gold mx-auto mb-4 rounded-full w-16 h-16">
                    <step.icon className="w-8 h-8 text-school-navy" />
                  </div>
                  <div className="-top-2 -right-2 absolute flex justify-center items-center bg-school-navy rounded-full w-8 h-8 font-bold text-white text-sm">
                    {step.step}
                  </div>
                </div>
                <h4 className="mb-4 font-bold text-school-navy text-xl">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements by Level */}
        <div className="mb-20">
          <h3 className="mb-12 font-bold text-school-navy text-3xl text-center">
            Admission Requirements
          </h3>
          <div className="gap-8 grid lg:grid-cols-3">
            {requirements.map((req, index) => (
              <Card key={index} className="school-card">
                <h4 className="mb-6 font-bold text-school-navy text-2xl">{req.level}</h4>
                
                <div className="mb-6">
                  <h5 className="mb-3 font-semibold text-school-navy">Required Documents:</h5>
                  <ul className="space-y-2">
                    {req.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-center text-school-text text-sm">
                        <CheckCircle className="flex-shrink-0 mr-2 w-4 h-4 text-school-gold" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-border border-t">
                  <h5 className="mb-2 font-semibold text-school-navy">Assessment:</h5>
                  <p className="text-muted-foreground text-sm">{req.assessment}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Fee Structure */}
        <div className="items-start gap-16 grid lg:grid-cols-2 mb-16">
          <div>
            <h3 className="mb-8 font-bold text-school-navy text-3xl">Fee Structure</h3>
            <div className="school-card">
              <div className="space-y-4">
                {fees.map((fee, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-border border-b last:border-b-0">
                    <div>
                      <h5 className="font-semibold text-school-navy">{fee.item}</h5>
                      <p className="text-muted-foreground text-xs">{fee.note}</p>
                    </div>
                    <span className="font-bold text-school-gold">{fee.amount}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-school-gold/10 mt-6 p-4 rounded-lg">
                <p className="text-school-text text-sm">
                  <strong>Note:</strong> Payment plans available. Contact our bursar for detailed 
                  fee information and payment schedules for each class level.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-8 font-bold text-school-navy text-3xl">Ready to Apply?</h3>
            <div className="school-card-premium">
              <Calendar className="mx-auto mb-6 w-16 h-16 text-school-gold" />
              <h4 className="mb-4 font-bold text-school-navy text-2xl text-center">
                Applications Now Open
              </h4>
              <p className="mb-6 text-muted-foreground text-center">
                2024/2025 Academic Session. Limited spaces available. 
                Apply early to secure your child's place in our community.
              </p>
              
              <div className="space-y-4">
                <Button variant="hero" size="lg" className="w-full">
                  Apply Online Now
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Download className="mr-2 w-4 h-4" />
                  Download Application Form
                </Button>
                <Button variant="admission" size="lg" className="w-full">
                  Schedule School Visit
                </Button>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-muted-foreground text-sm">
                  Need help? Call our admissions office at
                </p>
                <p className="font-bold text-school-navy">+234 809 123 4567</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <div className="mx-auto max-w-2xl school-card">
            <h3 className="mb-4 font-bold text-school-navy text-2xl">
              Questions About Admissions?
            </h3>
            <p className="mb-6 text-muted-foreground">
              Our admissions team is here to help guide you through the process and answer 
              any questions you may have about joining the Confluence Int School family.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <Button variant="admission" size="lg">
                <Phone className="mr-2 w-4 h-4" />
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