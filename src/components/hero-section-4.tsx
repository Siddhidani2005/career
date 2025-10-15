'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export function HeroSection() {
	return (
		<main className="overflow-x-hidden">
			{/* ===== Hero Section ===== */}
			<section>
				<div className="pb-20 pt-8 md:pb-15 lg:pb-30 lg:pt-10 bg-gradient-to-r from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900">
					<div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
						<div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
							<h1 className="mt-8 max-w-xl text-3xl font-medium md:text-4
							xl lg:mt-16 xl:text-4xl bg-gradient-to-r from-orange-600 to-orange-200 text-black dark:text-white rounded-full px-4 py-1 inline-block">
								Corporate Training
							</h1>
							<p className="mt-8 max-w-2xl text-pretty text-lg">
								Transform your workforce into high-performing teams with tailored learning solutions designed for measurable impact.Our programs are built to enhance leadership, improve communication, and strengthen collaboration — turning potential into performance.                          </p>

							<div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
								<Button asChild size="lg" className="px-5 text-base">
									<Link href="#link">
										<span className="text-nowrap">Start Building</span>
									</Link>
								</Button>
								<Button asChild size="lg" variant="ghost" className="px-5 text-base">
									<Link href="#link">
										<span className="text-nowrap">Request a demo</span>
									</Link>
								</Button>
							</div>
						</div>

						<img
							className="pointer-events-none order-first ml-auto h-56 w-full object-cover sm:h-96 lg:absolute lg:inset-0 lg:left-320 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:order-last lg:h-max lg:w-2/3 lg:object-contain"
							src="/images/Corporate/home.png"
							alt="Corporate Training Illustration"
							height="5000"
							width="1000"
						/>
					</div>
				</div>
			</section>

			{/* ===== Logo Carousel Section ===== */}
			<section className="pt-10 pb-4 md:pb-8">
				<div className="group relative m-auto max-w-6xl px-6">
					<div className="flex flex-col items-center md:flex-row">
						<div className="md:max-w-44 md:border-r md:pr-6">
							<p className="text-end text-sm">Powering the best teams</p>
						</div>

						<div className="relative py-6 md:w-[calc(100%-11rem)]">
							<InfiniteSlider duration={40} gap={112}>
								{[
									'https://html.tailus.io/blocks/customers/nvidia.svg',
									'https://html.tailus.io/blocks/customers/column.svg',
									'https://html.tailus.io/blocks/customers/github.svg',
									'https://html.tailus.io/blocks/customers/nike.svg',
									'https://html.tailus.io/blocks/customers/lemonsqueezy.svg',
									'https://html.tailus.io/blocks/customers/laravel.svg',
									'https://html.tailus.io/blocks/customers/lilly.svg',
									'https://html.tailus.io/blocks/customers/openai.svg',
								].map((logo, i) => (
									<div key={i} className="flex">
										<img
											className="mx-auto h-5 w-fit dark:invert"
											src={logo}
											alt={`Brand logo ${i + 1}`}
											height="20"
											width="auto"
										/>
									</div>
								))}
							</InfiniteSlider>

							{/* Gradient edges */}
							<div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
							<div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>

							<ProgressiveBlur
								className="pointer-events-none absolute left-0 top-0 h-full w-20"
								direction="left"
								blurIntensity={1}
							/>
							<ProgressiveBlur
								className="pointer-events-none absolute right-0 top-0 h-full w-20"
								direction="right"
								blurIntensity={1}
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
