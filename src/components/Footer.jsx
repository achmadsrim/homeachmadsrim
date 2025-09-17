import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Achmad Sri M.
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Building modern web experiences with React & Tailwind.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
            Quick Links
          </h3>
          <Link
            to="/"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Home
          </Link>
          <Link
            to="/kontak"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Kontak
          </Link>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-3">
            Follow Me
          </h3>
          <div className="flex space-x-4">
            <a href="https://linkedin.com/achmadsrim" target="_blank" rel="noreferrer">
              <Linkedin className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition" size={20} />
            </a>
            <a href="https://github.com/achmadsrim" target="_blank" rel="noreferrer">
              <Github className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition" size={20} />
            </a>
            <a href="https://instagram.com/achmadsrim" target="_blank" rel="noreferrer">
              <Instagram className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition" size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t dark:border-gray-700 text-center py-4 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Achmad Sri M. All rights reserved.
      </div>
    </footer>
  );
}
