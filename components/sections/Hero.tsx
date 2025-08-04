'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { Shield, DollarSign, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const trustIndicators = [
    { icon: <Shield size={16} />, text: 'Bank-grade security' },
    { icon: <DollarSign size={16} />, text: 'FDIC protected' },
    { icon: <Zap size={16} />, text: 'Used by 10,000+ professionals' }
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-finn-primary-start/5 via-finn-primary-end/5 to-white -z-10" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-finn-primary-start rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-finn-primary-end rounded-full blur-3xl opacity-20 animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-6"
          >
            Your Smart{' '}
            <span className="bg-finn-gradient bg-clip-text text-transparent">
              Financial Assistant
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-finn-neutral mb-10"
          >
            Finn automatically sets aside money for bills before you can spend it. 
            Smart paycheck detection, intelligent routing, and peace of mind.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" className="shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all">
              Get Early Access
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
              See How It Works
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm"
          >
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2 text-slate-600">
                <div className="text-finn-secondary">{indicator.icon}</div>
                <span>{indicator.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 max-w-6xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-finn-gradient rounded-2xl blur-2xl opacity-20" />
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="h-4 bg-slate-200 rounded w-3/4 mb-4" />
                  <div className="h-3 bg-slate-100 rounded w-1/2" />
                </div>
                <div className="mx-8">
                  <div className="w-16 h-16 bg-finn-gradient rounded-full flex items-center justify-center animate-pulse">
                    <DollarSign className="text-white" size={32} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="h-4 bg-finn-secondary/20 rounded w-3/4 mb-4" />
                  <div className="h-3 bg-finn-secondary/10 rounded w-1/2" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;