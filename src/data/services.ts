import { Service } from "../types";

export const services: Service[] = [
  {
    number: "01",
    slug: "web-development",
    title: "Web Development",
    description:
      "Modern, responsive web applications built for performance, usability, and real-world needs.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Django",
      "Full-Stack Apps",
    ],
    visualPlaceholder: "web-development-visual",
  },
  {
    number: "02",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications designed for Android and IOS.",
    technologies: ["Flutter", "Dart", "React-Native", "Firebase", "REST APIs"],
    visualPlaceholder: "mobile-development-visual",
  },
  {
    number: "03",
    slug: "backend-api-development",
    title: "Backend & API Development",
    description:
      "Backend systems and APIs that connect applications, data, and business logic.",
    technologies: [
      "Nest.js",
      "Node.js",
      "Express.js",
      "Fast API",
      "Django",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
    ],
    visualPlaceholder: "backend-api-visual",
  },
];
