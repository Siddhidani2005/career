"use client";

import Image from "next/image";
import React from "react";

const ContactSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side — Why Choose Us + Image */}
        <div className="relative space-y-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-600"></div>
            <p className="text-sm uppercase tracking-wide text-orange-600 font-semibold">
              Why Choose Us
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Why Choose Us for{" "}
            <span className="text-orange-600">Project Verification</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 max-w-xs mt-4">
            We help to get student projects verified quickly,
            accurately, and hassle-free. With 500+ successful verifications,
            trusted by top colleges, we ensure your work meets academic standards.
          </p>

          <a
            href="/about"
            className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:underline mt-4"
          >
            Learn More
          </a>

          <div className="absolute -right-25 top-0 lg:top-auto lg:-bottom-15 opacity-100">
            <Image
              src="/images/contact.png"
              alt="Project Verification Consultant"
              width={500}
              height={500}
              priority
              className="drop-shadow-xl animate-fade-in"
            />
          </div>
        </div>

        {/* Right Side — Contact Form */}
        <div className="bg-white dark:bg-neutral-900 shadow-lg rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Get Free Project Consultation
          </h3>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <select className="w-full p-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none">
              <option value="">Select Service</option>
              <option>Project Report Verification</option>
              <option>Code Review & Validation</option>
              <option>Final Year Submission Help</option>
            </select>

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
