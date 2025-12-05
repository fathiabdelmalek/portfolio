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
    skills: ["Django", "FastAPI", "Flask", "Node.js", "Spring Boot"]
  },
  {
    id: 'frameworks',
    name: "Application Frameworks",
    icon: "📱",
    skills: ["JavaFX", "Flutter", "Spring", "Arduino"]
  },
  {
    id: 'databases',
    name: "Database Systems",
    icon: "🗃️",
    skills: ["SQL Databases", "MongoDB", "Redis"]
  },
  {
    id: 'devops',
    name: "DevOps & Cloud",
    icon: "☁️",
    skills: ["Git - GitHub - GitHub Actions", "Docker", "AWS"]
  },
  {
    id: 'ai',
    name: "AI & Data Science",
    icon: "🤖",
    skills: ["Pytorch", "Scikit-learn", "Keras - Tensorflow", "Pandas", "Numpy", "Matplotlib", "Seaborn"]
  },
  {
    id: 'others',
    name: "Tools and Productivity",
    icon: "🛠️",
    skills: ["Postman", "Figma", "LaTeX", "Notion", "Trello", "n8n"]
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
    skills: ["PyCharm", "VS Code", "Cursor", "Android Studio", "IntelliJ IDEA"]
  },
];
