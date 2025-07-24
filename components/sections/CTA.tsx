'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, CheckCircle } from 'lucide-react';

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address')
});

type EmailFormData = z.infer<typeof emailSchema>;

const CTA: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema)
  });

  const onSubmit = async (data: EmailFormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 relative overflow-hidden">
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
            Secure Your Essentials.{' '}
            <span className="block mt-2">SetAside the Rest.</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-10">
            Join the waitlist and be first to access financial autopilot.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 rounded-lg text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <p className="text-white/90 text-sm mt-2 text-left">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Get Early Access
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto flex items-center gap-3"
            >
              <CheckCircle className="text-white" size={24} />
              <p className="text-white text-lg">
                Thanks! We'll notify you when SetAside launches.
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center justify-center gap-6 text-white/80"
          >
            <button className="hover:text-white transition-colors">
              Refer a friend
            </button>
            <span>•</span>
            <button className="hover:text-white transition-colors">
              Follow us on Twitter
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;