'use client'; 
import React from 'react';
import { motion, Variants } from 'framer-motion'; 
import { Mail, Phone, Youtube, Instagram, Facebook, Twitter, ArrowRight, Code2, Cpu } from 'lucide-react';
import Link from 'next/link';

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const Footer = () => {
  return (
    <footer className="relative text-white font-sans z-20 overflow-hidden">
      
      {/* --- BACKGROUND IMAGE & OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/footer.jpg"
          alt="IT Infrastructure Background" 
          className="w-full h-full object-cover"
        />
        {/* Darker Overlay for better text contrast - matching your UI theme */}
        <div className="absolute inset-0 bg-gray-950/95"></div> 
      </div>

      {/* --- FOOTER CONTENT --- */}
      <div className="relative z-10">
        
        {/* --- CALL TO ACTION --- */}
        <div className="py-12 md:py-16 border-b border-white/10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="container mx-auto px-6 text-center"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-white">
              Ready to Accelerate Your Digital Transformation?
            </h2>
            
            <Link href="/contact-us" className="inline-block w-full md:w-auto">
              <button className="bg-blue-600 text-white px-8 py-4 md:px-12 md:py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm md:text-lg hover:bg-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transform hover:-translate-y-1 flex items-center justify-center gap-3 w-full md:min-w-[400px]">
                Start Your Project <ArrowRight size={20} />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Links Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center md:text-left"
        >
          {/* Column 1 - Company */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-blue-500 uppercase tracking-[0.2em] font-bold text-xs mb-4 md:mb-6 pb-2 border-b border-white/10 inline-block md:block">Company</h3>
            <ul className="space-y-3 text-sm text-gray-300 font-light">
              <li><Link href="/about" className="hover:text-white transition-colors">About KANEX</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Our Solutions</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/tech-stack" className="hover:text-white transition-colors">Technology Stack</Link></li>
              <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </motion.div>

          {/* Column 2 - Core Services */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-blue-500 uppercase tracking-[0.2em] font-bold text-xs mb-4 md:mb-6 pb-2 border-b border-white/10 inline-block md:block">Services</h3>
            <ul className="space-y-3 text-sm text-gray-300 font-light">
              <li className="hover:text-white cursor-pointer transition-colors">AI & Machine Learning</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cloud Infrastructure</li>
              <li className="hover:text-white cursor-pointer transition-colors">Custom Software</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cybersecurity</li>
              <li className="hover:text-white cursor-pointer transition-colors">UI/UX Design</li>
            </ul>
          </motion.div>

          {/* Column 3 - Specialist Areas */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-blue-500 uppercase tracking-[0.2em] font-bold text-xs mb-4 md:mb-6 pb-2 border-b border-white/10 inline-block md:block">Expertise</h3>
            <ul className="space-y-3 text-sm text-gray-300 font-light">
              <li>Next.js Development</li>
              <li>Python Automation</li>
              <li>NLP & Chatbots</li>
              <li>Database Optimization</li>
              <li>API Development</li>
              <li>DevOps & CI/CD</li>
            </ul>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-blue-500 uppercase tracking-[0.2em] font-bold text-xs mb-4 md:mb-6 pb-2 border-b border-white/10 inline-block md:block">Get In Touch</h3>
            
            <div className="flex items-start justify-center md:justify-start gap-4 mb-6">
              <Phone className="text-blue-500 mt-1" size={24} />
              <div className="text-left">
                <p className="text-xl font-bold text-white">076 016 2181</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-tight">Direct Support Line</p>
              </div>
            </div>
            
            <div className="space-y-3 text-sm text-gray-300 font-light italic">
              <p>No 66/D/1 Pugoda, Sri Lanka.</p>
              <p className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-400 cursor-pointer transition-colors">
                <Mail size={16} className="text-blue-500" /> kanexai99@gmail.com
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Socials & Copyright */} 
        <div className="bg-black/60 py-8 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex justify-center gap-8 mb-6">
              <Link href="https://www.facebook.com/share/1CGSLCHenk/" target="_blank">
                <Facebook size={20} className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors transform hover:scale-110" />
              </Link>
              <Link href="https://www.instagram.com/kanex_ai?igsh=OHk5YzZkanVzdmVs" target="_blank">
                <Instagram size={20} className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors transform hover:scale-110" />
              </Link>
              <Twitter size={20} className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors transform hover:scale-110" />
              <Youtube size={20} className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors transform hover:scale-110" />
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 gap-4 text-center">
              <p>© 2026 KANEX AI TECHNOLOGY. ALL RIGHTS RESERVED.</p>
              <div className="flex gap-6">
                <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;