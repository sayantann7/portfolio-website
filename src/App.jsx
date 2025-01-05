import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ProjectCard from './components/ProjectCard';
import ScrollToTop from './components/ScrollToTop';
import SocialLinks from './components/SocialLinks';
import { projects } from './data/projects';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <ScrollToTop />

      {/* Hero Section */}
      <section id="intro" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Hero3D />
        </div>
        <div className="z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 shadow-xl max-w-2xl mx-auto"
          >
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              src="/profile.jpg"
              alt="Sayantan Nandi"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-primary-500"
            />
            <motion.h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Sayantan Nandi
            </motion.h1>
            <motion.p className="text-xl text-gray-600 dark:text-gray-300">
              FY student at SIT Pune, explorer of technology and innovation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-title"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert mx-auto"
          >
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              From a very young age, I've been an explorer of uncharted lands, learning from new experiences as much as I can and make an impact in other's lives. Technology has been a way to complete that mission. I am dedicated to learning more and more about new skills, currently I know intermediate HTML, CSS, JS, Python, Solidity and recently completed the basics of backend development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-title"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-title"
          >
            Let's Connect
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-xl p-8"
          >
            <SocialLinks />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;