import { Project, Certificate, TechStackItem } from '@/lib/types'; // (Lihat poin 3)

export const projects: Project[] = [
  {
    id: 1,
    title: "Kerjadiluar.id",
    description: "A job preparation and placement platform providing training, certification, and talent matchmaking.",
    image: "/images/projects/kerjadiluar.png",
    tech: ["Next.js", "Express.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    details:
      "Kerjadiluar.id is a professional web platform designed to help individuals prepare for overseas job opportunities. It features structured training programs, official certification exams, and an automated headhunter-style job matching system. The system enables users to register for training, validate their competencies, and get connected with industry-relevant job openings. Built using a modern stack with Next.js and Tailwind CSS for responsive UI and Express.js for server-side logic.",
    demo: "https://kerjadiluar.id/",
  },
  {
    id: 2,
    title: "Jayadewata Academy",
    description: "A basketball training and tournament platform with membership and event management.",
    image: "/images/projects/Jayadewata.png",
    tech: ["Laravel", "Filament", "MySQL", "Tailwind CSS"],
    details:
      "Jayadewata Academy is an integrated platform to support youth basketball training and events. It includes features such as player and team registration, tournament enrollment, dynamic training programs, blog articles, and partner showcases. The system also provides a flexible structure to manage coaches, club data, and online announcements. Built with Laravel and styled using Tailwind CSS for responsive modern UI.",
    demo: "https://jayadewataacademy.com/",
  },
  {
    id: 3,
    title: "Tigadaun Production",
    description: "A full-featured e-commerce platform with secure checkout and admin dashboard.",
    image: "/images/projects/Tigadaun.png",
    tech: ["Laravel", "Filament", "MySQL", "Stripe API"],
    details:
      "Tigadaun Production is an e-commerce web application built with Laravel and Filament for streamlined backend management. It includes user authentication, product catalog, shopping cart, and secure payment integration using Stripe. The platform supports real-time order tracking and role-based admin management. Designed for a small business, it focuses on usability and operational efficiency.",
    demo: "https://tigadaunproduction.com/",
  },
  {
    id: 4,
    title: "MaggotIN",
    description: "A smart maggot cultivation assistant app for sustainable waste management.",
    image: "/images/projects/maggotin.png",
    tech: ["Kotlin", "Python", "TensorFlow", "Node.js", "Firebase", "Google Cloud Vision"],
    details:
      "MaggotIN is an Android-based application designed to identify maggot growth stages using image classification and provide intelligent recommendations for care and feeding. It helps users manage organic waste more sustainably through guided maggot farming. The app utilizes TensorFlow-powered image recognition, Firebase for authentication and database, and supports multilingual education content on maggot cultivation. Developed during the Bangkit program under Kampus Merdeka initiative.",
    github: "https://github.com/capstone-MaggotIn",
  },
  {
    id: 5,
    title: "QR-Code Attendance System",
    description: "A QR-based attendance tracking system for efficient and automated presence logging.",
    image: "/images/projects/qr-code-attend.png",
    tech: ["HTML", "CSS", "PHP", "MySQL", "FPDF", "JavaScript (QR Scanner)"],
    details:
      "QR-Code Attendance System is a personal project designed to simplify attendance tracking in educational or event settings. It features QR code generation and scanning, session and schedule management, as well as automated attendance reports exportable as PDF. The system supports role-based access for admins and students, dynamic schedule display, and real-time QR mapping for each class session. Built using native PHP and MySQL, it offers a lightweight and accessible attendance solution.",
    github: "https://github.com/nuazsa/QR-Attendance",
  },
  {
    id: 6,
    title: "Online Food Ordering",
    description:
      "A digital ordering platform for restaurants and cafes with seat selection and order tracking.",
    image: "/images/projects/online-restaurant-food.png",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    details:
      "Online Food Ordering is a responsive web application that allows customers to browse menus, select seating, place orders, and make payments in an integrated system. The admin panel enables item management and real-time order monitoring. Designed for cafes and restaurants to streamline service and improve customer experience.",
    github: "https://github.com/nuazsa/javajunction",
    demo: "http://coffeeshop.nurazissaputra.my.id/",
  },
  {
    id: 7,
    title: "Sistem Pakar Dempster",
    description:
      "A web-based expert system that recommends data models using Dempster-Shafer theory.",
    image: "/images/projects/sistem-pakar.png",
    tech: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
    details:
      "Sistem Pakar Dempster is a web-based expert system for selecting suitable data models based on user input. It uses Dempster-Shafer theory to calculate confidence levels and recommend the best model type (hierarchical, relational, multidimensional). Features include statement management, result visualization, and knowledge base customization.",
    github: "https://github.com/nuazsa/SitemPakar",
    demo: "http://sistempakar.nurazissaputra.my.id/",
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "PCAP - Programming Essentials in Python",
    description: "Intermediate-level certification in Python programming by the Python Institute.",
    image: "/images/certificate/pcap.jpg",
    issuer: "Python Institute",
    date: "Jul 2023",
    details:
      "Validates comprehensive understanding of Python programming, covering syntax, data structures, functions, OOP, and error handling. Prepares learners for professional development with Python.",
  },
  {
    id: 2,
    title: "MTCNA - MikroTik Certified Network Associate",
    description: "Entry-level networking certification for MikroTik device configuration and management.",
    image: "/images/certificate/mtcna.jpg",
    issuer: "MikroTik",
    date: "Jan 2024",
    details:
      "Covers foundational network concepts including IP addressing, routing, wireless setup, NAT, and firewall management using MikroTik RouterOS.",
    link: "https://mikrotik.com/training/certificates/c284530c2eb9aafe1747",
  },
  {
    id: 3,
    title: "ZAHIR - Database Fundamentals",
    description: "Training focused on database operations using Zahir Accounting software.",
    image: "/images/certificate/zahir.jpg",
    issuer: "PT Zahir Internasional",
    date: "Feb 2024",
    details:
      "Teaches how to manage accounting-related databases, perform transaction entries, generate reports, and ensure efficient data organization using Zahir.",
  },
  {
    id: 4,
    title: "UBSI - IT Bootcamp Software Development",
    description: "Project-based software development bootcamp.",
    image: "/images/certificate/ubsi_sd.jpg",
    issuer: "Universitas Bina Sarana Informatika",
    date: "Jun 2024",
    details:
      "An intensive hands-on program covering full-stack development, Git usage, project deployment, clean code, and agile methodology in software engineering.",
  },
  {
    id: 5,
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    description: "Introductory programming course using Python.",
    image: "/images/certificate/memulai_dasar_pemrograman.jpg",
    issuer: "Dicoding Academy",
    date: "Sep 2024",
    details:
      "Introduces basic programming concepts such as variables, control flow, functions, and simple data structures, using Python as the primary language.",
  },
  {
    id: 6,
    title: "Pengenalan ke Logika Pemrogarman",
    description: "Course on logic and computational thinking in programming.",
    image: "/images/certificate/pengenalan_logika_pemrograman.jpg",
    issuer: "Dicoding Academy",
    date: "Sep 2024",
    details:
      "Focuses on the basics of logical thinking and structured problem-solving, including flowcharts, algorithms, and pseudocode essential for coding.",
  },
  {
    id: 7,
    title: "Belajar Dasar Git dengan Github",
    description: "Introduction to version control using Git and GitHub.",
    image: "/images/certificate/belajar_dasar_git.jpg",
    issuer: "Dicoding Academy",
    date: "Sep 2024",
    details:
      "Covers fundamental concepts of version control, Git commands, branching, merging, and collaboration through GitHub repositories and pull requests.",
  },
  {
    id: 8,
    title: "Memulai Pemrograman dengan Kotlin",
    description: "Beginner-level course on Kotlin programming language.",
    image: "/images/certificate/memulai_pemrograman_dengan_kotlin.jpg",
    issuer: "Dicoding Academy",
    date: "Sep 2024",
    details:
      "Teaches Kotlin syntax and programming constructs including variables, conditionals, loops, functions, and object-oriented concepts for Android development.",
  },
  {
    id: 9,
    title: "Belajar Membuat Aplikasi Android untuk Pemula",
    description: "Introduction to building Android apps using Kotlin.",
    image: "/images/certificate/belajar_membuat_aplikasi_android_pemula.jpg",
    issuer: "Dicoding Academy",
    date: "Sep 2024",
    details:
      "Focuses on the basics of Android development, including activity lifecycle, UI components, and simple user interaction using Android Studio and Kotlin.",
  },
  {
    id: 10,
    title: "Belajar Fundamental Aplikasi Android",
    description: "Fundamental skills for modern Android app development.",
    image: "/images/certificate/belajar_fundamental_android.jpg",
    issuer: "Dicoding Academy",
    date: "Sep 2024",
    details:
      "Covers fundamental Android concepts like ViewModel, LiveData, Navigation, Jetpack components, and app architecture suitable for scalable applications.",
  },
  {
    id: 11,
    title: "Belajar Dasar AI",
    description: "Introductory course on Artificial Intelligence fundamentals.",
    image: "/images/certificate/belajar_dasar_ai.jpg",
    issuer: "Dicoding Academy",
    date: "Oct 2024",
    details:
      "Explores AI concepts such as machine learning, neural networks, and data preprocessing. Provides an understanding of how AI is applied in real-world systems.",
  },
  {
    id: 12,
    title: "Belajar Penerapan Machine Learning untuk Android",
    description: "Integrating machine learning models into Android apps.",
    image: "/images/certificate/belajar_penerapan_machine_learning.jpg",
    issuer: "Dicoding Academy",
    date: "Oct 2024",
    details:
      "Demonstrates how to use ML Kit and TensorFlow Lite to embed trained machine learning models into Android applications for features like image recognition and text analysis.",
  },
  {
    id: 13,
    title: "Belajar Pengembangan Aplikasi Android Intermediate",
    description: "Intermediate-level Android app development course.",
    image: "/images/certificate/belajar_pengembangan_aplikasi_android_intermediate.jpg",
    issuer: "Dicoding Academy",
    date: "Nov 2024",
    details:
      "Deepens knowledge in Android development, including advanced UI, data persistence with Room, API integration, testing, and performance optimization.",
  },
];


export const techStack: TechStackItem[] = [
  {
    name: "JavaScript",
    category: "Language",
    icon: "⚡",
    details:
      "Modern JavaScript (ES6+) for building dynamic web applications. Experienced with async/await, destructuring, modules, and advanced features.",
    experience: "4+ years",
    projects: ["E-Commerce Platform", "Task Management System"],
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: "🔷",
    details:
      "Strongly-typed JavaScript for large-scale applications. Expert in type definitions, interfaces, generics, and advanced TypeScript patterns.",
    experience: "3+ years",
    projects: ["Task Management System", "AI Code Assistant"],
  },
  {
    name: "Python",
    category: "Language",
    icon: "🐍",
    details:
      "Versatile programming language for web development, data analysis, and AI/ML applications. Proficient in Django, FastAPI, and data science libraries.",
    experience: "4+ years",
    projects: ["Weather Analytics Dashboard", "AI Code Assistant"],
  },
  {
    name: "React",
    category: "Frontend",
    icon: "⚛️",
    details:
      "Modern React development with hooks, context, and performance optimization. Expert in component architecture and state management.",
    experience: "3+ years",
    projects: ["E-Commerce Platform", "AI Code Assistant"],
  },
  {
    name: "Next.js",
    category: "Framework",
    icon: "▲",
    details:
      "Full-stack React framework with SSR, SSG, and API routes. Experienced with App Router, server components, and performance optimization.",
    experience: "2+ years",
    projects: ["Task Management System"],
  },
  {
    name: "Vue.js",
    category: "Frontend",
    icon: "💚",
    details:
      "Progressive JavaScript framework for building user interfaces. Proficient in Vue 3, Composition API, and Vuex for state management.",
    experience: "2+ years",
    projects: ["Weather Analytics Dashboard"],
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "💚",
    details:
      "Server-side JavaScript runtime for building scalable backend applications. Expert in Express.js, middleware, and API development.",
    experience: "4+ years",
    projects: ["E-Commerce Platform", "Task Management System"],
  },
  {
    name: "Express",
    category: "Backend",
    icon: "🚀",
    details:
      "Fast, unopinionated web framework for Node.js. Experienced in building RESTful APIs, middleware, and authentication systems.",
    experience: "3+ years",
    projects: ["E-Commerce Platform"],
  },
  {
    name: "FastAPI",
    category: "Backend",
    icon: "⚡",
    details:
      "Modern, fast Python web framework for building APIs. Expert in automatic API documentation, type hints, and async programming.",
    experience: "2+ years",
    projects: ["Weather Analytics Dashboard", "AI Code Assistant"],
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: "🐘",
    details:
      "Advanced relational database with complex queries, indexing, and performance optimization. Experienced with migrations and database design.",
    experience: "3+ years",
    projects: ["E-Commerce Platform", "Task Management System"],
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "🍃",
    details:
      "NoSQL document database for flexible data storage. Proficient in aggregation pipelines, indexing, and schema design.",
    experience: "3+ years",
    projects: ["AI Code Assistant"],
  },
  {
    name: "Redis",
    category: "Cache",
    icon: "🔴",
    details:
      "In-memory data structure store for caching and session management. Expert in pub/sub, data persistence, and performance optimization.",
    experience: "2+ years",
    projects: ["Task Management System"],
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: "🐳",
    details:
      "Containerization platform for consistent development and deployment. Experienced with multi-stage builds, Docker Compose, and orchestration.",
    experience: "3+ years",
    projects: ["E-Commerce Platform", "Weather Analytics Dashboard"],
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    icon: "☸️",
    details:
      "Container orchestration platform for scalable deployments. Proficient in pods, services, ingress, and cluster management.",
    experience: "2+ years",
    projects: ["Task Management System"],
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: "☁️",
    details:
      "Amazon Web Services for cloud infrastructure. Expert in EC2, S3, RDS, Lambda, and serverless architectures.",
    experience: "3+ years",
    projects: ["Weather Analytics Dashboard", "E-Commerce Platform"],
  },
  {
    name: "Google Cloud",
    category: "Cloud",
    icon: "☁️",
    details:
      "Google Cloud Platform for scalable applications. Experienced with Compute Engine, Cloud Storage, and BigQuery.",
    experience: "2+ years",
    projects: ["AI Code Assistant"],
  },
]