
import { ChevronDown, Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Shreyash
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Full-Stack Developer & CS Student
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Passionate about creating innovative web solutions and building secure, 
              scalable applications. Currently pursuing B.Tech in Computer Science 
              with hands-on experience in modern web technologies.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-600" />
                <span>Port Blair, A&N Islands</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-600" />
                <span>+91-9531969694</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600" />
                <span>shreyashkrsingh@gmail.com</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button
                onClick={() => scrollToAbout()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Learn More
              </button>
              <a
                href="https://www.linkedin.com/in/shreyash-kumar-singh-0ar14"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Right Side - Image/Visual */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 absolute -inset-4 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Shreyash Kumar Singh"
                className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-blue-600" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
