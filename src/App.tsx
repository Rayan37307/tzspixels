
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MedFlowCaseStudy from './pages/MedFlowCaseStudy';
import TitanRealEstateCaseStudy from './pages/TitanRealEstateCaseStudy';
import SolarScaleCaseStudy from './pages/SolarScaleCaseStudy';
import ChatWidget from './components/ChatWidget';
import './components/ChatWidget.css';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white bg-[#000000]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />

              {/* Modern Infinite Scroller */}
              <div className="bg-white py-6 md:py-8 overflow-hidden whitespace-nowrap border-y border-white/10 relative z-20">
                <div className="flex animate-marquee items-center gap-12 text-black font-black text-xs md:text-base uppercase tracking-[0.3em] italic">
                  <span>Engineering ROI</span>
                  <span className="opacity-20">•</span>
                  <span>Ultra-Fast Next.js</span>
                  <span className="opacity-20">•</span>
                  <span>AI Automation</span>
                  <span className="opacity-20">•</span>
                  <span>Lead Gen Engines</span>
                  <span className="opacity-20">•</span>
                  <span>Vercel Partners</span>
                  <span className="opacity-20">•</span>
                  <span>Scalable Systems</span>
                  <span className="opacity-20">•</span>
                  <span>Engineering ROI</span>
                  <span className="opacity-20">•</span>
                  <span>Ultra-Fast Next.js</span>
                </div>
              </div>

              <Services />
              <WhyChooseUs />
              <Portfolio />
              <HowItWorks />
              <Testimonials />
              <Pricing />

              {/* High-Impact CTA */}
              <section className="py-40 bg-gradient-to-b from-[#000] to-[#050505] text-center px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                  <h2 className="font-heading text-5xl md:text-8xl font-bold mb-10 uppercase tracking-tighter text-white leading-none">
                    Ready to <span className="text-gradient">Scale?</span>
                  </h2>
                  <p className="text-gray-400 text-lg md:text-2xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                    Stop guessing. Start building. Book your strategy call today and let's engineer your competitive advantage.
                  </p>
                  <a href="#contact" className="inline-block px-12 py-6 bg-blue-600 text-white font-bold text-sm md:text-base uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all active:scale-95 shadow-2xl shadow-blue-600/40">
                    Book Free Consultation
                  </a>
                </div>
              </section>

              <Contact />
            </>
          } />
          <Route path="/case-study/medflow" element={<MedFlowCaseStudy />} />
          <Route path="/case-study/titan-realestate" element={<TitanRealEstateCaseStudy />} />
          <Route path="/case-study/solarscale" element={<SolarScaleCaseStudy />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 40s linear infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default App;
