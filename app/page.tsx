'use client'

import { motion } from 'framer-motion'
import { Monitor, Smartphone, Users, Code, Wrench, Shield } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="w-full px-4 py-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-start justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-1 mt-4">
            <div className="w-6 h-6 bg-gradient-to-br from-[#5c3c91] to-pink-500 rounded transform rotate-45"></div>
            <div className="w-4 h-4 bg-gradient-to-br from-indigo-600 to-[#5c3c91] rounded transform rotate-12 -ml-1"></div>
            <span className="text-lg font-bold text-gray-800 ml-1">SOFTWEBIX</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 text-xs font-semibold text-gray-800 tracking-wide">
            <a href="#" className="hover:text-[#5c3c91] transition-colors">ABOUT US</a>
            <a href="#" className="hover:text-[#5c3c91] transition-colors">WEB DESIGN</a>
            <a href="#" className="hover:text-[#5c3c91] transition-colors">SOCIAL MEDIA</a>
            <a href="#" className="hover:text-[#5c3c91] transition-colors">MOBILE APPS</a>
            <a href="#" className="hover:text-[#5c3c91] transition-colors">PROGRAMMING</a>
            <a href="#" className="hover:text-[#5c3c91] transition-colors">CUSTOM BUSINESS TOOLS</a>
            <a href="#" className="hover:text-[#5c3c91] transition-colors">SUPPORT</a>
            <a href="#" className="hover:text-[#5c3c91] transition-colors">CONTACT US</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2">
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-12 lg:px-8 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 lg:pr-8 relative z-20 lg:w-1/2"
            >
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight">
                <span className="text-gray-900">WE MAKE </span>
                <span className="text-[#5c3c91]">IT</span>
                <br />
                <span className="text-[#5c3c91]">SIMPLE</span>
                <br />
                <span className="text-gray-900">AND</span>
                <br />
                <span className="text-[#5c3c91]">AFFORDABLE.</span>
              </h1>

              <div className="text-sm lg:text-base xl:text-lg text-gray-700 space-y-1 leading-relaxed max-w-lg">
                <p>
                  <span className="text-gray-900">Hong Kong's First One-Stop </span>
                  <span className="text-[#5c3c91] font-semibold">Website Design</span>,
                </p>
                <p>
                  <span className="text-[#5c3c91] font-semibold">Mobile App Development</span>
                  <span className="text-gray-900"> & IT Solutions </span>
                  <span className="text-gray-900">Company</span>
                </p>
              </div>
            </motion.div>

            {/* Overlapping Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute top-0 right-0 lg:left-1/3 lg:right-0 w-full lg:w-2/3 z-10"
            >
              <div className="relative w-full max-w-4xl mx-auto lg:mx-0">
                <div className="relative overflow-hidden h-[500px] flex items-center justify-center">
                  {/* Updated: Actual Hero Image */}
                  <Image
                    src="/images/heroes-section.png"
                    alt="Softwebix Hero Section"
                    width={800}
                    height={500}
                    className="object-contain w-full h-full rounded-3xl"
                    priority
                  />
                </div>

                {/* Floating accent elements */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full opacity-80"
                ></motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#5c3c91] rounded-lg transform rotate-45 opacity-80"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-6xl font-black text-center text-[#5c3c91] mb-20 tracking-tight"
          >
            OUR SERVICES
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Website Development */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-1 rounded-2xl relative overflow-hidden">
                  <Image
                    src="/images/website development.jpg"
                    alt="Website Development"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Website Development</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We specialize in creating high-quality websites that meet your business needs and offer 24/7 maintenance guarantees.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mobile Apps Development */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-1 rounded-2xl relative overflow-hidden">
                  <Image
                    src="/images/mobile apps development.jpg"
                    alt="Mobile Apps Development"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile Apps Development</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We develop high-performance mobile apps used across iOS and Android platforms.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Custom Business Tools */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-1 rounded-2xl relative overflow-hidden">
                  <Image
                    src="/images/custom-business-tools.png"
                    alt="Custom Business Tools"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Business Tools</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We provide different custom business tools (CRM, ERP, etc.) to help you stay ahead in the competitive market.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Media Engagement */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-1 rounded-2xl relative overflow-hidden">
                  <Image
                    src="/images/social media.png"
                    alt="Social Media Engagement"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Social Media Engagement</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We have different campaigns to help increase your social presence and brands by using Facebook, Instagram and LinkedIn.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Programming Services */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-1 rounded-2xl relative overflow-hidden">
                  <Image
                    src="/images/programming.jpg"
                    alt="Programming Services"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Programming Services</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We offer expert programming services in Python and Java and we also create customized backend systems.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Comprehensive Maintenance & Bug Fixes */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-1 rounded-2xl relative overflow-hidden">
                  <img 
                    src="/images/comprehensive-bug-maintenance.jpg" 
                    alt="Comprehensive Maintenance & Bug Fixes"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Comprehensive Maintenance & Bug Fixes</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our Maintenance & Bug Fixes Service ensures your software, website and applications run smoothly and reliably over time.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
