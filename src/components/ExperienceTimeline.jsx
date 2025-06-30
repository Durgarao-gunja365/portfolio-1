import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaLaptopCode, FaServer } from 'react-icons/fa';

const ExperienceTimeline = () => {
  const [selectedType, setSelectedType] = useState('education');

  const timelineItems = [
    {
      type: 'education',
      title: 'B.Tech in Computer Science',
      institution: 'Koneru Lakshmaiah Education Foundation',
      period: '2022 - 2026',
      location: 'Andhra Pradesh, India',
      description: 'Currently pursuing my undergraduate degree with a CGPA of 9.5',
      icon: <FaGraduationCap className="text-purple-500" />,
      skills: ['Data Structures', 'Algorithms', 'DBMS', 'OS']
    },
    {
      type: 'education',
      title: 'Intermediate (12th Grade)',
      institution: 'Sri Chaitanya Junior College',
      period: '2020 - 2022',
      location: 'Andhra Pradesh, India',
      description: 'Completed with a CGPA of 9.62',
      icon: <FaGraduationCap className="text-purple-500" />,
      skills: ['Mathematics', 'Physics', 'Chemistry']
    },
    {
      type: 'education',
      title: '10th Grade',
      institution: 'Sri Chaitanya School',
      period: '2019 - 2020',
      location: 'Andhra Pradesh, India',
      description: 'Completed with a perfect CGPA of 10',
      icon: <FaGraduationCap className="text-purple-500" />,
      skills: ['Science', 'Mathematics', 'Social Studies']
    },
    {
      type: 'internship',
      title: 'AWS Cloud Practitioner Virtual Internship',
      company: 'EduSkill (Government Program)',
      period: 'Jan - Mar 2024',
      location: 'Remote',
      description: 'Gained foundational knowledge of AWS cloud services including EC2, S3, IAM, and VPC. Learned cloud architecture fundamentals and best practices.',
      icon: <FaLaptopCode className="text-blue-500" />,
      skills: ['AWS Fundamentals', 'Cloud Architecture', 'EC2', 'S3', 'IAM']
    },
    {
      type: 'internship',
      title: 'AWS Data Engineering Virtual Internship',
      company: 'EduSkill (Government Program)',
      period: 'April - June 2024',
      location: 'Remote',
      description: 'Hands-on experience with AWS data services including Glue, Redshift, and S3. Built ETL pipelines and performed data transformations for analytics.',
      icon: <FaServer className="text-blue-500" />,
      skills: ['AWS Glue', 'Redshift', 'ETL Pipelines', 'Data Transformation']
    },
    {
      type: 'internship',
      title: 'ServiceNow CSA Virtual Internship (Current)',
      company: 'EduSkill (Government Program)',
      period: 'July 2024 - Present',
      location: 'Remote',
      description: 'Currently learning ServiceNow platform fundamentals, IT service management, and system administration concepts.',
      icon: <FaLaptopCode className="text-blue-500" />,
      skills: ['ServiceNow Fundamentals', 'ITSM', 'System Administration'],
      inProgress: true
    }
  ];

  const filteredItems = selectedType === 'all' 
    ? timelineItems 
    : timelineItems.filter(item => item.type === selectedType);

  return (
    <section id="education-experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Education & Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I don't have professional company experience yet, as I'm still a student. However, I have hands-on experience with various projects and am eager to learn and grow. I've completed virtual internships through EduSkill, a government-provided program, and am currently expanding my skills.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          {['education', 'internship'].map((type) => (
            <motion.button
              key={type}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedType === type
                  ? type === 'education' 
                    ? 'bg-purple-600 text-white'
                    : 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {type === 'education' ? 'Education' : 'Internships'}
            </motion.button>
          ))}
        </div>

        {/* Timeline Items */}
        <div className="space-y-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border ${
                item.type === 'internship' 
                  ? 'border-blue-500/30 hover:border-blue-500' 
                  : 'border-purple-500/30 hover:border-purple-500'
              }`}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg text-2xl ${
                    item.type === 'internship' 
                      ? item.inProgress
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-blue-500/20 text-blue-400'
                      : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                        {item.inProgress && (
                          <span className="ml-2 text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
                            In Progress
                          </span>
                        )}
                      </h3>
                    </div>
                    <p className="text-gray-300 mt-1">
                      {item.type === 'internship' ? item.company : item.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt /> {item.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt /> {item.location}
                      </span>
                    </div>
                    <p className="mt-4 text-gray-400">{item.description}</p>
                    <div className="mt-5">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">
                        {item.type === 'internship' ? 'Technologies:' : 'Key Subjects:'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className={`px-3 py-1 text-xs rounded-full ${
                              item.type === 'internship'
                                ? item.inProgress
                                  ? 'bg-green-500/10 text-green-400'
                                  : 'bg-blue-500/10 text-blue-400'
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
      </div>
    </section>
  );
};

export default ExperienceTimeline;