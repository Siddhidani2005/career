import Header from "@/components/core/Header/Header";
import React from "react";
import Footer from "@/components/core/Footer/Footer";
import { FAQ } from "@/components/core/Corporate/FAQ";
import Contact from "@/components/core/Corporate/Contact";
import { StaggerTestimonials } from "@/components/stagger-testimonials";
import { CTA } from "@/components/core/Corporate/CTA";
import { Pricing } from "@/components/ui/pricing-cards";
import Features from "@/components/core/Corporate/Features";
import HowItWorks from "@/components/core/Corporate/Steps";
import { HeroSection } from "@/components/hero-section-4";
import Banner from "@/components/core/Corporate/Banner";
import FeaturesSection from "@/components/core/Corporate/Features";

function page() {
  return (
    <div className="">
      <div >
        <Header />
      </div>
      <div className="mb-40">
        <HeroSection />
      </div>
      <div className="mb-40">
        <Banner />
      </div>
      <div className="mb-40">
        <FeaturesSection />
      </div>
      <div className="mb-40">
        <HowItWorks />
      </div>
      <div className="mb-40">
        <CTA />
      </div>
      <div className="mb-40 ">
        <StaggerTestimonials />
      </div>
      <div className="mb-40">
        <Pricing />
      </div>
      <div className="mb-40">
        <FAQ />
      </div>
      <div className="mb-40">
        <Contact />
      </div>
      <div className="mb-40">
        <Footer />
      </div>
    </div>
  );
}

export default page;
