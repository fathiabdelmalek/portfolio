import { Pool } from 'pg';

let pool: Pool | null = null;

function getPool(): Pool {
    if (!pool) {
        pool = new Pool({
            connectionString: process.env.DATABASE_URL,
        });
    }
    return pool;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string | null;
    link: string | null;
    featured: boolean;
    display_order: number;
    created_at: string;
    updated_at: string;
}

export interface SkillCategory {
    id: string;
    name: string;
    icon: string;
    display_order: number;
    created_at: string;
    skills?: string[];
}

export interface Skill {
    id: string;
    category_id: string;
    name: string;
    display_order: number;
    created_at: string;
}

export interface Publication {
    id: string;
    title: string;
    authors: string | null;
    journal: string | null;
    year: number | null;
    doi: string | null;
    url: string | null;
    abstract: string | null;
    status: 'published' | 'under_review' | 'in_preparation';
    display_order: number;
    created_at: string;
    updated_at: string;
}

// ============= PROJECTS =============

export async function getProjects(): Promise<Project[]> {
    const db = getPool();
    const result = await db.query('SELECT * FROM projects ORDER BY display_order ASC, created_at DESC');
    return result.rows;
}

export async function getProjectById(id: string): Promise<Project | null> {
    const db = getPool();
    const result = await db.query('SELECT * FROM projects WHERE id = $1', [id]);
    return result.rows[0] || null;
}

export async function createProject(data: Omit<Project, 'id' | 'created_at' | 'updated_at'>): Promise<Project> {
    const db = getPool();
    const result = await db.query(
        `INSERT INTO projects (title, description, tags, image, link, featured, display_order)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         RETURNING *`,
        [data.title, data.description, data.tags || [], data.image, data.link, data.featured || false, data.display_order || 0]
    );
    return result.rows[0];
}

export async function updateProject(id: string, data: Partial<Omit<Project, 'id' | 'created_at' | 'updated_at'>>): Promise<Project | null> {
    const db = getPool();
    const fields: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (data.title !== undefined) { fields.push(`title = $${paramIndex++}`); values.push(data.title); }
    if (data.description !== undefined) { fields.push(`description = $${paramIndex++}`); values.push(data.description); }
    if (data.tags !== undefined) { fields.push(`tags = $${paramIndex++}`); values.push(data.tags); }
    if (data.image !== undefined) { fields.push(`image = $${paramIndex++}`); values.push(data.image); }
    if (data.link !== undefined) { fields.push(`link = $${paramIndex++}`); values.push(data.link); }
    if (data.featured !== undefined) { fields.push(`featured = $${paramIndex++}`); values.push(data.featured); }
    if (data.display_order !== undefined) { fields.push(`display_order = $${paramIndex++}`); values.push(data.display_order); }

    if (fields.length === 0) return getProjectById(id);

    values.push(id);
    const result = await db.query(`UPDATE projects SET ${fields.join(', ')} WHERE id = $${paramIndex} RETURNING *`, values);
    return result.rows[0] || null;
}

export async function deleteProject(id: string): Promise<boolean> {
    const db = getPool();
    const result = await db.query('DELETE FROM projects WHERE id = $1', [id]);
    return (result.rowCount ?? 0) > 0;
}

// ============= SKILL CATEGORIES =============

export async function getSkillCategories(): Promise<SkillCategory[]> {
    const db = getPool();
    const result = await db.query('SELECT * FROM skill_categories ORDER BY display_order ASC, created_at ASC');
    return result.rows;
}

export async function getSkillCategoryById(id: string): Promise<SkillCategory | null> {
    const db = getPool();
    const result = await db.query('SELECT * FROM skill_categories WHERE id = $1', [id]);
    return result.rows[0] || null;
}

export async function createSkillCategory(data: Omit<SkillCategory, 'id' | 'created_at'>): Promise<SkillCategory> {
    const db = getPool();
    const result = await db.query(
        `INSERT INTO skill_categories (name, icon, display_order) VALUES ($1, $2, $3) RETURNING *`,
        [data.name, data.icon, data.display_order || 0]
    );
    return result.rows[0];
}

export async function updateSkillCategory(id: string, data: Partial<Omit<SkillCategory, 'id' | 'created_at' | 'skills'>>): Promise<SkillCategory | null> {
    const db = getPool();
    const fields: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (data.name !== undefined) { fields.push(`name = $${paramIndex++}`); values.push(data.name); }
    if (data.icon !== undefined) { fields.push(`icon = $${paramIndex++}`); values.push(data.icon); }
    if (data.display_order !== undefined) { fields.push(`display_order = $${paramIndex++}`); values.push(data.display_order); }

    if (fields.length === 0) return getSkillCategoryById(id);

    values.push(id);
    const result = await db.query(`UPDATE skill_categories SET ${fields.join(', ')} WHERE id = $${paramIndex} RETURNING *`, values);
    return result.rows[0] || null;
}

