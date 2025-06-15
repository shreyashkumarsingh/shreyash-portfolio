
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "National Informatics Centre (NIC)",
      location: "Andaman & Nicobar Islands",
      period: "May 2025 – June 2025",
      description: [
        "Collaborated on building a Convoy Management System to digitalize inter-island travel data",
        "Developed modules to support secure information handling at checkposts across the islands",
        "Project aimed to boost security infrastructure and streamline administrative control"
      ],
      color: "blue"
    },
    {
      title: "Web Development Intern",
      company: "Pinnacle Labs",
      location: "Remote",
      period: "Feb 2025 – Mar 2025",
      description: [
        "Built a responsive Restaurant Website with ordering and feedback functionality",
        "Developed a Task Scheduler Web App with time-based and lexicographic task sorting"
      ],
      color: "purple"
    },
    {
      title: "AI & ML Intern",
      company: "AICTE Virtual Internship",
      location: "Remote",
      period: "Jan 2025 – Mar 2025",
      description: [
        "Participated in an online mentorship program focused on AI, ML, and Cloud Computing",
        "Gained hands-on insights into foundational AI concepts and industry workflows"
      ],
      color: "green"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline Dot */}
              <div className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-${exp.color}-600 rounded-full border-4 border-white shadow-lg`}></div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'}`}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className={`px-3 py-1 bg-${exp.color}-100 text-${exp.color}-600 rounded-full text-sm font-medium`}>
                      {exp.period}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <ExternalLink size={16} className="text-gray-500" />
                    <span className="text-gray-700 font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin size={16} className="text-gray-500" />
                    <span className="text-gray-600">{exp.location}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 leading-relaxed flex items-start gap-2">
                        <span className="text-blue-600 mt-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
