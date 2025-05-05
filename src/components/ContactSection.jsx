import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import emailjs from "@emailjs/browser";
import { useInView } from 'react-intersection-observer';


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();
  const [ref, inView] = useInView({ threshold: 0.1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
        'service_vm9lljh',
        'template_75zqh1i',
      formRef.current,
       'NrySt4DHEI4mdZq6S'
    )
    .then((result) => {
      console.log(result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      console.log(error.text);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
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
    <section 
      id="contact" 
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden"
    >
      {/* Floating background elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-60 h-60 bg-indigo-500/10 rounded-full filter blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : {}}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Contact Information */}
          <motion.div 
            variants={item}
            className="space-y-8"
          >
            <motion.div 
              className="flex items-start gap-6 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all"
              variants={item}
              whileHover="hover"
            >
              <motion.div 
                className="p-4 bg-indigo-500/20 rounded-lg text-indigo-400 text-2xl"
                variants={floating}
              >
                <FaEnvelope />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  your.email@example.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-6 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500 transition-all"
              variants={item}
              whileHover="hover"
            >
              <motion.div 
                className="p-4 bg-purple-500/20 rounded-lg text-purple-400 text-2xl"
                variants={floating}
              >
                <FaPhoneAlt />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <a 
                  href="tel:+1234567890" 
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-6 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-pink-500 transition-all"
              variants={item}
              whileHover="hover"
            >
              <motion.div 
                className="p-4 bg-pink-500/20 rounded-lg text-pink-400 text-2xl"
                variants={floating}
              >
                <FaMapMarkerAlt />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-400">San Francisco, CA</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="pt-6"
              variants={item}
            >
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {[ 
                  { icon: <FaLinkedin />, url: "#", color: "text-blue-400 hover:text-blue-500" },
                  { icon: <FaGithub />, url: "#", color: "text-gray-400 hover:text-white" },
                  { icon: <FaTwitter />, url: "#", color: "text-sky-400 hover:text-sky-500" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl ${social.color} transition-colors`}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={item}
            className="p-8 bg-gray-800/50 rounded-xl border border-gray-700"
          >
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg focus:outline-none hover:bg-indigo-700 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </motion.div>

              {submitStatus && (
                <motion.div
                  className={`text-center mt-4 ${submitStatus === 'success' ? 'text-green-500' : 'text-red-500'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {submitStatus === 'success' ? 'Message sent successfully!' : 'Error sending message, please try again.'}
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
