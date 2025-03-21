
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { title: "Home", href: "/", section: "hero" },
  { title: "Features", href: "/features", section: "features" },
  { title: "Pricing", href: "/pricing", section: "pricing" },
  { title: "About", href: "/about", section: "about" },
  { title: "Contact", href: "/contact", section: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine which section is currently in view
      const sections = ["hero", "features", "testimonials", "pricing", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top <= 150 && rect.bottom >= 150;
          if (isInView) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled
          ? "glass-effect py-3 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-display font-bold text-foreground relative z-10 flex items-center gap-2"
        >
          <span className="relative w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="absolute inset-0 bg-primary opacity-20 rounded-full animate-pulse"></span>
            <span className="text-white font-bold text-sm">AI</span>
          </span>
          <span className="tracking-tight">Wave</span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative group",
                    activeSection === link.section || 
                    (activeSection === "testimonials" && link.section === "features") ||
                    (link.section === "about" && activeSection === "contact")
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  )}
                >
                  {link.title}
                  <span 
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                      activeSection === link.section || 
                      (activeSection === "testimonials" && link.section === "features") ||
                      (link.section === "about" && activeSection === "contact")
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <Link 
              to="/login" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-sm font-medium bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-lg z-40 pt-20 px-6 transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-6">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.href}
                  className={cn(
                    "text-lg font-medium transition-colors block py-2",
                    activeSection === link.section ||
                    (activeSection === "testimonials" && link.section === "features") ||
                    (link.section === "about" && activeSection === "contact")
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-4">
            <Link
              to="/login"
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-lg font-medium bg-primary hover:bg-primary/90 text-white px-5 py-3 rounded-lg transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
