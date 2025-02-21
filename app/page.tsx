"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Code2, Briefcase, User, Mail, ChevronDown, FileDown, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Button } from '@/components/ui/button';
import HeroScene from '@/components/hero-scene';
import ProjectCard from '@/components/project-card';
import SkillGraph from '@/components/skill-graph';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const [heroRef, heroInView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const [typewriterText] = useTypewriter({
    words: ['Hi', 'I am Sayantan', 'Creative Developer', 'Curious Mind', 'Tinkerer', 'Tech Enthusiast'],
    loop: true,
    deleteSpeed: 50,
    typeSpeed: 80,
    delaySpeed: 1500
  });

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    // Your skills data here
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4">{typewriterText}<Cursor /></h1>
          <p className="text-lg text-muted-foreground mb-8">Welcome to my portfolio website</p>
          <div className="flex space-x-4">
            <Button variant="primary" size="lg" onClick={scrollToProjects}>
              <ChevronDown className="mr-2" /> Explore My Work
            </Button>
            <div>
              <Button variant="outline" size="lg" onClick={downloadResume}>
                <FileDown className="mr-2" /> Download Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Briefcase className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">A selection of my recent work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground">I&apos;m a passionate developer with a love for creating innovative solutions.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}