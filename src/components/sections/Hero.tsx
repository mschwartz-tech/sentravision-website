import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-primary mb-6">
            Save Unimaginable
            <br />
            <span className="text-gradient">Time & Money</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            Let cutting-edge AI work for you. We help SMBs modernize operations with custom automation solutions that challenge the status quo.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="primary" size="lg">
              Book Free Consultation
            </Button>
            <Button variant="secondary" size="lg">
              Get AI Audit
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Custom AI Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Faster Than Legacy Software</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Industry Agnostic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 