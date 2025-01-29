"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "We build fast, scalable, and secure web applications.",
    href: ""
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "We create user-centered and visually appealing designs.",
    href: ""
  },
  {
    num: "03",
    title: "Logo Development",
    description: "We design unique and memorable logos.",
    href: ""
  },
  {
    num: "04",
    title: "SEO",
    description: "We optimize your website for search engines.",
    href: ""
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {services.map((service, index) => {
            return (
              <div key={index}
                className="flex flex-col justify-center p-6 bg-gray-800 rounded-lg shadow-lg group"
              >
                {/* top */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-5xl font-extrabold text-outline text-transparent
                  group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white
                  group-hover:bg-accent transition-all duration-500 flex
                  justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[32px] md:text-[42px] font-bold leading-tight text-white
                group-hover:text-accent transition-all duration-500 mb-2">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/70 text-base md:text-lg">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full mt-4"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;