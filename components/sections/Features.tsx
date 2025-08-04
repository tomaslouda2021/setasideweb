'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Brain, 
  Lock, 
  Receipt, 
  ShieldAlert, 
  BarChart3 
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain size={24} />,
      title: 'Smart Paycheck Detection',
      description: 'Finn automatically detects when you get paid and springs into action',
      color: 'from-finn-primary-start to-finn-primary-end'
    },
    {
      icon: <Building2 size={24} />,
      title: 'Intelligent Bill Routing',
      description: 'Your bills are categorized and routed to the right payment method automatically',
      color: 'from-finn-primary-start to-finn-primary-end'
    },
    {
      icon: <Lock size={24} />,
      title: 'Protected Bill Wallet',
      description: 'Bill money is secured away from your spending account instantly',
      color: 'from-finn-secondary to-finn-secondary'
    },
    {
      icon: <Receipt size={24} />,
      title: 'Automated Payments',
      description: 'Finn pays your bills on time, every time, without you lifting a finger',
      color: 'from-finn-secondary to-finn-secondary'
    },
    {
      icon: <ShieldAlert size={24} />,
      title: 'Spending Peace of Mind',
      description: "What's left is truly yours to spend - no mental math required",
      color: 'from-finn-accent to-finn-accent'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Financial Intelligence',
      description: 'Track your progress and get insights from your personal financial assistant',
      color: 'from-finn-accent to-finn-accent'
    }
  ];

  return (
    <section className="py-20 bg-finn-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meet Finn:{' '}
            <span className="bg-finn-gradient bg-clip-text text-transparent">
              Your Financial Assistant
            </span>
          </h2>
          <p className="text-xl text-finn-neutral max-w-2xl mx-auto">
            Intelligent features that work together to automate your financial life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-finn-neutral">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;