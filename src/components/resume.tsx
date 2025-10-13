'use client'

import { motion } from 'framer-motion'
import { Download, Code, Database, Laptop, Wrench, Lightbulb, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'
import { resumeData } from '@/data/resume'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
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

const categoryIcons: Record<string, React.ElementType> = {
  Languages: Code,
  Frontend: Laptop,
  Backend: Database,
  "Tools & Platforms": Wrench,
  Concepts: Lightbulb
}

export function Resume() {
  return (
    <section id="resume" className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Resume & Skills
            </h2>
            {resumeData.summary && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                {resumeData.summary}
              </p>
            )}
            
            {/* Download Resume Button */}
            {resumeData.resumeUrl && (
              <motion.a
                href={resumeData.resumeUrl}
                download
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600",
                  "text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            )}
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {resumeData.skills.map((skillCategory) => {
              const IconComponent = categoryIcons[skillCategory.category] || FileText
              
              return (
                <motion.div
                  key={skillCategory.category}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {skillCategory.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-sm rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors cursor-default"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Experience Highlights */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What I Bring to the Table
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    5+
                  </div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    10+
                  </div>
                  <div className="text-gray-600">Technologies Mastered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">Commitment to Quality</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

