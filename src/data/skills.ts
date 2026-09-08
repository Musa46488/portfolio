import { TechGroup, ProcessStep } from "../types";

export const techEcosystem: TechGroup[] = [
  {
    label: "Frontend",
    items: [
      { name: "React.js", context: "Component-driven interfaces" },
      { name: "Next.js", context: "Production React framework" },
      { name: "HTML", context: "Semantic structure" },
      { name: "CSS", context: "Layout & styling foundations" },
      { name: "Tailwind CSS", context: "Utility-first styling system" },
    ],
  },
  {
    label: "Mobile",
    items: [
      { name: "Flutter", context: "Cross-platform app framework" },
      { name: "Dart", context: "Flutter's application language" },
      { name: "React Native", context: "Cross-platform mobile app framework" },
      { name: "Firebase", context: "Auth, storage & sync for mobile" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "NestJS", context: "Structured Node.js framework" },
      { name: "Node.js", context: "JavaScript runtime for servers" },
      { name: "Express.js", context: "Minimal REST API framework" },
      { name: "Fast API", context: "High performance Python web framework" },
      { name: "Django", context: "Batteries Included" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", context: "Relational data storage" },
      { name: "MongoDB", context: "Document-based storage" },
      { name: "MySQL", context: "Relational data storage" },
      { name: "Firebase", context: "Realtime & cloud storage" },
    ],
  },
  {
    label: "Programming",
    items: [
      { name: "C", context: "Systems fundamentals" },
      { name: "C++", context: "Systems fundamentals" },
      { name: "C#", context: "Applied in Unity game development" },
      { name: "Python", context: "General-purpose scripting" },
      { name: "Dart", context: "Flutter application logic" },
    ],
  },
  {
    label: "Cloud / Other",
    items: [
      {
        name: "AWS Fundamentals",
        context: "Core services & cloud architecture",
      },
      {
        name: "REST APIs",
        context: "Application-to-application communication",
      },
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Discuss the idea, goals, requirements, and intended users.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define the solution, features, architecture, and development approach.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the application with clear communication and progress updates.",
  },
  {
    number: "04",
    title: "Refine",
    description: "Test, improve, and polish the product.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Prepare the product for release or delivery.",
  },
];

export const journey = [
  "Interactive Experiences",
  "Mobile Development",
  "Full-Stack Development",
  "Digital Products",
];
