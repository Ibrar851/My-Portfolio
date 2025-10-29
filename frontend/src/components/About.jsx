import { FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import { BsDatabaseFillCheck } from "react-icons/bs";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-6 md:p-16 font-sans transition-colors duration-500">
       <h1 className="text-4xl font-bold mb-12 text-center">
        Wellcome to<span className="text-blue-500"> About</span>
        </h1>
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-10">
        
      
        
      </nav>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-semibold mb-4">
            About <span className="text-blue-500">Me</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I'm a passionate <span className="font-semibold text-blue-500">MERN Stack Developer</span> 
            with a focus on building scalable, secure, and visually appealing web applications.
            I love creating efficient, maintainable code and continuously learning new technologies.
          </p>

          <h2 className="text-2xl text-blue-500 font-semibold mb-2">Education & Certifications</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>
              <span className="text-gray-900 dark:text-white font-medium">
                University of Malakand (2020–2024)
              </span>
              <br />
              BS Computer Science
            </li>
            <li>
              <span className="text-gray-900 dark:text-white font-medium">NAVTTC (2025)</span>
              <br />
              Full Stack Development Course
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-xl text-blue-500 font-semibold mb-4">Key Strengths</h2>
          <div className="grid grid-cols-2 gap-4">
            <SkillCard icon={<SiMongodb />} label="MERN Stack" />
            <SkillCard icon={<BsDatabaseFillCheck />} label="REST APIs" />
            <SkillCard icon={<SiTailwindcss />} label="TailwindCSS" />
            <SkillCard icon={<FaGithub />} label="GitHub" />
            <SkillCard icon={<SiReact />} label="React.js" />
            <SkillCard icon={<SiExpress />} label="Express.js" />
            <SkillCard icon={<SiNodedotjs />} label="Node.js" />
          </div>

          <div className="mt-8">
            <a
              href="/path/to/your-cv.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-xl shadow-md transition-transform transform hover:scale-105"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ Reusable Skill Card Component
function SkillCard({ icon, label }) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center space-x-4 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition duration-300">
      <div className="text-2xl text-blue-500">{icon}</div>
      <div className="text-gray-800 dark:text-gray-200 font-medium">{label}</div>
    </div>
  );
}
