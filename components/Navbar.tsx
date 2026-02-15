'use client';

import Link from 'next/link';
import { Menu, X, Search, Home, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'py-2 bg-black/95 backdrop-blur-xl shadow-2xl' : 'py-4 bg-transparent'
    }`}>
      
      {/* 1. TOP UTILITY BAR */}
      <div className={`hidden md:block transition-all duration-500 overflow-hidden ${
        scrolled ? 'h-0 opacity-0' : 'h-8 opacity-100 mb-2'
      }`}>
        <div className="w-full px-12 flex justify-end items-center space-x-8 text-[10px] uppercase tracking-[0.3em] text-gray-400 font-light">
          <Link href="/news" className="hover:text-white transition-colors">Latest News</Link>
          <Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link>
          <div className="h-3 w-[1px] bg-white/10" />
          <Search size={14} className="cursor-pointer hover:text-[#D4AF37] transition-colors" />
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <div className="w-full px-6 md:px-12 flex items-center justify-between relative h-20">
        
        {/* --- LUXURY LOGO SECTION (LEFT SIDE, NO WHITE) --- */}
        <div className="absolute left-0 top-0 z-50">
          <Link href="/">
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              className="bg-white-900/80 backdrop-blur-md p-4 md:p-6 rounded-br-[40px] shadow-2xl border-r border-b border-white/10 flex items-center justify-center w-[180px] md:w-[240px] h-[100px] md:h-[140px]"
            >
              {/* MAXIMIZED LOGO WITH ANIMATION */}
              <motion.img 
                src="/logon.png" 
                alt="KANEX Logo" 
                className="h-[130%] md:h-[160%] w-auto object-contain max-w-none scale-125"
                animate={{ 
                  y: [0, -8, 0],
                  filter: ["drop-shadow(0 0 8px rgba(212,175,55,0.3))", "drop-shadow(0 0 20px rgba(212,175,55,0.6))", "drop-shadow(0 0 8px rgba(212,175,55,0.3))"]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </Link>
        </div>

        {/* SPACER (Pushes content away from the left logo) */}
        <div className="hidden lg:block w-48 md:w-64" />

        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center space-x-10 text-[11px] uppercase tracking-[0.25em] font-medium text-white/80">
          <Link href="/" className="flex items-center gap-2 hover:text-[#D4AF37] transition-all group">
            <Home size={16} className="text-[#D4AF37] group-hover:scale-125 transition-transform" />
            Home
          </Link>
          <Link href="/about" className="hover:text-[#D4AF37] transition-all flex items-center gap-1 group">
            About Us <ChevronDown size={12} className="group-hover:translate-y-1 transition-transform" />
          </Link>
          <Link href="/products" className="hover:text-[#D4AF37] transition-all">Solutions</Link>
          <Link href="/portfolio" className="hover:text-[#D4AF37] transition-all">Portfolio</Link>
          <Link href="/contact" className="hover:text-[#D4AF37] transition-all">Contact Us</Link>
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <button 
            className="group relative px-10 py-3 border border-[#D4AF37] rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] group-hover:text-black transition-colors duration-500">
             <Link href="/products" className="hover:text-[#D4AF37] transition-all"> View All Solutions</Link>
            </span>
            <div className="absolute inset-0 bg-[#D4AF37] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/98 z-[60] flex flex-col items-center justify-center space-y-10"
          >
              <button className="absolute top-10 right-10 text-white" onClick={() => setIsOpen(false)}>
                <X size={40} strokeWidth={1} />
              </button>
              <Link href="/" className="text-2xl text-white uppercase tracking-[0.3em]" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="text-2xl text-white uppercase tracking-[0.3em]" onClick={() => setIsOpen(false)}>About Us</Link>
              <button className="px-12 py-4 border border-[#D4AF37] text-[#D4AF37] rounded-full uppercase tracking-widest font-bold">
                Get Started
              </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}