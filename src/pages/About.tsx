import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/layout/footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="container-custom section-padding">
          <h1 className="text-4xl font-oswald font-bold text-center mb-8">
            About <span className="text-neon">Gym Paradise</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-oswald font-semibold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2010, Gym Paradise has been transforming lives through fitness. 
                We believe that everyone deserves access to world-class training and equipment.
              </p>
              <p className="text-muted-foreground">
                Our mission is to create a supportive community where members can achieve 
                their fitness goals and unlock their full potential.
              </p>
            </div>
            <div className="h-96 bg-muted rounded-lg"></div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-oswald font-bold text-center mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['John Smith', 'Sarah Johnson', 'Mike Wilson'].map((trainer, index) => (
                <div key={index} className="text-center">
                  <div className="h-64 bg-muted rounded-lg mb-4"></div>
                  <h3 className="text-xl font-oswald font-semibold">{trainer}</h3>
                  <p className="text-neon-blue">Certified Personal Trainer</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;