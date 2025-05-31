const projects = [
  {
    id: 1,
    title: "E-Commerce Web App",
    description:
      "A full-stack e-commerce platform built with React and Node.js. Features user authentication, shopping cart, payment integration, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
    github: "https://github.com/username/ecommerce-app",
    live: "https://ecommerce-demo.vercel.app",
    category: "Full-Stack",
    featured: true,
    highlights: ["User Authentication", "Payment Integration", "Admin Dashboard", "Responsive Design"],
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI", "Socket.io"],
    github: "https://github.com/username/task-manager",
    live: "https://task-manager-demo.vercel.app",
    category: "Frontend",
    featured: true,
    highlights: ["Real-time Updates", "Drag & Drop", "Team Collaboration", "TypeScript"],
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description:
      "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics using OpenWeather API.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["JavaScript", "HTML5", "CSS3", "OpenWeather API", "Chart.js"],
    github: "https://github.com/username/weather-app",
    live: "https://weather-forecast-demo.vercel.app",
    category: "Frontend",
    featured: false,
    highlights: ["API Integration", "Responsive Design", "Data Visualization", "Geolocation"],
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    description:
      "A full-stack application to track personal expenses, income, and financial goals with interactive charts and budget planning.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Vue.js", "Python", "Flask", "PostgreSQL", "Chart.js"],
    github: "https://github.com/username/finance-tracker",
    live: "https://finance-tracker-demo.vercel.app",
    category: "Full-Stack",
    featured: false,
    highlights: ["Budget Planning", "Data Analytics", "Secure Authentication", "Financial Reports"],
  },
  {
    id: 5,
    title: "Recipe Sharing Platform",
    description:
      "A social platform for sharing and discovering recipes with user profiles, ratings, comments, and advanced search functionality.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB", "Cloudinary", "JWT"],
    github: "https://github.com/username/recipe-platform",
    live: "https://recipe-platform-demo.vercel.app",
    category: "Full-Stack",
    featured: false,
    highlights: ["Social Features", "Image Upload", "Search & Filter", "User Ratings"],
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with modern web technologies, featuring smooth animations and optimized performance.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/username/portfolio",
    live: "https://portfolio-demo.vercel.app",
    category: "Frontend",
    featured: false,
    highlights: ["Modern Design", "Smooth Animations", "SEO Optimized", "Fast Loading"],
  },
]

export default projects