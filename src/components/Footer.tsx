
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-[10px] italic">
                N
              </div>
              <span className="text-lg font-extrabold tracking-tight">NEXFLOW</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Building high-performance digital engines that drive growth through automation and premium web experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-6">Services</p>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Web Dev</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">AI Chatbots</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Automation</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-6">Company</p>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Our Work</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Process</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-6">Socials</p>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">X / Twitter</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} NexFlow Digital Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
