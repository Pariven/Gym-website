import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/layout/footer";

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="container-custom section-padding">
          <h1 className="text-4xl font-oswald font-bold text-center mb-8">
            Shop <span className="text-neon">Supplements & Gear</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-card rounded-lg p-6 border border-border">
                <div className="h-48 bg-muted rounded-lg mb-4"></div>
                <h3 className="text-xl font-oswald font-semibold mb-2">Product {item}</h3>
                <p className="text-muted-foreground mb-4">Premium quality supplement</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$49.99</span>
                  <button className="btn-hero text-sm py-2 px-4">Add to Cart</button>
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

export default Shop;