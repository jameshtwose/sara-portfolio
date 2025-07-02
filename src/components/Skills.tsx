import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: '3D Software',
      skills: [
        { name: 'Blender', level: 95 },
        { name: 'ZBrush', level: 90 },
        { name: 'Cinema 4D', level: 85 },
        { name: 'Autodesk Maya', level: 80 },
        { name: '3ds Max', level: 75 },
      ]
    },
    {
      title: 'Texturing & Materials',
      skills: [
        { name: 'Substance Painter', level: 95 },
        { name: 'Substance Designer', level: 85 },
        { name: 'Photoshop', level: 90 },
        { name: 'Quixel Suite', level: 80 },
      ]
    },
    {
      title: 'Rendering & Lighting',
      skills: [
        { name: 'Real-time Graphics', level: 95 },
        { name: 'Octane Render', level: 85 },
        { name: 'V-Ray', level: 80 },
        { name: 'KeyShot', level: 85 },
        { name: 'Lighting Design', level: 90 },
      ]
    },
    {
      title: 'Creative Strategy',
      skills: [
        { name: 'Branding', level: 90 },
        { name: 'Creative Direction', level: 95 },
        { name: 'Content Creation', level: 85 },
        { name: 'Art Direction', level: 90 },
      ]
    },
    {
      title: 'Technical Skills',
      skills: [
        { name: 'Unreal Engine', level: 80 },
        { name: 'Spline', level: 85 },
        { name: 'After Effects', level: 75 },
        { name: 'Web3D Integration', level: 80 },
      ]
    }
  ];

  const additionalSkills: string[] = [
    'Project Management', 'Team Leadership', 'Client Relations', 
    'Concept Development', 'Art Pipeline', 'Quality Assurance',
    'Cross-platform Development', 'Performance Optimization',
    'Asset Optimization', 'Color Theory', 'Composition',
    'Typography', 'User Experience', 'Interactive Design'
  ];

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through years of experience in 3D design, 
            creative direction, and technical innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-700 hover:border-primary hover:text-primary transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
