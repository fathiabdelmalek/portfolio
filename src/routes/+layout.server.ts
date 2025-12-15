import { getProjects, getSkillCategories } from '$lib/server/db';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
  try {
    const [projects, skillCategories] = await Promise.all([
      getProjects(),
      getSkillCategories(),
    ]);

    return {
      projects,
      skillCategories,
    };
  } catch (error) {
    console.error('Error loading data:', error);
    return {
      projects: [],
      skillCategories: [],
    };
  }
};
