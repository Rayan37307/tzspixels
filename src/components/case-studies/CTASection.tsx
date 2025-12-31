import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  description: string;
  ctaText: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  ctaText
}) => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#000] to-[#050505] relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none opacity-50"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none opacity-30"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      ></motion.div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.h2
          className="font-heading text-4xl md:text-6xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {description}
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-3 px-12 py-6 bg-blue-600 text-white font-bold text-sm md:text-base uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all active:scale-95 shadow-2xl shadow-blue-600/40"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          {ctaText}
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;