'use client';

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle, Globe, Award, Clock, ArrowRight,
  ShieldCheck, Zap, Quote
} from "lucide-react";

// --- MODERN ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
};

// --- ANIMATED COUNTER COMPONENT ---
const Counter = ({ value, suffix }: { value: string; suffix: string }) => {
  const [displayValue, setDisplayValue] = React.useState(0);
  const target = parseInt(value);

  return (
    <motion.span
      onViewportEnter={() => {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setDisplayValue(target);
            clearInterval(timer);
          } else {
            setDisplayValue(Math.floor(start));
          }
        }, 16);
      }}
    >
      {displayValue}{suffix}
    </motion.span>
  );
};

// --- DATA ---
const coreServices = [
  {
    title: "Custom Software Development",
    description: "Tailor-made software solutions designed to streamline your specific business processes. We build scalable, secure, and high-performance applications.",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070"
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Modernize your operations with cloud-native architectures on AWS and Azure. We ensure 99.9% uptime, auto-scaling, and robust security.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
  }
];

const techStack = [
  {
    category: "Web Development",
    items: ["React.js", "Next.js", "Vue.js", "Angular", "Tailwind CSS"],
    description: "Responsive, SEO-optimized web applications built with the latest modern frameworks.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064"
  },
  {
    category: "Mobile App Development",
    items: ["Flutter", "React Native", "Swift (iOS)", "Kotlin (Android)"],
    description: "Cross-platform and native mobile apps that provide seamless user experiences on any device.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070"
  },
  {
    category: "Backend & API",
    items: ["Node.js", "Python (Django)", "Go", "GraphQL", "REST"],
    description: "Robust server-side architecture capable of handling high-concurrency traffic securely.",
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000"
  },
  {
    category: "AI & Machine Learning",
    items: ["TensorFlow", "PyTorch", "OpenAI API", "NLP", "Predictive Analytics"],
    description: "Intelligent algorithms that automate workflows and provide deep data insights.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2032"
  },
  {
    category: "Database & Storage",
    items: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
    description: "Optimized data storage solutions ensuring integrity, speed, and reliability.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021"
  },
  {
    category: "Cybersecurity",
    items: ["Penetration Testing", "Encryption", "Identity Management", "Compliance"],
    description: "End-to-end security protocols to protect your enterprise data from evolving threats.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470"
  }
];

const stats = [
  { label: "Client Satisfaction", value: "100", suffix: "%", icon: <CheckCircle size={32} /> },
  { label: "Innovative Tech Solutions", value: "50", suffix: "+", icon: <Zap size={32} /> },
  { label: "Dedicated Support Team", value: "24", suffix: "/7", icon: <ShieldCheck size={32} /> },
  { label: "Quality-Driven Development", value: "300", suffix: "+", icon: <Award size={32} /> },
];

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CTO, GlobalTech",
    quote: "KANEX delivered a cloud architecture that scaled our operations by 300% in six months.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100"
  },
  {
    name: "Sarah Chen",
    role: "Founder, Innovate.ai",
    quote: "The AI solutions provided by KANEX gave us the competitive edge we were looking for.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100"
  },
  {
    name: "David Miller",
    role: "Product Lead, FinStream",
    quote: "Reliable, professional, and highly skilled. They are our go-to partner for software development.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100"
  }
];

const faqs = [
  { q: "What is your typical project timeline?", a: "Timelines vary by complexity. A standard MVP typically takes 4-8 weeks, while enterprise solutions may take 3-6 months." },
  { q: "Do you offer post-launch support?", a: "Yes, we offer comprehensive maintenance packages including server monitoring, bug fixes, and security updates." },
  { q: "Can you take over an existing project?", a: "Absolutely. We perform a code audit to assess the current state and then implement necessary refactoring and new features." },
  { q: "How do you handle data security?", a: "We strictly adhere to OWASP guidelines, use end-to-end encryption, and sign NDAs to ensure your intellectual property is safe." }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-200 font-sans overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-bottom opacity-40 z-0"
          style={{ transform: 'translateY(20px)' }}
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Gradients - Adjusted position */}
        <div className="absolute inset-x-0 bottom-0 top-[85%] bg-gradient-to-b from-blue-900/10 via-black to-black z-10"></div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
              Next-Gen IT Solutions
            </div>
            <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight text-white">
              Innovating with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">KANEX</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transforming businesses through intelligent software solutions, cloud architecture, and cutting-edge AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                Get Started
              </button>
              <Link href="/portfolio">
                <button className="bg-transparent border border-gray-700 hover:border-white text-gray-300 hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300">
                  View Portfolio
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-24 bg-gradient-to-b from-black to-gray-950"></div>

      {/* 2. ABOUT SECTION */}
      <section className="container mx-auto px-6 py-16" id="about">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h4 className="text-blue-500 font-bold uppercase tracking-widest mb-2 text-sm">Who We Are</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Engineering the Future of <br /><span className="text-gray-500">Digital Business</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg font-light">
                At <strong>KANEX</strong>, we don't just write code; we solve complex business problems.
                Just like an architect designs a skyscraper, we architect robust digital ecosystems
                that help your business scale, adapt, and thrive.
              </p>
              <button className="text-white font-bold border-b border-blue-500 pb-1 hover:text-blue-400 transition duration-300 flex items-center gap-2">
               <Link href="/products" className="hover:text-[#D4AF37] transition-all">View Our Solutions</Link>
              </button>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')] bg-cover bg-center opacity-80 hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. STATS STRIP WITH ANIMATION */}
      <section className="py-24 relative overflow-hidden bg-gray-900 border-y border-gray-800">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 rounded-2xl hover:bg-white/5 transition duration-300 group">
                  <div className="flex justify-center mb-4 text-blue-500 group-hover:scale-110 transition duration-300 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                    {stat.icon}
                  </div>
                  <h3 className="text-5xl font-bold mb-2 text-white">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-gray-500 uppercase tracking-widest text-xs font-bold group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. CORE SERVICES */}
      <section className="bg-gray-950 py-24" id="services">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h4 className="text-blue-500 font-bold uppercase tracking-wider mb-2">What We Do</h4>
              <h2 className="text-4xl font-bold text-white">Flagship Solutions</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-900"
              >
                <div className="h-80 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition z-10" />
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition duration-1000 ease-in-out opacity-80 group-hover:opacity-100"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>
               <div className="p-10 relative z-20">
  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
    {service.title}
  </h3>
  <p className="text-gray-400 leading-relaxed mb-6">
    {service.description}
  </p>
  
  {/* Link to the main Services page */}
  <Link href="/services">
    <button className="text-blue-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
      Learn More <ArrowRight size={18} />
    </button>
  </Link>
