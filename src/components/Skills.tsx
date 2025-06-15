
import { Code, Database, Globe, Settings } from "lucide-react";

const Skills = () => {
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
