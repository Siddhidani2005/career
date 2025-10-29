"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <header className="hero-section bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="px-6 md:px-16 lg:px-24 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            {/* Trusted Logos */}
            <div className="flex items-center flex-wrap gap-4">
              <div className="flex items-center gap-3">
                {[
                  "https://cdn.prod.website-files.com/67e78ae55ed139c32286fe83/6831e4cfaab234df5ac2fc45_Squoosh%20Image%20(23).avif",
                  "https://cdn.prod.website-files.com/67e78ae55ed139c32286fe83/6831e4cf838f594aff2e3a75_Squoosh%20Image%20(20).avif",
                  "https://cdn.prod.website-files.com/67e78ae55ed139c32286fe83/6831e4cf2a880357f90123cb_Squoosh%20Image%20(22).avif",
                  "https://cdn.prod.website-files.com/67e78ae55ed139c32286fe83/6831e4cf82b2956a91777fd4_Squoosh%20Image%20(21).avif",
                ].map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Logo ${i + 1}`}
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                  />
                ))}
              </div>

              <div className="ml-3">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  70K+
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Job opportunities
                </p>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
              HireEdge makes{" "}
              <span className="text-orange-600 dark:text-orange-400">
                hiring faster
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-lg">
              We connect businesses with top-tier talent through data-driven HR
              solutions — whether you are growing a startup or expanding.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="#Jobs"
                className="inline-block px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium text-lg rounded-full shadow-md transition-colors"
              >
                Discover Jobs
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://cdn.prod.website-files.com/67e78ae55ed139c32286fe83/6831e1a937cebb73939e17f7_96125f7e05d83db72b82c2daf90dcc30bb9bc5b8.avif"
              alt="Hero Image"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
};
