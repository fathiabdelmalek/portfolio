import 'dotenv/config';
import pg from 'pg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});

async function fetchData() {
    console.log('[FETCH] Fetching data from database...\n');

    try {
        // Fetch projects
        const projectsResult = await pool.query(`
            SELECT id, title, description, tags, image, link, featured, display_order, created_at
            FROM projects ORDER BY display_order ASC, created_at DESC
        `);
        const projects = projectsResult.rows.map(row => ({
            id: row.id,
            title: row.title,
            description: row.description,
            tags: row.tags || [],
            image: row.image || './images/projects/ecommerce.jpg',
            link: row.link || '#',
            featured: row.featured || false,
            date: new Date(row.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
        }));

        // Fetch skill categories with skills
        const categoriesResult = await pool.query(`
            SELECT sc.id, sc.name, sc.icon, sc.display_order,
                   COALESCE(json_agg(json_build_object('id', s.id, 'name', s.name, 'display_order', s.display_order) ORDER BY s.display_order ASC) FILTER (WHERE s.id IS NOT NULL), '[]') as skills
            FROM skill_categories sc
            LEFT JOIN skills s ON s.category_id = sc.id
            GROUP BY sc.id, sc.name, sc.icon, sc.display_order
            ORDER BY sc.display_order ASC
        `);
        const skillCategories = categoriesResult.rows.map(row => ({
            id: row.id,
            name: row.name,
            icon: row.icon,
            skills: row.skills.map((s: any) => s.name)
        }));

        // Fetch publications
        const publicationsResult = await pool.query(`
            SELECT id, title, authors, journal, year, doi, url, abstract, status, display_order, created_at
            FROM publications ORDER BY display_order ASC, created_at DESC
        `);
        const publications = publicationsResult.rows.map(row => ({
            id: row.id,
            title: row.title,
            authors: row.authors || '',
            journal: row.journal || '',
            year: row.year,
            doi: row.doi || null,
            url: row.url || null,
            abstract: row.abstract || null,
            status: row.status || 'published',
            createdAt: row.created_at
        }));

        // Write to data files
        const dataDir = path.join(__dirname, '..', 'src', 'lib', 'data');

        fs.writeFileSync(
            path.join(dataDir, 'projects.ts'),
            `// Auto-generated from database - Do not edit manually\nexport interface Project {\n  id: string;\n  title: string;\n  description: string;\n  tags: string[];\n  image: string;\n  link: string;\n  featured?: boolean;\n  date: string;\n}\n\nexport const projects: Project[] = ${JSON.stringify(projects, null, 2)};\n`
        );

        fs.writeFileSync(
            path.join(dataDir, 'skills.ts'),
            `// Auto-generated from database - Do not edit manually\nexport interface SkillCategory {\n  id: string;\n  name: string;\n  icon: string;\n  skills: string[];\n}\n\nexport const skillCategories: SkillCategory[] = ${JSON.stringify(skillCategories, null, 2)};\n`
        );

        fs.writeFileSync(
            path.join(dataDir, 'publications.ts'),
            `// Auto-generated from database - Do not edit manually\nexport interface Publication {\n  id: string;\n  title: string;\n  authors: string;\n  journal: string;\n  year: number | null;\n  doi?: string | null;\n  url?: string | null;\n  abstract?: string | null;\n  status: 'published' | 'under_review' | 'in_preparation';\n  createdAt: string;\n}\n\nexport const publications: Publication[] = ${JSON.stringify(publications, null, 2)};\n`
        );

        console.log('[OK] Data fetched successfully!');
        console.log(`   - ${projects.length} projects`);
        console.log(`   - ${skillCategories.length} skill categories`);
        console.log(`   - ${publications.length} publications`);

    } catch (error) {
        console.error('[ERROR] Failed to fetch data:', error);
        process.exit(1);
    } finally {
        await pool.end();
    }
}

fetchData();
