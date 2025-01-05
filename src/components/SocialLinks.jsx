import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  {
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/sayantan-nandi-4809242b9',
    color: 'hover:text-blue-600',
    label: 'LinkedIn'
  },
  {
    icon: FaGithub,
    url: 'https://github.com/sayantann7/',
    color: 'hover:text-gray-900 dark:hover:text-white',
    label: 'GitHub'
  },
  {
    icon: FaTwitter,
    url: 'https://x.com/sayantann7/',
    color: 'hover:text-blue-400',
    label: 'Twitter'
  },
  {
    icon: FaInstagram,
    url: 'https://instagram.com/sayantann7',
    color: 'hover:text-pink-600',
    label: 'Instagram'
  },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-2xl text-gray-600 dark:text-gray-400 transition-colors ${link.color}`}
          aria-label={link.label}
        >
          <link.icon />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;