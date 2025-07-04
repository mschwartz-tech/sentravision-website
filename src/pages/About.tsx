import Button from '../components/ui/Button';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-primary mb-6">
              We Challenge the
              <br />
              <span className="text-gradient">Status Quo</span>
            </h1>
            <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
              Young innovators and new thinkers who refuse to accept "that's how it's always been done." We're redefining how businesses operate in the AI era.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-light">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-muted mb-6 leading-relaxed">
                Every week brings new AI breakthroughs that change the game. While others struggle to keep up, we stay on the forefront, adapting our solutions and positioning on the fly.
              </p>
              <p className="text-muted mb-6 leading-relaxed">
                We believe businesses shouldn't be held back by outdated processes. Our custom AI solutions help you save unimaginable time and money by letting technology work for you—not the other way around.
              </p>
              <p className="text-muted leading-relaxed">
                We're not cheap, but we're far more cost-effective than legacy software companies because we build with much less overhead and staff. That's the power of AI-first development.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-medium text-primary mb-4">Why Choose Sentravision?</h3>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Lightning-fast implementation with custom innovation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Industry-agnostic solutions that identify your unique weak points</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Constantly evolving with the latest AI reasoning models</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Flexible and agile approach to emerging technologies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              The principles that guide everything we do, from strategy to implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-primary mb-4">Speed & Innovation</h3>
              <p className="text-muted">
                We move fast and think differently. While others debate, we build custom solutions that address your specific challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-primary mb-4">Cutting-Edge Technology</h3>
              <p className="text-muted">
                We leverage the latest AI reasoning models and tool-calling capabilities to automate everything that can be automated.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-primary mb-4">Business-First Approach</h3>
              <p className="text-muted">
                We don't just build technology—we solve business problems. Every solution is designed to save you time and money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">
              Ready to Modernize Your Business?
            </h2>
            <p className="text-muted mb-8 leading-relaxed">
              Let's discuss how we can identify your unique challenges and build custom AI solutions that transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Schedule Free Consultation
              </Button>
              <Button variant="secondary" size="lg">
                Request Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 