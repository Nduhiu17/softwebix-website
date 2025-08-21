'use client'

import { motion } from 'framer-motion'
import { Monitor, Smartphone, Users, Code, Wrench, Shield } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <nav className="w-full px-4 py-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-start justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-1 mt-1">
            <div className="w-6 h-6 bg-gradient-to-br from-[#5c3c91] to-pink-500 rounded transform rotate-45"></div>
            <div className="w-4 h-4 bg-gradient-to-br from-indigo-600 to-[#5c3c91] rounded transform rotate-12 -ml-1"></div>
            <span className="text-lg font-bold text-gray-800 ml-1">SOFTWEBIX</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 text-xs font-semibold text-gray-800 tracking-wide -mt-1">
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
      <section className="px-4 py-12 lg:px-8 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl lg:text-7xl font-black leading-none tracking-tight">
                <span className="text-gray-900">WE MAKE </span>
                <span className="text-[#5c3c91]">IT</span>
                <br />
                <span className="text-[#5c3c91]">SIMPLE</span>
                <br />
                <span className="text-gray-900">AND</span>
                <br />
                <span className="text-[#5c3c91]">AFFORDABLE.</span>
              </h1>
              
              <div className="text-base lg:text-lg text-gray-700 space-y-1 leading-relaxed">
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

            {/* Right Illustration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-xl mx-auto">
                {/* Floating Elements - Top */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-8 right-12 w-20 h-6 bg-yellow-400 rounded-full transform rotate-12"
                ></motion.div>
                
                <motion.div 
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-8 -left-4 w-16 h-16 bg-orange-500 rounded-lg transform rotate-45"
                ></motion.div>
                
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-4 right-20 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-pink-500 transform rotate-12"
                ></motion.div>

                {/* Main Workspace Scene */}
                <div className="relative z-10 p-12">
                  {/* Desk Base */}
                  <div className="relative">
                    <div className="w-80 h-40 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl shadow-lg"></div>
                    <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-t-2xl"></div>
                    
                    {/* Person Character */}
                    <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-20">
                      {/* Head */}
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full mb-1 relative">
                        {/* Hair */}
                        <div className="absolute -top-2 left-2 w-16 h-8 bg-gray-800 rounded-full"></div>
                      </div>
                      {/* Body */}
                      <div className="w-24 h-16 bg-gradient-to-br from-[#5c3c91] to-[#6b4c9a] rounded-xl"></div>
                    </div>
                    
                    {/* Laptop */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-16 h-12 bg-gray-200 rounded-lg border-2 border-gray-300 shadow-md">
                        <div className="w-full h-8 bg-gray-800 rounded-t-md"></div>
                      </div>
                    </div>

                    {/* Desk Items */}
                    <div className="absolute -top-4 right-8">
                      <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="absolute -top-2 left-8">
                      <div className="w-6 h-12 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Bottom Floating Elements */}
                <motion.div 
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-12 -left-8 w-12 h-12 bg-green-400 rounded-full"
                ></motion.div>
                
                <motion.div 
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute bottom-20 right-4 w-8 h-16 bg-gradient-to-t from-green-500 to-green-300 rounded-full"
                ></motion.div>
                
                <motion.div 
                  animate={{ y: [0, 18, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                  className="absolute bottom-8 right-20 w-16 h-8 bg-gray-300 rounded-full shadow-md"
                ></motion.div>

                {/* Additional Accent Elements */}
                <motion.div 
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 -right-8 w-6 h-6 bg-[#5c3c91] rounded transform rotate-45"
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
              className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Monitor className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website Development</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                We specialize in creating high-quality websites that meet your business needs and offer 24/7 maintenance guarantees.
              </p>
            </motion.div>

            {/* Mobile Apps Development */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Apps Development</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                We develop high-performance mobile apps used across iOS and Android platforms.
              </p>
            </motion.div>

            {/* Custom Business Tools */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Business Tools</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                We provide different custom business tools (CRM, ERP, etc.) to help you stay ahead in the competitive market.
              </p>
            </motion.div>

            {/* Social Media Engagement */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Media Engagement</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                We have different campaigns to help increase your social presence and brands by using Facebook, Instagram and LinkedIn.
              </p>
            </motion.div>

            {/* Programming Services */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Programming Services</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                We offer expert programming services in Python and Java and we also create customized backend systems.
              </p>
            </motion.div>

            {/* Comprehensive Maintenance & Bug Fixes */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Maintenance & Bug Fixes</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Our Maintenance & Bug Fixes Service ensures your software, website and applications run smoothly and reliably over time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
