import 'dotenv/config';
import pg from 'pg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});

async function setupDatabase() {
    console.log('[SETUP] Starting database setup...\n');

    try {
        const schemaPath = path.join(__dirname, '..', 'src', 'lib', 'server', 'schema.sql');
        const schema = fs.readFileSync(schemaPath, 'utf-8');
        
        await pool.query(schema);
        console.log('[OK] Schema ready!');

        const projectsCount = await pool.query('SELECT COUNT(*) FROM projects');
        
        if (parseInt(projectsCount.rows[0].count) === 0) {
            console.log('\n[DATA] Inserting seed data...\n');

            const projects = [
                {
                    title: 'Luga Edu',
                    description: 'Online English learning platform with courses, workshops, and language sessions built using Django and PostgreSQL',
                    tags: ['Python', 'Django', 'API Development'],
                    image: 'https://api.microlink.io/?url=https://luga-edu.com&screenshot=true&meta=false&embed=screenshot.url',
                    link: 'https://luga-edu.com',
                    featured: true,
                    display_order: 1
                },
                {
                    title: 'Flower Essence',
                    description: 'A single page e-commerce web site for a collection of skin care products with link to e-mail of the client.',
                    tags: ['Javascript', 'Node.js', 'Express.js', 'API Development'],
                    image: 'https://api.microlink.io/?url=https://flowers-essence-collection.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
                    link: 'https://flowers-essence-collection.vercel.app/',
                    featured: true,
                    display_order: 2
                },
                {
                    title: 'passphera-cli',
                    description: 'Strong password generator and manager CLI tool for Windows and Linux (DEB, RPM)',
                    tags: ['Python', 'typer', 'FastAPI', 'API Development'],
                    image: 'https://api.microlink.io/?url=https://passphera-site.onrender.com/&screenshot=true&meta=false&embed=screenshot.url',
                    link: 'https://passphera-site.onrender.com',
                    featured: true,
                    display_order: 3
                }
            ];

            for (const project of projects) {
                await pool.query(
                    `INSERT INTO projects (title, description, tags, image, link, featured, display_order) 
                     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                    [project.title, project.description, project.tags, project.image, project.link, project.featured, project.display_order]
                );
                console.log(`   [+] Project: ${project.title}`);
            }

            const skillData = [
                { name: 'Programming Languages', icon: '💻', skills: ['Python', 'JavaScript / TypeScript', 'C / C++', 'Java / Kotlin / Dart', 'Bash'], display_order: 1 },
                { name: 'Frontend Technologies', icon: '🎨', skills: ['Tailwind CSS', 'Svelte / SvelteKit', 'React', 'Next.js'], display_order: 2 },
                { name: 'Backend Technologies', icon: '⚙️', skills: ['Django', 'FastAPI', 'Flask', 'Node.js', 'Spring Boot'], display_order: 3 },
                { name: 'Application Frameworks', icon: '📱', skills: ['JavaFX', 'Flutter', 'Spring', 'Arduino'], display_order: 4 },
                { name: 'Database Systems', icon: '🗃️', skills: ['SQL', 'MongoDB', 'Redis'], display_order: 5 },
                { name: 'DevOps & Cloud', icon: '☁️', skills: ['Git', 'Docker', 'AWS'], display_order: 6 },
                { name: 'AI & Data Science', icon: '🤖', skills: ['PyTorch', 'scikit-learn', 'Keras / TensorFlow', 'Pandas'], display_order: 7 },
                { name: 'Tools & Productivity', icon: '🔧', skills: ['Postman', 'Figma', 'LaTeX', 'Notion', 'Trello', 'n8n'], display_order: 8 },
                { name: 'Operating Systems', icon: '🖥️', skills: ['Fedora / Linux', 'Windows', 'Android'], display_order: 9 },
                { name: 'Development Environments', icon: '⌨️', skills: ['PyCharm', 'VS Code', 'Cursor', 'Android Studio'], display_order: 10 }
            ];

            for (const category of skillData) {
                const catResult = await pool.query(
                    `INSERT INTO skill_categories (name, icon, display_order) VALUES ($1, $2, $3) RETURNING id`,
                    [category.name, category.icon, category.display_order]
                );
                const categoryId = catResult.rows[0].id;

                for (let i = 0; i < category.skills.length; i++) {
                    await pool.query(
                        `INSERT INTO skills (category_id, name, display_order) VALUES ($1, $2, $3)`,
                        [categoryId, category.skills[i], i]
                    );
                }
                console.log(`   [+] Category: ${category.name} (${category.skills.length} skills)`);
            }

            console.log('\n[OK] Seed data inserted successfully!');
        } else {
            console.log('\n[SKIP] Database already has data, skipping seed.');
        }

        console.log('\n[DONE] Database setup complete!');

    } catch (error) {
        console.error('[ERROR] Failed to setup database:', error);
        process.exit(1);
    } finally {
        await pool.end();
    }
}

setupDatabase();
