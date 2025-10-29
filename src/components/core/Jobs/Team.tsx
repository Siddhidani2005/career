"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  linkedin: string;
  facebook: string;
  mail: string;
}

const team: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "Marketing Specialist",
    image:
      "https://cdn.prod.website-files.com/66277126b8030d4bdcebdaf0/662771659f5005c13969af25_Better%20talent%20webflow%20job%20portal%20cms%20team%206.jpeg",
    description:
      "Creative strategist focused on brand storytelling and digital engagement.",
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    mail: "https://www.whatsapp.com",
  },
  {
    name: "Michael Lee",
    role: "UX Designer",
    image:
      "https://cdn.prod.website-files.com/66277126b8030d4bdcebdaf0/662771669f5005c13969af8d_Better%20talent%20webflow%20job%20portal%20cms%20team%201.jpeg",
    description:
      "Passionate about crafting user experiences that balance aesthetics and usability.",
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    mail: "https://www.whatsapp.com",
  },
  {
    name: "Emily Clark",
    role: "Software Engineer",
    image:
      "https://cdn.prod.website-files.com/66277126b8030d4bdcebdaf0/662771659f5005c13969aee6_Better%20talent%20webflow%20job%20portal%20cms%20team%203.jpeg",
    description:
      "Full-stack developer specializing in modern scalable web applications.",
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    mail: "https://www.whatsapp.com",
  },
  {
    name: "David Anderson",
    role: "Data Analyst",
    image:
      "https://cdn.prod.website-files.com/66277126b8030d4bdcebdaf0/662771669f5005c13969af76_Better%20talent%20webflow%20job%20portal%20cms%20team%204.jpeg",
    description:
      "Data-driven problem solver turning insights into actionable strategies.",
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    mail: "https://www.whatsapp.com",
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-100 via-orange-200 to-orange-400 dark:from-orange-600 dark:via-neutral-700 dark:to-neutral-00 transition-colors duration-500">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 text-gray-500 dark:text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Meet Our Exceptional Team
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Driven by innovation, collaboration, and a passion for excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/90 dark:bg-gray-900/80 backdrop-blur-lg p-6 text-center shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="mb-4 overflow-hidden rounded-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="rounded-xl object-cover w-full h-64 transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-orange-600 dark:text-orange-400 mb-2 font-medium">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {member.description}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                <Link href={member.linkedin} target="_blank">
                  <Image
                    src="https://cdn.prod.website-files.com/66277126b8030d4bdcebdaf0/6628f7a4f10a7837ea8758e3_Icon%20linkedin%20link.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    className="hover:scale-125 transition-transform"
                  />
                </Link>
                <Link href={member.facebook} target="_blank">
                  <Image
                    src="https://cdn.prod.website-files.com/66277126b8030d4bdcebdaf0/6628f7a42038a5f4fad62e8c_Icon%20facebook%20link.svg"
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="hover:scale-125 transition-transform"
                  />
                </Link>
                <Link href={member.mail} target="_blank">
                  <Image
                    src="https://cdn.prod.website-files.com/66277126b8030d4bdcebdaf0/6628f7a4cd558be62a663a6a_Icon%20mail%20link.svg"
                    alt="Mail"
                    width={20}
                    height={20}
                    className="hover:scale-125 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
