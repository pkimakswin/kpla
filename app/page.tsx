"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const banners = [
  "https://www.asia-sqa.com/assets/banner/banner-1.jpg",
  "https://www.asia-sqa.com/assets/banner/banner-2.avif",
  "https://www.asia-sqa.com/assets/banner/banner-3.jpg",
  "https://www.asia-sqa.com/assets/banner/banner-4.jpg"
];

const clients = [
  "https://www.asia-sqa.com/assets/client/1631374137577.jpg",
  "https://maruhide.co.id/wp-content/uploads/2023/01/logo-maruhide-long.png",
  "https://www.asia-sqa.com/assets/client/3.svg",
  "https://pricol.com/wp-content/uploads/2023/01/mobile-logo.png",
  "https://images.seeklogo.com/logo-png/10/1/piaggio-logo-png_seeklogo-108646.png"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
          <h1 className="text-5xl font-bold mb-4">ASQA CERTIFICATION</h1>
          <h2 className="text-2xl font-semibold mb-4">Expertise and Integrity</h2>
          <p className="max-w-2xl text-lg mb-8">
            Our experienced auditors ensure impartial and thorough assessments, guiding you towards excellence and compliance.
          </p>
          <Link
            href="/validate"
            className="bg-white text-blue-800 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Validate a Certificate
          </Link>
        </div>
        
        {/* Arrows and dots */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-20">
          <ChevronLeft size={48} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-20">
          <ChevronRight size={48} />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ASQA Certification is a leading certification body committed to excellence. Our mission is to provide comprehensive certification services that empower individuals and organizations to achieve their full potential. We believe in transparency, rigorous assessment, and continuous improvement.
            </p>
            <Link href="/about" className="text-blue-600 font-medium hover:underline flex items-center">
              Learn More About Us <span className="ml-1">→</span>
            </Link>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://www.asia-sqa.com/assets/about.png"
              alt="ASQA Building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Our Core Services</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              "ISO Management System Certification (ISO 9001, ISO 14001, ISO 45001, etc.)",
              "Product Certification and Compliance",
              "Professional Skills Validation",
              "Corporate Training and Development Programs"
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-6 text-white">
                  <CheckCircle2 size={24} />
                </div>
                <p className="text-gray-800 font-medium">{service}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            For more detailed information about our services or to discuss your specific certification needs, please don't hesitate to reach out.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition-colors"
          >
            Contact Us for Details
          </Link>
        </div>
      </section>

      {/* Esteemed Clients */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Esteemed Clients</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We are proud to have partnered with a diverse range of organizations, helping them achieve their certification goals and enhance their global standing.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {clients.map((client, i) => (
            <img 
              key={i} 
              src={client} 
              alt={`Client ${i + 1}`} 
              className="h-12 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" 
            />
          ))}
        </div>
      </section>

      {/* Ready to Get Certified */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Get Certified?</h2>
          <p className="text-gray-600 mb-8">
            Contact us today to learn more about our certification processes and how we can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
