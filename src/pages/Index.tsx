import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-3xl mx-auto px-6 py-20 md:py-32">
        {/* Hero Section */}
        <section className="text-center mb-section">
          <h1 className="text-hero mb-6 font-inter">
            We build infrastructure for the next generation of AI
          </h1>
        </section>

        {/* Manifesto Content */}
        <section className="max-w-2xl mx-auto space-y-paragraph">
          <p className="text-manifesto leading-relaxed">
            The future of artificial intelligence depends on robust, scalable infrastructure 
            that can handle the complexity of tomorrow's models. We build the foundation 
            that enables researchers, companies, and innovators to push the boundaries of 
            what's possible without worrying about the underlying systems.
          </p>

          <p className="text-manifesto leading-relaxed">
            Our approach is simple: create infrastructure that scales seamlessly, performs 
            reliably, and remains accessible to teams of all sizes. Whether you're training 
            the next breakthrough model or deploying production AI at scale, our platform 
            provides the computational backbone you need.
          </p>

          <p className="text-manifesto leading-relaxed">
            We believe that the most transformative AI breakthroughs happen when brilliant 
            minds can focus entirely on innovation, not infrastructure management. That's 
            why we've built a platform that just works—reliable, fast, and designed to 
            grow with your ambitions.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-section">
          <Button variant="manifesto" size="lg" asChild>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-8 py-3"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </Button>
        </section>
      </div>
    </main>
  );
};

export default Index;