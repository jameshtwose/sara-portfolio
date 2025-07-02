import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Lazy load Spline component
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Spline Scene */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Suspense fallback={
          <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
          </div>
        }>
          <Spline
            scene="https://prod.spline.design/S8o9DE-254xyJ0lv/scene.splinecode"
            className="w-full h-full opacity-10"
          />
        </Suspense>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Sara Popov</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 font-light">
            3D Designer & Creative Director
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting immersive 3D experiences and leading creative visions with over 6 years of expertise 
            in real-time graphics, character artistry, and creative strategy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#portfolio"
              className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="border border-white text-white hover:bg-white hover:text-dark px-8 py-4 rounded-full font-semibold transition-all duration-300 hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="text-white/60 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
