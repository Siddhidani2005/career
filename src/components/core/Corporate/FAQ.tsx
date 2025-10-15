'use client';

import * as React from 'react';
import { HelpCircle, MessageCircle, ChevronDown } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const CustomAccordion = AccordionPrimitive.Root;

const CustomAccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn('', className)}
		{...props}
	/>
));
CustomAccordionItem.displayName = 'CustomAccordionItem';

const CustomAccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				'group flex flex-1 items-center justify-between gap-4 rounded-2xl p-4 text-left',
				'bg-[#ffff] dark:bg-zinc-800 dark:text-white transition-all hover:bg-gray-50/70 hover:shadow-md',
				'dark:hover:bg-zinc-700/60 focus-visible:outline-none focus-visible:ring-2',
				'dark:data-[state=open]:bg-zinc-700 data-[state=open]:shadow-md',
				className
			)}
			{...props}
		>
			<div className="flex items-center gap-4">
				<HelpCircle className="h-5 w-5 text-gray-600 dark:text-white" />
				<span className="text-lg font-medium dark:text-zinc-50 text-zinc-700 tracking-wide">
					{children}
				</span>
			</div>
			<div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 dark:bg-zinc-600/70 transition-transform group-hover:scale-105 group-data-[state=open]:rotate-180">
				<ChevronDown className="h-4 w-4 text-gray-800 dark:text-white" />
			</div>
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = 'CustomAccordionTrigger';

const CustomAccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className={cn(
			'overflow-hidden dark:text-white',
			'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-2',
			className
		)}
		{...props}
	>
		<div className="mt-4 ml-14">
			<div className="flex items-start gap-4 rounded-2xl bg-[#ffff] dark:bg-zinc-700 p-4 shadow-md transition-all">
				<span className="flex-1 text-md leading-relaxed">{children}</span>
				<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-300/70 dark:bg-zinc-600 transition-transform hover:scale-105">
					<MessageCircle className="h-5 w-5 text-gray-700 dark:text-white" />
				</div>
			</div>
		</div>
	</AccordionPrimitive.Content>
));
CustomAccordionContent.displayName = 'CustomAccordionContent';

export {
	CustomAccordion,
	CustomAccordionItem,
	CustomAccordionTrigger,
	CustomAccordionContent,
};

const faqs = [
	{
		question: 'What types of corporate training programs do you offer?',
		answer:
			'We offer customized corporate training programs including leadership development, communication skills, team building, sales excellence, customer service, and digital transformation workshops.',
	},
	{
		question: 'Can the training be tailored to our company’s specific needs?',
		answer:
			'Yes. All our programs are fully customizable. We work closely with your HR and management teams to align the content, case studies, and exercises with your organizational goals and culture.',
	},
	{
		question: 'Do you offer both in-person and online training sessions?',
		answer:
			'Absolutely. We provide flexible delivery options including on-site training, live virtual sessions, and blended learning models to suit your team’s schedule and preferences.',
	},
	{
		question: 'How do you measure the effectiveness of your training programs?',
		answer:
			'We use pre- and post-training assessments, participant feedback, and performance metrics to evaluate learning outcomes and ensure measurable results for your organization.',
	},
	{
		question: 'What is the typical duration of a training program?',
		answer:
			'Program duration depends on the topic and depth of content. It can range from half-day workshops to multi-week development programs. We can adjust the schedule to fit your availability.',
	},
];    
export const FAQ = () => {
	return (
		<main className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
			<div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				{/* Left: FAQ Accordion */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					viewport={{ once: true }}
				>

					<h2 className="mb-8 text-center text-4xl font-bold dark:text-white ">FAQ<span className=" text-orange-600">s</span></h2>
					<CustomAccordion
						type="single"
						collapsible
						defaultValue="item-0"
						className="space-y-6"
					>
						{faqs.map((faq, index) => (
							<CustomAccordionItem key={index} value={`item-${index}`}>
								<CustomAccordionTrigger>{faq.question}</CustomAccordionTrigger>
								<CustomAccordionContent>{faq.answer}</CustomAccordionContent>
							</CustomAccordionItem>
						))}
					</CustomAccordion>
				</motion.div>

				{/* Right: Image with animation */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
					viewport={{ once: true }}
					className="flex justify-center md:justify-end"
				>
					<img
						src="/images/Corporate/faq.png"
						alt="FAQ Illustration"
						className="w-full max-w-md h-auto  "
					/>
				</motion.div>
			</div>
		</main>
	);
};