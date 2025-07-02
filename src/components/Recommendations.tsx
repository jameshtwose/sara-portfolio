import React from 'react';
import { motion } from 'framer-motion';
import { Quote, User, Linkedin } from 'lucide-react';

interface Recommendation {
  name: string;
  title: string;
  company: string;
  relationship: string;
  text: string;
  linkedinUrl?: string;
}

const Recommendations: React.FC = () => {
  const recommendations: Recommendation[] = [
    {
      name: "José Teixeira",
      title: "Founder & Creative Director",
      company: "Bandido",
      relationship: "José managed Sara directly",
      text: "I had the pleasure of hiring Sara as the first dedicated 3D creative to join my team at Superside, and she exceeded all expectations. Sara is an exceptional problem solver with outstanding 3D skills and a keen eye for design. Beyond her technical prowess, she is a wonderful human being, a creative partner, and highly team-oriented. These qualities make her an ideal candidate for any role. I thoroughly enjoyed every project we collaborated on and every interaction we had. I would hire her again without hesitation."
    },
    {
      name: "Brian McClafferty",
      title: "Founder/CEO",
      company: "WhereisKevin.com",
      relationship: "Brian worked with Sara on the same team",
      text: "Sara is an inspiration to work with, full of creativity and she always hits the mark with her commitment to delivery only the best. I would happily call upon Sara for any creative needs me or my company has."
    },
    {
      name: "Yana Pancheva",
      title: "Project Manager | Certified Professional Scrum Product Owner",
      company: "UX enthusiast",
      relationship: "Sara was Yana's client",
      text: "I had the privilege of working alongside Sara during the early stages of the company she is currently a part of. Throughout our collaboration, I was consistently impressed by her exceptional talents as a 3D artist, as well as her remarkable management skills. In the dynamic environment typical of start-up companies, Sara stood out as the one individual who possessed an unparalleled awareness of all aspects, whether they were creative, business-related, or organizational in nature. She effortlessly balanced the demands of the design and development pipeline with what was most advantageous for the business at any given moment. Collaborating with Sara was an absolute pleasure, as she exuded professionalism and kindness throughout our interactions. Sara's undeniable talent, combined with her exceptional management skills make her an invaluable asset to any team."
    }
  ];

  return (
    <section id="recommendations" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Recommendations
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            What colleagues and collaborators say about working with me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {recommendations.map((recommendation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-lg p-8 hover-lift relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote size={48} />
              </div>
              
              {/* Recommendation Text */}
              <div className="mb-6">
                <p className="text-gray-300 text-lg leading-relaxed italic">
                  "{recommendation.text}"
                </p>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <User className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white font-semibold text-lg">
                        {recommendation.name}
                      </h4>
                      <Linkedin className="text-blue-400" size={16} />
                    </div>
                    <p className="text-gray-400">
                      {recommendation.title} at {recommendation.company}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {recommendation.relationship}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">
            Interested in working together? Let's connect!
          </p>
          <a
            href="https://www.linkedin.com/in/sarapopov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
          >
            <Linkedin size={20} />
            View LinkedIn Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Recommendations;
