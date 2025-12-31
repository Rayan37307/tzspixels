
import React from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to Automate Your Success?</h2>
            <p className="text-gray-400 text-lg mb-12">
              Book a free discovery call where we'll show you exactly how much time and money you can save with a custom tech stack.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Email Us</p>
                  <p className="text-lg font-bold">hello@nexflow.agency</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-purple-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">WhatsApp</p>
                  <p className="text-lg font-bold">+1 (555) 000-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-pink-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Office</p>
                  <p className="text-lg font-bold">San Francisco, CA / Remote</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#171717] p-8 md:p-12 rounded-[40px] border border-white/5 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 focus:border-blue-500 outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 focus:border-blue-500 outline-none transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Business Type</label>
                <select className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 focus:border-blue-500 outline-none transition-colors appearance-none">
                  <option>Medical Clinic</option>
                  <option>E-commerce Brand</option>
                  <option>Real Estate</option>
                  <option>SaaS / Tech</option>
                  <option>Other Service Business</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">How can we help?</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 focus:border-blue-500 outline-none transition-colors" placeholder="Tell us about your manual processes..." />
              </div>
              <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-blue-600/20">
                <Send className="w-5 h-5" />
                Send My Request
              </button>
              <p className="text-center text-xs text-gray-500">
                No spam. We typically reply within 12 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
