
import React from 'react';
import { CASE_STUDIES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4">Case Studies</h2>
            <h3 className="font-heading text-4xl md:text-6xl font-bold tracking-tight">Proof of Performance.</h3>
          </div>
          <p className="text-gray-400 max-w-sm font-medium">
            We don't just ship code; we deliver measurable business impact. Explore our latest success stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <div key={idx} className="group glass-card rounded-[32px] overflow-hidden flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                   <span className="px-3 py-1 bg-blue-600 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                     {study.category}
                   </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold mb-4">{study.title}</h4>
                <div className="space-y-3 mb-8 flex-grow">
                  <p className="text-sm text-gray-500"><strong className="text-gray-300">Problem:</strong> {study.problem}</p>
                  <p className="text-sm text-gray-500"><strong className="text-gray-300">Solution:</strong> {study.solution}</p>
                  <p className="text-sm text-green-400 font-bold"><strong className="text-gray-300 font-normal">Result:</strong> {study.result}</p>
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-widest">
                  View Full Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
