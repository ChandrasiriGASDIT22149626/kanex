// src/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-50">
        {/* Ideally use a real image path here like '/hero-bg.jpg' */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 md:py-48 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Premium Sri Lankan <br /> <span className="text-agrovista">Spices & Vanilla</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Exporting the finest authentic agricultural products from the heart of Ceylon to the world.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-agrovista px-8 py-3 rounded text-white font-bold hover:bg-agrovista-dark transition">
            Our Products
          </button>
          <button className="border-2 border-white px-8 py-3 rounded text-white font-bold hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Overlapping Cards Section */}
      {/* We use negative margin to pull this up into the hero image like the video */}
      <div className="relative z-20 container mx-auto px-6 -mb-20 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 shadow-xl rounded-lg border-l-4 border-agrovista">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Organic Farming</h3>
            <p className="text-gray-600">
              Directly sourced from certified organic farmers ensuring 100% purity.
            </p>
          </div>
          {/* Card 2 - Highlighted Green like the video */}
          <div className="bg-agrovista p-8 shadow-xl rounded-lg text-white">
            <h3 className="text-xl font-bold mb-2">Global Shipping</h3>
            <p className="text-white/90">
              Fast and secure logistics partners to deliver freshness anywhere in the world.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-8 shadow-xl rounded-lg border-l-4 border-agrovista">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Grade A</h3>
            <p className="text-gray-600">
              Lab-tested vanilla beans and spices meeting international export standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}