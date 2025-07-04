import { useState } from 'react';
import Button from '../components/ui/Button';
import { validateEmail, validatePhone } from '../utils';

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'consultation' | 'quote' | 'audit'>('consultation');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented with Supabase
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-primary mb-6">
              Let's Build Your
              <br />
              <span className="text-gradient">AI-Powered Future</span>
            </h1>
            <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to save unimaginable time and money? Choose how you'd like to get started with custom AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-light">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-col sm:flex-row justify-center mb-12 bg-white p-2 rounded-lg">
              <button
                onClick={() => setActiveTab('consultation')}
                className={`px-6 py-3 text-sm font-medium transition-colors duration-200 rounded-md ${
                  activeTab === 'consultation'
                    ? 'bg-primary text-white'
                    : 'text-muted hover:text-primary'
                }`}
              >
                Book Consultation
              </button>
              <button
                onClick={() => setActiveTab('quote')}
                className={`px-6 py-3 text-sm font-medium transition-colors duration-200 rounded-md ${
                  activeTab === 'quote'
                    ? 'bg-primary text-white'
                    : 'text-muted hover:text-primary'
                }`}
              >
                Request Quote
              </button>
              <button
                onClick={() => setActiveTab('audit')}
                className={`px-6 py-3 text-sm font-medium transition-colors duration-200 rounded-md ${
                  activeTab === 'audit'
                    ? 'bg-primary text-white'
                    : 'text-muted hover:text-primary'
                }`}
              >
                Free AI Audit
              </button>
            </div>

            {/* Form Content */}
            <div className="bg-white p-8 rounded-lg">
              {activeTab === 'consultation' && (
                <div>
                  <h2 className="text-2xl font-light text-primary mb-4">
                    Book Your Free Consultation
                  </h2>
                  <p className="text-muted mb-6">
                    Schedule a 30-minute consultation to discuss your business challenges and explore custom AI solutions.
                  </p>
                </div>
              )}

              {activeTab === 'quote' && (
                <div>
                  <h2 className="text-2xl font-light text-primary mb-4">
                    Request Custom Quote
                  </h2>
                  <p className="text-muted mb-6">
                    Tell us about your specific needs and receive a detailed proposal for your custom AI solution.
                  </p>
                </div>
              )}

              {activeTab === 'audit' && (
                <div>
                  <h2 className="text-2xl font-light text-primary mb-4">
                    Free AI Readiness Audit
                  </h2>
                  <p className="text-muted mb-6">
                    Get a comprehensive assessment of your business processes and identify AI automation opportunities.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Company Inc."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {activeTab === 'consultation' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Preferred Time
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    {activeTab === 'consultation' && 'What business challenges are you facing?'}
                    {activeTab === 'quote' && 'Describe your project requirements'}
                    {activeTab === 'audit' && 'Tell us about your current business processes'}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Share details about your business needs..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  {activeTab === 'consultation' && 'Schedule Free Consultation'}
                  {activeTab === 'quote' && 'Request Custom Quote'}
                  {activeTab === 'audit' && 'Get Free AI Audit'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">Email</h3>
              <p className="text-muted">hello@sentravision.com</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">Response Time</h3>
              <p className="text-muted">Within 24 hours</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">Fast Implementation</h3>
              <p className="text-muted">Start seeing results quickly</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 