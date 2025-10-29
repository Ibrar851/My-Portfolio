import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiBootstrap,
  SiGithub,
  SiTailwindcss,
} from "react-icons/si";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaCogs } from "react-icons/fa";

const skills = [
  { name: "HTML5", level: "Advanced", icon: <SiHtml5 size={40} color="#E34F26" /> },
  { name: "CSS3", level: "Advanced", icon: <SiCss3 size={40} color="#1572B6" /> },
  { name: "React.js", level: "Intermediate", icon: <SiReact size={40} color="#61DAFB" /> },
  { name: "JavaScript (ES6+)", level: "Advanced", icon: <SiJavascript size={40} color="#F7DF1E" /> },
  { name: "Node.js", level: "Advanced", icon: <SiNodedotjs size={40} color="#68A063" /> },
  { name: "Express.js", level: "Intermediate", icon: <SiExpress size={40} color="#ffffff" /> },
  { name: "MongoDB", level: "Intermediate", icon: <SiMongodb size={40} color="#4DB33D" /> },
  { name: "Tailwind CSS", level: "Intermediate", icon: <SiTailwindcss size={40} color="#38BDF8" /> },
  { name: "React-Bootstrap", level: "Intermediate", icon: <SiBootstrap size={40} color="#7952B3" /> },
  { name: "GitHub", level: "Advanced", icon: <SiGithub size={40} color="#ffffff" /> },
  { name: "RBAC (Role-Based Access Control)", level: "Advanced", icon: <MdAdminPanelSettings size={40} color="#3B82F6" /> },
  { name: "Middleware", level: "Intermediate", icon: <FaCogs size={40} color="#94A3B8" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-[#0d1117] text-gray-900 dark:text-white px-6 py-20 transition-colors duration-500"
    >
      <motion.h2
        className="text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My<span className="text-blue-500"> Skills</span> 
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white/80 dark:bg-white/10 backdrop-blur-lg border border-gray-300 dark:border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-center">{skill.name}</h3>
            <div className="w-full bg-gray-300 dark:bg-gray-800 rounded-full h-2.5 mb-2">
              <div
                className={`h-2.5 rounded-full ${
                  skill.level === "Advanced"
                    ? "bg-blue-500 w-11/12"
                    : "bg-blue-400 w-8/12"
                }`}
              ></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
