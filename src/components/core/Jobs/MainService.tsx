"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Service {
  id: number;
  title: string;
  description: string;
  link: string;
  icon: string;
  bgColor: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Employee Engagement",
    description:
      "Invest in your workforce with customized training (workshops, e-learning, coaching) to build core skills, boost engagement, and increase productivity.",
    link: "/services/employee-engagement",
    icon: "https://cdn.prod.website-files.com/68124454e2df22af7bf349d4/6814e8a9d9953507ea86d239_celo-(celo).svg",
    bgColor: "#E8F0EB",
  },
  {
    id: 2,
    title: "HR Compliance",
    description:
      "Ensure compliance and accurate payroll with end-to-end HR solutions—automated tax updates, time-tracking, audit trails and secure real-time reporting.",
    link: "/services/hr-compliance-payroll",
    icon: "https://cdn.prod.website-files.com/68124454e2df22af7bf349d4/6814e8b6ebee78b1907590c2_layer.svg",
    bgColor: "#E8F0EB",
  },
  {
    id: 3,
    title: "Employee Development",
    description:
      "Foster a high performing workforce with data-driven engagement sentiment analysis, recognition and predictive insights to ensure retention.",
    link: "/services/employee-development",
    icon: "https://cdn.prod.website-files.com/68124454e2df22af7bf349d4/6814e8c9aa0a1c1ae783b34f_main-component.svg",
    bgColor: "#E8F0EB",
  },
];

const MainServicesSection: React.FC = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-orange-100 via-orange-200 to-orange-400 dark:from-orange-600 dark:via-neutral-700 dark:to-neutral-00  transition-colors duration-300"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-black dark:text-white mb-4">
            Easier hiring,{" "}
            <span className="text-orange-500">better results</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Make the hiring process faster and more efficient with AI-powered
            tools, advanced analytics, and a seamless experience for both
            employers and job seekers.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                href={service.link}
                aria-label={`Learn more about ${service.title}`}
                className="block bg-gray-50 hover:bg-white rounded-2xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 p-8"
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-5"
                    style={{ backgroundColor: service.bgColor }}
                  >
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900  mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600  text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <span className="mt-4 text-orange-600 font-medium hover:underline">
                    Learn more →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServicesSection;
