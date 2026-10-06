export interface Education {
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  /** null / omitted = Present */
  endDate?: string | null;
  description?: string;
}

// Edit this list directly - latest (most recent) entry first
export const education: Education[] = [
  {
    degree: "PhD in Artificial Intelligence",
    institution: "Tebessa University",
    location: "Tebessa, Algeria",
    startDate: "Apr. 2025",
    endDate: null,
  },
  {
    degree: "Master LMD in Information Systems",
    institution: "Tebessa University",
    location: "Tebessa, Algeria",
    startDate: "Sept. 2021",
    endDate: "Jul. 2023",
  },
  {
    degree: "License LMD in Information Systems",
    institution: "Tebessa University",
    location: "Tebessa, Algeria",
    startDate: "Sept. 2018",
    endDate: "Jun. 2021",
  },
];
