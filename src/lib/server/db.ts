import { Pool } from 'pg';
import { env } from '$env/dynamic/private';

const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

export async function getProjects() {
  try {
    const result = await pool.query('SELECT * FROM projects ORDER BY created_at DESC');
    return result.rows;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}

export async function getSkillCategories() {
  try {
    const result = await pool.query('SELECT * FROM skill_categories');
    return result.rows;
  } catch (error) {
    console.error('Error fetching skills:', error);
    throw error;
  }
}
