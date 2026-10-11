"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
	ArrowRight,
	CheckCircle2,
	Clock3,
	PlayCircle,
	ShieldCheck,
	Users,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
	{
		icon: Clock3,
		value: "24/7",
		title: "Care when you need it",
		description: "Support for your healthcare needs",
	},
	{
		icon: Users,
		value: "10+",
		title: "Experienced professionals",
		description: "Dedicated to your well-being",
	},
	{
		icon: ShieldCheck,
		value: "Quality",
		title: "Care you can trust",
		description: "Personalized, patient-first support",
	},
];

export default function Hero() {
	const shouldReduceMotion = useReducedMotion();

	const reveal = (delay = 0) => ({
		initial: shouldReduceMotion ? false : { opacity: 0, y: 18 },
		animate: { opacity: 1, y: 0 },
		transition: {
			duration: shouldReduceMotion ? 0 : 0.9,
			delay: shouldReduceMotion ? 0 : delay,
			ease,
		},
	});

	return (
		<section
			id="home"
			className="relative overflow-hidden pt-8 pb-16 sm:pt-32 sm:pb-20"
		>
			{/* Soft background accent */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-40 -top-32 h-[440px] w-[440px] rounded-full bg-teal-100/40 blur-3xl"
			/>

			<div className="section-max container-px relative">
				<div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
					{/* Hero content */}
					<motion.div
						initial={
							shouldReduceMotion ? false : { opacity: 0, y: 18 }
						}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: shouldReduceMotion ? 0 : 0.9,
							ease,
						}}
						className="relative z-10"
					>
						{/* Eyebrow */}
						<motion.div
							initial={
								shouldReduceMotion
									? false
									: { opacity: 0, x: -8, y: 4 }
							}
							animate={{ opacity: 1, x: 0, y: 0 }}
							transition={{
								duration: shouldReduceMotion ? 0 : 0.8,
								delay: shouldReduceMotion ? 0 : 0.15,
								ease,
							}}
							className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-teal-100 bg-white/80 px-4 py-2 shadow-sm"
						>
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-50 motion-reduce:animate-none" />
								<span className="relative h-2 w-2 rounded-full bg-teal-500" />
							</span>

							<span className="text-xs font-semibold tracking-wide text-teal-700 sm:text-sm">
								Healthcare with a personal touch
							</span>
						</motion.div>

						{/* Headline */}
						<h1 className="max-w-xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]">
							Your Health,
							<br />
							Our{" "}
							<span className="relative inline-block text-teal-500">
								Heartfelt
								<motion.svg
									aria-hidden="true"
									viewBox="0 0 220 12"
									fill="none"
									className="absolute -bottom-2 left-0 w-full overflow-visible text-teal-500"
									initial={{
										opacity: shouldReduceMotion ? 1 : 0,
									}}
									animate={{ opacity: 1 }}
									transition={{
										duration: shouldReduceMotion ? 0 : 0.5,
										delay: shouldReduceMotion ? 0 : 0.55,
										ease,
									}}
								>
									<motion.path
										d="M3 8C57 2 152 1 217 6"
										stroke="currentColor"
										strokeWidth="4"
										strokeLinecap="round"
										initial={{
											pathLength: shouldReduceMotion
												? 1
												: 0,
										}}
										animate={{ pathLength: 1 }}
										transition={{
											duration: shouldReduceMotion
												? 0
												: 1.1,
											delay: shouldReduceMotion ? 0 : 0.6,
											ease: [0.65, 0, 0.35, 1],
										}}
									/>
								</motion.svg>
							</span>
							<br />
							Care.
						</h1>

						{/* Description */}
						<p className="mt-7 max-w-lg text-base leading-8 text-mist sm:text-lg">
							More than healthcare, it&apos;s care that
							understands you. Our dedicated professionals bring
							compassionate support closer to home, so you can
							focus on what matters most: feeling your best.
						</p>

						{/* CTAs */}
						<div className="mt-9 flex flex-wrap items-center gap-4">
							<motion.a
								href="#appointment"
								whileHover={
									shouldReduceMotion
										? undefined
										: {
												y: -2,
												boxShadow:
													"0 12px 26px -10px rgba(14,143,134,0.4)",
											}
								}
								whileTap={
									shouldReduceMotion
										? undefined
										: { scale: 0.985 }
								}
								transition={{ duration: 0.25, ease }}
								className="group inline-flex items-center justify-center gap-3 rounded-xl bg-teal-500 px-7 py-4 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-teal-600"
							>
								Let&apos;s Get You Started
								<ArrowRight
									size={17}
									className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
								/>
							</motion.a>

							<motion.a
								href="#services"
								whileHover={
									shouldReduceMotion ? undefined : { x: 2 }
								}
								whileTap={
									shouldReduceMotion
										? undefined
										: { scale: 0.985 }
								}
								transition={{ duration: 0.25, ease }}
								className="group inline-flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-ink transition-colors hover:text-teal-600"
							>
								<span className="flex h-9 w-9 items-center justify-center rounded-full border border-teal-100 bg-white text-teal-500 transition-colors group-hover:bg-teal-50">
									<PlayCircle size={20} strokeWidth={1.7} />
								</span>
								Explore Our Services
							</motion.a>
						</div>

						{/* Trust indicators */}
						<div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-200/80 pt-6">
							{[
								"Personalized care",
								"Qualified professionals",
								"Patient-first approach",
							].map((item) => (
								<div
									key={item}
									className="flex items-center gap-2 text-xs font-medium text-mist sm:text-sm"
								>
									<CheckCircle2
										size={15}
										strokeWidth={1.8}
										className="shrink-0 text-teal-500"
									/>
									{item}
								</div>
							))}
						</div>
					</motion.div>

					{/* Hero visual */}
					<motion.div
						initial={
							shouldReduceMotion
								? false
								: { opacity: 0, scale: 0.98, y: 10 }
						}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						transition={{
							duration: shouldReduceMotion ? 0 : 1.1,
							delay: shouldReduceMotion ? 0 : 0.12,
							ease,
						}}
						className="relative mx-auto w-full max-w-[460px] lg:ml-auto lg:mr-0"
					>
						{/* Offset outline */}
						<div
							aria-hidden="true"
							className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-teal-200/80 sm:-right-5 sm:-top-5 sm:rounded-[2.25rem]"
						/>

						{/* Main image */}
						<div className="group relative aspect-[4/4.8] overflow-hidden rounded-[1.75rem] bg-teal-100 shadow-card sm:rounded-[2rem]">
							<Image
								src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=85&w=1000&auto=format&fit=crop"
								alt="Healthcare professional in a clinical setting"
								fill
								priority
								sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 460px"
								className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] motion-reduce:transform-none"
							/>

							<div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/5 to-transparent" />

							{/* Image caption */}
							<div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
								<span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
									<ShieldCheck size={14} />
									Compassionate care
								</span>

								<h2 className="mt-4 max-w-xs font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
									Better care,
									<br />
									closer to home.
								</h2>

								<p className="mt-2 max-w-xs text-sm leading-6 text-white/85">
									Your comfort and well-being deserve personal
									attention.
								</p>
							</div>
						</div>

						{/* Floating availability card */}
						<motion.div
							animate={
								shouldReduceMotion
									? undefined
									: { y: [0, -4, 0] }
							}
							transition={{
								duration: 5,
								repeat: Infinity,
								repeatType: "loop",
								ease: "easeInOut",
							}}
							className="absolute -left-4 top-10 z-20 flex items-center gap-3 rounded-2xl border border-white bg-white px-4 py-3.5 shadow-card sm:-left-10 sm:top-14 sm:px-5 sm:py-4"
						>
							<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-500">
								<Clock3 size={22} strokeWidth={1.7} />
							</div>

							<div>
								<p className="text-sm font-bold text-ink">
									Here for you
								</p>
								<p className="mt-1 text-xs text-mist">
									Care when you need it
								</p>
							</div>

							<span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-50" />
						</motion.div>
					</motion.div>
				</div>

				{/* Stats strip */}
				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{
						duration: shouldReduceMotion ? 0 : 0.85,
						ease,
					}}
					className="relative mt-24 overflow-hidden rounded-2xl bg-teal-500 px-6 py-8 text-white shadow-soft sm:mt-28 sm:px-10 sm:py-9"
				>
					<div
						aria-hidden="true"
						className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border-[35px] border-white/[0.07]"
					/>

					<div className="relative grid gap-8 sm:grid-cols-3 sm:gap-0">
						{stats.map((stat, index) => {
							const Icon = stat.icon;

							return (
								<motion.div
									key={stat.title}
									initial={
										shouldReduceMotion
											? false
											: { opacity: 0, y: 8 }
									}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: shouldReduceMotion ? 0 : 0.65,
										delay: shouldReduceMotion
											? 0
											: index * 0.12,
										ease,
									}}
									className={`flex items-center gap-4 ${
										index > 0
											? "sm:border-l sm:border-white/20 sm:pl-6 lg:pl-10"
											: ""
									} ${
										index < stats.length - 1
											? "sm:pr-5 lg:pr-8"
											: ""
									}`}
								>
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition-colors duration-300 hover:bg-white/20">
										<Icon size={22} strokeWidth={1.7} />
									</div>

									<div>
										<p className="font-display text-xl font-bold sm:text-2xl">
											{stat.value}
										</p>

										<p className="mt-1 text-sm font-semibold">
											{stat.title}
										</p>

										<p className="mt-1 text-xs leading-5 text-teal-50/80">
											{stat.description}
										</p>
									</div>
								</motion.div>
							);
						})}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