</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="bg-black py-24 relative overflow-hidden border-t border-gray-900">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h4 className="text-blue-500 font-bold uppercase tracking-wider mb-2">Success Stories</h4>
              <h2 className="text-4xl font-bold text-white">Trusted by Leaders</h2>
            </div>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((test, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-colors duration-300 backdrop-blur-sm relative"
              >
                <Quote className="text-blue-500 mb-6 opacity-50" size={32} />
                <p className="text-gray-300 text-lg mb-8 italic">"{test.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={test.avatar} alt={test.name} className="w-12 h-12 rounded-full border border-gray-700" />
                  <div>
                    <h5 className="text-white font-bold">{test.name}</h5>
                    <p className="text-blue-400 text-sm">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. PROCESS SECTION */}
      <section className="bg-black py-24 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070" alt="Coding" className="rounded-2xl shadow-2xl mt-8 hover:scale-105 transition duration-500 opacity-80 hover:opacity-100 border border-gray-800" />
                <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070" alt="Code Review" className="rounded-2xl shadow-2xl hover:scale-105 transition duration-500 opacity-80 hover:opacity-100 border border-gray-800" />
              </div>
            </div>

            <div className="lg:w-1/2">
              <ScrollReveal>
                <h4 className="text-blue-500 font-bold uppercase tracking-wider mb-2">Our Methodology</h4>
                <h2 className="text-4xl font-bold text-white mb-10">Agile Development Cycle</h2>

                <div className="space-y-10">
                  {[
                    { title: "Discovery & Strategy", desc: "We analyze your requirements and define the technical roadmap." },
                    { title: "UI/UX Design", desc: "Creating intuitive prototypes and high-fidelity wireframes." },
                    { title: "Agile Development", desc: "Iterative coding sprints with regular client feedback loops." },
                    { title: "QA & Deployment", desc: "Rigorous testing followed by seamless cloud deployment." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-blue-500 font-bold group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white transition duration-300">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PARALLAX CTA */}
      <section className="relative py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')" }}>
        <div className="absolute inset-0 bg-blue-900/90 mix-blend-multiply"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Let’s Build Something Powerful</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">We create smart, scalable digital solutions tailored to your business needs.</p>
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
             <Link href="/contact" className="hover:text-[#D4AF37] transition-all">Talk To Us </Link>
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. TECH STACK */}
      <section className="bg-gray-950 py-24" id="tech-stack">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h4 className="text-blue-500 font-bold uppercase tracking-wider mb-2">Expertise</h4>
              <h2 className="text-4xl font-bold text-white">Comprehensive Tech Stack</h2>
            </div>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {techStack.map((cat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl hover:shadow-blue-900/20 hover:border-blue-600/50 hover:-translate-y-2 transition duration-300 overflow-hidden group"
              >
                <div className="h-48 overflow-hidden relative">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition duration-700 opacity-60 group-hover:opacity-80"
                    style={{ backgroundImage: `url(${cat.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-white text-2xl font-bold drop-shadow-md">{cat.category}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed h-12">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, i) => (
                      <span key={i} className="bg-gray-800 text-blue-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-gray-700 group-hover:border-blue-500/30 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="bg-black py-24 border-t border-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-600 transition cursor-pointer group">
                  <h3 className="text-lg font-bold text-gray-200 mb-2 flex justify-between items-center group-hover:text-blue-400 transition">
                    {faq.q}
                    <span className="text-blue-500 text-2xl">+</span>
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-400 transition-colors">{faq.a}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}