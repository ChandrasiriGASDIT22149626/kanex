'use client';

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Code2, Cloud, Cpu, ShieldCheck, Database, Smartphone, 
  Layers, Globe, Zap, ArrowRight 
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "AI & Machine Learning",
    description: "Developing intelligent algorithms that automate complex workflows, provide predictive analytics, and integrate NLP for advanced chatbot systems.",
    icon: <Cpu size={40} />,
    features: ["Natural Language Processing", "Predictive Modeling", "Custom AI Agents", "Computer Vision"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Full-Stack Web Development",
    description: "Building responsive, high-performance web applications using the latest tech stacks like Next.js, React, and Node.js.",
    icon: <Globe size={40} />,
    features: ["Next.js & React Specialists", "SEO Optimization", "PWA Development", "Scalable Microservices"],
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Architecting secure, auto-scaling cloud solutions on AWS and Azure to ensure maximum uptime and seamless deployment cycles.",
    icon: <Cloud size={40} />,
    features: ["CI/CD Pipelines", "Kubernetes & Docker", "Serverless Architecture", "Cloud Migration"],
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Mobile App Innovation",
    description: "Creating native and cross-platform mobile experiences that feel premium and perform flawlessly on any device.",
    icon: <Smartphone size={40} />,
    features: ["Flutter & React Native", "iOS & Android Apps", "Biometric Integration", "Offline-First Design"],
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Enterprise Cybersecurity",
    description: "End-to-end security protocols designed to protect your data and intellectual property from modern digital threats.",
    icon: <ShieldCheck size={40} />,
    features: ["Penetration Testing", "End-to-End Encryption", "Identity Management", "Compliance Audits"],
    color: "from-blue-400 to-blue-700"
  },
  {
    title: "Data Engineering",
    description: "Optimizing data storage and processing workflows to turn raw information into actionable business insights.",
    icon: <Database size={40} />,
    features: ["SQL & NoSQL Optimization", "Real-time Data Streaming", "Big Data Analytics", "Data Warehousing"],
    color: "from-indigo-400 to-cyan-500"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white font-sans selection:bg-blue-500/30">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
          >
            Our Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Expertise</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between complex problems and elegant digital solutions through modern engineering and AI innovation.
          </p>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-gray-900 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Icon with Gradient Glow */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <Zap size={14} className="text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:gap-4 transition-all">
                  Inquire Now <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="py-24 border-t border-gray-900">
        <div className="container mx-auto px-6 text-center">
          <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Have a Unique Requirement?</h2>
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                Our team specializes in custom R&D and bespoke software systems. Let's build something extraordinary together.
              </p>
              <Link href="/contact">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-blue-500/40">
                  Talk to Our Engineers
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}