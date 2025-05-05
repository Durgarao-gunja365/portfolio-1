import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaFigma, FaDatabase, FaServer, FaMobile } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiGraphql, SiDocker, SiPython } from 'react-icons/si';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-indigo-400" />,
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" />, level: 95 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 85 },
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-green-400" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 90 },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-500" />, level: 85 },
        { name: "Python", icon: <SiPython className="text-yellow-400" />, level: 80 },
      ]
    },
    {
      title: "Other",
      icon: <FaServer className="text-purple-400" />,
      skills: [
        { name: "Database", icon: <FaDatabase className="text-red-400" />, level: 85 },
        { name: "Docker", icon: <SiDocker className="text-blue-400" />, level: 80 },
        { name: "Mobile", icon: <FaMobile className="text-indigo-300" />, level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/90 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-indigo-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              My Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Technologies I work with and my proficiency level
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-700 rounded-lg text-2xl">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="text-xl">{skill.icon}</div>
                          <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + catIndex * 0.1 }}
                          className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 p-8"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Other Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['JavaScript', 'HTML5', 'CSS3', 'Redux', 'Next.js', 'Express', 'MongoDB', 'PostgreSQL', 'Git', 'AWS', 'Firebase', 'Jest'].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="px-4 py-2 bg-gray-700/50 rounded-full text-gray-300 hover:bg-indigo-500/20 hover:text-white transition-all cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;