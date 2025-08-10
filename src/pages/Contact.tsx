import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/layout/footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="container-custom section-padding">
          <h1 className="text-4xl font-oswald font-bold text-center mb-8">
            Contact <span className="text-neon">Us</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-oswald font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-neon-blue" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-neon-blue" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@gymparadise.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-neon-blue" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground">123 Fitness Avenue, Gym City, GC 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-neon-blue" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-muted-foreground">Mon-Fri: 5AM-11PM | Sat-Sun: 6AM-10PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-oswald font-semibold mb-6">Send Message</h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  ></textarea>
                </div>
                <button type="submit" className="btn-hero w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;