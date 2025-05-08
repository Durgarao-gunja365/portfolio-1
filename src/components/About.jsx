import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaRocket, FaDownload } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: "Web Development", icon: <FaCode className="text-indigo-400" />, level: 90 },
    { name: "UI/UX Design", icon: <FaPalette className="text-purple-400" />, level: 85 },
    { name: "Product Strategy", icon: <FaRocket className="text-pink-400" />, level: 80 }
  ];

  // Function to handle resume download
  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/2200030365_Durgarao_G_g.pdf';  
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Durgarao gunja.pdf'; // Set the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animation variants
  const floating = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 bg-indigo-600 rounded-full filter blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-60 h-60 bg-purple-600 rounded-full filter blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
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
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"
                variants={floating}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 flex items-center justify-center"
                variants={floating}
                transition={{ delay: 0.5 }}
              >
                {/* Replace with your image */}
                <div className="text-gray-400 text-center p-6">
                  <span className="text-xl"><img src="/my_photo-1.jpg" alt="" /></span>
                </div>
              </motion.div>
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
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I'm a passionate <span className="text-indigo-300 font-medium">creative developer</span> with 
                expertise in building exceptional digital experiences. With over 5 years in the industry, 
                I've helped companies transform their ideas into reality.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                My approach combines technical expertise with <span className="text-purple-300 font-medium">design thinking</span>, 
                ensuring that every project is not only functional but also delivers an 
                engaging user experience.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or mentoring aspiring developers.
              </motion.p>
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
                  className="space-y-2 group"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h4 className="font-medium text-white group-hover:text-indigo-300 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="ml-auto text-sm text-gray-400 group-hover:text-white transition-colors">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full relative"
                    >
                      <motion.div 
                        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "linear",
                          delay: 0.5 + index * 0.2
                        }}
                      />
                    </motion.div>
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
              <motion.button
                onClick={handleDownloadResume}
                className="px-8 py-3.5 border-2 border-indigo-500 text-indigo-400 font-medium rounded-lg hover:bg-indigo-500/10 transition-all duration-300 flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <FaDownload className="text-lg" />
                </motion.span>
                Download Resume
                <motion.span 
                  className="opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all"
                >
                  &rarr;
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;