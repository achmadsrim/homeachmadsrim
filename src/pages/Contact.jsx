import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      className="px-6 py-20 flex justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-xl w-full text-center bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-10">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Yuk, Terhubung!
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Ingin berdiskusi, kolaborasi, atau sekadar ngobrol santai?  
          Silakan hubungi saya lewat salah satu platform berikut 👇
        </p>

        {/* Contact Info */}
        <div className="space-y-5 text-left">
          <a
            href="mailto:achmadsrim.kerja@gmail.com"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Mail size={20} />
            <span>achmadsrim.kerja@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com/in/achmadsrim"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
            <span>linkedin.com/in/achmadsrim</span>
          </a>

          <a
            href="https://wa.me/6289629935459"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-green-600 transition"
          >
            <Phone size={20} />
            <span>+62 896 2993 5459</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
