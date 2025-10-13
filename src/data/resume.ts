export interface ResumeData {
  summary: string;
  skills: {
    category: string;
    items: string[];
  }[];
  resumeUrl?: string; // Optional: path to your PDF resume
}

export const resumeData: ResumeData = {
  summary: "Full Stack Developer with expertise in building modern web and mobile applications. Passionate about creating intuitive user experiences and scalable solutions using cutting-edge technologies. Experienced in both frontend and backend development, with a strong focus on clean code and best practices.",
  
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "HTML5", "CSS3", "SQL"]
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "React Native", "Tailwind CSS", "Framer Motion", "Redux", "Zustand"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Mongoose", "Prisma", "REST APIs"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Vercel", "Docker", "VS Code", "Expo", "Figma"]
    },
    {
      category: "Concepts",
      items: ["Responsive Design", "UI/UX", "API Integration", "Database Design", "Authentication", "E-commerce"]
    }
  ],
  
  // Add your resume file to /public/resume.pdf and uncomment this line
  // resumeUrl: "/resume.pdf"
};

