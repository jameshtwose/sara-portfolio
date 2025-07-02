import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  skills: string[];
  description: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Creative',
      company: 'Superside',
      period: 'Jul 2023 - Present · 2 yrs 1 mo',
      location: 'Remote',
      type: 'Full-time',
      skills: ['Lighting', 'Real-time Graphics', '+13 skills'],
      description: 'Leading creative initiatives and delivering high-quality 3D designs for global brands.'
    },
    {
      title: 'Creative Director',
      company: 'pax.world',
      period: 'Sep 2022 - Jul 2023 · 11 mos',
      location: 'Zurich, Switzerland · Remote',
      type: 'Full-time',
      skills: ['Branding', 'Creative Strategy', '+8 skills'],
      description: 'Directed creative vision and strategy for innovative digital experiences in the metaverse space.'
    },
    {
      title: 'Art Lead',
      company: 'pax.world',
      period: 'Dec 2021 - Sep 2022 · 10 mos',
      location: 'Zurich, Switzerland · Remote',
      type: 'Full-time',
      skills: ['Content Creation', 'Real-time Graphics', '+6 skills'],
      description: 'Led art direction and managed creative teams to deliver cutting-edge visual content.'
    },
    {
      title: 'Character Artist',
      company: 'metameet',
      period: 'Aug 2020 - Sep 2022 · 2 yrs 2 mos',
      location: 'Novi Sad, Vojvodina, Serbia · Remote',
      type: 'Part-time',
      skills: ['3D Sculpting', 'Substance Painter', '+5 skills'],
      description: 'Created detailed character models and assets for virtual meeting platforms.'
    },
    {
      title: 'Freelance 3D Artist',
      company: 'Fiverr',
      period: 'Dec 2018 - Aug 2020 · 1 yr 9 mos',
      location: 'Remote',
      type: 'Freelance',
      skills: ['3D Sculpting', 'Substance Painter', '+5 skills'],
      description: 'Delivered custom 3D artwork and models for diverse client projects worldwide.'
    },
    {
      title: '3D Generalist',
      company: 'Fried',
      period: 'Mar 2019 - Apr 2019 · 2 mos',
      location: 'Belgrade, Serbia · On-site',
      type: 'Internship',
      skills: ['3D Sculpting', 'Autodesk Maya', '+4 skills'],
      description: 'Gained hands-on experience in professional 3D production workflows and techniques.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-transparent"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mt-2">
                  <Briefcase size={20} className="text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 glass-effect rounded-lg p-6 hover-lift">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg text-primary font-medium">
                        {exp.company}
                      </h4>
                    </div>
                    <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
