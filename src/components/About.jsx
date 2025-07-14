import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaDownload, FaJava, FaPython } from 'react-icons/fa';
import { SiDjango, SiSpring, SiDocker, SiJenkins } from 'react-icons/si';

const About = () => {
  const skills = [
    { 
      name: "Full-Stack Development", 
      icon: <FaCode className="text-indigo-400" />, 
      level: 85,
      description: "Building end-to-end web applications with modern frameworks"
    },
    { 
      name: "Backend Systems", 
      icon: <FaServer className="text-purple-400" />, 
      level: 80,
      description: "Developing robust server-side architectures and APIs"
    },
    { 
      name: "DevOps & Cloud", 
      icon: <SiDocker className="text-blue-400" />, 
      level: 75,
      description: "Implementing CI/CD pipelines and cloud infrastructure"
    }
  ];

  const technologies = [
    { name: "Django", icon: <SiDjango className="text-green-500" /> },
    { name: "Spring Boot", icon: <SiSpring className="text-red-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "Java", icon: <FaJava className="text-orange-500" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
    { name: "Jenkins", icon: <SiJenkins className="text-red-400" /> },
    { name: "Database Systems", icon: <FaDatabase className="text-yellow-400" /> }
  ];

  const handleDownloadResume = () => {
    const resumeUrl = 'durgarao Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Durgarao_Gunja_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const floating = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 bg-indigo-600 rounded-full filter blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-60 h-60 bg-purple-600 rounded-full filter blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
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
            Get to know more about my journey and skills
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Profile image */}
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
                className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"
                variants={floating}
                transition={{ delay: 0.5 }}
              >
                <img
                  src="/my_photo-1.jpg"
                  alt="Durgarao Gunja"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Computer Science Student & Developer
            </h3>
            
            <div className="space-y-6 text-gray-400 mb-8">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I'm currently pursuing my <span className="text-indigo-300 font-medium">B.Tech in Computer Science</span> with a CGPA of 9.5, specializing in full-stack development and cloud technologies. My academic journey has provided me with strong foundations in data structures, algorithms, and system design.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Through my virtual internships with <span className="text-purple-300 font-medium">EduSkill</span>, I've gained hands-on experience with AWS cloud services and data engineering tools. I'm currently expanding my skills with ServiceNow platform administration.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                What excites me most is solving complex problems through clean, efficient code and designing systems that are both powerful and user-friendly.
              </motion.p>
            </div>

            {/* Skills section */}
            <div className="mb-10">
              <h4 className="text-xl font-bold text-white mb-6">My Skills</h4>
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
                      <div>
                        <h4 className="font-medium text-white group-hover:text-indigo-300 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-gray-500">{skill.description}</p>
                      </div>
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
            </div>

            {/* Technologies */}
            <div className="mb-10">
              <h4 className="text-xl font-bold text-white mb-4">Technologies I Work With</h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 rounded-lg"
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-gray-300 text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Resume download */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={handleDownloadResume}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="text-lg" />
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;