"use client";

import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager, NovaTech",
      image: "/images/client1.jpg",
      feedback:
        "The team was fantastic to work with! They delivered exactly what we envisioned for our brand. Highly recommended.",
    },
    {
      name: "Michael Lee",
      role: "Founder, PixelWorks",
      image: "/images/client2.jpg",
      feedback:
        "Excellent design sense and quick turnaround. We’ll definitely be collaborating again on future projects.",
    },
    {
      name: "Priya Sharma",
      role: "Product Designer, Innovent",
      image: "/images/client3.jpg",
      feedback:
        "Our website redesign came out better than expected. The team’s creativity and professionalism were top-notch.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white-600">
            Testimonials
          </h2>
          <h3 className="mt-2 text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h3>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We’re proud to have partnered with businesses to bring their ideas
            to life. Here’s what they had to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-white-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 2l2.39 6.955h7.305l-5.915 4.29L17.775 22 12 17.77 6.225 22l2.295-8.755L2.605 8.955h7.305L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Feedback Text */}
              <p className="text-gray-700 italic mb-6">
                “{testimonial.feedback}”
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white-500/30"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
            Join Our Happy Clients
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
