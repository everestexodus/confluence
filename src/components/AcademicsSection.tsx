import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Globe, Award, Microscope, Palette } from "lucide-react";
import studentsScience from "@/assets/students-science.jpg";

const AcademicsSection = () => {
  const programs = [
    {
      level: "Crèche & Nursery",
      age: "Ages 2-5",
      icon: Users,
      color: "bg-pink-100 text-pink-600",
      description: "Early childhood development with play-based learning and foundational skills.",
      features: ["Play-based Learning", "Social Skills Development", "Creative Arts", "Basic Literacy & Numeracy"]
    },
    {
      level: "Primary School",
      age: "Ages 6-11",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-600",
      description: "Strong academic foundation with character development and critical thinking.",
      features: ["Core Subjects Mastery", "ICT Integration", "Leadership Training", "Sports & Recreation"]
    },
    {
      level: "Secondary School",
      age: "Ages 12-18",
      icon: Globe,
      color: "bg-green-100 text-green-600",
      description: "Advanced curriculum preparing students for tertiary education and global opportunities.",
      features: ["WAEC/NECO Preparation", "A-Levels Option", "Career Guidance", "University Partnerships"]
    }
  ];

  const subjects = [
    { category: "Sciences", icon: Microscope, subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science"] },
    { category: "Arts", icon: Palette, subjects: ["Literature", "History", "Geography", "Fine Arts", "Music"] },
    { category: "Languages", icon: Globe, subjects: ["English", "French", "Igbo", "Hausa", "Yoruba"] },
    { category: "Others", icon: Award, subjects: ["Physical Education", "Business Studies", "Economics", "Civic Education"] }
  ];

  return (
    <section id="academics" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-school-navy mb-6">
            Academic Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive curriculum combines the best of Nigerian and international educational 
            standards, ensuring our students are well-prepared for local and global opportunities.
          </p>
        </div>

        {/* Education Levels */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <Card key={index} className="school-card group hover:scale-105 transition-all duration-300">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${program.color}`}>
                <program.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-school-navy mb-2">{program.level}</h3>
              <p className="text-school-gold font-semibold mb-4">{program.age}</p>
              <p className="text-muted-foreground mb-6">{program.description}</p>
              
              <ul className="space-y-2 mb-6">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-school-text">
                    <div className="w-2 h-2 bg-school-gold rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full group-hover:bg-school-navy group-hover:text-white">
                Learn More
              </Button>
            </Card>
          ))}
        </div>

        {/* Curriculum & Science Lab Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-school-navy mb-6">
              Modern Learning Environment
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Our state-of-the-art facilities include fully equipped science laboratories, 
              computer labs, library, art studios, and modern classrooms designed to enhance 
              the learning experience.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-school-gold rounded-full"></div>
                <span className="text-school-text">Interactive Smart Boards in Every Classroom</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-school-gold rounded-full"></div>
                <span className="text-school-text">Fully Equipped Science & Computer Labs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-school-gold rounded-full"></div>
                <span className="text-school-text">Extensive Digital Library Resources</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-school-gold rounded-full"></div>
                <span className="text-school-text">Online Learning Platform Access</span>
              </div>
            </div>
            
            <Button variant="admission" size="lg">
              Book a Facility Tour
            </Button>
          </div>

          <div className="relative">
            <img
              src={studentsScience}
              alt="Students in Science Laboratory"
              className="rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-school-navy/20 to-transparent rounded-xl"></div>
          </div>
        </div>

        {/* Subject Areas */}
        <div>
          <h3 className="text-3xl font-bold text-school-navy text-center mb-12">
            Comprehensive Subject Areas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subjects.map((category, index) => (
              <Card key={index} className="school-card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-school-gold/10 rounded-full mb-6">
                  <category.icon className="h-8 w-8 text-school-gold" />
                </div>
                <h4 className="text-xl font-bold text-school-navy mb-4">{category.category}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {category.subjects.map((subject, idx) => (
                    <li key={idx}>{subject}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;