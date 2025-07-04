import Button from '../components/ui/Button';

export default function Services() {
  const services = [
    {
      id: 'custom-ai',
      title: 'Custom AI Development',
      description: 'Built from scratch for your unique business needs',
      features: [
        'Custom AI tools designed specifically for your workflows',
        'Latest reasoning models with tool-calling capabilities',
        'Seamless integration with existing systems',
        'Ongoing optimization and updates'
      ],
      category: 'Development'
    },
    {
      id: 'search-optimization',
      title: 'AI Search Optimization',
      description: 'Prepare for the future of search beyond traditional SEO',
      features: [
        'AI-powered search strategy for evolving landscape',
        'Content optimization for AI search algorithms',
        'Voice and conversational search preparation',
        'Advanced schema and semantic markup'
      ],
      category: 'Optimization'
    },
    {
      id: 'implementation',
      title: 'AI Solution Implementation',
      description: 'Deploy proven AI technologies tailored to your business',
      features: [
        'Chatbots and virtual assistants',
        'Workflow automation systems',
        'Data analytics and insights platforms',
        'Customer service automation'
      ],
      category: 'Implementation'
    },
    {
      id: 'consulting',
      title: 'Strategic AI Consulting',
      description: 'Expert guidance on AI strategy and implementation',
      features: [
        'AI readiness assessment and strategy development',
        'Process optimization identification',
        'Technology roadmap planning',
        'Team training and change management'
      ],
      category: 'Consulting'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-primary mb-6">
              AI Solutions That
              <br />
              <span className="text-gradient">Transform Business</span>
            </h1>
            <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
              We automate everything that AI has the capability to automate, using cutting-edge reasoning models to revolutionize how your business operates.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-light">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-lg">
                <div className="mb-6">
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-light text-primary mt-2 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
              Our Process
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              How we identify your unique weak points and deliver custom solutions faster than legacy software companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center font-medium">
                1
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">Discover</h3>
              <p className="text-muted text-sm">
                We analyze your current processes to identify automation opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center font-medium">
                2
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">Design</h3>
              <p className="text-muted text-sm">
                Custom AI solutions tailored to your specific business needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center font-medium">
                3
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">Deploy</h3>
              <p className="text-muted text-sm">
                Rapid implementation with minimal disruption to operations
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center font-medium">
                4
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">Optimize</h3>
              <p className="text-muted text-sm">
                Continuous improvement and adaptation to new AI capabilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Solutions */}
      <section className="py-20 bg-light">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
              Package Solutions
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Ready-to-deploy AI solutions for common business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">AI Assistant Suite</h3>
              <p className="text-muted text-sm mb-4">
                Complete customer service automation with intelligent chatbots
              </p>
              <Button variant="outline" size="sm">
                Get Started
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">Analytics Dashboard</h3>
              <p className="text-muted text-sm mb-4">
                Real-time business insights powered by AI analytics
              </p>
              <Button variant="outline" size="sm">
                Get Started
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">Workflow Automation</h3>
              <p className="text-muted text-sm mb-4">
                Streamline repetitive tasks with intelligent automation
              </p>
              <Button variant="outline" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted mb-8 leading-relaxed">
              Let's identify your unique challenges and build custom AI solutions that save you unimaginable time and money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Book Free Consultation
              </Button>
              <Button variant="secondary" size="lg">
                Request Free AI Audit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 