import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-6 md:p-16 transition-colors duration-500"
    >
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-12 text-center">
        Contact <span className="text-blue-500">Me</span>
      </h1>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white/70 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
          <form className="flex flex-col space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-transform transform hover:scale-105 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Spacer / Optional Section */}
        <div className="bg-white/70 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg hidden md:flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
          <p className="text-lg text-center leading-relaxed">
            Let’s collaborate on something <span className="text-blue-500 font-medium">amazing</span>!  
            I’m open to freelance projects and full-time roles.
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-white/70 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Or find me here:</h2>

          <ul className="space-y-5">
            <li className="flex items-center space-x-3">
              <FaGithub className="text-blue-500 text-2xl" />
              <a
                href="https://github.com/Ibrar851"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                github.com/Ibrar851
              </a>
            </li>

            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <a
                href="mailto:ibrarulhaq1226@gmail.com"
                className="hover:text-blue-500 transition"
              >
                ibrarulhaq1226@gmail.com
              </a>
            </li>

            <li className="flex items-center space-x-3">
              <FaLinkedin className="text-blue-500 text-2xl" />
              <a
                href="https://www.linkedin.com/in/ibrar-ul-haq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                linkedin.com/in/ibrarulhaq
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
