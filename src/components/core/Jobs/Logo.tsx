"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "https://cdn.prod.website-files.com/67e78ae55ed139c32286fe83/681938d48dfb4aa34a03b6cb_63283d92e4afaa2d1eacf7b2_vision%20logo%20(1).svg",
  "https://cdn.prod.website-files.com/67e78ae55ed139c32286fe83/681938cb50c0b29ae899e3bf_Frame.svg",
  "https://cdn.prod.website-files.com/67e78ae55ed139c32286fe83/681938d49b02c86bee15ce6d_63283d913fcfbb0a03bfee04_hi%20tech%20logo.svg",
  "https://cdn.prod.website-files.com/67e78ae55ed139c32286fe83/681938d4f2b8c512825659e1_63283d925b53a08133f04fc3_volume%20logo.svg",
  "https://cdn.prod.website-files.com/67e78ae55ed139c32286fe83/681938d45cc39cc5652874f8_63283d92a6216ef4c42f0477_iceberg%20logo.svg",
];

export default function LogoSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-10 tracking-wide uppercase">
          Trusted by leading tech innovators
        </h2>

        {/* Animated Logo Marquee */}
        <motion.div
          className="flex space-x-16 animate-marquee"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                width={140}
                height={60}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 dark:invert"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Custom CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
