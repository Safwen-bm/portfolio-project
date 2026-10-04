// components/work/projectsData.js

export const projects = [
  {
    num: "01",
    title: "Documind — AI Document Management Platform",
    description:
      "A full-stack document platform for organizing, searching, and collaborating on files, featuring RAG-based AI assistance, real-time editing, granular access control, workspace management, and Stripe subscriptions.",
    stack: [
      "Next.js",
      "NestJS",
      "PostgreSQL/pgvector",
      "Prisma",
      "AI (RAG)",
      "Socket.IO",
      "Stripe",
      "Docker",
      "CI/CD",
    ],
    image: "/documind.png",
    github: "https://github.com/safwen-bm/documind",
    live: "https://documind-red.vercel.app/",
  },
  {
    num: "02",
    title: "Tabibi — Medical Teleconsultation Platform",
    description:
      "Telemedicine app with live video consultations, online booking and Stripe payments, medical records, email reminders, and dedicated dashboards for patients, doctors and admins.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "PeerJS",
      "Stripe",
      "SendGrid",
    ],
    image: "/tabibi.png",
    github: "https://github.com/Safwen-bm/telemedicine-platform",
    live: "https://tabibi-lime-eight.vercel.app/",
  },
  {
    num: "03",
    title: "AutoValu - AI Car Price Analyzer",
    description:
      "AI-powered platform to estimate used car prices in Tunisia, detect deal quality, and generate smart counter-offers. Includes an admin dashboard for monitoring usage and system stats.",
    stack: ["Next.js", "Tailwind CSS", "FastAPI", "Python", "XGBoost", "KNN"],
    image: "/autovalu.png",
    github: "https://github.com/Safwen-bm/autovalu",
    live: "https://autovalu.vercel.app/",
  },
  {
    num: "04",
    title: "OneSet — Full-Stack E-Commerce Platform",
    description:
      "A complete e-commerce platform for gaming and desk setups with real authentication, cart, checkout, and an admin dashboard, plus a budget-based setup builder, compatibility checker, and natural-language product search.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Stripe", "Zustand"],
    image: "/oneset.png",
    github: "https://github.com/Safwen-bm/OneSet",
    live: "https://oneset-three.vercel.app/",
  },
  {
    num: "05",
    title: "AcademyX — LMS E-Learning Platform",
    description:
      "A full-stack e-learning platform where instructors publish chaptered video courses and students track progress in real time. Built and redesigned solo: custom UI, Mux video pipeline, Stripe payments, and a public landing page for course discovery.",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "MySQL",
      "Clerk",
      "Mux",
      "Stripe",
      "Tailwind CSS",
    ],
    image: "/academyx.png",
    github: "https://github.com/Safwen-bm/E_learning_app",
    live: "https://academyx-tawny.vercel.app/",
  },
  {
    num: "06",
    title: "OnlyChat — Real-Time MERN Chat App",
    description:
      "Full-stack chat with live messaging, typing indicators, read receipts, reactions, photo sharing, 10 themes and a secured Express and Socket.IO backend.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind CSS"],
    image: "/chatapp.png",
    github: "https://github.com/Safwen-bm/fullstack-chat-app",
    live: "https://fullstack-chat-app-70i9.onrender.com",
  },
  {
    num: "07",
    title: "PRISM — Streetwear Concept Store",
    description:
      "Colour-driven concept e-commerce site for a streetwear label, with per-page accent theming, scroll and reveal animations, a product grid, editorial lookbook, and a contact/newsletter flow.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
    image: "/prism.png",
    github: "https://github.com/Safwen-bm/prism-clothingBrand",
    live: "https://prism-mocha-five.vercel.app/",
  },
  {
    num: "08",
    title: "Artist Archive — AI-Structured Digital Archive",
    description:
      "Turns an unstructured artist CV into a structured digital archive. Gemini extracts and structures each entry, validated with Zod, Pexels adds contextual images, and a separate artist dashboard lets you upload a CV as text, PDF, Word or Excel and review the results before publishing.",
    stack: ["Next.js", "TypeScript", "Zod", "Gemini API", "Pexels API"],
    image: "/artist-archive.png",
    github: "https://github.com/Safwen-bm/artist-archive",
    live: "https://artist-archive-five.vercel.app/",
  },
  {
    num: "09",
    title: "Controluce — Italian Restaurant Landing Page",
    description:
      "Elegant concept landing page for a fictional Italian restaurant, built around a golden-hour lighting theme a printed-menu-style dish list, an asymmetric photo gallery, and a scroll-aware nav, with the Italian flag reduced to a single subtle three-colour hairline.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS v4"],
    image: "/controluce.png",
    github: "https://github.com/Safwen-bm/Cucina-Italia",
    live: "https://controluce.vercel.app/",
  },
  {
    num: "10",
    title: "IRent TN — Luxury Car Rental Landing Page",
    description:
      "Custom-designed rental landing page with a gold/dark visual identity, RTL Arabic UI, a live booking widget, and an interactive 3D car viewer.",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS v4",
      "React Router",
      "Three.js",
      "GSAP",
    ],
    image: "/car-rental.png",
    github: "https://github.com/Safwen-bm/car-rental-project",
    live: "https://car-rental-project-ebon-two.vercel.app/",
  },
  {
    num: "11",
    title: "FluffyShop — e-commerce platform",
    description:
      "High-end e-commerce platform selling pets and pet food. Built with Next.js 15, Strapi CMS, Clerk auth, a custom cart system, and production deployment.",
    stack: ["Next.js", "Strapi v5", "Clerk", "Tailwind CSS"],
    image: "/fluffy-shop.png",
    github: "https://github.com/Safwen-bm/fluffy-shop",
    live: "https://fluffy-shop-frontend.onrender.com",
  },
  {
    num: "12",
    title: "AXIS-7 — Drone Concept Landing Page",
    description:
      "Concept landing page for an autonomous recon drone, with an interactive 3D drone model that repositions and scales as you scroll, and a finish-swapping color picker.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Three.js",
      "React Three Fiber",
      "Framer Motion",
    ],
    image: "/axis-7.png",
    github: "https://github.com/Safwen-bm/future-gadget-landing",
    live: "https://future-gadget-landing.vercel.app/",
  },
  {
    num: "13",
    title: "Movie Explorer",
    description:
      "Modern app to explore, search, and discover films with a fluid interface.",
    stack: ["React", "Vite", "TMDB API"],
    image: "/movie-explorer.png",
    github: "https://github.com/Safwen-bm/movie-explorer",
    live: "https://safwen-bm.github.io/movie-explorer/",
  },
  {
    num: "14",
    title: "Task Management Tool",
    description:
      "Task manager with a Kanban board, drag & drop, and Firebase authentication.",
    stack: ["React", "Firebase"],
    image: "/task-manager.png",
    github: "https://github.com/Safwen-bm/my-dashboard",
    live: "https://task-manager.safone.tn",
  },
  {
    num: "15",
    title: "Redline — Gym landing page",
    description:
      "Developed a fully responsive, interactive gym website using React, TailwindCSS, and Vercel deployment. Features: Hero animations, interactive features section, offer section, contact form, and dynamic UI/UX enhancements.",
    stack: ["React", "TailwindCSS", "Vercel"],
    image: "/gym-web.png",
    github: "https://github.com/Safwen-bm/gym-website",
    live: "https://gym-website-seven-xi.vercel.app/",
  },
  {
    num: "16",
    title: "CoffeeOne — Coffee Shop Website",
    description:
      "A responsive, interactive website for a coffee shop built using HTML, CSS, and vanilla JavaScript. Features include a product menu, contact form, and a fully responsive layout.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/coffee-shop.png",
    github: "https://github.com/Safwen-bm/coffee-shop",
    live: "https://safwen-bm.github.io/coffee-shop/",
  },
  {
    num: "17",
    title: "OneFlower — Flower Shop Website",
    description:
      "Designed and developed a responsive flower shop website using HTML and CSS Features include a product catalog and a contact form. The site is fully responsive and optimized for all devices.",
    stack: ["HTML", "CSS"],
    image: "/flower-shop.png",
    github: "https://github.com/Safwen-bm/flower-shop",
    live: "https://safwen-bm.github.io/flower-shop/",
  },
];
