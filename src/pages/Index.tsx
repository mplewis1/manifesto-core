import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <section className="text-center mb-section">
          <h1 className="text-hero text-foreground mb-8 font-inter">
            We build the future, one line at a time
          </h1>
        </section>

        {/* Manifesto Content */}
        <section className="max-w-3xl mx-auto space-y-paragraph">
          <p className="text-manifesto text-foreground leading-relaxed">
            Technology isn't just about code—it's about possibility. We believe in creating 
            solutions that don't just solve today's problems, but anticipate tomorrow's 
            opportunities. Every product we build, every line we write, every decision we make 
            is guided by one principle: meaningful innovation that serves real human needs.
          </p>

          <p className="text-manifesto text-foreground leading-relaxed">
            In a world saturated with complexity, we choose simplicity. In a market obsessed 
            with features, we focus on purpose. We don't build software just because we can—we 
            build it because we must. Because somewhere, someone has a problem that deserves 
            an elegant solution.
          </p>

          <p className="text-manifesto text-foreground leading-relaxed">
            We are craftspeople in the digital age. We care about performance, usability, and 
            the small details that make the difference between good and exceptional. We believe 
            that the best technology disappears into the background, empowering people to do 
            what they do best: create, connect, and grow.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-section">
          <Button variant="manifesto" size="lg" asChild>
            <a 
              href="#" 
              className="inline-flex items-center justify-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Join Our Mission
            </a>
          </Button>
        </section>
      </div>
    </main>
  );
};

export default Index;