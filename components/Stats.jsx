// components/Stats.jsx
"use client";

import CountUp from "react-countup";
import { projects } from "@/components/work/projectsData";

const stats = [
  { num: 3, text: "Years Coding" },
  { num: projects.length, text: "Projects Delivered" },
  { num: 12, text: "Core Technologies" },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-3 gap-6 md:gap-10 py-16 border-y border-line">
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <CountUp end={stat.num} duration={2.5} className="text-4xl md:text-5xl font-black text-ink" />
          <p className="text-sm md:text-base text-muted mt-2">{stat.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;