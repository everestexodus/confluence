import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { name: "Home", href: "/", isRoute: true },
    { name: "About", href: "#about", isRoute: false },
    { name: "Academics", href: "#academics", isRoute: false },
    { name: "Student Life", href: "#student-life", isRoute: false },
    { name: "Admissions", href: "/admissions", isRoute: true },
    { name: "Contact", href: "#contact", isRoute: false },
  ];

  return (
    <header className="top-0 right-0 left-0 z-50 fixed bg-white/95 shadow-sm backdrop-blur-md border-border/50 border-b">
      <div className="mx-auto px-4 lg:px-6 container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-school-gold p-2 rounded-lg">
              <GraduationCap className="w-6 h-6 text-school-navy" />
            </div>
            <div>
              <h1 className="font-bold text-school-navy text-xl">Confluence Int'</h1>
              <p className="text-muted-foreground text-xs">school</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="font-medium text-school-text hover:text-school-navy transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-school-text hover:text-school-navy transition-colors"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/admissions">
              <Button variant="admission" size="default">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-school-navy" />
            ) : (
              <Menu className="w-6 h-6 text-school-navy" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden top-16 right-0 left-0 absolute bg-white shadow-lg border-border border-b">
            <nav className="space-y-4 px-4 py-6">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block py-2 font-medium text-school-text hover:text-school-navy transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2 font-medium text-school-text hover:text-school-navy transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <div className="pt-4">
                <Link to="/admissions">
                  <Button variant="admission" size="default" className="w-full">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;