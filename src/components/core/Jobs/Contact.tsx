"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ContactSection: React.FC = () => {
  return (
    <section className="contact-section py-16 px-6 sm:px-10 md:px-16 lg:px-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900 dark:text-white">
            A specific question? Contact our team
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Text */}
          <div className="text-left">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              We’d love to hear from you
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Fill out the form and our team will get back to you as soon as
              possible.
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>📧 Email: support@example.com</li>
              <li>📞 Phone: +91 12345 67890</li>
              <li>📍 Address: 123 Business St, Udaipur, India</li>
            </ul>
          </div>

          {/* Form */}
          <form className="grid gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 font-medium text-gray-800 dark:text-gray-200"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="James"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 font-medium text-gray-800 dark:text-gray-200"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Dean"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-800 dark:text-gray-200"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@mail.com"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 font-medium text-gray-800 dark:text-gray-200"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(123) 456 78 90"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-gray-800 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="How can we help you?"
                rows={5}
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Support Contacts */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Contact our team directly
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "General Support",
                email: "general@support.com",
                icon: "https://cdn.prod.website-files.com/66277126b8030d4bdcebdaf0/6628ea2bf7855cecec0ca1a5_icon%20general%20support.svg",
              },
              {
                title: "Talent Support",
                email: "talent@support.com",
                icon: "https://cdn.prod.website-files.com/66277126b8030d4bdcebdaf0/6628ea2733b74d12877321a6_Icon%20talent%20support.svg",
              },
              {
                title: "Company Support",
                email: "company@support.com",
                icon: "https://cdn.prod.website-files.com/66277126b8030d4bdcebdaf0/6628ea26500b9ff9eb4c70ec_icon%20company%20support.svg",
              },
            ].map((item, i) => (
              <Link
                key={i}
                href="https://www.webflow.com"
                target="_blank"
                className="flex items-center gap-4 justify-center border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-md hover:dark:shadow-gray-700 transition-all duration-300"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-orange-600">{item.email}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
