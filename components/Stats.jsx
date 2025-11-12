// components/Stats.jsx
"use client";

import CountUp from "react-countup";

const stats = [
  { num: 3, text: "Years Coding" },
  { num: 15, text: "Projects Delivered" },
  { num: 20, text: "Tech Stack" },
  { num: 2500, text: "GitHub Commits" },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-32">
      {stats.map((stat, i) => (
        <div key={i} className="text-center group">
          <CountUp
            end={stat.num}
            duration={3}
            className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
          />
          <p className="text-sm md:text-base text-gray-400 mt-3 group-hover:text-cyan-300 transition">
            {stat.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;