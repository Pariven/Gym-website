import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/layout/footer";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="container-custom section-padding">
          <h1 className="text-4xl font-oswald font-bold text-center mb-8">
            Member <span className="text-neon">Reviews</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((review) => (
              <div key={review} className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-neon-blue text-neon-blue" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Amazing gym with top-notch equipment and incredible trainers. 
                  I've seen amazing results in just 3 months!"
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-muted rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Customer {review}</p>
                    <p className="text-sm text-muted-foreground">Member since 2023</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;