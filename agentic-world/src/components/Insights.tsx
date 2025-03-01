"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Insights = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "User Growth",
        data: [20, 40, 65, 85, 100, 140, 160, 180, 200, 220, 250, 280],
        backgroundColor: "rgba(34, 197, 94, 0.3)",
        borderColor: "#16a34a",
        borderWidth: 3,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#16a34a",
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "#16a34a",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "#333",
        bodyColor: "#222",
        borderColor: "#16a34a",
        borderWidth: 1,
      },
    },
    scales: {
      y: { beginAtZero: true, grid: { color: "rgba(255, 255, 255, 0.1)" } },
      x: { grid: { color: "rgba(255, 255, 255, 0.1)" } },
    },
  };

  return (
    <section id="insights" className="relative py-20 w-full min-h-screen flex flex-col items-center justify-center text-white px-6 text-center overflow-hidden bg-black">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[4px] h-[4px] bg-white/10 rounded-full"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, opacity: 0.3 }}
            animate={{ y: ["110vh", "-10vh"], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: Math.random() * 10 + 5, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <motion.h1
        data-aos="fade-down"
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        AI-Driven Business Insights
      </motion.h1>

      <motion.p
        data-aos="fade-up"
        className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl"
      >
        Track real-time business growth and user engagement with intelligent analytics.
      </motion.p>

      <motion.div
        data-aos="fade-up"
        className="w-full md:w-3/4 lg:w-3/4 xl:w-4/5 mt-12 p-8 bg-black/40 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/15"
      >
        <div className="h-80 md:h-96">
          <Line data={data} options={options} />
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;