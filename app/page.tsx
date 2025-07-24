import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import ProblemStatement from '@/components/sections/ProblemStatement';
import HowItWorks from '@/components/sections/HowItWorks';
import Features from '@/components/sections/Features';
import BehavioralScience from '@/components/sections/BehavioralScience';
import Security from '@/components/sections/Security';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ProblemStatement />
      <HowItWorks />
      <Features />
      <BehavioralScience />
      <Security />
      <Testimonials />
      <FAQ />
      <CTA />
    </Layout>
  );
}