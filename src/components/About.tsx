
import { GraduationCap, Code, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Computer Science student at KIIT Bhubaneswar, expected to graduate in July 2027. 
              My journey in web development began with a curiosity about how digital solutions can solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through various internships and projects, I've gained hands-on experience in full-stack development, 
              working with modern technologies like React, Node.js, and cloud platforms. I'm particularly interested 
              in building secure, scalable applications that make a difference.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">3+</div>
                <div className="text-gray-600">Internships</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">5+</div>
                <div className="text-gray-600">Projects</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <GraduationCap className="text-blue-600 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Education Focus</h3>
                <p className="text-gray-600">
                  Specializing in Computer Science & Communication Engineering, 
                  focusing on modern web technologies and software development practices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
              <Code className="text-purple-600 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Technical Expertise</h3>
                <p className="text-gray-600">
                  Proficient in full-stack development with experience in React, Node.js, 
                  Python, and modern deployment practices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <Target className="text-blue-600 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Career Goal</h3>
                <p className="text-gray-600">
                  Aspiring to work in innovative tech companies where I can contribute 
                  to impactful projects and continue growing as a developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
