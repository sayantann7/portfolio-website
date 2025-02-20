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
    { name: "HTML, CSS, JS", level: 95 },
    { name: "React.js, Next.js, Tailwind", level: 80 },
    { name: "Node.js, Express", level: 85 },
    { name: "MongoDB, GraphQL", level: 80 },
    { name: "Clerk Auth", level: 85 },
    { name: "Canva", level: 90 },
    { name: "Adobe After Effects", level: 70 }
  ];

  const downloadResume = () => {
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'sayantan-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main ref={containerRef} className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls enableZoom={false} />
            <HeroScene />
          </Canvas>
        </div>
        
        <motion.div 
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-6xl font-bold mb-4">
            <span>{typewriterText}</span>
            <Cursor cursorStyle="_" />
          </h1>
          <p className="text-xl text-muted-foreground mb-8">Crafting digital experiences that inspire</p>
          <div className="space-y-4">
            <Button size="lg" onClick={scrollToProjects}>
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
            <p className="text-muted-foreground">Passionate about creating innovative solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-8">
              I'm a creative and motivated individual, defined by a journey of curiosity and resilience. From my early explorations of new ideas to overcoming challenges that have shaped my path, every step has been a lesson in growth and innovation. Each obstacle has provided an opportunity to learn, refine my skills, and fuel my passion for making a positive impact.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <SkillGraph key={index} {...skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">Connect with me on social media</p>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://github.com/sayantann7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-foreground hover:text-primary"
              >
                <Github className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sayantann7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-foreground hover:text-primary"
              >
                <Linkedin className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://x.com/sayantann7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-foreground hover:text-primary"
              >
                <Twitter className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://instagram.com/sayantann7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-foreground hover:text-primary"
              >
                <Instagram className="w-8 h-8" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}