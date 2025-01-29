"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of Experience",
  },
  {
    num: 6,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-4 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex-1 flex gap-2 items-center justify-center xl:justify-start"
              key={index}
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-4xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[80px]" : "max-w-[120px]"
                } leading-snug text-sm text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
