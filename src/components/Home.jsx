import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/yourusername" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername" },
    { icon: <FaTwitter />, url: "https://twitter.com/yourusername" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-indigo-400 font-mono mb-4"
            >
              Hi, my name is
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Gunja Durgarao
              </span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-3xl text-gray-300 mb-8"
            >
              I build <span className="text-indigo-300">exceptional digital experiences</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0"
            >
              I'm a passionate developer specializing in modern web technologies.
              Currently focused on creating accessible, human-centered products.
            </motion.p>
            
            <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 0.8 }}
  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
>
  <a href="#projects">
    <button className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1">
      View My Work
    </button>
  </a>
  <a href="#contact">
    <button className="px-8 py-3.5 border-2 border-indigo-500 text-indigo-400 font-medium rounded-lg hover:bg-indigo-500/10 transition-all duration-300">
      Contact Me
    </button>
  </a>
</motion.div>

          </motion.div>

          {/* 3D profile card */}
          <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:w-1/2 relative mt-16 lg:mt-0"
    >
      <div className="relative w-full max-w-md mx-auto">
        {/* Glowing outer shadow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-lg opacity-30"></div>

        {/* Glassy Card */}
        <div className="relative bg-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-800 transform-style-preserve-3d group">
          <div className="p-1">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
              {/* Your Image */}
              <div className="h-80 w-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center overflow-hidden">
                <img
                  src="/my_photo-1.jpg" // <-- Replace with your image path (e.g., from public/)
                  alt="Profile"
                  className="h-full w-full object-cover rounded-xl transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* Floating colored blur balls for creative effect */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
        </div>
      </div>
    </motion.div>
        </div>

        {/* Social links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="fixed left-6 bottom-1/4 hidden lg:flex flex-col gap-6"
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 text-xl transition-colors duration-300 hover:-translate-y-1"
            >
              {link.icon}
            </a>
          ))}
          <div className="h-16 w-px bg-gray-600 mx-auto mt-2"></div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-indigo-400 transition-colors duration-300">
            <span className="mb-2">Scroll down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowDown className="text-xl" />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Global styles for this component */}
      <style jsx global>{`
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .group:hover .transform-style-preserve-3d {
          transform: perspective(1000px) rotateX(5deg) rotateY(-5deg) translateZ(20px);
          box-shadow: 0 25px 50px -12px rgba(79, 70, 229, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Hero;