import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FunFactsElegantCarousel() {
  const funFacts = [
    {
      emoji: "☕",
      title: "Ngopi Dulu",
      desc: "Ide kreatif biasanya muncul pas lagi ngopi santai di coffee shop favorit.",
    },
    {
      emoji: "🎧",
      title: "Musik & Podcast",
      desc: "Lebih fokus kerja ditemani musik indie atau podcast storytelling.",
    },
    {
      emoji: "📸",
      title: "Jalan & Jepret",
      desc: "Suka hunting foto street dan sunset buat refreshing otak.",
    },
    {
      emoji: "🎮",
      title: "Main Game",
      desc: "Gaming jadi cara paling ampuh buat ngilangin penat setelah kerja panjang.",
    },
    {
      emoji: "✈️",
      title: "Travel Mode",
      desc: "Traveling sambil coba makanan lokal selalu jadi pengalaman seru.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto slide tiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % funFacts.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + funFacts.length) % funFacts.length);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-6 py-16 max-w-3xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-10">Fun Facts 😎</h2>

      {/* Carousel */}
      <div className="relative h-56 flex items-center justify-center overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute w-full px-6"
          >
            <div className="p-8 rounded-2xl shadow-md bg-white dark:bg-gray-800">
              <div className="text-6xl mb-4">{funFacts[index].emoji}</div>
              <h3 className="text-xl font-semibold mb-2">
                {funFacts[index].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {funFacts[index].desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {funFacts.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i
                ? "bg-blue-600 scale-110"
                : "bg-gray-400 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </motion.section>
  );
}
