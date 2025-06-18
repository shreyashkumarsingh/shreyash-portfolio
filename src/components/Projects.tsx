import { ExternalLink, Github, Code, Database, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Convoy Management Application",
      year: "2025",
      description: "Full-stack convoy tracking system for Port Blair administration using Node.js, Express.js, and TypeScript. Built with React and Tailwind CSS for a clean, responsive UI; aimed to enhance citizen security at inter-island checkposts.",
      technologies: ["Node.js", "Express.js", "TypeScript", "React", "Tailwind CSS"],
      icon: <Database className="text-blue-600" size={24} />,
      color: "blue",
      codeUrl: "https://github.com/yourusername/convoy-management-app",
      // demoUrl: "https://convoy-demo.example.com"
    },
    {
      title: "HireScan-AI Resume Parser",
      year: "2025",
      description: "HireScan is an AI-powered resume screening tool that parses, scores, and matches candidates to job roles in seconds—built to streamline smart hiring for modern recruiters",
      technologies: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "Bootstrap 5", "PyMuPDF", "spaCy"],
      icon: <Code className="text-orange-600" size={24} />,
      color: "orange",
      codeUrl: "https://github.com/shreyashkumarsingh/HireScan-ResumeParserWebsite",
      demoUrl: "https://garden-demo.example.com"
    },
    {
      title: "Task Scheduler Web App",
      year: "2025",
      description: "Implemented using Node.js, Express.js, and MySQL; supported timed and lexicographic ordering of tasks with an intuitive user interface for productivity management.",
      technologies: ["Node.js", "Express.js", "MySQL", "JavaScript"],
      icon: <Code className="text-purple-600" size={24} />,
      color: "purple",
      codeUrl: "https://github.com/yourusername/task-scheduler",
      demoUrl: "https://taskscheduler-demo.example.com"
    },
    {
      title: "Restaurant Website",
      year: "2025",
      description: "Developed dynamic site with customer order system, feedback form, and mobile-first design using JavaScript and Bootstrap for enhanced user experience.",
      technologies: ["JavaScript", "Bootstrap", "HTML5", "CSS3"],
      icon: <Smartphone className="text-green-600" size={24} />,
      color: "green",
      codeUrl: "https://github.com/yourusername/restaurant-website",
      demoUrl: "https://restaurant-demo.example.com"
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
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that demonstrate my skills in full-stack development and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {project.icon}
                    <span className={`px-3 py-1 bg-${project.color}-100 text-${project.color}-600 rounded-full text-sm font-medium`}>
                      {project.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {/*
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                  */}
                  {/*
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  */}
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
