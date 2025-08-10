import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/coaching", label: "Coaching" },
  { href: "/about", label: "About Us" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl",
      isScrolled 
        ? "bg-black/80 backdrop-blur-xl border border-neon-blue/30 shadow-neon" 
        : "bg-black/40 backdrop-blur-sm border border-white/10"
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-3 sm:px-6">
          <Link to="/" className="flex items-center space-x-1 sm:space-x-2 group">
            <div className="p-1.5 sm:p-2 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg group-hover:animate-glow-rotate">
              <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
            </div>
            <span className="text-base sm:text-lg md:text-2xl font-oswald font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
              GYM PARADISE
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-white hover:text-neon-blue transition-colors duration-300 font-medium",
                  location.pathname === item.href && "text-neon-blue"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-hero text-sm py-2 px-4"
            >
              JOIN NOW
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-neon-blue transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 border-t border-neon-blue/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2 text-white hover:text-neon-blue transition-colors duration-300",
                    location.pathname === item.href && "text-neon-blue"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mx-3 mt-4 btn-hero text-center text-sm py-2 px-4"
              >
                JOIN NOW
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}