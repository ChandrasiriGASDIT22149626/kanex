'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// 1. Import 'Variants' from framer-motion
import { motion, Variants } from "framer-motion";
import { Code2, Server, Database, Shield, Globe, Cpu } from "lucide-react";

// --- ANIMATION HELPERS ---

// 2. Add ': Variants' type here
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// 3. Add ': Variants' type here
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

// 4. Add ': Variants' type here
const listStagger: Variants = {
   visible: { transition: { staggerChildren: 0.05 } }
}

// 5. Add ': Variants' type here
const listChild: Variants = {
   hidden: { opacity: 0, x: -10 },
   visible: { opacity: 1, x: 0 }
}


// --- DATA: CORE PLATFORMS ---
const corePlatforms = [
  {
    category: "Enterprise ERP",
    icon: <Database size={24} />,
    items: ["Supply Chain Management", "HR Automation", "Financial Reporting Modules"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
  },
  {
    category: "AI & Analytics",
    icon: <Cpu size={24} />,
    items: ["Predictive Modeling", "Natural Language Processing", "Business Intelligence Dashboards"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
  },
  {
    category: "Cybersecurity Suite",
    icon: <Shield size={24} />,
    items: ["End-to-End Encryption", "Identity Management (IAM)", "Threat Detection System"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470"
  }
];

// --- DATA: TECH STACK ---
const techStackCategories = [
  {
    name: "Frontend Architecture",
    description: "Lightning fast, responsive user interfaces.",
    items: ["React.js", "Next.js", "Vue.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931"
  },
  {
    name: "Backend Infrastructure",
    description: "Scalable server-side logic and APIs.",
    items: ["Node.js", "GoLang", "Python (Django)", "GraphQL", "REST API"],
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000"
  },
  {
    name: "Mobile Development",
    description: "Native and cross-platform mobile solutions.",
    items: ["Flutter", "React Native", "Swift (iOS)", "Kotlin (Android)"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070"
  },
  {
    name: "Cloud & DevOps",
    description: "Reliable deployment and orchestration.",
    items: ["AWS Lambda", "Docker", "Kubernetes", "Terraform", "Azure"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
  },
  {
    name: "Database Systems",
    description: "Optimized storage for high-volume data.",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021"
  },
  {
    name: "Quality Assurance",
    description: "Automated testing for bug-free releases.",
    items: ["Selenium", "Jest", "Cypress", "Load Testing"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-950 font-sans relative text-gray-200">
       {/* Tech Grid Background Texture */}
       <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
      <Navbar />

      {/* --- PAGE HEADER WITH SLOW ZOOM ANIMATION --- */}
      <section className="relative h-[45vh] bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
            {/* Slow zoom out effect on background image */}
            <motion.div 
               initial={{ scale: 1.15 }}
               animate={{ scale: 1 }}
               transition={{ duration: 8, ease: "easeOut" }}
               className="w-full h-full bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070')] bg-cover bg-center mix-blend-overlay" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-black/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 drop-shadow-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          >
            Our Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-300 font-light"
          >
             Comprehensive software architectures for modern enterprises
          </motion.p>
        </div>
      </section>

      {/* --- CORE PLATFORMS SECTION (Dark Cards) --- */}
      <section className="py-24 container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-bold text-white mb-4">Core Platforms</h2>
           <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {corePlatforms.map((platform, index) => (
            <motion.div 
               key={index} 
               variants={fadeInUp} 
               whileHover={{ y: -10, transition: { duration: 0.3 } }} 
               className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden group hover:shadow-blue-900/20 transition-all duration-300 border border-gray-800 hover:border-blue-500/50"
            >
               <div className="h-60 overflow-hidden relative">
                  <div className="absolute inset-0 bg-blue-900/30 group-hover:bg-transparent transition-all z-10 mix-blend-multiply"></div>
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100"
                       style={{ backgroundImage: `url(${platform.image})` }} />
               </div>
               <div className="p-8">
                  <div className="flex items-center gap-3 mb-6 text-blue-400">
                    {platform.icon}
                    <h3 className="text-2xl font-bold text-white">{platform.category}</h3>
                  </div>
                  
                  {/* Staggered list items */}
                  <motion.ul variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
                    {platform.items.map((item, i) => (
                      <motion.li variants={listChild} key={i} className="flex items-center text-gray-400 font-medium border-b border-gray-800 pb-3 last:border-0 group-hover:text-gray-200 transition-colors">
                        <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-4 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
               </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- TECH STACK SECTION (Dark Glass Cards) --- */}
      <section className="py-24 bg-black relative z-10 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-white mb-4">Technology Stack</h2>
             <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {techStackCategories.map((cat, index) => (
              <motion.div 
                  key={index} 
                  variants={fadeInUp} 
                  whileHover={{ y: -8 }} 
                  className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-blue-900/20 hover:shadow-2xl transition duration-300"
              >
                  <div className="h-52 relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10" />
                     <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition duration-700 opacity-60 group-hover:opacity-80" style={{ backgroundImage: `url(${cat.image})` }} />
                     <div className="absolute bottom-6 left-6 z-20">
                       <h3 className="text-white text-2xl font-bold drop-shadow-lg">{cat.name}</h3>
                     </div>
                  </div>
                  <div className="p-8">
                     <p className="text-sm text-gray-400 italic mb-6">{cat.description}</p>
                     <div className="flex flex-wrap gap-2">
                        {cat.items.map((tech, i) => (
                          // Tags pop slightly on hover with glow
                          <motion.span 
                            key={i} 
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(37, 99, 235, 0.2)", color: "#60A5FA", borderColor: "#3B82F6" }}
                            className="px-3 py-1.5 bg-gray-800 border border-gray-700 text-xs font-bold text-gray-400 rounded-md transition-all cursor-default"
                          >
                           {tech}
                          </motion.span>
                        ))}
                     </div>
                  </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}