import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-md shadow-md border-b border-gray-300 dark:border-gray-700 z-50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-blue-500">Ibrar.dev</h1>

        <div className="flex items-center space-x-8 text-lg font-medium">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-blue-500 transition ${
                location.pathname === link.path ? "text-blue-500 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:scale-105 transition-transform duration-300 shadow"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
