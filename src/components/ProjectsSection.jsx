import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFirebase } from 'react-icons/si';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart functionality, user authentication, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      icons: [<FaReact />, <FaNodeJs />],
      github: "#",
      live: "#",
      image: "/placeholder-project1.jpg"
    },
    {
      title: "Task Management App",
      description: "Productivity application with drag-and-drop interface, real-time updates, and team collaboration features.",
      tags: ["TypeScript", "Firebase", "Tailwind CSS"],
      icons: [<SiTypescript />, <SiFirebase />, <SiTailwindcss />],
      github: "#",
      live: "#",
      image: "/placeholder-project2.jpg"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard displaying complex data sets with customizable charts and filtering options.",
      tags: ["Python", "React", "D3.js"],
      icons: [<FaPython />, <FaReact />],
      github: "#",
      live: "#",
      image: "/placeholder-project3.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-60 h-60 bg-purple-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl"></div>
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
              My Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Some of my recent work and contributions
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all duration-300"
            >
              {/* Project image */}
              <div className="h-60 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Project Screenshot</span>
              </div>

              {/* Project content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-gray-400">
                    {project.icons.map((Icon, i) => (
                      <span key={i} className="text-xl hover:text-white transition-colors">
                        {Icon}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-400 mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-700/50 text-sm rounded-full text-gray-300 hover:bg-indigo-500/20 hover:text-white transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 hover:bg-gray-600 hover:text-white transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub /> Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3.5 border-2 border-indigo-500 text-indigo-400 font-medium rounded-lg hover:bg-indigo-500/10 transition-all duration-300 flex items-center gap-2 mx-auto group">
            View All Projects
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              &rarr;
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;