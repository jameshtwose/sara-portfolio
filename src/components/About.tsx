import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Users, Award, Globe } from 'lucide-react';

interface StatItem {
  icon: React.ReactElement;
  number: string;
  label: string;
}

const About: React.FC = () => {
  const stats: StatItem[] = [
    { icon: <Award />, number: '6+', label: 'Years Experience' },
    { icon: <Users />, number: '50+', label: 'Projects Completed' },
    { icon: <Palette />, number: '3', label: 'Major Companies' },
    { icon: <Globe />, number: '10+', label: 'Countries Reached' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
              Creative Vision Meets Technical Excellence
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm a passionate 3D designer and creative director with over 6 years of experience 
              crafting immersive digital experiences. My journey has taken me from freelance 
              artistry to leading creative teams at innovative companies like Superside and pax.world.
            </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Specializing in real-time graphics, character artistry, and creative strategy, 
              I bridge the gap between artistic vision and technical implementation. My work 
              spans from 3D sculpting and lighting to brand strategy and content creation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently serving as a Creative at Superside, I continue to push the boundaries 
              of what's possible in 3D design while mentoring the next generation of digital artists.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-lg p-6 text-center hover-lift"
              >
                <div className="text-primary mb-3 flex justify-center">
                  {React.cloneElement(stat.icon, { size: 32 })}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
