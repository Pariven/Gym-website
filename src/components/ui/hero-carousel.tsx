import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroCarouselProps {
  children: React.ReactNode;
}

const gymImages = [
  "/lovable-uploads/ce5fa0b1-764f-41e1-84ce-e059d27b6474.png",
  "/lovable-uploads/7f20fc60-6164-46b3-988b-760062e08450.png", 
  "/lovable-uploads/c22fc461-4f9b-4946-b724-32cef946440c.png",
  "/lovable-uploads/cd75f160-e926-4611-8521-afc74f0b7282.png",
  "/lovable-uploads/9f4fe133-81e8-4933-88e1-6c69a1b3e446.png",
  "/lovable-uploads/75180df3-66d0-4fe2-9705-b6c71871eff9.png",
  "/lovable-uploads/93261451-d2f3-47ee-a859-c718089a927f.png",
  "/lovable-uploads/1300ed23-9df9-4fb5-9fac-c12fd9d42ecd.png"
];

export function HeroCarousel({ children }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gymImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % gymImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + gymImages.length) % gymImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {gymImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60" />
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-blue/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-neon-pink/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-neon-green/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {gymImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-neon-blue shadow-neon scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}