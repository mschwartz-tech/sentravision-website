import Button from '../components/ui/Button';

export default function Education() {
  const insights = [
    {
      id: 1,
      title: 'Why AI Search Will Make Traditional SEO Obsolete',
      excerpt: 'The future of search is conversational, context-aware, and powered by AI. Learn how to prepare your business for this seismic shift.',
      readTime: '5 min read',
      category: 'AI Search'
    },
    {
      id: 2,
      title: 'The Real Cost of NOT Automating Your Business Processes',
      excerpt: 'SMBs lose an average of 40 hours per week on manual tasks. Discover what this is costing you and how AI can change the game.',
      readTime: '7 min read',
      category: 'Automation'
    },
    {
      id: 3,
      title: 'Reasoning Models: The AI Breakthrough That Changes Everything',
      excerpt: 'New AI models can think, plan, and execute complex tasks. Here\'s what this means for your business operations.',
      readTime: '6 min read',
      category: 'AI Technology'
    },
    {
      id: 4,
      title: 'From Reactive to Proactive: AI-Powered Business Intelligence',
      excerpt: 'Stop reacting to problems after they happen. Learn how AI can help you anticipate and prevent issues before they impact your business.',
      readTime: '8 min read',
      category: 'Business Intelligence'
    }
  ];

  const faqs = [
    {
      question: 'How is AI development different from traditional software development?',
      answer: 'AI development leverages machine learning models and reasoning capabilities, allowing systems to learn, adapt, and make decisions. Traditional software follows predetermined logic. AI can handle complex, variable scenarios that would require extensive coding in traditional systems.'
    },
    {
      question: 'What makes Sentravision different from other AI companies?',
      answer: 'We specialize in custom solutions built from scratch for SMBs. While others offer one-size-fits-all products, we identify your unique weak points and build tailored solutions. We also stay on the cutting edge of AI breakthroughs, adapting our approach as new technologies emerge.'
    },
    {
      question: 'How quickly can I see results from AI implementation?',
      answer: 'Most of our clients see initial results within 2-4 weeks of implementation. Unlike legacy software companies that take months, our AI-first approach allows for rapid deployment and iteration. Simple automations can be live within days.'
    },
    {
      question: 'Is AI implementation worth it for small businesses?',
      answer: 'Absolutely. Small businesses often have the most to gain from AI because they have limited resources. AI can multiply your team\'s effectiveness, automate time-consuming tasks, and provide insights that were previously only available to large enterprises with dedicated teams.'
    },
    {
      question: 'What if my industry hasn\'t adopted AI yet?',
      answer: 'That\'s exactly why you should move now. Being an early adopter in your industry gives you a significant competitive advantage. While your competitors are still doing things the old way, you\'ll be operating more efficiently and serving customers better.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-primary mb-6">
              Stay Ahead of the
              <br />
              <span className="text-gradient">AI Revolution</span>
            </h1>
            <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
              Essential insights and resources for business leaders navigating the rapidly evolving AI landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-20 bg-light">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
              Latest AI Insights
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Stay informed about the latest AI developments and how they impact your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((insight) => (
              <article key={insight.id} className="bg-white p-6 rounded-lg">
                <div className="mb-4">
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {insight.category}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted">{insight.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-primary mb-3">
                  {insight.title}
                </h3>
                
                <p className="text-muted mb-4 leading-relaxed">
                  {insight.excerpt}
                </p>
                
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI Readiness Assessment */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-light p-8 rounded-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
                  Is Your Business AI-Ready?
                </h2>
                <p className="text-muted max-w-2xl mx-auto">
                  Take our quick assessment to discover automation opportunities and understand your AI readiness score.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-primary mb-4">Assessment includes:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted text-sm">Process automation opportunities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted text-sm">Current technology stack analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted text-sm">ROI potential calculation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted text-sm">Personalized AI roadmap</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-light text-primary mb-2">15</div>
                    <div className="text-muted mb-4">minutes to complete</div>
                    <Button variant="primary" size="lg">
                      Start Free Assessment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Common questions from business leaders about AI implementation and our approach.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
              Resource Library
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Tools and resources to help you understand and implement AI in your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">AI Implementation Guide</h3>
              <p className="text-muted text-sm mb-4">
                Step-by-step guide to implementing AI in small businesses
              </p>
              <Button variant="outline" size="sm">
                Download PDF
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">ROI Calculator</h3>
              <p className="text-muted text-sm mb-4">
                Calculate potential savings from AI automation
              </p>
              <Button variant="outline" size="sm">
                Use Calculator
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">Webinar Series</h3>
              <p className="text-muted text-sm mb-4">
                Weekly sessions on AI trends and implementation
              </p>
              <Button variant="outline" size="sm">
                Join Next Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted mb-8 leading-relaxed">
              Stop learning about AI and start implementing it. Let's discuss how custom AI solutions can revolutionize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="secondary" size="lg">
                Get Free AI Audit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 