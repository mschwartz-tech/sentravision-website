import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Education', href: '/education' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-white border-t border-light">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-medium text-primary mb-4">Sentravision</h3>
            <p className="text-muted text-sm leading-relaxed">
              AI-first software company helping modernize businesses with custom automation solutions and consulting.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-primary mb-4">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-muted hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-medium text-primary mb-4">Get Started</h4>
            <div className="flex flex-col space-y-2 text-sm text-muted">
              <Link to="/contact" className="hover:text-primary transition-colors duration-200">
                Book Consultation
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors duration-200">
                Request Quote
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors duration-200">
                Free AI Audit
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted">
              © {currentYear} Sentravision. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-sm text-muted hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-muted hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 