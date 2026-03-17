import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Admissions", href: "#admissions" },
    { name: "Student Life", href: "#student-life" },
    { name: "Contact", href: "#contact" }
  ];

  const academicPrograms = [
    { name: "Crèche & Nursery", href: "#" },
    { name: "Primary School", href: "#" },
    { name: "Secondary School", href: "#" },
    { name: "After School Programs", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: Twitter, name: "Twitter", url: "#" }
  ];

  return (
    <footer className="bg-school-navy text-white">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-school-gold rounded-lg">
                <GraduationCap className="h-6 w-6 text-school-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Prime Scholars</h3>
                <p className="text-sm text-white/80">Academy</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Nurturing tomorrow's leaders through academic excellence, character development, 
              and holistic education in the heart of Abuja.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="p-2 bg-white/10 rounded-lg hover:bg-school-gold hover:text-school-navy transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-school-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h4 className="text-lg font-bold mb-6">Academic Programs</h4>
            <ul className="space-y-3">
              {academicPrograms.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-white/80 hover:text-school-gold transition-colors"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-school-gold mt-1 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <p>Plot 123, Cadastral Zone A07</p>
                  <p>Wuse 2, Abuja, FCT</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-school-gold flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <p>+234 809 123 4567</p>
                  <p>+234 806 789 0123</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-school-gold flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <p>info@primescholars.edu.ng</p>
                  <p>admissions@primescholars.edu.ng</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 Prime Scholars Academy. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-school-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-school-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-school-gold transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;