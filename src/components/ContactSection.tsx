import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Plot 123, Cadastral Zone A07", "Lokoja, kogi", "Federal Capital Territory"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+234 809 123 4567", "+234 806 789 0123", "WhatsApp Available"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@primescholars.edu.ng", "admissions@primescholars.edu.ng", "principal@primescholars.edu.ng"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 7:30 AM - 4:00 PM", "Saturday: 8:00 AM - 1:00 PM", "Sunday: Closed"],
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#", color: "hover:text-blue-600" },
    { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-600" },
    { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-blue-400" }
  ];

  return (
    <section id="contact" className="bg-muted/30 py-20">
      <div className="mx-auto px-4 lg:px-6 container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-bold text-school-navy text-3xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground text-lg">
            We'd love to hear from you. Whether you have questions about admissions, want to schedule 
            a visit, or need more information, our team is here to help.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="group text-center hover:scale-105 transition-transform duration-300 school-card">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${info.color}`}>
                <info.icon className="w-8 h-8" />
              </div>
              <h4 className="mb-4 font-bold text-school-navy text-xl">{info.title}</h4>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Contact Form & Map */}
        <div className="gap-16 grid lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h3 className="mb-8 font-bold text-school-navy text-3xl">Send Us a Message</h3>
            <div className="school-card">
              <form className="space-y-6">
                <div className="gap-4 grid md:grid-cols-2">
                  <div>
                    <label className="block mb-2 font-medium text-school-navy text-sm">
                      First Name *
                    </label>
                    <Input 
                      placeholder="Enter your first name"
                      className="border-border focus:border-school-gold"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-school-navy text-sm">
                      Last Name *
                    </label>
                    <Input 
                      placeholder="Enter your last name"
                      className="border-border focus:border-school-gold"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2 font-medium text-school-navy text-sm">
                    Email Address *
                  </label>
                  <Input 
                    type="email"
                    placeholder="Enter your email address"
                    className="border-border focus:border-school-gold"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium text-school-navy text-sm">
                    Phone Number
                  </label>
                  <Input 
                    type="tel"
                    placeholder="Enter your phone number"
                    className="border-border focus:border-school-gold"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium text-school-navy text-sm">
                    Subject *
                  </label>
                  <select className="bg-background px-3 py-2 border border-border focus:border-school-gold rounded-md focus:ring-1 focus:ring-school-gold w-full">
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="visit">Schedule a Visit</option>
                    <option value="academics">Academic Programs</option>
                    <option value="fees">Fee Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block mb-2 font-medium text-school-navy text-sm">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us how we can help you..."
                    className="border-border focus:border-school-gold min-h-[120px]"
                  />
                </div>
                
                <Button variant="admission" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Map & Additional Info */}
          <div>
            <h3 className="mb-8 font-bold text-school-navy text-3xl">Find Us</h3>
            
            {/* Map Placeholder */}
            <div className="mb-8 school-card">
              <div className="flex justify-center items-center bg-muted mb-4 rounded-lg aspect-video">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 w-16 h-16 text-school-gold" />
                  <p className="font-semibold text-school-navy">Interactive Map</p>
                  <p className="text-muted-foreground text-sm">
                    Plot 123, Cadastral Zone A07, Wuse 2, kogi
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                View on Google Maps
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="school-card-premium">
              <h4 className="mb-6 font-bold text-school-navy text-xl text-center">
                Quick Actions
              </h4>
              <div className="space-y-4">
                <Button variant="hero" size="lg" className="w-full">
                  Schedule a Visit
                </Button>
                <Button variant="admission" size="lg" className="w-full">
                  Download Brochure
                </Button>
                <Button variant="accent" size="lg" className="w-full">
                  Apply Online
                </Button>
              </div>
              
              {/* Social Media */}
              <div className="mt-8 pt-6 border-border border-t">
                <h5 className="mb-4 font-semibold text-school-navy text-center">Follow Us</h5>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;