export async function deleteSkillCategory(id: string): Promise<boolean> {
    const db = getPool();
    const result = await db.query('DELETE FROM skill_categories WHERE id = $1', [id]);
    return (result.rowCount ?? 0) > 0;
}

// ============= SKILLS =============

export async function getSkills(): Promise<Skill[]> {
    const db = getPool();
    const result = await db.query('SELECT * FROM skills ORDER BY display_order ASC, created_at ASC');
    return result.rows;
}

export async function getSkillsByCategoryId(categoryId: string): Promise<Skill[]> {
    const db = getPool();
    const result = await db.query('SELECT * FROM skills WHERE category_id = $1 ORDER BY display_order ASC', [categoryId]);
    return result.rows;
}

export async function createSkill(data: Omit<Skill, 'id' | 'created_at'>): Promise<Skill> {
    const db = getPool();
    const result = await db.query(
        `INSERT INTO skills (category_id, name, display_order) VALUES ($1, $2, $3) RETURNING *`,
        [data.category_id, data.name, data.display_order || 0]
    );
    return result.rows[0];
}

export async function updateSkill(id: string, data: Partial<Omit<Skill, 'id' | 'created_at'>>): Promise<Skill | null> {
    const db = getPool();
    const fields: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (data.category_id !== undefined) { fields.push(`category_id = $${paramIndex++}`); values.push(data.category_id); }
    if (data.name !== undefined) { fields.push(`name = $${paramIndex++}`); values.push(data.name); }
    if (data.display_order !== undefined) { fields.push(`display_order = $${paramIndex++}`); values.push(data.display_order); }

    if (fields.length === 0) return null;

    values.push(id);
    const result = await db.query(`UPDATE skills SET ${fields.join(', ')} WHERE id = $${paramIndex} RETURNING *`, values);
    return result.rows[0] || null;
}

export async function deleteSkill(id: string): Promise<boolean> {
    const db = getPool();
    const result = await db.query('DELETE FROM skills WHERE id = $1', [id]);
    return (result.rowCount ?? 0) > 0;
}

// ============= PUBLICATIONS =============

export async function getPublications(): Promise<Publication[]> {
    const db = getPool();
    const result = await db.query('SELECT * FROM publications ORDER BY display_order ASC, created_at DESC');
    return result.rows;
}

export async function getPublicationById(id: string): Promise<Publication | null> {
    const db = getPool();
    const result = await db.query('SELECT * FROM publications WHERE id = $1', [id]);
    return result.rows[0] || null;
}

export async function createPublication(data: Omit<Publication, 'id' | 'created_at' | 'updated_at'>): Promise<Publication> {
    const db = getPool();
    const result = await db.query(
        `INSERT INTO publications (title, authors, journal, year, doi, url, abstract, status, display_order)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
        [data.title, data.authors, data.journal, data.year, data.doi, data.url, data.abstract, data.status || 'published', data.display_order || 0]
    );
    return result.rows[0];
}

export async function updatePublication(id: string, data: Partial<Omit<Publication, 'id' | 'created_at' | 'updated_at'>>): Promise<Publication | null> {
    const db = getPool();
    const fields: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (data.title !== undefined) { fields.push(`title = $${paramIndex++}`); values.push(data.title); }
    if (data.authors !== undefined) { fields.push(`authors = $${paramIndex++}`); values.push(data.authors); }
    if (data.journal !== undefined) { fields.push(`journal = $${paramIndex++}`); values.push(data.journal); }
    if (data.year !== undefined) { fields.push(`year = $${paramIndex++}`); values.push(data.year); }
    if (data.doi !== undefined) { fields.push(`doi = $${paramIndex++}`); values.push(data.doi); }
    if (data.url !== undefined) { fields.push(`url = $${paramIndex++}`); values.push(data.url); }
    if (data.abstract !== undefined) { fields.push(`abstract = $${paramIndex++}`); values.push(data.abstract); }
    if (data.status !== undefined) { fields.push(`status = $${paramIndex++}`); values.push(data.status); }
    if (data.display_order !== undefined) { fields.push(`display_order = $${paramIndex++}`); values.push(data.display_order); }

    if (fields.length === 0) return getPublicationById(id);

    values.push(id);
    const result = await db.query(`UPDATE publications SET ${fields.join(', ')} WHERE id = $${paramIndex} RETURNING *`, values);
    return result.rows[0] || null;
}

export async function deletePublication(id: string): Promise<boolean> {
    const db = getPool();
    const result = await db.query('DELETE FROM publications WHERE id = $1', [id]);
    return (result.rowCount ?? 0) > 0;
}

// ============= UTILITY =============

export async function closePool(): Promise<void> {
    if (pool) {
        await pool.end();
        pool = null;
    }
}
