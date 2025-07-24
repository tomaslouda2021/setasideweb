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
      icon: <Building2 size={24} />,
      title: 'Bank Integration',
      description: 'Connect any US bank account instantly with Plaid-powered security',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Brain size={24} />,
      title: 'Smart Allocation Engine',
      description: 'AI-powered recommendations based on your spending patterns',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Lock size={24} />,
      title: 'Protected Bill Wallet',
      description: 'Your bill money is locked away and protected from impulse spending',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: <Receipt size={24} />,
      title: 'Automated Bill Pay',
      description: 'Bills are paid automatically from your protected wallet',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: <ShieldAlert size={24} />,
      title: 'Emergency Access',
      description: 'Break glass protocol for true emergencies with audit trail',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Real-time Dashboard',
      description: 'Track your financial health with intuitive visualizations',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Everything You Need for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Financial Autopilot
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Powerful features designed to make bill payments completely automatic
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
                
                <p className="text-slate-600">
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