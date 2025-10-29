"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Pricing: React.FC = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "$199.00 USD",
      description:
        "Perfect for small businesses starting their hiring journey with essential tools.",
      icon: "https://cdn.prod.website-files.com/66277a0e9303f0424cbe9fa6/6628b64d0ee7f6b3f9943b33_Basic%20plan%20icon.svg",
      features: [
        "Post up to 10 job listings per month",
        "Basic candidate matching",
        "Basic customer support",
        "Monthly analytics report",
        "Company profile page",
      ],
      link: "/product/basic-plan",
    },
    {
      title: "Pro Plan",
      price: "$289.00 USD",
      description:
        "Ideal for growing teams seeking advanced recruitment tools and analytics.",
      icon: "https://cdn.prod.website-files.com/66277a0e9303f0424cbe9fa6/6628b65e6bddc564036bdc85_Pro%20plan%20icon.svg",
      features: [
        "Post up to 25 job listings per month",
        "Advanced candidate matching",
        "Priority customer support",
        "Quarterly analytics report",
        "Enhanced company profile page",
      ],
      link: "/product/pro-plan",
    },
    {
      title: "Enterprise Plan",
      price: "$379.00 USD",
      description:
        "For large organizations needing powerful, scalable, and custom hiring solutions.",
      icon: "https://cdn.prod.website-files.com/66277a0e9303f0424cbe9fa6/6628b66ab064089882683872_Enterprise%20plan%20icon.svg",
      features: [
        "Unlimited job listings per month",
        "AI-powered candidate matching",
        "Dedicated account manager",
        "Custom analytics dashboard",
        "Access to premium talent pool",
      ],
      link: "/product/enterprise-plan",
    },
  ];

  return (
    <section className="pricing-section py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-orange-100 via-orange-200 to-orange-400 dark:from-orange-600 dark:via-neutral-700 dark:to-neutral-00">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Posting a job offer? <br />
            <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Discover our packages
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to grow your hiring strategy — built for
            scalability, insights, and smarter recruitment.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl shadow-lg border border-orange-100 p-8 bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Plan Header */}
              <div>
                <div className="flex flex-col items-center text-center mb-6">
                  <Image
                    src={plan.icon}
                    alt={plan.title}
                    width={80}
                    height={80}
                    className="mb-4"
                  />
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                    {plan.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-orange-600">
                    {plan.price}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 text-gray-700">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Image
                        src="https://cdn.prod.website-files.com/66277126b8030d4bdcebdaf0/6628be3a9360c7e6e7edf796_Feature%20icon.svg"
                        alt="Feature icon"
                        width={20}
                        height={20}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex justify-center gap-4">
                <Link
                  href={plan.link}
                  className="px-6 py-2 rounded-lg border border-orange-600 text-orange-700 font-medium hover:bg-orange-600 hover:text-white transition-colors"
                >
                  Discover
                </Link>
                <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-400 text-white font-medium hover:shadow-lg hover:scale-105 transition-transform duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
