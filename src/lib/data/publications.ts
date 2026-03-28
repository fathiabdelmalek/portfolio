// Auto-generated from database - Do not edit manually
export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number | null;
  doi?: string | null;
  url?: string | null;
  abstract?: string | null;
  status: 'published' | 'under_review' | 'in_preparation';
  createdAt: string;
}

export const publications: Publication[] = [];
