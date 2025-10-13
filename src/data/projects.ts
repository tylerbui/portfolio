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
    title: 'Stax - Ecommerce Platform',
    description: 'A modern ecommerce platform with seamless shopping experience, fast shipping, trending products, and integrated customer support.',
    longDescription: 'Stax is a full-featured ecommerce platform designed for modern online shopping. The platform includes product browsing with trending items, shopping cart functionality, fast shipping options, secure checkout process, order tracking, and integrated customer support. Built with a focus on user experience and performance, Stax delivers a smooth and responsive shopping journey across all devices.',
    image: '/projects/stax-mobile.png',
    mobileImage: '/projects/stax-dashboard.png',
    techStack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'E-commerce', 'API Integration'],
    liveUrl: 'https://stax-web-tu9k.vercel.app',
    githubUrl: 'https://github.com/tylerbui/stax',
    category: 'fullstack',
    featured: true
  },
  {
    id: 'social-link-dashboard',
    title: 'Social Link - Social Dashboard',
    description: 'A comprehensive social media dashboard for managing and analyzing your social presence across multiple platforms.',
    longDescription: 'Social Link is a powerful social media management dashboard that provides a unified interface for tracking, analyzing, and managing your social media presence. Features include real-time analytics, post scheduling, engagement metrics, follower growth tracking, and cross-platform integration. The dashboard offers intuitive data visualization and insights to help optimize your social media strategy.',
    image: '/projects/social-link-signup.png',
    techStack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Chart.js', 'API Integration', 'Analytics'],
    liveUrl: 'https://social-link-dashboard.vercel.app',
    githubUrl: 'https://github.com/tylerbui/SocialLink',
    category: 'web',
    featured: true
  },
  {
    id: 'jobify-platform',
    title: 'Jobify - Job Search Platform',
    description: 'A modern job search and application tracking platform connecting job seekers with opportunities.',
    longDescription: 'Jobify is a comprehensive job search platform designed to streamline the job hunting process. Features include advanced job search filters, application tracking, resume builder, company profiles, job recommendations, and real-time notifications. The platform provides an intuitive interface for both job seekers to find their perfect role and employers to discover top talent.',
    image: '/projects/jobify.png',
    mobileImage: '/projects/jobify2.png',
    techStack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'Database', 'API Integration'],
    liveUrl: 'https://jobify-platform.vercel.app',
    githubUrl: 'https://github.com/tylerbui/jobify',
    category: 'fullstack',
    featured: true
  },
  {
    id: 'spark-vault',
    title: 'SparkVault - Digital Products Marketplace',
    description: 'A comprehensive digital marketplace platform for creators to sell and manage ebooks, courses, templates, and other digital products.',
    longDescription: 'SparkVault is a full-featured digital marketplace that empowers creators to sell their digital products seamlessly. The platform features product categorization across courses, templates, audio content, visual assets, software & tools, and e-books. Includes a powerful seller dashboard for managing products, tracking sales analytics, managing customers, and configuring payment settings. Built with modern e-commerce best practices and a beautiful user interface.',
    image: '/projects/sparkvault-1.png',
    mobileImage: '/projects/sparkvault-2.png',
    techStack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'E-commerce', 'Payment Integration', 'Analytics Dashboard'],
    liveUrl: 'https://sparkvault.vercel.app',
    githubUrl: 'https://github.com/tylerbui/sparkvault',
    category: 'fullstack',
    featured: true
  }
  // Add more projects as you build them
];

export const featuredProjects = projects.filter(project => project.featured);
export const webProjects = projects.filter(project => project.category === 'web');
export const mobileProjects = projects.filter(project => project.category === 'mobile');
export const fullstackProjects = projects.filter(project => project.category === 'fullstack');