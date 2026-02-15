'use client'; 
import React from 'react';
import { motion, Variants } from 'framer-motion'; 
import { ArrowRight, CheckCircle, Globe, Cpu } from 'lucide-react';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';

// --- ANIMATION VARIANTS ---

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", bounce: 0.3, duration: 0.8 } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen font-sans text-gray-200 overflow-x-hidden bg-gray-950">
      <Navbar />

      {/* ================= BACKGROUND HEADER ================= */}
      {/* Abstract Tech Background */}
      <div 
        className="fixed inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950"></div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="pt-40 pb-20 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col lg:flex-row items-center gap-16"
            >
              <div className="lg:w-1/2">
                <motion.span variants={fadeInUp} className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4 block">
                  Who We Are
                </motion.span>
                <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white">
                  KANEX <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 italic">Innovations</span>
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-lg text-gray-400 font-light leading-relaxed mb-6">
                  KANEX is a premier IT consultancy and software development firm dedicated to architecting the digital future for global enterprises.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-lg text-gray-400 font-light leading-relaxed">
                  Founded with a vision to bridge the gap between complex business problems and elegant technical solutions, we focus on scalability, security, and innovation.
                </motion.p>
              </div>

              {/* Asymmetric Image Grid */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                  <motion.div 
                    variants={scaleUp}
                    whileHover={{ scale: 1.02 }}
                    className="col-span-2 h-80 rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
                  >
                    {/* Main Tech Image */}
                    <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" alt="Tech Team Meeting" />
                  </motion.div>
                  <motion.div variants={scaleUp} whileHover={{ scale: 1.05 }} className="h-48 rounded-2xl overflow-hidden shadow-lg border border-gray-800">
                    <img src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" alt="Server Infrastructure" />
                  </motion.div>
                  <motion.div variants={scaleUp} whileHover={{ scale: 1.05 }} className="h-48 rounded-2xl overflow-hidden shadow-lg border border-gray-800">
                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" alt="Coding" />
                  </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- VISION & MISSION SECTION (Dark) --- */}
        <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden border-y border-gray-900">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
          
          <div className="container mx-auto px-6 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.span variants={fadeInUp} className="text-sm font-bold tracking-[0.2em] uppercase text-blue-500 mb-4 block">
                  OUR PURPOSE
                </motion.span>
                
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-medium leading-tight mb-8">
                  Driving Global <br />
                  <span className="text-gray-500">Digital Transformation</span>
                </motion.h2>
                
                <div className="space-y-8 text-gray-400 font-light text-lg leading-relaxed">
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                      <Globe className="text-blue-500" size={24} /> Our Vision
                    </h3>
                    <p>
                      To be the world's most reliable partner for enterprise technology, empowering businesses to operate smarter, faster, and more securely.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                      <Cpu className="text-blue-500" size={24} /> Our Mission
                    </h3>
                    <ul className="space-y-3 mt-2">
                        <li className="flex gap-3"><CheckCircle size={20} className="text-blue-500 shrink-0" /> Deliver military-grade security & 99.9% uptime.</li>
                        <li className="flex gap-3"><CheckCircle size={20} className="text-blue-500 shrink-0" /> Foster a culture of continuous innovation.</li>
                        <li className="flex gap-3"><CheckCircle size={20} className="text-blue-500 shrink-0" /> Build scalable systems that grow with you.</li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Image */}
              <div className="relative h-[600px] w-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                 <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply z-10"></div>
                 <motion.img 
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.8 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  src="https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1974" 
                  alt="Data Center" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>
          </div>
        </section>

        {/* --- EXPERTISE & METHODOLOGY SECTION --- */}
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-6 lg:px-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-20 text-center md:text-left"
            >
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 block">
                SPECIALIZATION
              </span>
              <h2 className="text-4xl md:text-5xl font-medium text-white">
                Full-Stack Software  <br />Development
              </h2>
            </motion.div>

            {/* Feature 1: Engineering */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center"
            >
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-normal mb-6 uppercase tracking-wide text-blue-500">Excellence in Code</h3>
                <p className="text-gray-400 text-lg font-light mb-8 leading-relaxed">
                  We employ the top 1% of engineering talent to ensure your software is not just functional, but a competitive advantage. From clean architecture to automated testing, we refuse to compromise on quality.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-900 rounded-xl border border-gray-800 border-l-4 border-l-blue-600">
                        <h4 className="font-bold text-lg text-white">Senior Talent</h4>
                        <p className="text-sm text-gray-500">many years average experience.</p>
                    </div>
                    <div className="p-4 bg-gray-900 rounded-xl border border-gray-800 border-l-4 border-l-blue-600">
                        <h4 className="font-bold text-lg text-white">Modern Stack</h4>
                        <p className="text-sm text-gray-500">React, Node, Go, & Cloud Native.</p>
                    </div>
                </div>
              </div>
              <div className="order-1 md:order-2 h-[400px] bg-gray-900/50 backdrop-blur rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070" 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" 
                  alt="Agile Team" 
                />
              </div>
            </motion.div>

            {/* Feature 2: Infrastructure */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="h-[400px] bg-gray-900/50 backdrop-blur rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                 <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070" 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" 
                  alt="Analytics Dashboard" 
                />
              </div>
              <div>
                <h3 className="text-3xl font-normal mb-6 uppercase tracking-wide text-blue-500">Our Capabilities</h3>
                <p className="text-gray-400 text-lg font-light mb-6 leading-relaxed">
                  We specialize in building high-performance systems, including <strong>Enterprise ERPs, AI-driven Analytics, and SaaS Platforms</strong>.
                </p>
                <p className="text-gray-400 text-lg font-light mb-8 leading-relaxed">
                  Our cloud architects ensure your infrastructure is secure on <strong>AWS, Azure, or Google Cloud</strong>, optimizing for cost and speed.
                </p>
               
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- STATS SECTION --- */}
        <section className="py-20 bg-gray-900/80 backdrop-blur-md border-t border-gray-800">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <h3 className="text-2xl font-light text-gray-400">KANEX by the numbers</h3>
            </div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-12"
            >
              <motion.div variants={fadeInUp}>
                <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</h4>
                <p className="text-sm font-bold tracking-widest text-gray-500 uppercase">Uptime Guaranteed</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">150+</h4>
                <p className="text-sm font-bold tracking-widest text-gray-500 uppercase">Enterprise Clients</p>
              </motion.div>
               <motion.div variants={fadeInUp}>
                <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</h4>
                <p className="text-sm font-bold tracking-widest text-gray-500 uppercase">Technical Support</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">100%</h4>
                <p className="text-sm font-bold tracking-widest text-gray-500 uppercase">Client Satisfaction</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}