import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, FileText, Users, Calendar, Download, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const admissionFormSchema = z.object({
  studentName: z.string().trim().min(2, "Student name must be at least 2 characters").max(100),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["male", "female"], { required_error: "Please select a gender" }),
  parentName: z.string().trim().min(2, "Parent/Guardian name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15),
  address: z.string().trim().min(10, "Please provide a complete address").max(500),
  appliedLevel: z.enum(["creche", "nursery", "primary", "secondary"], { required_error: "Please select a level" }),
  previousSchool: z.string().trim().max(200).optional(),
  medicalConditions: z.string().trim().max(1000).optional(),
  additionalInfo: z.string().trim().max(1000).optional(),
});

type AdmissionFormData = z.infer<typeof admissionFormSchema>;

const Admissions = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionFormSchema),
  });

  const onSubmit = async (data: AdmissionFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", data);
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your application and contact you within 3-5 business days.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-school-navy to-school-navy-light text-white">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Prime Scholars Academy</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Begin your child's journey to academic excellence. Applications now open for 2024/2025 session.
            </p>
          </div>
        </section>

        {/* Admission Steps */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-school-navy text-center mb-12">
              4 Simple Steps to Join Us
            </h2>
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
        </section>

        {/* Requirements */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-school-navy text-center mb-12">
              Admission Requirements
            </h2>
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
        </section>

        {/* Online Application Form */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-school-navy mb-4">
                Online Application Form
              </h2>
              <p className="text-muted-foreground">
                Complete the form below to begin your admission process
              </p>
            </div>

            <Card className="school-card-premium">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Student Information */}
                <div>
                  <h3 className="text-2xl font-bold text-school-navy mb-6">Student Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="studentName">Student Full Name *</Label>
                      <Input
                        id="studentName"
                        {...register("studentName")}
                        placeholder="Enter student's full name"
                        className="mt-2"
                      />
                      {errors.studentName && (
                        <p className="text-destructive text-sm mt-1">{errors.studentName.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        {...register("dateOfBirth")}
                        className="mt-2"
                      />
                      {errors.dateOfBirth && (
                        <p className="text-destructive text-sm mt-1">{errors.dateOfBirth.message}</p>
                      )}
                    </div>

                    <div>
                      <Label>Gender *</Label>
                      <RadioGroup
                        onValueChange={(value) => setValue("gender", value as "male" | "female")}
                        className="flex gap-4 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male" className="font-normal">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female" className="font-normal">Female</Label>
                        </div>
                      </RadioGroup>
                      {errors.gender && (
                        <p className="text-destructive text-sm mt-1">{errors.gender.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="appliedLevel">Applying For *</Label>
                      <Select onValueChange={(value) => setValue("appliedLevel", value as any)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="creche">Crèche</SelectItem>
                          <SelectItem value="nursery">Nursery</SelectItem>
                          <SelectItem value="primary">Primary School</SelectItem>
                          <SelectItem value="secondary">Secondary School</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.appliedLevel && (
                        <p className="text-destructive text-sm mt-1">{errors.appliedLevel.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Label htmlFor="previousSchool">Previous School (if applicable)</Label>
                    <Input
                      id="previousSchool"
                      {...register("previousSchool")}
                      placeholder="Name of previous school"
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Parent/Guardian Information */}
                <div className="border-t border-border pt-6">
                  <h3 className="text-2xl font-bold text-school-navy mb-6">Parent/Guardian Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="parentName">Full Name *</Label>
                      <Input
                        id="parentName"
                        {...register("parentName")}
                        placeholder="Enter parent/guardian name"
                        className="mt-2"
                      />
                      {errors.parentName && (
                        <p className="text-destructive text-sm mt-1">{errors.parentName.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="+234 800 000 0000"
                        className="mt-2"
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="your.email@example.com"
                        className="mt-2"
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="address">Residential Address *</Label>
                      <Textarea
                        id="address"
                        {...register("address")}
                        placeholder="Enter complete address"
                        className="mt-2"
                        rows={3}
                      />
                      {errors.address && (
                        <p className="text-destructive text-sm mt-1">{errors.address.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="border-t border-border pt-6">
                  <h3 className="text-2xl font-bold text-school-navy mb-6">Additional Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="medicalConditions">Medical Conditions or Allergies</Label>
                      <Textarea
                        id="medicalConditions"
                        {...register("medicalConditions")}
                        placeholder="Please list any medical conditions or allergies we should be aware of"
                        className="mt-2"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="additionalInfo">Additional Comments</Label>
                      <Textarea
                        id="additionalInfo"
                        {...register("additionalInfo")}
                        placeholder="Any additional information you'd like to share"
                        className="mt-2"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <div className="bg-muted/50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> After submitting this form, you will be contacted to schedule 
                      an interview and assessment. Please ensure all information provided is accurate.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    variant="admission"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </Card>

            {/* Download Option */}
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">Prefer to submit offline?</p>
              <Button variant="outline" size="lg">
                <Download className="h-4 w-4 mr-2" />
                Download PDF Application Form
              </Button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <Card className="school-card max-w-2xl mx-auto text-center">
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
                  Call: +234 809 123 4567
                </Button>
                <Button variant="outline" size="lg">
                  Send Email Inquiry
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Admissions;
