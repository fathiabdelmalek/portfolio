// Auto-generated from database - Do not edit manually
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  featured?: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    "id": "993f2496-9560-43ac-92dc-01cb9c6e96ba",
    "title": "Luga Edu",
    "description": "Online English learning platform with courses, workshops, and language sessions built using Django and PostgreSQL",
    "tags": [
      "Python",
      "Django",
      "API Development"
    ],
    "image": "https://api.microlink.io/?url=https://luga-edu.com&screenshot=true&meta=false&embed=screenshot.url",
    "link": "https://luga-edu.com",
    "featured": true,
    "date": "Mar 2026"
  },
  {
    "id": "9f243ff5-fc41-4fec-a385-17a7147ec38b",
    "title": "Flower Essence",
    "description": "A single page e-commerce web site for a collection of skin care products with link to e-mail of the client.",
    "tags": [
      "Javascript",
      "Node.js",
      "Express.js",
      "API Development"
    ],
    "image": "https://api.microlink.io/?url=https://flowers-essence-collection.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    "link": "https://flowers-essence-collection.vercel.app/",
    "featured": true,
    "date": "Mar 2026"
  },
  {
    "id": "147987ad-7c9b-43d1-96a4-7e606bce62a4",
    "title": "passphera-cli",
    "description": "Strong password generator and manager CLI tool for Windows and Linux (DEB, RPM)",
    "tags": [
      "Python",
      "typer",
      "FastAPI",
      "API Development"
    ],
    "image": "./images/projects/ecommerce.jpg",
    "link": "https://passphera.imfathi.com",
    "featured": true,
    "date": "Mar 2026"
  }
];
