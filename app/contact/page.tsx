'use client';
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// 1. Import 'Variants' here
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, ShieldCheck, Code2 } from "lucide-react";

// --- ANIMATIONS ---
// 2. Add ': Variants' type definition
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

// 3. Add ': Variants' type definition here too
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[40vh] bg-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           {/* Tech Background Image */}
           <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.span 
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
             className="text-blue-500 font-bold tracking-[0.2em] uppercase mb-2 block"
          >
            24/7 Global Support
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Get in Touch
          </motion.h1>
        </div>
      </section>

      {/* --- CONTACT CARDS SECTION --- */}
      <section className="py-20 container mx-auto px-6 -mt-20 relative z-20">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
           {/* WhatsApp Card (Highlighted) */}
           <motion.a 
              href="https://wa.me/94760162181" 
              target="_blank"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center cursor-pointer group hover:bg-blue-700 transition duration-300"
           >
              <div className="bg-white/20 p-4 rounded-full mb-4 group-hover:bg-white group-hover:text-blue-600 transition">
                 <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="opacity-90 text-sm mb-4">Instant support from our engineers.</p>
              <p className="text-xl font-bold">+94 77 783 0738</p>
           </motion.a>

           {/* Phone Card */}
           <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="bg-white border border-slate-100 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
              <div className="bg-slate-50 p-4 rounded-full mb-4 text-blue-600">
                 <Phone size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Call Sales</h3>
              <p className="text-slate-500 text-sm mb-1">Mon-Fri from 9am to 6pm EST</p>
              <p className="text-lg font-bold text-slate-900">+94 33 22 67 785</p>
           </motion.div>

           {/* Email Card */}
           <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="bg-white border border-slate-100 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
              <div className="bg-slate-50 p-4 rounded-full mb-4 text-blue-600">
                 <Mail size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Email Support</h3>
              <p className="text-slate-500 text-sm mb-1">For project quotes & RFPs</p>
              <p className="text-lg font-bold text-slate-900">contact@kanex.tech</p>
           </motion.div>

           {/* Location Card */}
           <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="bg-white border border-slate-100 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
              <div className="bg-slate-50 p-4 rounded-full mb-4 text-blue-600">
                 <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Headquarters</h3>
              <p className="text-slate-500 text-sm">No. 121, Tech Park,</p>
              <p className="text-slate-500 text-sm">Colombo 03, Sri Lanka.</p>
           </motion.div>
        </motion.div>
      </section>

      {/* --- FORM SECTION --- */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
             
             {/* Left: Info Area */}
             <div className="lg:w-1/3 bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                   <h3 className="text-3xl font-bold mb-6">Start Your Project</h3>
                   <p className="opacity-90 mb-8 leading-relaxed text-slate-300">
                     Ready to modernize your infrastructure? Fill out the form and our technical team will respond within 24 hours.
                   </p>

                   <ul className="space-y-6">
                      <li className="flex items-center gap-4">
                         <div className="bg-blue-600/20 p-2 rounded-full"><Clock size={20} className="text-blue-500"/></div>
                         <span>Fast Technical Assessment</span>
                      </li>
                      <li className="flex items-center gap-4">
                         <div className="bg-blue-600/20 p-2 rounded-full"><ShieldCheck size={20} className="text-blue-500"/></div>
                         <span>Strict NDA Protection</span>
                      </li>
                      <li className="flex items-center gap-4">
                         <div className="bg-blue-600/20 p-2 rounded-full"><Code2 size={20} className="text-blue-500"/></div>
                         <span>Free Architecture Consultation</span>
                      </li>
                   </ul>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute -bottom-10 -right-10 opacity-5">
                   <Globe size={300} />
                </div>
             </div>

             {/* Right: Form */}
             <div className="lg:w-2/3 p-12">
                <form>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                      <div>
                         <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                         <input type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition" placeholder="John Doe" />
                      </div>
                      <div>
                         <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                         <input type="email" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition" placeholder="john@company.com" />
                      </div>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                      <div>
                         <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                         <input type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition" placeholder="Tech Corp Ltd." />
                      </div>
                      <div>
                         <label className="block text-sm font-bold text-slate-700 mb-2">Project Type</label>
                         <select className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition text-slate-600">
                            <option>Custom Software Development</option>
                            <option>Cloud Migration (AWS/Azure)</option>
                            <option>AI & Machine Learning</option>
                            <option>Mobile App Development</option>
                            <option>Other / Consulting</option>
                         </select>
                      </div>
                   </div>

                   <div className="mb-8">
                      <label className="block text-sm font-bold text-slate-700 mb-2">Project Details</label>
                      <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition" placeholder="Briefly describe your project requirements and goals..."></textarea>
                   </div>

                   <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full flex items-center gap-2 transition duration-300 shadow-lg shadow-blue-500/30">
                      Send Inquiry <Send size={18} />
                   </button>
                </form>
             </div>
          </div>
        </div>
      </section>

      {/* --- MAP PLACEHOLDER (Optional) --- */}
      <div className="w-full h-80 bg-slate-100 flex items-center justify-center border-t border-slate-200">
         <p className="text-slate-400 font-bold flex items-center gap-2"><MapPin size={24}/> Google Maps Integration Area</p>
      </div>

      <Footer />
    </main>
  );
}
