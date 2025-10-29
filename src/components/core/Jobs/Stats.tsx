"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const StatsSection: React.FC = () => {
  const stats = [
    {
      number: "1,000+",
      text: "Companies trust HireEdge for hiring",
    },
    {
      number: "95%",
      text: "Client Satisfaction Rate",
    },
    {
      number: "100K+",
      text: "Job opportunities created",
    },
    {
      number: "50K+",
      text: "Resumes processed efficiently",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-100 via-orange-200 to-orange-400 dark:from-orange-600 dark:via-neutral-700 dark:to-neutral-00 transition-colors duration-300">
      <div className="px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
              Our Impact in Numbers
              
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
              We simplify hiring with data-driven solutions, helping businesses
              find the right talent faster. <br /> Here’s how we’ve made a
              measurable difference in the HR tech space.
            </p>
            <Link
              href="/about"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              More About Us
            </Link>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <div className="text-4xl font-extrabold text-orange-600 dark:text-orange-400 mb-2">
                  {item.number}
                </div>
                <h3 className="text-base text-gray-700 dark:text-gray-300 leading-snug">
                  {item.text}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
