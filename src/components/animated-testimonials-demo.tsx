import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Coach Marcus transformed my entire approach to fitness. His expertise in strength training and nutrition helped me achieve goals I never thought possible.",
      name: "Marcus Rodriguez",
      designation: "Head Strength & Conditioning Coach",
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Sarah's personalized training programs and motivational coaching style have helped hundreds of members reach their fitness milestones with confidence.",
      name: "Sarah Chen",
      designation: "Certified Personal Trainer & Nutritionist",
      src: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Michael's expertise in functional fitness and rehabilitation has been instrumental in helping athletes recover and perform at their peak levels.",
      name: "Michael Thompson",
      designation: "Sports Performance Specialist",
      src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Emily's group fitness classes are legendary. Her energy and expertise in HIIT training create an atmosphere where everyone pushes their limits.",
      name: "Emily Watson",
      designation: "Group Fitness Director & HIIT Specialist",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "David's approach to bodybuilding and physique transformation is unmatched. His attention to detail and scientific approach delivers incredible results.",
      name: "David Kim",
      designation: "Bodybuilding Coach & Contest Prep Specialist",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  
  
  return (
    <div className="w-full">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-shock font-bold mb-6">
          Our <span className="bg-gradient-to-r from-neon-blue via-neon-green to-neon-pink bg-clip-text text-transparent">Coaches</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Train with certified professionals who are dedicated to helping you achieve your fitness goals and transform your life.
        </p>
      </div>
      
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
}