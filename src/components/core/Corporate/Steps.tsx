"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Settings,
  Users,
  RefreshCw,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Consultation & Needs Analysis",
    description:
      "We begin with a detailed consultation to understand your goals, company culture, and development needs—ensuring our approach aligns perfectly with your business objectives.",
  },
  {
    icon: Settings,
    title: "Customized Training Design",
    description:
      "Our team crafts a tailored training blueprint, combining workshops, simulations, and coaching to create a high-impact learning journey.",
  },
  {
    icon: Users,
    title: "Interactive Workshops",
    description:
      "Engage your team with hands-on exercises, case studies, and real-world scenarios designed to enhance skill application and retention.",
  },
  {
    icon: RefreshCw,
    title: "Follow-up Coaching",
    description:
      "We reinforce learning through personalized follow-ups and mentorship—ensuring new habits and skills stick for long-term growth.",
  },
  {
    icon: BarChart3,
    title: "Performance Reports",
    description:
      "You’ll receive data-driven insights and detailed reports tracking participation, progress, and measurable ROI for your organization.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-15 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 overflow-hidden">
      {/* Decorative Background Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Our structured 5-step process ensures every corporate training engagement delivers lasting transformation and measurable impact.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-16 md:gap-8">
          {/* Animated connecting line (desktop only) */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="hidden md:block absolute top-12 left-0 h-[2px] bg-gradient-to-r from-primary/40 via-orange-400/40 to-primary/40 rounded-full"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center md:items-start text-center md:text-left relative max-w-xs"
              >
                {/* Floating Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-primary to-orange-500 text-white shadow-lg mb-6 relative"
                >
                  <Icon className="w-8 h-8" />
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 rounded-full border border-white/20 animate-pulse"
                  />
                </motion.div>

                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>

                {/* Connecting Dot for Mobile */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden w-[2px] h-10 bg-gradient-to-b from-primary/30 to-blue-400/30 my-6" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
