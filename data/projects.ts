import { Project } from "@/types"

export const projects: Project[] = [
  {
    title: "PlantCare - Plant Disease Detection App",
    description: "An Android application built with Kotlin that uses machine learning to detect plant diseases from images. Features include real-time detection, comprehensive disease library, and detailed treatment information.",
    image: "/projects/plant-care.jpg",
    tags: ["Kotlin", "Android", "TensorFlow Lite", "Machine Learning", "Material Design"],
    liveUrl: "",
    githubUrl: "https://github.com/AbhisekPenthoi/PlantCare",
    featured: true,
    completedAt: "2024-01"
  },
  {
    title: "Plant Disease Classification ML Model",
    description: "A machine learning model for detecting and classifying plant diseases from images. Built with Python, PyTorch, and includes a GUI interface for easy disease diagnosis.",
    image: "/projects/plant-disease.png",
    tags: ["Python", "PyTorch", "Machine Learning", "Computer Vision", "GUI"],
    liveUrl: "",
    githubUrl: "https://github.com/AbhisekPenthoi/ML-model-disease-classification",
    featured: true,
    completedAt: "2024-01"
  },
  {
    title: "Netflix UI Clone",
    description: "A pixel-perfect Netflix landing page clone featuring responsive design, custom animations, and an interactive FAQ section. Built with pure HTML and CSS demonstrating advanced layout and styling techniques.",
    image: "/projects/netflix-clone.png",
    tags: ["HTML5", "CSS3", "Responsive Design", "CSS Grid", "CSS Animations"],
    liveUrl: "https://abhisekpenthoi.github.io/Netflix-UI-Clone/",
    githubUrl: "https://github.com/AbhisekPenthoi/Netflix-UI-Clone",
    featured: true,
    completedAt: "2024-02"
  },
  {
    title: "Simon Says Game",
    description: "A classic memory game built with vanilla JavaScript. Features include progressive difficulty, audio feedback, dynamic scoring, and engaging animations. Test your memory with increasingly complex patterns.",
    image: "/projects/simon-says.png",
    tags: ["JavaScript", "CSS3", "HTML5", "Web Audio API", "Game Development"],
    liveUrl: "https://abhisekpenthoi.github.io/Simon-Says-Game/",
    githubUrl: "https://github.com/AbhisekPenthoi/Simon-Says-Game",
    featured: true,
    completedAt: "2024-02"
  },
  {
    title: "Weather Dashboard",
    description: "A real-time weather monitoring application built with vanilla JavaScript. Features include current weather conditions, location search, temperature display, and dynamic weather icons. Uses OpenWeather API for accurate weather data.",
    image: "/projects/weather-app.png",
    tags: ["JavaScript", "CSS3", "HTML5", "Weather API", "Responsive Design"],
    liveUrl: "https://abhisekpenthoi.github.io/Weather-APP/",
    githubUrl: "https://github.com/AbhisekPenthoi/Weather-APP",
    featured: true,
    completedAt: "2024-03"
  }
] 