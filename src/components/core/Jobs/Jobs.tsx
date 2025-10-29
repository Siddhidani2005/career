"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Job {
  title: string;
  department: string;
  description: string;
  location: string;
  type: string;
  company: string;
  companyLogo: string;
  link: string;
}

const jobs: Job[] = [
  {
    title: "Senior Engineer",
    department: "Development",
    description:
      "Join Amazon's team and contribute to the development of advanced technologies.",
    location: "New York",
    type: "Part Time",
    company: "Amazon",
    companyLogo:
      "https://cdn.prod.website-files.com/66277a0e9303f0424cbe9fa6/664703260677fbb5b2170729_Amazon%20Logo.svg",
    link: "/job-offers/machine-learning-engineer",
  },
  {
    title: "Cybersecurity Analyst",
    department: "Security",
    description:
      "Exciting opportunity for a talented Cybersecurity Analyst to join Apple's dedicated security team in Central Park.",
    location: "New York",
    type: "Full Time",
    company: "Apple Inc.",
    companyLogo:
      "https://cdn.prod.website-files.com/66277a0e9303f0424cbe9fa6/664703387d3dd83b53b48a85_Apple%20Logo.svg",
    link: "/job-offers/cybersecurity-analyst",
  },
  {
    title: "Product Manager",
    department: "Development",
    description:
      "Exciting opportunity for an experienced Product Manager to join Google's dynamic team in orangemond, Washington.",
    location: "Washington",
    type: "Part Time",
    company: "Google",
    companyLogo:
      "https://cdn.prod.website-files.com/66277a0e9303f0424cbe9fa6/6647031520f9cc39da00f734_Google%20Logo.svg",
    link: "/job-offers/product-manager",
  },
  {
    title: "Data Scientist",
    department: "Tech",
    description:
      "Exciting opportunity for a skilled Data Scientist to join Amazon's innovative data science team in Seattle.",
    location: "Washington",
    type: "Part Time",
    company: "Amazon",
    companyLogo:
      "https://cdn.prod.website-files.com/66277a0e9303f0424cbe9fa6/664703260677fbb5b2170729_Amazon%20Logo.svg",
    link: "/job-offers/data-scientist",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    description:
      "Exciting opportunity for a talented UX/UI Designer to join Apple's renowned design team in Cupertino, California.",
    location: "California",
    type: "Full Time",
    company: "Apple Inc.",
    companyLogo:
      "https://cdn.prod.website-files.com/66277a0e9303f0424cbe9fa6/664703387d3dd83b53b48a85_Apple%20Logo.svg",
    link: "/job-offers/ux-ui-designer",
  },
  {
    title: "Software Engineer",
    department: "Tech",
    description:
      "Exciting opportunity for a skilled Software Engineer to join Google's innovative team in Mountain View.",
    location: "California",
    type: "Full Time",
    company: "Google",
    companyLogo:
      "https://cdn.prod.website-files.com/66277a0e9303f0424cbe9fa6/6647031520f9cc39da00f734_Google%20Logo.svg",
    link: "/job-offers/software-engineer",
  },
];

export const JobOffersSection: React.FC = () => {
  return (
    <section className="job-offers-section bg-gray-50 dark:bg-gray-950 transition-colors duration-500 py-24 relative">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        {/* 🏷️ Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Latest Job Offers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover exciting opportunities with top companies across tech,
            design, and innovation.
          </p>
        </div>

        {/* 🧩 Job Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-orange-500/30"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {job.title}
                </h3>
                <span className="bg-orange-100 dark:bg-orange-800/40 text-orange-600 dark:text-orange-300 text-sm font-medium px-3 py-1 rounded-full">
                  {job.department}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-5">
                {job.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-gray-700 dark:text-gray-300 text-sm mb-5">
                <div className="flex items-center gap-2">
                  <Image
                    src="https://cdn.prod.website-files.com/66277126b8030d4bdcebdaf0/66278b82805e16af4c0e6bef_lieu-de-recherche%20(7)%201.svg"
                    alt="Location"
                    width={16}
                    height={16}
                  />
                  {job.location}
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src="https://cdn.prod.website-files.com/66277126b8030d4bdcebdaf0/66278b824aef6ae34076426d_document-signe%20(1)%201.svg"
                    alt="Job type"
                    width={16}
                    height={16}
                  />
                  {job.type}
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src={job.companyLogo}
                    alt={job.company}
                    width={16}
                    height={16}
                  />
                  {job.company}
                </div>
              </div>

              <Link
                href={job.link}
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium px-5 py-2 rounded-md transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* 📩 Can't find anything? Form */}
        <div className="mt-20 bg-white dark:bg-gray-900 rounded-xl p-8  shadow-md max-w-xl mx-auto text-center border border-gray-100 dark:border-gray-800">
          <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
            Can’t find anything?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We’ll reach out to match you with upcoming opportunities.
          </p>

          <form className="flex flex-col gap-4 text-left">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              className="bg--600 hover:bg-orange-700 text-white font-medium py-2 rounded-lg transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JobOffersSection;
