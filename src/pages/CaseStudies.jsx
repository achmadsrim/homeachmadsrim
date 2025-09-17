import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function CaseStudies() {
  const caseStudies = [
    {
      id: "case1",
      title: "Rebranding UMKM Kuliner",
      description:
        "Warung kopi lokal turun pengunjung. Refresh logo, strategi medsos & storytelling kopi lokal.",
      result: "Engagement IG naik 60% dalam 3 bulan.",
      chartType: "bar",
      chartData: [
        { label: "Jan", value: 40 },
        { label: "Feb", value: 55 },
        { label: "Mar", value: 70 },
        { label: "Apr", value: 65 },
        { label: "Mei", value: 80 },
      ],
      shareText:
        "Cek studi kasus seru: Rebranding UMKM Kuliner 🚀 https://your-portfolio-site.com/case1",
    },
    {
      id: "case2",
      title: "Digital Campaign Startup Edukasi",
      description:
        'Startup edukasi awareness rendah. Kampanye “Belajar Dimana Saja” via TikTok.',
      result: "20.000 pendaftar baru dalam 2 bulan.",
      chartType: "bar",
      chartData: [
        { label: "M1", value: 2000 },
        { label: "M2", value: 6000 },
        { label: "M3", value: 12000 },
        { label: "M4", value: 20000 },
        { label: "M5", value: 25000 },
        { label: "M6", value: 30000 },
      ],
      shareText:
        "Cek studi kasus seru: Digital Campaign Startup Edukasi 🚀 https://your-portfolio-site.com/case2",
    },
    {
      id: "case3",
      title: "Brand Activation Skincare",
      description:
        "Brand skincare ikut event nasional dengan booth interaktif & kolaborasi beauty influencer.",
      result: "Coverage media 15 publikasi nasional, penjualan naik 30%.",
      chartType: "bar",
      chartData: [
        { label: "Media Coverage", value: 15 },
        { label: "Sales Growth %", value: 30 },
        { label: "Engagement %", value: 55 },
      ],
      shareText:
        "Cek studi kasus seru: Brand Activation Skincare 🚀 https://your-portfolio-site.com/case3",
    },
    {
      id: "case4",
      title: "B2B SaaS Onboarding Optimization",
      description:
        "Software B2B churn tinggi di awal. Dibuat automated onboarding + video tutorial interaktif.",
      result: "Churn turun 25% dalam 2 kuartal.",
      chartType: "bar",
      chartData: [
        { label: "Q1", value: 45 },
        { label: "Q2", value: 40 },
        { label: "Q3", value: 35 },
        { label: "Q4", value: 30 },
      ],
      shareText:
        "Cek studi kasus seru: B2B SaaS Onboarding Optimization 🚀 https://your-portfolio-site.com/case4",
    },
    {
      id: "case5",
      title: "E-commerce Ramadan Campaign",
      description:
        "Retail e-commerce bikin flash sale + gamification points selama Ramadan.",
      result: "GMV naik 80% dibanding Ramadan tahun lalu.",
      chartType: "bar",
      chartData: [
        { label: "2019", value: 100 },
        { label: "2020", value: 150 },
        { label: "2021", value: 180 },
        { label: "2022", value: 260 },
      ],
      shareText:
        "Cek studi kasus seru: E-commerce Ramadan Campaign 🚀 https://your-portfolio-site.com/case5",
    },
    {
      id: "case6",
      title: "Non-Profit Awareness Campaign",
      description:
        "NGO kesehatan butuh awareness donasi. Kampanye konten video storytelling di Instagram + YouTube.",
      result: "Donasi naik 45% dalam 6 minggu.",
      chartType: "line",
      chartData: [
        { label: "Week 1", value: 100 },
        { label: "Week 2", value: 180 },
        { label: "Week 3", value: 250 },
        { label: "Week 4", value: 320 },
        { label: "Week 5", value: 390 },
        { label: "Week 6", value: 450 },
      ],
      shareText:
        "Cek studi kasus seru: Non-Profit Awareness Campaign 🚀 https://your-portfolio-site.com/case6",
    },
    {
      id: "case7",
      title: "Fintech User Growth Campaign",
      description:
        "Fintech baru meluncur, target user acquisition 100k. Strategi referral + influencer TikTok.",
      result: "Capai 150k user dalam 5 bulan.",
      chartType: "line",
      chartData: [
        { label: "Month 1", value: 20000 },
        { label: "Month 2", value: 45000 },
        { label: "Month 3", value: 80000 },
        { label: "Month 4", value: 120000 },
        { label: "Month 5", value: 150000 },
      ],
      shareText:
        "Cek studi kasus seru: Fintech User Growth Campaign 🚀 https://your-portfolio-site.com/case7",
    },
    {
      id: "case8",
      title: "Corporate Internal Branding",
      description:
        "Perusahaan besar lakukan rebranding internal: townhall, microsite, dan video CEO.",
      result: "Employee engagement naik 40%.",
      chartType: "bar",
      chartData: [
        { label: "Before", value: 50 },
        { label: "After", value: 90 },
      ],
      shareText:
        "Cek studi kasus seru: Corporate Internal Branding 🚀 https://your-portfolio-site.com/case8",
    },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-10 font-sans max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-2">
        🚀 Project Brand + IT
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8">
        Project seru di mana branding ketemu teknologi ⚡ — dari{" "}
        <span className="font-semibold">data insight</span>,{" "}
        <span className="font-semibold">automation</span>, sampai{" "}
        <span className="font-semibold">digital tools</span>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {caseStudies.map((c) => {
          const labels = c.chartData.map((d) => d.label);
          const values = c.chartData.map((d) => d.value);

          let chart;
          if (c.chartType === "bar") {
            chart = (
              <Bar
                data={{
                  labels,
                  datasets: [
                    {
                      label: "Value",
                      data: values,
                      backgroundColor: [
                        "#4F46E5",
                        "#9333EA",
                        "#F472B6",
                        "#F59E0B",
                        "#10B981",
                      ],
                      borderRadius: 6,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: { legend: { display: false } },
                  scales: {
                    y: { beginAtZero: true },
                  },
                }}
              />
            );
          } else if (c.chartType === "line") {
            chart = (
              <Line
                data={{
                  labels,
                  datasets: [
                    {
                      label: "Trend",
                      data: values,
                      borderColor: "#4F46E5",
                      backgroundColor: "rgba(79,70,229,0.3)",
                      tension: 0.3,
                      fill: true,
                      pointRadius: 5,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: { legend: { display: false } },
                  scales: {
                    y: { beginAtZero: true },
                  },
                }}
              />
            );
          } else if (c.chartType === "doughnut") {
            chart = (
              <Doughnut
                data={{
                  labels,
                  datasets: [
                    {
                      data: values,
                      backgroundColor: [
                        "#4F46E5",
                        "#9333EA",
                        "#F472B6",
                        "#F59E0B",
                        "#10B981",
                      ],
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: { legend: { position: "bottom" } },
                }}
              />
            );
          }

          return (
            <section
              id={c.id}
              key={c.id}
              className="p-5 sm:p-6 rounded-3xl shadow-lg hover:shadow-xl transition bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 space-y-3"
            >
              <h2 className="text-lg sm:text-xl font-bold">{c.title}</h2>
              <p className="text-sm sm:text-base">{c.description}</p>
              <p className="font-semibold text-sm sm:text-base">
                📈 Hasil: {c.result}
              </p>

              <div className="w-full h-56">{chart}</div>

              <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
                <button
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        `https://your-portfolio-site.com/${c.id}`
                      )}`,
                      "_blank"
                    )
                  }
                  className="flex-1 sm:flex-auto px-4 py-2 rounded-full bg-sky-600 text-white font-semibold hover:bg-sky-700 hover:scale-105 transition transform flex items-center justify-center gap-2"
                >
                  <FaLinkedin /> Share
                </button>

                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/?text=${encodeURIComponent(c.shareText)}`,
                      "_blank"
                    )
                  }
                  className="flex-1 sm:flex-auto px-4 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 hover:scale-105 transition transform flex items-center justify-center gap-2"
                >
                  <FaWhatsapp /> Share
                </button>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
