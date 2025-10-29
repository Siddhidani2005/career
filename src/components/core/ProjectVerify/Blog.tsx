"use client";

import Image from "next/image";
import React from "react";

interface BlogPost {
  title: string;
  link: string;
  image: string;
  day: string;
  monthYear: string;
  category: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Top 5 Tips for B.Tech Project Verification",
    link: "/post/top-5-tips-btech-project-verification",
    image:
      "https://cdn.prod.website-files.com/678f23fa4acbbeb379b487e0/67b433016e81b7a4bba13635_blog-img-01.jpg",
    day: "10",
    monthYear: "Oct 2025",
    category: "Project Verification",
    author: "Admin",
  },
  {
    title: "Common Mistakes to Avoid in MCA Project Reports",
    link: "/post/common-mistakes-mca-project-reports",
    image:
      "https://cdn.prod.website-files.com/678f23fa4acbbeb379b487e0/67b44bf1f9d9d7724350fcec_blog-img-02.jpg",
    day: "15",
    monthYear: "Oct 2025",
    category: "Project Report",
    author: "Admin",
  },
  {
    title: "How to Get Your Final Year Project Verified Quickly",
    link: "/post/final-year-project-verification-tips",
    image:
      "https://cdn.prod.website-files.com/678f23fa4acbbeb379b487e0/67b44c0f75383125ae40c12f_blog-img-03.jpg",
    day: "20",
    monthYear: "Oct 2025",
    category: "Verification Tips",
    author: "Admin",
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <p className="uppercase text-sm font-semibold text-blue-600">
              Latest Articles
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Explore Project Verification Guides
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, idx) => (
            <a
              key={idx}
              href={post.link}
              className="group block rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-neutral-800 transition-transform transform hover:scale-105"
            >
              <div className="relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={800}
                  className="w-full h-64 object-cover"
                />
                {/* Meta Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-4 flex flex-wrap items-center gap-2 text-xs font-medium">
                  <span>{post.day}</span>
                  <span>{post.monthYear}</span>
                  <span className="ml-2">• {post.category}</span>
                  <span className="ml-2">• {post.author}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  Readmore
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
