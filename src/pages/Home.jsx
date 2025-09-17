import Hero from "../components/Hero";
import FunFactsCarousel from "../components/FunFactsCarousel";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Laptop, Lightbulb, Pin } from "lucide-react";

export default function Home() {
  const [mode, setMode] = useState("ringkas"); // "ringkas" atau "detail"

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  // --- Casual + IT vibe skills ---
  const ringkasSkills = [
    {
      title: "Brand Strategy ⚡",
      icon: <Target size={40} className="text-pink-500 mx-auto mb-4" />,
      desc: "Bikin brand punya arah jelas + dibackup sama insight digital.",
    },
    {
      title: "Digital Campaign 🚀",
      icon: <Laptop size={40} className="text-green-500 mx-auto mb-4" />,
      desc: "Ngulik campaign biar nggak cuma keren, tapi juga data-driven & scalable.",
    },
    {
      title: "Creative Direction 💡",
      icon: <Lightbulb size={40} className="text-yellow-500 mx-auto mb-4" />,
      desc: "Ngasih ide visual fresh, dipaduin sama tools digital & AI vibes.",
    },
  ];

  const detailSkills = [
    {
      title: "Brand Management 🔗",
      icon: <Pin size={40} className="text-blue-500 mx-auto mb-4" />,
      desc: "Rawat konsistensi brand biar makin kuat, dengan dukungan tech & automation.",
    },
    {
      title: "Digital Marketing 📊",
      icon: <Laptop size={40} className="text-indigo-500 mx-auto mb-4" />,
      desc: "Bikin campaign berbasis data & insight biar hasilnya maksimal.",
    },
    {
      title: "Campaign Strategy 🎯",
      icon: <Target size={40} className="text-purple-500 mx-auto mb-4" />,
      desc: "Susun strategi komunikasi yang gampang dicerna & tech-enabled.",
    },
    {
      title: "Creative Concepting 🧩",
      icon: <Lightbulb size={40} className="text-orange-500 mx-auto mb-4" />,
      desc: "Ngasih ide kreatif yang relevan sama tren + support digital tools.",
    },
  ];

  // --- Pengalaman kerja ---
  const experiences = [
    {
      title:
        "Project Administrator/Coordinator – PT Electronic Data Interchange Indonesia (EDII), Jakarta",
      period: "2021 – Sekarang",
      tasks: [
        "Menyusun & mengawasi project plan (budget, timeline, scope, resources).",
        "Koordinasi tim internal & komunikasi intensif dengan klien.",
        "Monitoring progress & menyusun laporan rutin (mingguan & bulanan).",
        "Menangani Root Cause Analysis (RCA) & laporan infrastruktur untuk klien.",
        "Mengelola provisioning, SSL monitoring, dan support tiket teknis.",
      ],
      achievement: "Tingkat kepuasan klien mencapai >90%.",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero */}
      <Hero />

      {/* Toggle Mode */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setMode(mode === "ringkas" ? "detail" : "ringkas")}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold hover:opacity-90 transition"
        >
          {mode === "ringkas"
            ? "🔍 Lihat Versi Detail"
            : "✨ Lihat Versi Ringkas"}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {/* Tentang Saya */}
        <motion.section
          key={mode + "-tentang"}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="px-6 py-16 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Tentang Saya 👨‍💻</h2>
          {mode === "ringkas" ? (
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Halo! Gue doyan ngulik{" "}
              <span className="font-semibold text-blue-500">brand</span> &{" "}
              <span className="font-semibold text-green-500">
                digital marketing
              </span>
              . Fokusnya? Bikin brand nyambung sama audiens pake{" "}
              <span className="underline decoration-dotted">sentuhan IT</span> ⚡
            </p>
          ) : (
            <>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Udah lebih dari{" "}
                <span className="font-semibold">4 tahun</span> gue main di dunia{" "}
                <span className="font-semibold">
                  IT, branding, digital marketing, & campaign strategy
                </span>
                . Dari bikin konsep kreatif sampai ngejalanin campaign, gue
                seneng explore cara biar brand lebih relate, engaging, dan
                backed by data 🔍.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Buat gue, tiap brand itu punya cerita unik. Jobdesk gue? Ngebantu
                biar cerita itu bisa nyampe dengan cara fun + tech-enabled,
                gampang diinget audiens 🎯.
              </p>
            </>
          )}
        </motion.section>

        {/* Keahlian */}
        <motion.section
          key={mode + "-skill"}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="px-6 py-12 max-w-5xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-center mb-10">Keahlian 🛠️</h2>
          <div
            className={`grid ${
              mode === "ringkas" ? "md:grid-cols-3" : "md:grid-cols-4"
            } gap-6`}
          >
            {(mode === "ringkas" ? ringkasSkills : detailSkills).map(
              (skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 text-center cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-600 dark:text-gray-300"
                  >
                    {skill.desc}
                  </motion.p>
                </motion.div>
              )
            )}
          </div>
        </motion.section>

        {/* Fun Facts */}
        <FunFactsCarousel />

        {/* Pengalaman Timeline */}
        <motion.section
          key="experience"
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="px-6 py-16 bg-gray-100 dark:bg-gray-800"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Pengalaman 💼
          </h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-5 top-0 w-1 bg-gradient-to-b from-pink-500 to-blue-500 h-full"></div>

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="mb-12 relative pl-16"
              >
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white dark:border-gray-900"></div>

                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  {exp.period}
                </span>

                <ul className="mt-3 list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  {exp.tasks.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: j * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {exp.achievement && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-3 italic text-green-600 dark:text-green-400 font-medium"
                  >
                    ✨ Pencapaian: {exp.achievement}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          key={mode + "-cta"}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-6 py-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6">Ngobrol Yuk 👋</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {mode === "ringkas"
              ? "Punya project seru atau sekadar mau brainstorming bareng? Feel free buat reach out 💬"
              : "Mau ngobrolin ide campaign, branding, atau sekadar sharing insight IT + kreatif? Yuk connect 🚀"}
          </p>
          <a
            href="mailto:achmadsrim.kerja@gmail.com"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold hover:opacity-90 transition"
          >
            Kirim Email 📩
          </a>
        </motion.section>
      </AnimatePresence>
    </div>
  );
}
