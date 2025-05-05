import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaRocket } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: "Web Development", icon: <FaCode className="text-indigo-400" />, level: 90 },
    { name: "UI/UX Design", icon: <FaPalette className="text-purple-400" />, level: 85 },
    { name: "Product Strategy", icon: <FaRocket className="text-pink-400" />, level: 80 }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Let me introduce myself and what I do
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Profile image with 3D effect */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden transform -rotate-3 flex items-center justify-center">
                {/* Replace with your image */}
                <div className="text-gray-400 text-center p-6">
                  <span className="text-xl">Your Image Here</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Who Am I?
            </h3>
            
            <div className="space-y-6 text-gray-400 mb-8">
              <p>
                I'm a passionate <span className="text-indigo-300">creative developer</span> with 
                expertise in building exceptional digital experiences. With over 5 years in the industry, 
                I've helped companies transform their ideas into reality.
              </p>
              <p>
                My approach combines technical expertise with <span className="text-purple-300">design thinking</span>, 
                ensuring that every project is not only functional but also delivers an 
                engaging user experience.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or mentoring aspiring developers.
              </p>
            </div>

            {/* Skills progress bars */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-xl">{skill.icon}</div>
                    <h4 className="font-medium text-white">{skill.name}</h4>
                    <span className="ml-auto text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download resume button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10"
            >
              <button className="px-8 py-3.5 border-2 border-indigo-500 text-indigo-400 font-medium rounded-lg hover:bg-indigo-500/10 transition-all duration-300 flex items-center gap-2 group">
                Download Resume
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  &rarr;
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;