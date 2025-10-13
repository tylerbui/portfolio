export interface ResumeData {
  summary: string;
  skills: {
    category: string;
    items: string[];
  }[];
  resumeUrl?: string; // Optional: path to your PDF resume
}

export const resumeData: ResumeData = {
  summary: "",
  
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

