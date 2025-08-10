import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroCarousel } from "@/components/ui/hero-carousel";
import AnimatedTestimonialsDemo from "@/components/animated-testimonials-demo";
import { Link } from "react-router-dom";
import { ArrowRight, Dumbbell, Users, Award, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-secondary to-accent">
      <Navigation />
      
      {/* Hero Carousel with Real Gym Images */}
      <HeroCarousel>
        <div className="text-center text-white container-custom px-6">
          <div className="scroll-reveal revealed">
            <h1 className="hero-title mb-8">
              UNLEASH YOUR
              <br />
              <span className="text-neon bg-gradient-to-r from-neon-blue via-neon-green to-neon-pink bg-clip-text text-transparent animate-glow-rotate">
                POTENTIAL
              </span>
            </h1>
            <p className="text-xl md:text-3xl mb-10 max-w-3xl mx-auto font-medium text-gray-200 opacity-90">
              Transform your body, mind, and spirit with cutting-edge equipment, world-class trainers, and an unstoppable community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-hero pulse-neon group">
                <span className="relative z-10">START YOUR TRANSFORMATION</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                to="/coaching" 
                className="px-10 py-5 border-2 border-neon-blue text-neon-blue font-bold rounded-xl hover:bg-neon-blue hover:text-black transition-all duration-500 uppercase tracking-wide backdrop-blur-sm bg-white/5 hover:shadow-neon-strong hover:scale-105"
              >
                EXPLORE PROGRAMS
              </Link>
            </div>
          </div>
        </div>
      </HeroCarousel>

      {/* Stats Section with Enhanced Styling */}
      <section className="bg-gradient-to-r from-black via-secondary to-black text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-neon-blue/5 animate-pulse"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5000+", label: "Happy Members", color: "from-neon-blue to-neon-green" },
              { number: "50+", label: "Expert Trainers", color: "from-neon-green to-neon-pink" },
              { number: "15", label: "Years Experience", color: "from-neon-pink to-neon-purple" },
              { number: "24/7", label: "Gym Access", color: "from-neon-purple to-neon-blue" },
            ].map((stat, index) => (
              <div key={index} className="group hover:scale-110 transition-transform duration-500">
                <div className={`text-4xl md:text-6xl font-oswald font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:animate-pulse`}>
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Enhanced Dark Theme */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-pink/5 animate-pulse"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-5xl md:text-6xl font-shock font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-neon-blue via-neon-green to-neon-pink bg-clip-text text-transparent">FitMax</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference with premium facilities, personalized training, and an unstoppable community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Dumbbell,
                title: "Premium Equipment",
                description: "State-of-the-art machines and free weights from top brands",
                gradient: "from-neon-blue to-neon-green"
              },
              {
                icon: Users,
                title: "Expert Trainers", 
                description: "Certified professionals dedicated to your fitness success",
                gradient: "from-neon-green to-neon-pink"
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "Track record of helping members achieve their goals",
                gradient: "from-neon-pink to-neon-purple"
              },
              {
                icon: Clock,
                title: "Flexible Hours",
                description: "24/7 access to fit your busy lifestyle",
                gradient: "from-neon-purple to-neon-blue"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group card-float p-6 hover:scale-105 transition-all duration-500">
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-neon-strong group-hover:animate-pulse transition-all duration-500`}>
                  <feature.icon className="h-10 w-10 text-black" />
                </div>
                <h3 className="text-2xl font-oswald font-bold mb-4 text-white group-hover:text-neon-blue transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Coaches Section */}
      <section className="bg-gradient-to-b from-secondary to-background section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-neon-blue/5 animate-pulse"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-5xl md:text-6xl font-shock font-bold mb-6">
              Our <span className="bg-gradient-to-r from-neon-blue via-neon-green to-neon-pink bg-clip-text text-transparent">Coaches</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Train with certified professionals who are dedicated to helping you achieve your fitness goals and transform your life.
            </p>
          </div>
          <AnimatedTestimonialsDemo />
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="bg-gradient-to-r from-black via-accent to-secondary text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-pink/10 animate-pulse"></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-shock font-bold mb-8">
            Ready to <span className="bg-gradient-to-r from-neon-blue via-neon-green to-neon-pink bg-clip-text text-transparent animate-glow-rotate">Transform</span>?
          </h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto text-gray-200">
            Join thousands of members who have already transformed their lives. Your fitness journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="btn-hero pulse-neon text-lg">
              JOIN NOW - SPECIAL OFFER
            </Link>
            <Link 
              to="/coaching" 
              className="px-10 py-5 border-2 border-neon-blue text-neon-blue font-bold rounded-xl hover:bg-neon-blue hover:text-black transition-all duration-500 uppercase tracking-wide backdrop-blur-sm bg-white/5 hover:shadow-neon-strong hover:scale-105 text-lg"
            >
              FREE CONSULTATION
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;