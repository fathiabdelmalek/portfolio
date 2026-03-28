import { createProject, createSkillCategory, createPublication } from './db';
import type { Project, SkillCategory, Publication } from './db';
import { hashPassword } from './auth';

const seedProjects: Omit<Project, 'id' | 'created_at' | 'updated_at'>[] = [
    {
        title: 'Luga Edu',
        description: 'Online English learning platform with courses, workshops, and language sessions built using Django and PostgreSQL',
        tags: ['Python', 'Django', 'API Development'],
        image: "https://api.microlink.io/?url=https://luga-edu.com&screenshot=true&meta=false&embed=screenshot.url",
        link: 'https://luga-edu.com',
        featured: true,
        display_order: 1
    },
    {
        title: 'Flower Essence',
        description: 'A single page e-commerce web site for a collection of skin care products with link to e-mail of the client.',
        tags: ['Javascript', 'Node.js', 'Express.js', 'API Development'],
        image: "https://api.microlink.io/?url=https://flowers-essence-collection.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
        link: 'https://flowers-essence-collection.vercel.app/',
        featured: true,
        display_order: 2
    },
    {
        title: 'passphera-cli',
        description: 'Strong password generator and manager CLI tool for Windows and Linux (DEB, RPM)',
        tags: ['Python', 'typer', 'FastAPI', 'API Development'],
        image: "https://api.microlink.io/?url=https://passphera-site.onrender.com/&screenshot=true&meta=false&embed=screenshot.url",
        link: 'https://passphera-site.onrender.com/',
        featured: true,
        display_order: 3
    }
];

const seedSkillCategories: Omit<SkillCategory, 'id' | 'created_at'>[] = [
    {
        name: 'Programming Languages',
        icon: '💻',
        skills: ['Python', 'JavaScript / TypeScript', 'C / C++', 'Java / Kotlin / Dart', 'Bash'],
        display_order: 1
    },
    {
        name: 'Frontend Technologies',
        icon: '🎨',
        skills: ['Tailwind CSS', 'Svelte / SvelteKit', 'React', 'Next.js'],
        display_order: 2
    },
    {
        name: 'Backend Technologies',
        icon: '⚙️',
        skills: ['Django', 'FastAPI', 'Flask', 'Node.js', 'Spring Boot'],
        display_order: 3
    },
    {
        name: 'Application Frameworks',
        icon: '📱',
        skills: ['JavaFX', 'Flutter', 'Spring', 'Arduino'],
        display_order: 4
    },
    {
        name: 'Database Systems',
        icon: '🗄️',
        skills: ['SQL', 'MongoDB', 'Redis'],
        display_order: 5
    },
    {
        name: 'DevOps & Cloud',
        icon: '☁️',
        skills: ['Git', 'Docker', 'AWS'],
        display_order: 6
    },
    {
        name: 'AI & Data Science',
        icon: '🤖',
        skills: ['PyTorch', 'scikit-learn', 'Keras / TensorFlow', 'Pandas'],
        display_order: 7
    },
    {
        name: 'Tools & Productivity',
        icon: '🔧',
        skills: ['Postman', 'Figma', 'LaTeX', 'Notion', 'Trello', 'n8n'],
        display_order: 8
    },
    {
        name: 'Operating Systems',
        icon: '🖥️',
        skills: ['Fedora / Linux', 'Windows', 'Android'],
        display_order: 9
    },
    {
        name: 'Development Environments',
        icon: '⌨️',
        skills: ['PyCharm', 'VS Code', 'Cursor', 'Android Studio'],
        display_order: 10
    }
];

async function seed() {
    console.log('Starting database seed...\n');

    console.log('Seeding projects...');
    for (const project of seedProjects) {
        await createProject(project);
        console.log(`  ✓ Created project: ${project.title}`);
    }

    console.log('\nSeeding skill categories...');
    for (const category of seedSkillCategories) {
        await createSkillCategory(category);
        console.log(`  ✓ Created category: ${category.name}`);
    }

    console.log('\n✅ Database seeded successfully!');
    process.exit(0);
}

seed().catch((error) => {
    console.error('Error seeding database:', error);
    process.exit(1);
});
