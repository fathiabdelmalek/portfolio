export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: "Programming Languages",
    icon: "💻",
    skills: ["Python", "HTML - CSS - JS - TS", "C/C++", "Java - Kotlin - Dart", "Bash"]
  },
  {
    id: 'frontend',
    name: "Frontend Technologies",
    icon: "🎨",
    skills: ["Tailwind CSS", "Svelte - SvelteKit", "React", "Next.js"]
  },
  {
    id: 'backend',
    name: "Backend Technologies",
    icon: "⚙️",
    skills: ["Django", "FastAPI", "Flask", "Node.js"]
  },
  {
    id: 'frameworks',
    name: "Application Frameworks",
    icon: "📱",
    skills: ["JavaFX", "Flutter", "Qt", "Arduino"]
  },
  {
    id: 'databases',
    name: "Database Systems",
    icon: "🗃️",
    skills: ["PostgreSQL", "MySQL/MariaDB", "SQLite", "MongoDB", "Redis"]
  },
  {
    id: 'devops',
    name: "DevOps & Cloud",
    icon: "☁️",
    skills: ["Git - GitHub", "Docker", "AWS"]
  },
  {
    id: 'ai',
    name: "AI & Data Science",
    icon: "🤖",
    skills: ["Numpy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "Keras"]
  },
  {
    id: 'others',
    name: "Tools and Productivity",
    icon: "🛠️",
    skills: ["Postman", "Figma", "LaTeX", "Notion", "Trello"]
  },
  {
    id: 'os',
    name: "Operating Systems",
    icon: "💻",
    skills: ["Fedora - GNU/Linux", "Windows", "Android"]
  },
  {
    id: 'editors',
    name: "Development Environments",
    icon: "📝",
    skills: ["PyCharm", "VS Code", "Cursor", "Windsurf", "Android Studio", "Vim"]
  },
];
