"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-orange-200 to-orange-100 dark:from-orange-900 dark:to-orange-950  rounded-l-full py-16 lg:py-24 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl  text-gray-900 dark:text-gray-100 leading-snug">
              Empowering businesses with tailored strategies, innovative insights,
              and expert guidance to achieve sustainable growth, efficiency, and
              profitability{" "}
              <span className="text-gray-400 dark:text-orange-500">worldwide</span>
            </h2>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Business team in a meeting"
              width={600}
              height={400}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-10 grid grid-cols-2 md:grid-cols-4 text-center gap-8">
          <div>
            <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-gray-100">
              200k
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Projects completed
            </p>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-gray-100">
              125+
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Awards winning
            </p>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-gray-100">
              99%
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Client satisfaction
            </p>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-gray-100">
              25+
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Years of experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
