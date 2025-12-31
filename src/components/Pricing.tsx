
import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Investment</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Simple, Result-Based Pricing</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the package that fits your current growth stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-[#171717] p-10 rounded-3xl border transition-all duration-300 ${
                plan.recommended 
                  ? 'border-blue-500 scale-105 shadow-2xl shadow-blue-500/10 z-10' 
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Recommended
                </div>
              )}
              <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
              <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-500 text-sm font-medium">/project</span>}
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                  plan.recommended 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-white/5 hover:bg-white/10 text-white'
                }`}
              >
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
