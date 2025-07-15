
import { Code, Database, Globe, Settings, Award, ExternalLink, Calendar, Shield } from "lucide-react";

const Skills = () => {
  const certifications = [
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "Mar 2025",
      credentialId: null,
      verifyUrl: "https://www.linkedin.com/in/shreyashkrsingh/details/certifications/1741606325608/single-media-viewer/?profileId=ACoAAFAU-LMBncQ38Wm-B0tgYTDO1jzlBnNTXrI", // Add your verification URL here
      icon: <Shield className="text-orange-600" size={24} />,
      color: "orange",
      skills: ["Cloud Computing", "AWS Services"]
    },
    {
      title: "Pinnacle Labs Web Development Internship",
      issuer: "Pinnacle Labs",
      issueDate: "Mar 2025",
      credentialId: null,
      verifyUrl: "#", // Add your verification URL here
      icon: <Code className="text-blue-600" size={24} />,
      color: "blue",
      skills: ["Web Content Writing", "Web Development"]
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud Training Online",
      issueDate: "Dec 2024",
      credentialId: "RW2UEIKNHGO7",
      verifyUrl: "#", // Add your verification URL here
      icon: <Database className="text-green-600" size={24} />,
      color: "green",
      skills: ["Generative AI"]
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      issueDate: "Dec 2024",
      credentialId: "G5YW2BT8WT3V",
      verifyUrl: "#", // Add your verification URL here
      icon: <Code className="text-blue-800" size={24} />,
      color: "blue",
      skills: ["Python Programming", "IBM Machine Learning"]
    },
    {
      title: "Introduction to Front-End Development",
      issuer: "Meta",
      issueDate: "Jul 2024",
      credentialId: "B6LTHFA35H9T",
      verifyUrl: "#", // Add your verification URL here
      icon: <Globe className="text-blue-600" size={24} />,
      color: "blue",
      skills: ["Front-End Development"]
    },
    {
      title: "Version Control",
      issuer: "Meta",
      issueDate: "Jul 2024",
      credentialId: "58M43FGSH799",
      verifyUrl: "#", // Add your verification URL here
      icon: <Settings className="text-gray-600" size={24} />,
      color: "gray",
      skills: ["Version Control"]
    },
    {
      title: "HTML and CSS in depth",
      issuer: "Meta",
      issueDate: "Jun 2024",
      credentialId: "KMHFXTSSH33V",
      verifyUrl: "#", // Add your verification URL here
      icon: <Globe className="text-purple-600" size={24} />,
      color: "purple",
      skills: ["Cascading Style Sheets (CSS)", "HTML5"]
    },
    {
      title: "Programming with JavaScript",
      issuer: "Meta",
      issueDate: "Jun 2024",
      credentialId: "5PR9J99S38SX",
      verifyUrl: "#", // Add your verification URL here
      icon: <Code className="text-yellow-600" size={24} />,
      color: "yellow",
      skills: ["JavaScript"]
    },
    {
      title: "AICTE AWS AI-ML VIRTUAL INTERNSHIP",
      issuer: "All India Council for Technical Education (AICTE)",
      issueDate: "2024",
      credentialId: null,
      verifyUrl: "#", // Add your verification URL here
      icon: <Database className="text-orange-600" size={24} />,
      color: "orange",
      skills: ["Artificial Intelligence (AI)", "Machine Learning"]
    },
    {
      title: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "2024",
      credentialId: null,
      verifyUrl: "#", // Add your verification URL here
      icon: <Shield className="text-orange-600" size={24} />,
      color: "orange",
      skills: ["Machine Learning"]
    },
    {
      title: "DECODE AND DOMINATE CERTIFICATE",
      issuer: "KIIT - Kalinga Institute of Industrial Technology",
      issueDate: "2024",
      credentialId: null,
      verifyUrl: "#", // Add your verification URL here
      icon: <Award className="text-blue-600" size={24} />,
      color: "blue",
      skills: ["Coding"]
    },
    {
      title: "Red Hat System Administration I (RH124 - RHA) - Ver. 9.3",
      issuer: "Red Hat",
      issueDate: "2024",
      credentialId: null,
      verifyUrl: "#", // Add your verification URL here
      icon: <Settings className="text-red-600" size={24} />,
      color: "red",
      skills: ["System Administration", "Linux"]
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="text-blue-600" size={24} />,
      skills: [
        { name: "React.js", level: 85 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Bootstrap", level: 90 }
      ],
      color: "blue"
    },
    {
      title: "Backend Development",
      icon: <Code className="text-purple-600" size={24} />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "C/C++", level: 78 }
      ],
      color: "purple"
    },
    {
      title: "Database & Tools",
      icon: <Database className="text-green-600" size={24} />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Git & GitHub", level: 88 },
        { name: "REST APIs", level: 85 },
        { name: "Postman", level: 90 }
      ],
      color: "green"
    },
    {
      title: "Design & Other",
      icon: <Settings className="text-orange-600" size={24} />,
      skills: [
        { name: "Figma", level: 80 },
        { name: "Framer", level: 75 },
        { name: "WIX Studio", level: 85 },
        { name: "Responsive Design", level: 92 },
        { name: "TypeScript", level: 78 }
      ],
      color: "orange"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        {/* Certifications Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Licenses & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my technical expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {cert.icon}
                    <div className="flex items-center gap-2">
                      <Calendar className="text-gray-400" size={16} />
                      <span className="text-sm text-gray-500">{cert.issueDate}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-gray-600 font-medium mb-3">
                  {cert.issuer}
                </p>

                {cert.credentialId && (
                  <p className="text-sm text-gray-500 mb-4">
                    Credential ID: {cert.credentialId}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Verify Certificate</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Skills Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here's an overview of my technical expertise across different areas of web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Current Education
            </h3>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">
                Kalinga Institute of Industrial Technology (KIIT)
              </h4>
              <p className="text-gray-600">B.Tech in Computer Science & Communication Engineering</p>
              <p className="text-gray-500">Expected Graduation: July 2027</p>
              <p className="text-gray-500">Bhubaneswar, Odisha</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              High School
            </h3>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">
                Vivekananda Kendra Vidyalaya
              </h4>
              <p className="text-gray-600">High School Diploma</p>
              <p className="text-gray-500">Graduated: May 2023</p>
              <p className="text-gray-500">Port Blair, A&N Islands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
