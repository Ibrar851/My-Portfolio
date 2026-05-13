import { useState } from "react";
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

// Import images from assets
import studentQueryImg from "../assets/studentquery.png";
import emsImg from "../assets/ems.png"; // ✅ fixed variable name
import crmsImg from "../assets/crms.png";
import analyticsImg from "../assets/analytics.png";
import restImg from "../assets/rest.png";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Student Query",
      category: "Fullstack",
      description:
        "A CRUD app for managing student queries with a responsive frontend and Node.js backend.",
      image: studentQueryImg,
      tech: [
        <FaReact key="r1" />,
        <FaNodeJs key="n1" />,
        <SiExpress key="e1" />,
        <SiMongodb key="m1" />,
      ],
      demo: "https://students-queries.vercel.app/",
      code: "https://github.com/Ibrar851/Students-Queries.git",
    },
    {
      title: "Employee Management System",
      category: "Frontend",
      description:
        "A responsive employee management web app built using React and Tailwind CSS with CRUD-like UI flow.",
      image: emsImg,
      tech: [<FaReact key="r2" />, <SiTailwindcss key="t1" />],
      demo: "https://employee-management-system-silk-two.vercel.app/",
      code: "https://github.com/Ibrar851/Employee-Management-System.git",
    },
    {
      title: "CRMS (FYP)",
      category: "Fullstack",
      description:
        "Customer Relationship Management System (Final Year Project) with MERN Stack.",
      image: crmsImg,
      tech: [
        <FaReact key="r3" />,
        <FaNodeJs key="n2" />,
        <SiMongodb key="m2" />,
      ],
      demo: "https://your-demo-link.com",
      code: "https://github.com/your-repo",
    },
    {
      title: "Analytics Portal",
      category: "Backend",
      description:
        "An analytics dashboard API backend built with Express and MongoDB.",
      image: analyticsImg,
      tech: [
        <FaNodeJs key="n3" />,
        <SiExpress key="e2" />,
        <SiMongodb key="m3" />,
      ],
      demo: "https://your-demo-link.com",
      code: "https://github.com/your-repo",
    },
    {
      title: "Restaurant Site",
      category: "Frontend",
      description:
        "A modern and responsive Restaurant Website built with React, Vite, and Bootstrap. It features a stylish UI, food menu, gallery, reviews, and contact sections to help restaurants showcase their services professionally online.",
      image: restImg,
      tech: [<FaReact key="r2" />, <SiTailwindcss key="t1" />],
      demo: "https://restaurant-site-lyart-three.vercel.app",
      code: "https://github.com/Ibrar851/restaurant-site.git",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-16 transition-colors duration-500"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          My <span className="text-blue-500">Projects</span>
        </h1>
        <div className="flex justify-center space-x-4 text-black">
          {["All", "Frontend", "Backend", "Fullstack"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border ${
                filter === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-400 dark:border-gray-600 hover:bg-blue-500 hover:text-white"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white/70 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-blue-500/30 transition-all duration-300"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />

            {/* Project Info */}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                {project.description}
              </p>

              <div className="flex items-center space-x-3 text-blue-400 text-xl mb-4">
                {project.tech.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex space-x-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-xl flex items-center space-x-2 transition"
                >
                  <FaExternalLinkAlt /> <span>Live Demo</span>
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-500 text-gray-800 dark:text-gray-200 hover:bg-gray-700 hover:text-white text-sm font-medium px-4 py-2 rounded-xl flex items-center space-x-2 transition"
                >
                  <FaGithub /> <span>Code Repo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
