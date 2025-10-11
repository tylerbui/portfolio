'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { featuredProjects } from '@/data/projects'
import { useState } from 'react'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1] as const
    }
  }
}

const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: [0.42, 0, 0.58, 1] as const
  }
}

export function Hero() {
  const [currentProject, setCurrentProject] = useState(0)
  
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length)
  }
  
  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [2, 1, 2],
            rotate: [0, -180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 10
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            animate={floatingAnimation}
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tyler Bui
            </span>
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Full Stack Developer
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I create beautiful, functional, and user-centered digital experiences.
            Currently building amazing web and mobile applications with modern technologies.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
          <motion.a
            href="#projects"
            className={cn(
              "group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold",
              "hover:bg-gray-100 transition-all duration-300",
              "flex items-center gap-2 shadow-2xl hover:shadow-3xl"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </motion.a>
          
          <motion.a
            href="#contact"
            className={cn(
              "group border border-white/20 text-white px-8 py-4 rounded-full font-semibold",
              "hover:bg-white hover:text-gray-900 transition-all duration-300",
              "flex items-center gap-2 backdrop-blur-sm"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <Mail className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Featured Projects Showcase */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Featured Work</h3>
          
          {/* Project Carousel */}
          <div className="relative mb-8">
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Project Image */}
                <div className="w-full md:w-1/2 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl flex items-center justify-center overflow-hidden relative">
                  {featuredProjects[currentProject]?.image ? (
                    <Image 
                      src={featuredProjects[currentProject]?.image} 
                      alt={featuredProjects[currentProject]?.title}
                      fill
                      className="object-cover rounded-xl"
                    />
                  ) : (
                    <div className="text-white/60 text-center">
                      <ExternalLink className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm">Project Preview</p>
                    </div>
                  )}
                </div>
                
                {/* Project Details */}
                <div className="w-full md:w-1/2 text-left">
                  <h4 className="text-xl font-bold text-white mb-3">
                    {featuredProjects[currentProject]?.title}
                  </h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {featuredProjects[currentProject]?.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredProjects[currentProject]?.techStack.slice(0, 4).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      href={featuredProjects[currentProject]?.liveUrl}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    {featuredProjects[currentProject]?.githubUrl && (
                      <motion.a
                        href={featuredProjects[currentProject]?.githubUrl}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Carousel Controls */}
            {featuredProjects.length > 1 && (
              <>
                <motion.button
                  onClick={prevProject}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  onClick={nextProject}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </motion.button>
              </>
            )}
          </div>
          
          {/* Mini Project Cards */}
          <div className="flex flex-wrap justify-center gap-4">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={cn(
                  "cursor-pointer p-4 rounded-xl border transition-all duration-300",
                  index === currentProject 
                    ? "bg-white/20 border-white/40 scale-105" 
                    : "bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30"
                )}
                onClick={() => setCurrentProject(index)}
                whileHover={{ scale: index === currentProject ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-16 h-12 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-lg mb-2 flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-white/80" />
                </div>
                <h5 className="text-white text-sm font-medium mb-1 truncate max-w-24">
                  {project.title.split(' ')[0]}
                </h5>
                <p className="text-gray-400 text-xs truncate max-w-24">
                  {project.techStack[0]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-16">
          {[
            { icon: Github, href: "https://github.com/tylerbui", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/tylernbui/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:contact.tylernbui@gmail.com", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              className="text-gray-400 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <p className="text-gray-400 text-sm mb-4">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}