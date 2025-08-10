import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/layout/footer";

const Blog = () => {
  const posts = [
    { title: "10 Essential Exercises for Beginners", date: "Mar 15, 2024", category: "Workout" },
    { title: "Nutrition Guide for Muscle Building", date: "Mar 12, 2024", category: "Nutrition" },
    { title: "The Science of Recovery", date: "Mar 10, 2024", category: "Recovery" },
    { title: "Cardio vs Strength Training", date: "Mar 8, 2024", category: "Workout" },
    { title: "Supplements: What You Really Need", date: "Mar 5, 2024", category: "Nutrition" },
    { title: "Setting Realistic Fitness Goals", date: "Mar 3, 2024", category: "Motivation" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="container-custom section-padding">
          <h1 className="text-4xl font-oswald font-bold text-center mb-8">
            Fitness <span className="text-neon">Blog</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted"></div>
                <div className="p-6">
                  <div className="text-sm text-neon-blue mb-2">{post.category}</div>
                  <h2 className="text-xl font-oswald font-semibold mb-3">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">
                    Expert tips and insights to help you on your fitness journey...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <button className="text-neon-blue hover:text-neon-green transition-colors font-medium">
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;