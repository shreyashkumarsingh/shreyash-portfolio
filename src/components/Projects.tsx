import { ExternalLink, Github, Code, Database, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SupportDeskAI",
      year: "2025",
      description: "Engineered a full-stack AI-driven support desk platform that classifies incoming tickets, provides confidence scoring, and supports audit logging and role-based workflows. Built using FastAPI, scikit-learn, and a React + TypeScript frontend, the system includes ML inference pipelines, fallback logic, explainability-ready outputs, and production-hardened deployment across separate backend and frontend services. Designed for real-world service desk operations with governance and performance optimization.",
      technologies: ["FastAPI", "scikit-learn", "React", "TypeScript", "Python", "Machine Learning", "JWT", "Docker"],
      icon: <Code className="text-green-600" size={24} />,
      color: "green",
      codeUrl: "https://github.com/shreyashkumarsingh/SupportDeskAI",
      demoUrl: "https://supportdeskai-f.onrender.com"
    },
    {
      title: "NextHire AI",
      year: "2025",
      description: "Developed a production-ready AI-powered resume screening platform that automates candidate parsing, skill extraction, and job-fit scoring. Built with a React frontend and Flask backend, the system integrates NLP-based resume analysis, JWT-secured authentication, recruiter dashboards, and analytics visualization. Deployed using Docker and Gunicorn on Render, with production-grade security, rate limiting, and modular architecture for scalable SaaS deployment.",
      technologies: ["React", "Flask", "Docker", "NLP", "JWT", "Gunicorn", "Python", "JavaScript"],
      icon: <Code className="text-orange-600" size={24} />,
      color: "orange",
      codeUrl: "https://github.com/shreyashkumarsingh/nextHire",
      demoUrl: "https://nexthire-2dkf.onrender.com/"
    },
    {
      title: "FocusFlowAI",
      year: "2025",
      description: "Built a microservices-based AI productivity platform combining task management, Pomodoro tracking, and machine learning-driven burnout prediction. Developed using React (TypeScript), Node.js, MongoDB, and a Python ML service, the system analyzes behavioral metrics to predict task duration and burnout risk while delivering personalized productivity insights. Containerized with Docker and deployed across cloud services with performance-optimized queries and secure JWT authentication.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Python", "Docker", "JWT", "Machine Learning"],
      icon: <Code className="text-purple-600" size={24} />,
      color: "purple",
      codeUrl: "https://github.com/shreyashkumarsingh/focusFlowAI",
      demoUrl: "https://focusflowai-f.onrender.com/"
    },
    {
      title: "Convoy Management Application",
      year: "2025",
      description: "Full-stack convoy tracking system for Port Blair administration using Node.js, Express.js, and TypeScript. Built with React and Tailwind CSS for a clean, responsive UI; aimed to enhance citizen security at inter-island checkposts.",
      technologies: ["Node.js", "Express.js", "TypeScript", "React", "Tailwind CSS"],
      icon: <Database className="text-blue-600" size={24} />,
      color: "blue",
      // codeUrl: "https://github.com/shreyashkumarsingh/convoy-management-app",
      // demoUrl: "https://convoy-demo.example.com"
    },
    // {
    //   title: "HireScan-AI Resume Parser",
    //   year: "2025",
    //   description: "HireScan is an AI-powered resume screening tool that parses, scores, and matches candidates to job roles in seconds—built to streamline smart hiring for modern recruiters",
    //   technologies: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "Bootstrap 5", "PyMuPDF", "spaCy"],
    //   icon: <Code className="text-orange-600" size={24} />,
    //   color: "orange",
    //   codeUrl: "https://github.com/shreyashkumarsingh/HireScan-ResumeParserWebsite",
    //   demoUrl: "https://garden-demo.example.com"
    // }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that demonstrate my skills in full-stack development and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/50 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {project.icon}
                    <span className={`px-3 py-1 bg-${project.color}-100 dark:bg-${project.color}-900/30 text-${project.color}-600 dark:text-${project.color}-400 rounded-full text-sm font-medium`}>
                      {project.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>View Website</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
