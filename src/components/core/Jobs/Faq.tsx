"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can I apply for a job listed on your site?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      question: "What makes your recruitment process unique?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      question: "Can I submit my resume for future opportunities?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      question: "How do you match candidates with the right job openings?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];

  return (
    <section className="faq-section py-20 bg-gradient-to-br from-orange-100 via-orange-200 to-orange-500 dark:from-orange-600 dark:via-orange-300 dark:to-orange-400 transition-colors duration-500">
      <div className="container mx-auto max-w-5xl rounded-3xl shadow-2xl bg-orange-50/90 dark:bg-gray-900/90 backdrop-blur-lg p-6 sm:p-12 transition-all duration-300">
        <div className="px-8 md:px-10 lg:px-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-500 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Find answers to common questions about our process and services.
            </p>
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 dark:border-gray-700"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                  aria-expanded={activeIndex === index}
                >
                  <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {faq.question}
                  </h4>
                  <Image
                    src="https://cdn.prod.website-files.com/66277126b8030d4bdcebdaf0/6628ebdf4ed8cfea6eeca4b8_FAQ%20Icon%20(3).svg"
                    alt="FAQ Icon"
                    width={16}
                    height={16}
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700 dark:text-gray-400 pb-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h4 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              Still have questions?
            </h4>
            <p className="text-gray-700 dark:text-gray-400">
              We are here to help. Reach out anytime for more information.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
