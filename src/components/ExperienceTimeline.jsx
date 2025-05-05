import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceTimeline = () => {
  const [selectedType, setSelectedType] = useState('education'); // default view

  const timelineItems = [
    {
      type: 'work',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: '2021 - Present',
      location: 'San Francisco, CA',
      description: 'Lead the frontend development team, implement new React architecture, and optimize application performance.',
      icon: <FaBriefcase className="text-blue-500" />,
      skills: ['React', 'TypeScript', 'Redux', 'GraphQL']
    },
    {
      type: 'education',
      title: 'Master of Computer Science',
      institution: 'Stanford University',
      period: '2019 - 2021',
      location: 'Stanford, CA',
      description: 'Specialized in Artificial Intelligence and Human-Computer Interaction. GPA: 3.8/4.0',
      icon: <FaGraduationCap className="text-purple-500" />,
      skills: ['Machine Learning', 'Data Structures', 'Algorithms']
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Digital Solutions LLC',
      period: '2017 - 2019',
      location: 'New York, NY',
      description: 'Developed responsive web applications using modern JavaScript frameworks and collaborated with UX designers.',
      icon: <FaBriefcase className="text-blue-500" />,
      skills: ['JavaScript', 'Angular', 'Node.js']
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Software Engineering',
      institution: 'MIT',
      period: '2013 - 2017',
      location: 'Cambridge, MA',
      description: 'Focus on software development methodologies and system architecture. Minor in Mathematics.',
      icon: <FaGraduationCap className="text-purple-500" />,
      skills: ['Java', 'C++', 'Database Systems']
    }
  ];

  const filteredItems = timelineItems.filter(item => item.type === selectedType);

  return (
    <section id="education&workexperience" className="py-20 bg-gray-900/90 relative overflow-hidden">
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
              Experience & Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setSelectedType('education')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedType === 'education'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-purple-700'
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setSelectedType('work')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedType === 'work'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-blue-700'
            }`}
          >
            Work Experience
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent transform -translate-x-1/2"></div>

          {/* Timeline items or fallback message */}
          {filteredItems.length === 0 ? (
            <div className="text-center text-gray-300 text-lg mt-10">
              {selectedType === 'work' ? 'No work experience available.' : 'No education details found.'}
            </div>
          ) : (
            <div className="space-y-12">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  {/* Timeline dot */}
                  <div className={`hidden md:block absolute left-1/2 top-6 w-5 h-5 -ml-2.5 rounded-full border-4 border-white z-10 ${
                    item.type === 'work' ? 'bg-blue-500' : 'bg-purple-500'
                  }`}></div>

                  {/* Timeline card */}
                  <div className={`flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl border ${
                    item.type === 'work' ? 'border-blue-500/30 hover:border-blue-500' : 'border-purple-500/30 hover:border-purple-500'
                  } transition-all duration-300 p-6 group max-w-2xl ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg text-2xl ${
                        item.type === 'work' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'
                      } group-hover:bg-opacity-30 transition-colors`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                            {item.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.type === 'work' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'
                          }`}>
                            {item.type === 'work' ? 'WORK' : 'EDUCATION'}
                          </span>
                        </div>
                        <h4 className="text-lg font-medium text-gray-300 mt-1">
                          {item.type === 'work' ? item.company : item.institution}
                        </h4>
                        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-400">
                          <span className="flex items-center gap-1.5">
                            <FaCalendarAlt className="opacity-70" />
                            {item.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <FaMapMarkerAlt className="opacity-70" />
                            {item.location}
                          </span>
                        </div>
                        <p className="mt-4 text-gray-400">{item.description}</p>
                        <div className="mt-5">
                          <h5 className="text-sm font-medium text-gray-300 mb-2">Key Skills:</h5>
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, i) => (
                              <span 
                                key={i}
                                className={`px-3 py-1 text-xs rounded-full ${
                                  item.type === 'work' 
                                    ? 'bg-blue-500/10 text-blue-400' 
                                    : 'bg-purple-500/10 text-purple-400'
                                }`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
