import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
export function Features() {
  const specializations = [
    {
      quote:
        "Our Leadership & Management programs develop confident, effective leaders who can inspire teams, drive strategic initiatives, and create a culture of accountability.",
      name: "Leadership & Management",
      designation: "Program Focus",
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Communication & Collaboration training strengthens teamwork, fosters cross-functional effectiveness, and equips employees with the skills to resolve conflicts constructively.",
      name: "Communication & Collaboration",
      designation: "Program Focus",
      src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Sales & Customer Service programs help teams drive business growth with proven communication strategies, negotiation techniques, and customer-centric approaches.",
      name: "Sales & Customer Service",
      designation: "Program Focus",
      src: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Change Management training equips teams to adapt to organizational transformations, embrace new processes, and lead others through transitions effectively.",
      name: "Change Management",
      designation: "Program Focus",
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=3464&auto=format&fit=crop",
    },
    {
      quote:
        "Workplace Productivity programs boost focus, efficiency, and accountability by teaching time management, prioritization, and effective workflow strategies.",
      name: "Workplace Productivity",
      designation: "Program Focus",
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2592&auto=format&fit=crop",
    },
    {
      quote:
        "Diversity, Equity & Inclusion (DEI) training builds inclusive cultures, fosters psychological safety, and empowers organizations to leverage the strengths of a diverse workforce.",
      name: "Diversity, Equity & Inclusion (DEI)",
      designation: "Program Focus",
      src: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2592&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-neutral-200 to-neutral-300 dark:from-neutral-900 dark:to-neutral-950">
      <div className="container mx-auto px-6 lg:px-12 text-center mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-2">Our Specialization</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-10">
          We design and deliver targeted corporate training programs to strengthen
          teams, improve performance, and drive measurable results.
        </p>
      </div>
      <AnimatedTestimonials testimonials={specializations} />
    </section>
  );
}

export default Features;
