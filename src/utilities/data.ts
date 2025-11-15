// Work experience data
export const WORK_EXPERIENCE_DATA = [
  {
    id: 1,
    title: 'Web Developer',
    company: 'Bluehance360 LLP',
    location: 'Vasai-Virar, Maharashtra',
    period: 'Jan 2024 - Present',
    skills: [
      'HTML',
      'CSS',
      'Tailwind CSS',
      'JavaScript',
      'React',
      'Node.js',
      'Next.js',
      'MongoDB',
      'React Native',
      'Wix',
    ],
    description:
      "Developed and maintained the company's website and web applications, improving performance and user experience.",
  },
  {
    id: 2,
    title: 'Full Stack Intern',
    company: 'Nextgen Techno Venture',
    location: 'Mumbai, Maharashtra',
    period: 'July 2023 - Dec 2023',
    skills: [
      'HTML',
      'CSS',
      'Tailwind CSS',
      'JavaScript',
      'React',
      'Node.js',
      'MongoDB',
      'My SQL',
    ],
    description:
      'Developed and maintained multiple client-facing applications, collaborating with designers and backend developers to deliver high-quality products.',
  },
  {
    id: 3,
    title: 'Web Designer',
    company: 'Sachtak',
    location: 'Remote',
    period: 'Feb 2023 - April 2023',
    skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    description:
      'Created responsive websites for clients across various industries, ensuring cross-browser compatibility and optimal performance.',
  },
];

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  slug: string;
  longDescription?: string;
  features?: string[];
  challenges?: string;
  images?: string[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    title: 'CodeCollaborator',
    description:
      'A collaborative code editing platform for real-time development.',
    longDescription:
      'CodeCollaborator is a real-time collaborative code editing platform designed to enhance the development process. It allows multiple users to edit code simultaneously, track changes, and execute code in a secure environment. The platform supports multiple programming languages and provides a seamless user experience for collaborative coding.',
    features: [
      'Real-time collaborative code editing',
      'Multi-language support (JavaScript, Python, TypeScript, etc.)',
      'Code execution environment',
      'Live chat and user presence',
      'Session management',
      'File management system',
      'User authentication',
    ],
    challenges:
      'The main challenge was implementing real-time collaborative editing efficiently. We solved this by using WebSockets for real-time updates and implementing efficient data synchronization strategies. Another challenge was creating a secure and scalable code execution environment.',
    image:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800',
    images: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800',
    ],
    tech: [
      'React',
      'TypeScript',
      'Shadcn/ui',
      'WebSocket',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Drizzle ORM',
    ],
    github: 'https://github.com/Just9krish/CodeCollaborator',
    live: 'https://codecollaborator-r3cv.onrender.com/',
    slug: 'code-collaborator',
  },
  {
    title: 'Worknest',
    description:
      'A Notion-style project management application for organizing pages, notes, and tasks.',
    longDescription:
      'WorkNest is a web application that lets you create and organize content in a block-based editor. You can create pages, add different types of content blocks, and use templates for calendars and roadmaps.',
    features: [
      'Block-based editor for creating pages and content',
      'Templates for calendars and roadmaps',
      'Note-taking functionality',
      'Task management',
      'Project management',
      'User accounts and authentication',
    ],
    challenges:
      'The main challenge was building a performant application that could handle thousands of pages and content blocks while maintaining fast search and filtering capabilities. We implemented efficient database indexing and search algorithms to ensure quick response times.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800',
    images: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800',
    ],
    tech: [
      'React 19',
      'TypeScript',
      'Vite',
      'Shadcn/ui',
      'Tailwind CSS',
      'Appwrite (backend)',
    ],
    github: 'https://github.com/Just9krish/WorkNest/',
    live: 'https://useworknest.netlify.app/',
    slug: 'worknest',
  },
  {
    title: 'TaskNest',
    description:
      'A task management application for organizing tasks into collections with priority ordering.',
    longDescription:
      'TaskNest is a task management application designed to help users organize and manage their tasks efficiently. It allows users to create collections and organize tasks within them. Users can arrange tasks in priority order, mark them as complete, and delete tasks as needed. Built with Next.js, Prisma, GraphQL, and Clerk, the application provides a seamless and intuitive experience for task organization and productivity.',
    features: [
      'Collections: Users can create collections, each of which can contain multiple tasks.',
      'Tasks: Users can create tasks within collections.',
      'Priority Order: Tasks can be arranged in priority order.',
      'Mark as Complete: Users can mark tasks as complete.',
      'Delete Task: Users can delete tasks.',
    ],
    challenges:
      'Integrating GraphQL with Prisma for efficient database queries while maintaining type safety was a key challenge. Implementing server actions in Next.js for seamless server-client communication required careful architecture decisions. Setting up Clerk authentication and ensuring proper user session management across the application also presented interesting technical hurdles.',
    image:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800',
    images: [
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800',
    ],
    tech: ['Next.js', 'Prisma', 'GraphQL', 'Shadcn', 'Clerk'],
    github: 'https://github.com/Just9krish/TaskNest',
    live: 'https://task-nest.vercel.app/',
    slug: 'tasknest',
  },
];
