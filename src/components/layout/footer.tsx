import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-oswald font-bold text-neon-blue mb-4">
              GYM PARADISE
            </h3>
            <p className="text-muted-foreground mb-6">
              Transform your body, transform your life. Join the ultimate fitness experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-neon-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-neon-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-neon-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-neon-blue transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-oswald font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/shop" className="block text-muted-foreground hover:text-neon-blue transition-colors">
                Shop
              </Link>
              <Link to="/coaching" className="block text-muted-foreground hover:text-neon-blue transition-colors">
                Personal Training
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-neon-blue transition-colors">
                About Us
              </Link>
              <Link to="/testimonials" className="block text-muted-foreground hover:text-neon-blue transition-colors">
                Testimonials
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-oswald font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">Personal Training</p>
              <p className="text-muted-foreground">Group Classes</p>
              <p className="text-muted-foreground">Online Coaching</p>
              <p className="text-muted-foreground">Nutrition Plans</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-oswald font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-neon-blue" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-neon-blue" />
                <span className="text-muted-foreground">info@gymparadise.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-neon-blue" />
                <span className="text-muted-foreground">123 Fitness Ave, City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-secondary mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-4 lg:mb-0">
              <h4 className="text-lg font-oswald font-semibold mb-2">Stay Updated</h4>
              <p className="text-muted-foreground">Get fitness tips and exclusive offers.</p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-64 px-4 py-2 bg-secondary border border-muted rounded-l-lg focus:outline-none focus:ring-2 focus:ring-neon-blue"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-neon-blue to-neon-green text-black font-semibold rounded-r-lg hover:shadow-neon transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Gym Paradise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}