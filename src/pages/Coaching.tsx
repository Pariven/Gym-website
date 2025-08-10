import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/layout/footer";

const Coaching = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="container-custom section-padding">
          <h1 className="text-4xl font-oswald font-bold text-center mb-8">
            Personal <span className="text-neon">Coaching</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Personal Training', 'Online Coaching', 'Group Classes'].map((service, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border text-center">
                <h3 className="text-2xl font-oswald font-semibold mb-4">{service}</h3>
                <p className="text-muted-foreground mb-6">Professional guidance to reach your goals</p>
                <div className="text-3xl font-bold mb-6">$99/month</div>
                <button className="btn-hero w-full">Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Coaching;