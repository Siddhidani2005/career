"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const CTA: React.FC = () => {
  return (
    <section className="about-section bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* 🖼️ Left Side - Image */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="https://cdn.prod.website-files.com/66277126b8030d4bdcebdaf0/6630200ae79e84fc83a18771_Better%20Talent%20-%20Webflow%20Recruitment%20job%20portal%20ecommerce%20template%20about%201.png"
            alt="About us"
            fill
            className="object-cover rounded-2xl shadow-lg shadow-gray-300 dark:shadow-gray-800"
            priority
          />
        </div>

        {/* 📝 Right Side - Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
            Transform your business with our solutions
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Primary Button */}
            <Link
              href="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              Contact us
            </Link>

            {/* Secondary Button */}
            <Link
              href="/post-a-job-offer"
              className="border border-gray-800 dark:border-gray-200 text-gray-900 dark:text-gray-100 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Post a job
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
