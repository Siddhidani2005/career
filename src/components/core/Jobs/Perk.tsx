"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Tab {
  title: string;
  image: string;
}

export const PerksSection: React.FC = () => {
  const tabs: Tab[] = [
    {
      title: "AI-powered recruitment",
      image:
        "https://cdn.prod.website-files.com/67e78ae55ed139c32286fe83/6831e0cee88b12bfc382677b_Squoosh%20Image%20(9).avif",
    },
    {
      title: "Seamless hiring process",
      image:
        "https://cdn.prod.website-files.com/67e78ae55ed139c32286fe83/683217ff246f20e6ba028a53_Employee%20Engagement%20Photo.avif",
    },
    {
      title: "Tailored HR solutions",
      image:
        "https://cdn.prod.website-files.com/67e78ae55ed139c32286fe83/6831e0cd3c3b4ea8b6a3c22b_Squoosh%20Image%20(13).avif",
    },
    {
      title: "Real-Time Talent Analytics",
      image:
        "https://cdn.prod.website-files.com/67e78ae55ed139c32286fe83/6831e0cd71146b4274245ed3_Squoosh%20Image%20(11).avif",
    },
  ];

  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="perks-section py-20 bg-gradient-to-br from-orange-100 via-orange-200 to-orange-400 dark:from-orange-600 dark:via-neutral-700 dark:to-neutral-00 transition-colors duration-500">
      <div className="container mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Smarter Hiring,{" "}
            <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Stronger Teams Transform
            </span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
          {/* Tab Menu */}
          <div className="flex flex-col gap-4 md:w-1/3">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left rounded-xl p-4 transition-all duration-300 border ${
                  activeTab === index
                    ? "bg-gradient-to-r from-orange-600 to-orange-400 text-white shadow-md border-orange-500"
                    : "bg-white text-gray-800 hover:bg-orange-50 border-gray-200"
                }`}
              >
                <h3 className="text-lg font-semibold">{tab.title}</h3>
              </button>
            ))}
          </div>

          {/* Active Tab Image */}
          <div className="md:w-2/3 flex justify-center transition-all duration-500">
            <div className="relative w-full max-w-lg h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mt-10 max-w-2xl mx-auto">
          <p className="text-gray-600 text-lg">
            Empowering companies to find and hire top talent with intelligent,
            data-driven HR solutions built to scale with your growth.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/about"
            className="px-6 py-3 text-sm font-semibold rounded-full border border-orange-600 text-orange-700 hover:bg-gradient-to-r from-orange-600 to-orange-400 hover:text-white transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PerksSection;
