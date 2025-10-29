"use client";

import Image from "next/image";
import React from "react";

interface IconCardProps {
  title: string;
  description: string;
  iconSrc: string;
}

const IconCard: React.FC<IconCardProps> = ({ title, description, iconSrc }) => {
  return (
    
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <Image
          src={iconSrc}
          alt={title}
          width={48}
          height={48}
          className="text-teal-500"
        />
      </div>

      {/* Divider line */}
      <div className="border-t border-gray-200 my-3"></div>

      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const Content: React.FC = () => {
  const items: IconCardProps[] = [
    {
      title: "Automated Project Screening",
      description:
        "Verify student and academic projects instantly using our smart validation algorithms.",
      iconSrc:
        "https://cdn.prod.website-files.com/678f23fa4acbbeb379b4879f/67c53e11acbe4b9e1339e2a6_Icon-01-secondary.svg",
    },
    {
      title: "Plagiarism & Originality Check",
      description:
        "Ensure each submission is unique and complies with originality standards using advanced AI detection.",
      iconSrc:
        "https://cdn.prod.website-files.com/678f23fa4acbbeb379b4879f/67c53e3bcd96a68be602b0cc_Icon-02-secondary.svg",
    },
    {
      title: "Faculty Review Dashboard",
      description:
        "Faculty members can review, approve, or reject projects with real-time progress tracking.",
      iconSrc:
        "https://cdn.prod.website-files.com/678f23fa4acbbeb379b4879f/67c53e4ad5c48649fab09e67_Icon-03-secondary.svg",
    },
    {
      title: "Secure Document Verification",
      description:
        "Validate uploaded reports, certificates, and approvals securely with encrypted document storage.",
      iconSrc:
        "https://cdn.prod.website-files.com/678f23fa4acbbeb379b4879f/67c53f2cb76d07e89e5c0b88_Icon-04-secondary.svg",
    },
  ];

  return (
    <section className=" py-20  bg-gradient-to-r from-yellow-100 to-orange-200 dark:from-yellow-800 dark:to-orange-900 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <IconCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Content;
