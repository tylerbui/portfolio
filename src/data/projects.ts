export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  mobileImage?: string;
  techStack: string[];
  liveUrl: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'fullstack';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'union-wedding-app',
    title: 'Union - Wedding Planning App',
    description: 'A comprehensive wedding planning platform with color palette tools, venue layout designer, and playlist management.',
    longDescription: 'Union is a full-featured wedding planning application that helps couples organize their perfect day. Features include an interactive color palette picker with HSL controls, a drag-and-drop venue layout designer, and a comprehensive playlist manager with categorization for different wedding events. Built with modern web technologies for a seamless user experience.',
    image: '/projects/union-color-palette.png',
    mobileImage: '/projects/union-venue-layout.png',
    techStack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Drag & Drop API', 'Color Theory'],
    liveUrl: 'https://union-web-five.vercel.app',
    githubUrl: 'https://github.com/tylerbui/union',
    category: 'fullstack',
    featured: true
  },
  {
    id: 'stax-web-app',
    title: 'Stax - Productivity Platform',
    description: 'An all-in-one platform for productivity, collaboration, and growth with integrated suite of tools and e-commerce features.',
    longDescription: 'Stax is a comprehensive productivity and collaboration platform that combines work management tools with e-commerce capabilities. Features include task management, team collaboration, shopping functionality with fast shipping, trending product discovery, and customer support systems. The platform offers a seamless experience for both productivity and commerce needs, built with modern web technologies.',
    image: '/projects/stax-mobile.png',
    mobileImage: '/projects/stax-dashboard.png',
    techStack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'E-commerce', 'API Integration'],
    liveUrl: 'https://stax-web-tu9k.vercel.app',
    githubUrl: 'https://github.com/tylerbui/stax',
    category: 'fullstack',
    featured: true
  }
  // Add more projects as you build them
];

export const featuredProjects = projects.filter(project => project.featured);
export const webProjects = projects.filter(project => project.category === 'web');
export const mobileProjects = projects.filter(project => project.category === 'mobile');
export const fullstackProjects = projects.filter(project => project.category === 'fullstack');