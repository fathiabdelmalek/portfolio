export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  featured?: boolean;
  date: string; // ISO format date
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Elconferences',
    description: 'A fully functional online store built with modern web technologies.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/images/projects/ecommerce.jpg',
    link: 'https://project-url.com',
    featured: true,
    date: '2023-05-15'
  },
  {
    id: 'project-1',
    title: 'E-commerce Website',
    description: 'A fully functional online store built with modern web technologies.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/images/projects/ecommerce.jpg',
    link: 'https://project-url.com',
    featured: true,
    date: '2023-05-15'
  },
  {
    id: 'project-1',
    title: 'E-commerce Website',
    description: 'A fully functional online store built with modern web technologies.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/images/projects/ecommerce.jpg',
    link: 'https://project-url.com',
    featured: true,
    date: '2023-05-15'
  },
  {
    id: 'project-1',
    title: 'E-commerce Website',
    description: 'A fully functional online store built with modern web technologies.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/images/projects/ecommerce.jpg',
    link: 'https://project-url.com',
    featured: true,
    date: '2023-05-15'
  },
];
