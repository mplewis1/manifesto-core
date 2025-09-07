import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-3xl mx-auto px-6 py-20 md:py-32">

        {/* Manifesto Content */}
        <section className="max-w-2xl mx-auto space-y-paragraph">
          <p className="text-manifesto leading-relaxed">
          New York is the world capital of finance, yet young investors often operate in narrow swim lanes. A public markets analyst tracking earnings may not see how private equity investors are uncovering the same trends inside portfolio companies. A real estate investor studying cap rates may not realize that the same interest rate moves are reshaping commodity demand. A venture capitalist focused on AI adoption may not be aware of how credit investors are underwriting the risks associated with the same technology.          </p>

          <p className="text-manifesto leading-relaxed">
          Markets do not move in isolation. Decisions made in one asset class ripple and inform another. By bringing together early-career investors across disciplines, we can create a space where insights can travel faster, assumptions can be stress tested, and new connections can spark deeper understanding of markets.
          </p>

          <p className="text-manifesto leading-relaxed">
          We are creating a community for people who want to meet other young investors across asset classes to exchange ideas openly, candidly, and in total confidence. We will create a space for conversations that go deeper than headlines and surface perspectives that rarely leave individual firms.
          </p>

          <p className="text-manifesto leading-relaxed">
          If you are a young investor who values curiosity, candor, and cross-pollination, we welcome you to share your interest.          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-section">
          <Button variant="manifesto" size="lg" asChild>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdB-Zf5aHTLKIBhd5jw3kmra5H88Lp6nXn8eIdWDGA5fGzVHA/viewform?usp=dialog" 
              className="inline-flex items-center justify-center px-8 py-3"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Express Interest
              <span className="arrow-icon"></span>
            </a>
          </Button>
        </section>
      </div>
    </main>
  );
};

export default Index;