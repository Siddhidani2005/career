import Header from "@/components/core/Header/Header";
import React from "react";
import Footer from "@/components/core/Footer/Footer";
import  {CTA } from "@/components/core/Jobs/Cta";
import { HeroSection } from "@/components/core/Jobs/Hero";
import LogoSection from "@/components/core/Jobs/Logo";
import MainServicesSection from "@/components/core/Jobs/MainService";
import Testimonials from "@/components/core/Jobs/Testimonial";
import StatsSection from "@/components/core/Jobs/Stats";
import {ContactSection }  from "@/components/core/Jobs/Contact";
import { FaqSection } from "@/components/core/Jobs/Faq";
import {Pricing } from "@/components/core/Jobs/Pricing";
import JobOffersSection from "@/components/core/Jobs/Jobs";
import { TeamSection } from "@/components/core/Jobs/Team";
import PerksSection from "@/components/core/Jobs/Perk";

function page() {
  return (
    <div className="">
      <div >
        <Header />
      </div>
      <div className="">
        <HeroSection />
      </div>
      <div className="">
        <MainServicesSection />
      </div>
            <div>
        <LogoSection />
      </div>

           <div className="">
        <PerksSection />
      </div>
      <div className="">
        <JobOffersSection />
      </div>
      <div className="">
        <StatsSection />
        </div>
      <div className="">
        <CTA />
      </div>
      <div className="">
        <Pricing />
      </div>
      <div className="">
        <Testimonials />
      </div>
      <div className="">
        <TeamSection />
      </div>
            <div className=" ">
        <ContactSection />
      </div>

      <div className=" ">
        <FaqSection />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default page;
