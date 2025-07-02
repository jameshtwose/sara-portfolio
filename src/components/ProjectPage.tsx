import React, { Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { ProjectDetail } from '../data/projects';

// Lazy load Spline component
const Spline = React.lazy(() => import('@splinetool/react-spline'));

interface ProjectPageProps {
  project: ProjectDetail;
  onBack: () => void;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project, onBack }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Back Button */}
      <div className="fixed top-20 left-6 z-50">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="bg-dark/80 backdrop-blur-md border border-gray-700 text-white p-3 rounded-full hover:bg-gray-800 transition-all duration-300 hover-lift"
        >
          <ArrowLeft size={20} />
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {project.description}
            </p>
            
            {/* Project Meta */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar size={16} />
                <span>{project.year}</span>
              </div>
              {project.client && (
                <div className="flex items-center gap-2 text-gray-400">
                  <User size={16} />
                  <span>{project.client}</span>
                </div>
              )}
              {project.duration && (
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock size={16} />
                  <span>{project.duration}</span>
                </div>
              )}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-primary/20 text-primary px-4 py-2 rounded-full border border-primary/30 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">
                Project Overview
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {project.fullDescription}
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-white">
                Results & Impact
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {project.results}
              </p>
            </motion.div>

            {/* Challenges & Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Challenges
                </h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="text-gray-300 leading-relaxed">
                      <span className="text-primary mr-2">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Solutions
                </h3>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="text-gray-300 leading-relaxed">
                      <span className="text-green-400 mr-2">✓</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Spline Scene Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Interactive 3D Experience
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore the interactive 3D scene below. You can rotate, zoom, and interact with the elements to get a full understanding of the project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-lg overflow-hidden"
            style={{ height: '600px' }}
            onWheel={(e) => {
              // Prevent page scrolling when interacting with Spline scene
              e.stopPropagation();
            }}
            onMouseEnter={() => {
              // Disable page scrolling when mouse enters Spline area
              document.body.style.overflow = 'hidden';
            }}
            onMouseLeave={() => {
              // Re-enable page scrolling when mouse leaves Spline area
              document.body.style.overflow = 'unset';
            }}
          >
            <Suspense fallback={
              <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mb-4"></div>
                <p className="text-white text-lg">Loading Interactive 3D Scene...</p>
              </div>
            }>
              <Spline
                scene={project.splineSceneUrl}
                className="w-full h-full"
              />
            </Suspense>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-gray-400 text-sm">
              💡 <strong>Tip:</strong> Click and drag to rotate • Scroll to zoom • Explore interactive elements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Interested in Similar Work?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              I'd love to discuss how I can help bring your creative vision to life with cutting-edge 3D design and interactive experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBack}
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover-lift"
              >
                Back to Portfolio
              </button>
              <a
                href="#contact"
                onClick={onBack}
                className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover-lift inline-block"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
