import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden">
      {/* Accent Background */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-pink-500/30 blur-3xl rounded-full -top-20 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-600/30 blur-3xl rounded-full bottom-0 -right-24 animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-28 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Bagian teks */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
  Yo 👋, gue <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
    Brand Senior Officer
  </span> 
</h1>

<p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
  Nggak cuma mikirin script doang — tapi bikin <span className="text-pink-400 font-bold">brand yang hidup</span>, 
  <span className="text-blue-400 font-bold"> campaign yang nge-hits</span>, 
  dan <span className="text-green-400 font-bold">konten yang relate abis</span>.  
  Semuanya dibumbui sama <span className="text-yellow-400 font-bold">sentuhan IT</span> ⚡ biar makin scalable.
</p>

<p className="text-sm md:text-base text-gray-400 italic">
  “Branding + Tech = vibes yang nggak ada duanya ✨”
</p>



          {/* Statistik */}
          <div className="grid grid-cols-2 gap-6 text-left mb-10">
            {[
              { number: "20+", label: "Brand sukses 🚀" },
              { number: "150%", label: "Engagement naik 📈" },
              { number: "50+", label: "Campaign jalan 🎯" },
              { number: "10M+", label: "Audiens terjangkau 🌍" },
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-gray-800/50 rounded-xl shadow hover:scale-105 transition">
                <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 text-2xl mb-1">
                  {stat.number}
                </h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="/studi-kasus"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-600 text-white font-medium rounded-xl shadow hover:scale-105 transition"
            >
              ⚡ Cek Project
            </a>
            <a
              href="/assets/cv.pdf"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium rounded-xl shadow hover:scale-105 transition"
              download
            >
              📄 CV Gue
            </a>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {[
              "🎨 Brand Strategy",
              "📱 Digital Marketing",
              "🎯 Campaign Management",
              "✍️ Content Creation",
              "📊 Market Research",
              "🤝 Team Leadership",
            ].map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm bg-gradient-to-r from-pink-600/40 to-blue-600/40 rounded-full border border-pink-500/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bagian ilustrasi/foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative"
        >
          <div className="relative group">
            <img
              src="/assets/profile.png"
              alt="Foto profil"
               className="rounded-2xl shadow-2xl max-h-[480px] object-cover border-4 border-gray-800 
               group-hover:scale-105 group-hover:rotate-2 transition duration-500"
            />
             <div className="absolute inset-0 rounded-2xl border-2 border-transparent 
                  group-hover:border-pink-500/60 
                  group-hover:shadow-[0_0_25px_5px_rgba(236,72,153,0.5)] 
                  transition duration-500" />
</div>
        </motion.div>
      </div>
    </section>
  );
}
