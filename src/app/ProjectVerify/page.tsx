import Header from "@/components/core/Header/Header";
import React from "react";
import Footer from "@/components/core/Footer/Footer";
import Hero  from "@/components/core/ProjectVerify/Hero";
import AboutSection from "@/components/core/ProjectVerify/About";
import Content from "@/components/core/ProjectVerify/Content";
import ContactSection from "@/components/core/ProjectVerify/Contact";
import BlogSection from "@/components/core/ProjectVerify/Blog";
import MarqueeSection from "@/components/core/ProjectVerify/MarqueSEction";


function page() {
  return (
    <div className="">
      <div >
        <Header />
      </div>
      <div className="mb-40">
        <Hero />
      </div>
      <div className="">
        <AboutSection />
      </div>
      <div>
        <MarqueeSection />
      </div>    
      <div className="mb-20">
        <Content />
      </div>
      <div className="mb-40">
        <ContactSection />
      </div>
      <div className="mb-40">
        <BlogSection />
      </div>
      <div className="mb-40">
        <Footer />
      </div>
    </div>
  );
}

export default page;
