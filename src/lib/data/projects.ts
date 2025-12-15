export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  featured?: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: 'luga-edu',
    title: 'Luga Edu',
    description: 'Online English learning platform with courses, workshops, and language sessions built using Django and PostgreSQL',
    tags: ['Python', 'Django', 'API Development'],
    image: '/images/projects/ecommerce.jpg',
    link: 'https://luga-edu.com',
    featured: true,
    date: 'Jul 2025, Oct 2025'
  },
  {
    id: 'flower-essence',
    title: 'Flower Essence',
    description: 'A single page e-commerce web site for a collection of skin care products with link to e-mail of the client.',
    tags: ['Javascript', 'Node.js', 'Express.js', 'API Development'],
    image: '/images/projects/ecommerce.jpg',
    link: 'https://flowers-essence-collection.vercel.app/',
    featured: true,
    date: 'Jun 2025, Jun 2025'
  },
  {
    id: 'passphera-cli',
    title: 'passphera-cli',
    description: 'Strong password generator and manager CLI tool for Windows and Linux (DEB, RPM)',
    tags: ['Python', 'typer', 'FastAPI', 'API Development'],
    image: '/images/projects/ecommerce.jpg',
    link: 'https://passphera.imfathi.com',
    featured: true,
    date: 'Apr 2024, Nov 2024'
  },
];
