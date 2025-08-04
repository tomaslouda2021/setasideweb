'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { APP_URLS } from '@/config/app';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-finn-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready for Your{' '}
            <span className="block mt-2">Financial Assistant?</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-10">
            Let Finn handle your bills while you focus on living.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={APP_URLS.register}>
              <Button 
                size="lg" 
                className="bg-white text-finn-primary hover:bg-white/90 px-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight size={20} />
              </Button>
            </a>
            <a href={APP_URLS.login}>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-finn-primary px-8"
              >
                Log In to Dashboard
              </Button>
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center justify-center gap-6 text-white/80"
          >
            <button className="hover:text-white transition-colors">
              Have questions? Check our FAQ
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;