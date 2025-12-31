
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-purple-500 font-bold tracking-[0.2em] uppercase text-xs mb-4">Feedback</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold">Trusted by Founders.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="glass-card p-10 rounded-[40px] relative">
              <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5" />
              <p className="text-lg text-gray-300 italic mb-8 relative z-10 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
