import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaCalendarAlt } from 'react-icons/fa';
import { request, gql } from 'graphql-request';
import { useInView } from 'react-intersection-observer';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const StatsSection = () => {
  const [githubStats, setGithubStats] = useState({
    contributions: 0,
    starsReceived: 0,
    repos: 0,
    loading: true,
    error: null,
  });
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const particlesInit = async (engine) => await loadFull(engine);
  const countUpRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      animateCountUp();
    }
  }, [inView, githubStats]);

  const animateCountUp = () => {
    if (!githubStats.loading && !githubStats.error) {
      countUpRefs.forEach((ref, index) => {
        const target = index === 0 ? githubStats.repos : 
                      index === 1 ? githubStats.starsReceived : 
                      githubStats.contributions;
        animateValue(ref.current, 0, target, 2000);
      });
    }
  };

  const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const fetchGitHubStats = async () => {
      const query = gql`
        {
          user(login: "Durgarao-gunja365") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
            }
            repositories(first: 100, isFork: false, privacy: PUBLIC, ownerAffiliations: OWNER) {
              totalCount
              nodes {
                stargazerCount
              }
            }
          }
        }
      `;

      try {
        const headers = {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        };

        const data = await request(GITHUB_GRAPHQL_API, query, {}, headers);

        const totalStars = data.user.repositories.nodes.reduce(
          (sum, repo) => sum + repo.stargazerCount,
          0
        );

        setGithubStats({
          contributions: data.user.contributionsCollection.contributionCalendar.totalContributions,
          starsReceived: totalStars,
          repos: data.user.repositories.totalCount,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error('GraphQL Error:', error);
        setGithubStats({
          contributions: 0,
          starsReceived: 0,
          repos: 0,
          loading: false,
          error: 'Failed to load GitHub data. Check token or network.',
        });
      }
    };

    fetchGitHubStats();
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const floating = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      id="github-stats" 
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden"
    >
      {/* Animated Particles Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Particles
          init={particlesInit}
          options={{
            particles: {
              number: { value: 30 },
              color: { value: ["#8B5CF6", "#EC4899", "#3B82F6"] },
              shape: { type: "circle" },
              opacity: { value: 0.5, random: true },
              size: { value: 3, random: true },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out"
              },
              line_linked: { enable: false }
            },
            interactivity: {
              events: {
                onhover: { enable: true, mode: "repulse" }
              }
            }
          }}
        />
      </div>

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
            Development Activity
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            My open-source contributions and coding journey
          </motion.p>
        </motion.div>

        <AnimatePresence>
          {githubStats.loading ? (
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex space-x-6">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="h-48 w-72 bg-gray-800/50 rounded-xl border border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                      y: 0
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.3
                    }}
                  >
                    <div className="h-full flex flex-col justify-center items-center">
                      <div className="h-12 w-12 bg-gray-700 rounded-full mb-4"></div>
                      <div className="h-8 w-24 bg-gray-700 rounded mb-2"></div>
                      <div className="h-4 w-16 bg-gray-700 rounded"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : githubStats.error ? (
            <motion.div
              className="bg-red-900/30 backdrop-blur-sm p-8 rounded-xl border border-red-700 max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-red-300">{githubStats.error}</p>
              <p className="text-gray-400 mt-2">Showing placeholder data</p>
              
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
              >
                {[
                  { icon: <FaGithub />, value: "25+", label: "Repositories", color: "text-indigo-400" },
                  { icon: <FaStar />, value: "150+", label: "Stars", color: "text-yellow-400" },
                  { icon: <FaCodeBranch />, value: "500+", label: "Contributions", color: "text-green-400" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={item}
                    className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all"
                    whileHover="hover"
                  >
                    <motion.div 
                      className={`text-4xl mb-3 ${stat.color}`}
                      variants={floating}
                    >
                      {stat.icon}
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                    <p className="text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {/* Repositories Card */}
              <motion.div
                variants={item}
                className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/20 group overflow-hidden"
                whileHover="hover"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full filter blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="p-4 bg-indigo-500/20 rounded-xl text-indigo-400 text-3xl group-hover:bg-indigo-500/30 transition-colors"
                      variants={floating}
                    >
                      <FaGithub />
                    </motion.div>
                    <h3 className="text-xl font-semibold">Repositories</h3>
                  </div>
                  <div className="flex items-end gap-2">
                    <span ref={countUpRefs[0]} className="text-5xl font-bold">0</span>
                  </div>
                  <div className="mt-6 flex items-center text-sm text-gray-400">
                    <FaCalendarAlt className="mr-2" />
                    <span>Public repositories</span>
                  </div>
                </div>
              </motion.div>

              {/* Stars Received Card */}
              <motion.div
                variants={item}
                className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all shadow-lg hover:shadow-yellow-500/20 group overflow-hidden"
                whileHover="hover"
              >
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-500/10 rounded-full filter blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="p-4 bg-yellow-500/20 rounded-xl text-yellow-400 text-3xl group-hover:bg-yellow-500/30 transition-colors"
                      variants={floating}
                    >
                      <FaStar />
                    </motion.div>
                    <h3 className="text-xl font-semibold">Stars Received</h3>
                  </div>
                  <div className="flex items-end gap-2">
                    <span ref={countUpRefs[1]} className="text-5xl font-bold">0</span>
                  </div>
                  <div className="mt-6 flex items-center text-sm text-gray-400">
                    <FaCalendarAlt className="mr-2" />
                    <span>On all repositories</span>
                  </div>
                </div>
              </motion.div>

              {/* Contributions Card */}
              <motion.div
                variants={item}
                className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-all shadow-lg hover:shadow-green-500/20 group overflow-hidden"
                whileHover="hover"
              >
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-500/10 rounded-full filter blur-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-500/10 rounded-full filter blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="p-4 bg-green-500/20 rounded-xl text-green-400 text-3xl group-hover:bg-green-500/30 transition-colors"
                      variants={floating}
                    >
                      <FaCodeBranch />
                    </motion.div>
                    <h3 className="text-xl font-semibold">Contributions</h3>
                  </div>
                  <div className="flex items-end gap-2">
                    <span ref={countUpRefs[2]} className="text-5xl font-bold">0</span>
                  </div>
                  <div className="mt-6 flex items-center text-sm text-gray-400">
                    <FaCalendarAlt className="mr-2" />
                    <span>Last year's activity</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub Profile Link */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="https://github.com/Durgarao-gunja365"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all border-2 border-gray-700 hover:border-purple-500 group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.4)"
            }}
          >
            <motion.div
              className="mr-3"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <FaGithub className="text-2xl" />
            </motion.div>
            <span className="text-lg font-medium">View Full GitHub Profile</span>
            <motion.span
              className="ml-2 opacity-0 group-hover:opacity-100"
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;