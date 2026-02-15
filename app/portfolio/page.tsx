'use client'; 

import React, { useState } from 'react';
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 
import { motion, AnimatePresence } from "framer-motion"; 
import { ArrowRight, X, ExternalLink, Code2, Layers, Cpu, Globe } from 'lucide-react';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- MOCK DATA: PROJECTS ---
const projects = [
  {
    id: 1,
    title: "EcoSmart Logistics",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    description: "AI-powered route optimization dashboard for a German logistics fleet.",
    stack: ["React", "Node.js", "Google Maps API"],
    client: "LogiTrans GmbH",
    country: "Germany",
    problem: "High fuel costs and inefficient routing for a fleet of 500+ trucks.",
    solution: "Developed a real-time tracking dashboard with AI algorithms that reduced fuel consumption by 18% in the first quarter."
  },
  {
    id: 2,
    title: "MediCare Connect",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070",
    description: "Telemedicine app connecting patients with specialists across Europe.",
    stack: ["Flutter", "Firebase", "WebRTC"],
    client: "HealthPlus",
    country: "UK",
    problem: "Patients faced long wait times for simple consultations.",
    solution: "Built a secure, HIPAA-compliant mobile app enabling instant video calls and e-prescriptions."
  },
  {
    id: 3,
    title: "FinTrack Automation",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    description: "Automated invoice processing system for a financial consultancy.",
    stack: ["Python", "AWS Textract", "QuickBooks API"],
    client: "FinServe Corp",
    country: "USA",
    problem: "Manual data entry was causing 20+ hours of delay per week.",
    solution: "Implemented an OCR-based automation bot that processes invoices 90% faster with 99.9% accuracy."
  },
  {
    id: 4,
    title: "Luxe Salon Booking",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974",
    description: "Premium booking website for a high-end salon chain.",
    stack: ["Next.js", "Tailwind", "Stripe"],
    client: "Elite Styles",
    country: "France",
    problem: "The salon was losing appointments due to missed phone calls.",
    solution: "Created a 24/7 online booking portal with automated SMS reminders, increasing bookings by 40%."
  },
  {
    id: 5,
    title: "CryptoVault UI",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1969",
    description: "Futuristic interface design for a decentralized crypto exchange.",
    stack: ["Figma", "Adobe After Effects"],
    client: "BitSecure",
    country: "Switzerland",
    problem: "Complex trading data overwhelmed new users.",
    solution: "Designed a clean, dark-mode interface with simplified data visualization to improve user retention."
  },
  {
    id: 6,
    title: "AgriTech IoT Dashboard",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1625246333195-551e51245128?q=80&w=2064",
    description: "IoT dashboard monitoring soil moisture for smart farms.",
    stack: ["Vue.js", "MQTT", "AWS IoT"],
    client: "GreenFields",
    country: "Netherlands",
    problem: "Farmers lacked real-time data to optimize irrigation.",
    solution: "Deployed sensor networks connected to a central dashboard, saving 30% on water usage."
  }
];

const categories = ["All", "Web App", "Mobile App", "Automation", "UI/UX Design"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Filter Logic
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className="min-h-screen bg-gray-950 text-gray-200 font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-950 z-0"></div>
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Work</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore how we've helped businesses across Germany, Europe, and the world transform their digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FILTER BUTTONS --- */}
      <section className="py-10 bg-gray-950 sticky top-20 z-30 backdrop-blur-md border-b border-gray-900/50">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-4">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeCategory === cat 
                  ? "bg-blue-600 text-white border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]" 
                  : "bg-gray-900 text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* --- PORTFOLIO GRID --- */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <motion.div 
            layout
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="h-60 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" 
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-xs font-bold text-white rounded-md border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack Mini */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-[10px] uppercase font-bold text-gray-500 bg-gray-800 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-3 border border-gray-700 text-gray-300 font-bold rounded-xl hover:bg-white hover:text-black hover:border-white transition-all flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white"
                    >
                      View Project <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- PROJECT DETAIL MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)} // Close on background click
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on modal click
              className="bg-gray-900 border border-gray-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full hover:bg-red-500 hover:text-white transition z-10"
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div className="h-64 md:h-80 w-full relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-6 left-6 md:left-10">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <span className="flex items-center gap-1"><Globe size={14} className="text-blue-500"/> {selectedProject.client} ({selectedProject.country})</span>
                    <span className="flex items-center gap-1"><Layers size={14} className="text-blue-500"/> {selectedProject.category}</span>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                
                {/* Left: Details */}
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 border-l-4 border-blue-500 pl-3">The Challenge</h3>
                    <p className="text-gray-400 leading-relaxed">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 border-l-4 border-green-500 pl-3">The Solution</h3>
                    <p className="text-gray-400 leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Right: Sidebar */}
                <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 h-fit">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Cpu size={18} className="text-blue-400"/> Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.stack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-black border border-gray-600 rounded text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition flex items-center justify-center gap-2">
                    Visit Live Site <ExternalLink size={16} />
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-center border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-6">Have a Project in Mind?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Let's build something extraordinary together. From concept to launch, we are your technical partner.</p>
          <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl">
            Contact Us Today
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}