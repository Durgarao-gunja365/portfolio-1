import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaUniversity, FaRegClock } from 'react-icons/fa';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "May 2024",
      credential: "Credential ID: 673a089dd09145d6b7679f1f506b2f62",
      icon: <FaAward className="text-orange-500" />,
      link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/673a089dd09145d6b7679f1f506b2f62"
    },
    {
      title: "EX183 Red Hat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      date: "Dec 2024",
      credential: "Credential ID: 240-262-790",
      icon: <FaCertificate className="text-red-500" />,
      link: "https://rhtapps.redhat.com/verify?certId=240-262-790"
    },
    {
      title: "Certified AI Associate",
      issuer: "Artificial Intelligence Board of America",
      date: "2022",
      credential: "Credential ID: 5069271",
      icon: <FaUniversity className="text-blue-500" />,
      link: "https://drive.google.com/file/d/11VFd6uv9jQqxhUizdxHW_jHHGF-KKKgD/view"
    },
    {
      title: "ServiceNow Certified System Administrator (In Progress)",
      issuer: "ServiceNow",
      date: "Expected july 2025",
      credential: "Currently pursuing",
      icon: <FaRegClock className="text-purple-500" />,
      link: "#",
      inProgress: true
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900/90 relative overflow-hidden">
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
              Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            My professional certifications and accreditations
          </p>
        </motion.div>

        {/* Certifications timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent transform -translate-x-1/2"></div>

          {/* Certifications list */}
          <div className="space-y-8 md:space-y-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Timeline dot */}
                <div className={`hidden md:block absolute left-1/2 top-6 w-4 h-4 -ml-2 ${cert.inProgress ? 'bg-purple-500' : 'bg-indigo-500'} rounded-full border-2 border-white z-10`}></div>

                {/* Certification card */}
                <div className={`flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl border ${cert.inProgress ? 'border-purple-500/50' : 'border-gray-700'} hover:border-indigo-500 transition-all duration-300 p-6 group max-w-2xl ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${cert.inProgress ? 'bg-purple-500/20' : 'bg-gray-700'} rounded-lg text-2xl group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors`}>
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {cert.title}
                        {cert.inProgress && (
                          <span className="ml-2 text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                            In Progress
                          </span>
                        )}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1 mb-3">
                        <span className="text-sm text-gray-400">{cert.issuer}</span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-sm text-gray-400">{cert.date}</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-4">{cert.credential}</p>
                      {!cert.inProgress && (
                        <a 
                          href={cert.link} 
                          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Credential
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1">
            View All Certifications
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;