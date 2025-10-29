"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Slide {
  id: number;
  tag: string;
  title: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    tag: "Accurate Validation",
    title: "Empowering organizations through precise project verification",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1920&q=80", // engineers verifying project
  },
  {
    id: 2,
    tag: "Data-Driven Auditing",
    title: "Ensuring project integrity with transparent verification processes",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1920&q=80", // audit/verification desk
  },
  {
    id: 3,
    tag: "Compliance Assurance",
    title: "Verifying every milestone meets the highest industry standards",
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6e171b33?auto=format&fit=crop&w=1920&q=80", // compliance check image
  },
  {
    id: 4,
    tag: "Quality Confidence",
    title: "Delivering verified outcomes through trusted methodologies",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80", // teamwork QA
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <div className="text-orange-600 text-sm uppercase tracking-widest mb-4">
          {slides[current].tag}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl mb-6 leading-tight">
          {slides[current].title}
        </h1>
        <a
          href="/contact"
          className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-orange-400 transition"
        >
          Verify your project
          <Image
            src="https://cdn.prod.website-files.com/6667e1295d7fb05ba4fa34fe/68b93d462ce33fb0f49791e0_Button%20arrow%20black%20icon.svg"
            alt="Arrow"
            width={14}
            height={11}
            className="invert"
          />
        </a>
      </div>

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/40 hover:bg-black/60 rounded-full"
        aria-label="Previous slide"
      >
        <Image
          src="https://cdn.prod.website-files.com/6667e1295d7fb05ba4fa34fe/68d3b009b765c65d2101cbe3_Arrow%20icon%20white.svg"
          alt="Previous"
          width={20}
          height={20}
        />
      </button>

      <button
        onClick={handleNext}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/40 hover:bg-black/60 rounded-full"
        aria-label="Next slide"
      >
        <Image
          src="https://cdn.prod.website-files.com/6667e1295d7fb05ba4fa34fe/68d3b009b765c65d2101cbe3_Arrow%20icon%20white.svg"
          alt="Next"
          width={20}
          height={20}
          className="rotate-180"
        />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-orange-400" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
