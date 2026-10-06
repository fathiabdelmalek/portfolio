export interface Experience {
  title: string;
  company: string;
  location?: string;
  startDate: string;
  /** null / omitted = Present */
  endDate?: string | null;
  description?: string;
  bullets?: string[];
}

// Edit this list directly - latest (most recent) entry first
export const experiences: Experience[] = [
  {
    title: "IT Manager",
    company: "Natra International SPA",
    location: "Boudouaou, Boumerdes, Algeria",
    startDate: "Jun. 2026",
    endDate: null,
    bullets: [
      "Manage servers, virtual machines, and Active Directory environments",
      "Administer Sage ERP and Microsoft SQL Server systems",
      "Maintain network infrastructure and end-user IT services",
      "Deploy and manage cybersecurity and endpoint protection solutions",
      "Implement backup, recovery, and business continuity procedures",
      "Troubleshoot hardware, software, database, and authentication issues",
      "Document IT assets, systems, and operational procedures",
      "Lead infrastructure improvements and process automation initiatives",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "Tebessa University",
    location: "Tebessa, Algeria",
    startDate: "Nov. 2025",
    endDate: "Jun. 2026",
    bullets: [
      "Deliver tutorials and practical sessions in core computer science modules for undergraduate students",
      "Support students in understanding theoretical concepts and applying them through hands-on exercises",
      "Provide one-on-one guidance to reinforce learning and address individual difficulties",
      "Assist in grading assignments and examinations with consistency and accuracy",
      "Contribute to the preparation and organization of course materials",
      "Emphasize clear explanation of complex topics, critical thinking, and problem-solving skills",
      "Maintain an organized, structured, and student-focused learning environment",
    ],
  },
  {
    title: "Software Engineering",
    company: "Levl Business",
    location: "Tebessa, Algeria",
    startDate: "Apr. 2025",
    endDate: "Nov. 2025",
    bullets: [
      "Developed and optimized software applications for business solutions",
      "Managed project timelines and deliverables to ensure timely completion",
      "Provided technical support and guidance to team members and stakeholders",
    ],
  },
  {
    title: "Chief of Training",
    company: "Levl Business",
    location: "Tebessa, Algeria",
    startDate: "Apr. 2025",
    endDate: "Apr. 2025",
    bullets: [
      "Led development of training programs for different innovate and promising topics and fields",
      "Implemented innovative instructional strategies to enhance learning outcomes across diverse teams",
      "Collaborated with cross-functional teams to align training initiatives with business objectives",
      "Evaluated training effectiveness through feedback and performance metrics",
      "Mentored emerging leaders in tech and education to foster a culture of continuous improvement",
    ],
  },
  {
    title: "Modem Configurations Intern",
    company: "Algerie Telecom",
    location: "Cheria, Tebessa, Algeria",
    startDate: "Apr. 2023",
    endDate: "Apr. 2023",
  },
];
