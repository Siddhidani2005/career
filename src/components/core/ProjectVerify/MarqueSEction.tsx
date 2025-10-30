"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MarqueeSection: React.FC = () => {
  const items = [
    { text: "turbine technology" },
    {
      img: "https://cdn.prod.website-files.com/678f23fa4acbbeb379b4879f/6791d26e24ec03d7f6682118_plus.png",
    },
    { text: "Sustainable", outline: true },
    {
      img: "https://cdn.prod.website-files.com/678f23fa4acbbeb379b4879f/6791d26e24ec03d7f6682118_plus.png",
    },
  ];

  return (
    <section className="marquee-one-section overflow-hidden py-10 bg-white dark:bg-gray-900">
      <div className="relative flex overflow-hidden">
        {/* Marquee Animation */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center space-x-6 mx-4">
              {items.map((item, index) =>
                item.text ? (
                  <h1
                    key={index}
                    className={`text-5xl md:text-7xl font-extrabold uppercase ${
                      item.outline
                        ? "text-transparent stroke-[1px] stroke-gray-800 dark:stroke-white"
                        : "text-gray-900 dark:text-white"
                    }`}
                    style={
                      item.outline
                        ? {
                            WebkitTextStroke: "1px currentColor",
                          }
                        : undefined
                    }
                  >
                    {item.text}
                  </h1>
                ) : (
                  <Image
                    key={index}
                    src={item.img!}
                    alt="plus icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                )
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
