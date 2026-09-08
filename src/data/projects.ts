import { Project } from "../types";

export const projects: Project[] = [
  {
    number: "01",
    slug: "bug-management-system",
    title: "Bug Management System",
    type: "Full-Stack Web Application",
    description:
      "A full-stack bug tracking application with secure authentication and a real-time dashboard for managing ticket life cycles.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "Tailwind CSS",
    ],
    features: [
      "Bug tracking & ticket filtering",
      "JWT authentication & session security",
      "RESTful APIs bridging React and PostgreSQL",
      "Responsive dashboard with status management",
    ],
    visualPlaceholder: "bug-management-system-visual",
    featured: true,
  },
  {
    number: "02",
    slug: "task-management-board",
    title: "Task Management Board",
    type: "Full-Stack Web Application",
    description:
      "A task management application handling CRUD operations and workflow state transitions across a full-stack REST architecture.",
    technologies: ["React", "NestJS", "Tailwind CSS", "PostgreSQL"],
    features: [
      "Task CRUD operations",
      "REST APIs built with NestJS",
      "Workflow & state transitions across stages",
    ],
    visualPlaceholder: "task-management-board-visual",
  },
  {
    number: "03",
    slug: "task-management-app",
    title: "Task Management App",
    type: "Cross-Platform Mobile Application",
    description:
      "A cross-platform task app with Firebase-backed authentication, cloud storage, and real-time synchronization.",
    technologies: ["Flutter", "Dart", "Firebase"],
    features: [
      "Firebase authentication & cloud storage",
      "Real-time synchronization",
      "Full CRUD functionality",
    ],
    visualPlaceholder: "task-management-app-visual",
  },
  {
    number: "04",
    slug: "weather-app",
    title: "Weather App",
    type: "Cross-Platform Mobile Application",
    description:
      "A cross-platform weather app delivering real-time, location-based conditions through a responsive interface.",
    technologies: ["Flutter", "REST API", "Geolocation"],
    features: [
      "Real-time weather data",
      "Geolocation-based updates",
      "Responsive UI for Android & iOS",
    ],
    visualPlaceholder: "weather-app-visual",
  },
  {
    number: "05",

    slug: "e-commerce-website",

    title: "E-Commerce Website",

    type: "Full-Stack E-Commerce Web Application",

    description:
      "A modern e-commerce platform designed to provide a seamless online shopping experience across product discovery, browsing, and purchasing.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "Tailwind CSS",
    ],

    features: [
      "Product browsing and categorization",
      "Product search and filtering",
      "Shopping cart functionality",
      "Responsive UI for desktop and mobile",
      "RESTful API integration",
    ],

    visualPlaceholder: "e-commerce-website-visual",
    featured: true,
  },
  {
    number: "06",

    slug: "e-commerce-mobile-app",

    title: "E-Commerce Mobile App",

    type: "Cross-Platform Mobile Application",

    description:
      "A mobile shopping application focused on intuitive product discovery, seamless browsing, and a streamlined purchasing experience.",

    technologies: ["Flutter", "Dart", "REST API", "Firebase"],

    features: [
      "Product catalog and categories",
      "Product search and filtering",
      "Shopping cart functionality",
      "Responsive mobile interface",
      "Cross-platform Android & iOS experience",
    ],

    visualPlaceholder: "e-commerce-mobile-visual",
  },
  {
    number: "07",

    slug: "pizza-mobile-app",

    title: "Pizza Mobile App",

    type: "Food Ordering Mobile Application",

    description:
      "A mobile food-ordering application designed to make discovering pizzas, customizing orders, and placing deliveries simple and intuitive.",

    technologies: ["Flutter", "Dart", "REST API", "Firebase"],

    features: [
      "Pizza browsing and categories",
      "Pizza customization",
      "Shopping cart and ordering",
      "Order tracking",
      "Responsive Android & iOS interface",
    ],

    visualPlaceholder: "pizza-app-visual",
    featured: true,
  },
  {
    number: "08",

    slug: "movie-cinema-app",

    title: "Movie & Cinema Booking App",

    type: "Movie Discovery & Ticket Booking Application",

    description:
      "A mobile cinema application that lets users discover movies currently playing in cinemas, explore showtimes, and book tickets through a streamlined interface.",

    technologies: ["Flutter", "Dart", "REST API", "Firebase"],

    features: [
      "Currently playing movie listings",
      "Movie details and showtimes",
      "Cinema and screening selection",
      "Seat selection and ticket booking",
      "Responsive Android & iOS interface",
    ],

    visualPlaceholder: "movie-cinema-app-visual",
    featured: true,
  },
];
