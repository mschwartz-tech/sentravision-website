import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Education from './pages/Education';

function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Services Preview Section */}
      <section className="py-20 bg-light">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
              What We Do
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              We build custom AI solutions from scratch, optimize businesses for the AI-powered future, and provide strategic consulting to modernize your operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-primary mb-2">Custom AI Development</h3>
              <p className="text-muted text-sm">Built from scratch for your unique business needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-primary mb-2">AI Search Optimization</h3>
              <p className="text-muted text-sm">Prepare your business for the future of search</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-primary mb-2">Strategic Consulting</h3>
              <p className="text-muted text-sm">Expert guidance on AI implementation and strategy</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
