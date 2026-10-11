"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
	Building2,
	HandCoins,
	UserRound,
	ArrowRight,
	HeartPulse,
} from "lucide-react";
import Reveal from "./Reveal";

const benefits = [
	{
		title: "Modern Clinic",
		icon: Building2,
		copy: "A welcoming, modern environment designed to make every visit more comfortable and convenient.",
	},
	{
		title: "Affordable Consultation",
		icon: HandCoins,
		copy: "Access professional medical guidance with a focus on transparent and affordable healthcare.",
	},
	{
		title: "Professional Treatment",
		icon: UserRound,
		copy: "Receive attentive, patient-focused care from specialists dedicated to your well-being.",
	},
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Benefits() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section
			id="benefits"
			className="relative overflow-hidden bg-teal-50/60 py-16 sm:py-20 lg:py-24"
		>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-teal-200/20 blur-3xl"
			/>

			<div className="section-max container-px relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
				{/* Image composition */}
				<Reveal className="relative hidden h-[380px] sm:block sm:h-[440px] lg:h-[480px]">
					<motion.div
						initial={
							shouldReduceMotion
								? false
								: { opacity: 0, scale: 0.96, y: 16 }
						}
						whileInView={{ opacity: 1, scale: 1, y: 0 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{
							duration: shouldReduceMotion ? 0 : 0.8,
							ease,
						}}
						className="absolute left-0 top-0 h-[78%] w-[76%] overflow-hidden rounded-3xl shadow-soft"
					>
						<Image
							src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=1000&auto=format&fit=crop"
							alt="Medical professionals working in a modern operating room"
							fill
							sizes="(min-width: 1024px) 36vw, 60vw"
							className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
					</motion.div>

					<motion.div
						initial={
							shouldReduceMotion
								? false
								: { opacity: 0, y: 24, scale: 0.96 }
						}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{
							duration: shouldReduceMotion ? 0 : 0.75,
							delay: shouldReduceMotion ? 0 : 0.15,
							ease,
						}}
						className="absolute bottom-0 right-0 h-[43%] w-[47%] overflow-hidden rounded-3xl border-4 border-white shadow-card"
					>
						<Image
							src="https://images.unsplash.com/photo-1580281658626-ee379f3cce93?q=80&w=800&auto=format&fit=crop"
							alt="Healthcare professionals discussing patient care"
							fill
							sizes="(min-width: 1024px) 22vw, 40vw"
							className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
						/>
					</motion.div>

					{/* Floating information card */}
					<motion.div
						animate={
							shouldReduceMotion ? undefined : { y: [0, -5, 0] }
						}
						transition={{
							duration: 4.5,
							repeat: shouldReduceMotion ? 0 : Infinity,
							ease: "easeInOut",
						}}
						className="absolute bottom-8 left-3 z-10 w-48 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-card backdrop-blur-sm sm:left-5 sm:w-52"
					>
						<div className="flex items-center gap-3">
							<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
								<HeartPulse size={21} strokeWidth={1.7} />
							</span>
							<div>
								<p className="text-sm font-bold text-ink">
									Your Health Matters
								</p>
								<p className="mt-0.5 text-xs text-mist">
									Care with confidence
								</p>
							</div>
						</div>

						<a
							href="#appointment"
							className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
						>
							Book Consultation
							<ArrowRight size={14} />
						</a>
					</motion.div>

					<div
						aria-hidden="true"
						className="absolute right-[7%] top-[6%] -z-10 h-24 w-24 rounded-full border border-teal-200/70"
					/>
				</Reveal>

				{/* Benefits content */}
				<div className="min-w-0">
					<Reveal>
						<span className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-4 py-2 text-xs font-semibold tracking-wide text-teal-700 shadow-sm">
							<HeartPulse size={15} />
							Why Choose Medicare
						</span>

						<h2 className="max-w-xl font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-[2.65rem]">
							Better Healthcare,
							<span className="text-teal-600">
								{" "}
								Built Around You
							</span>
						</h2>

						<p className="mt-5 max-w-xl text-sm leading-7 text-mist sm:text-base">
							We make your healthcare journey simpler with a
							welcoming environment, accessible consultations, and
							professional, patient-focused treatment.
						</p>
					</Reveal>

					<div className="mt-9 flex flex-col gap-7 sm:mt-10 sm:gap-8">
						{benefits.map((benefit, index) => {
							const Icon = benefit.icon;

							return (
								<Reveal
									key={benefit.title}
									delay={index * 0.12}
									className="group flex gap-4 sm:gap-5"
								>
									<motion.div
										whileHover={
											shouldReduceMotion
												? undefined
												: { y: -3 }
										}
										transition={{ duration: 0.25, ease }}
										className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-teal-100/80 bg-white text-teal-600 shadow-card transition-colors duration-300 group-hover:bg-teal-500 group-hover:text-white sm:h-14 sm:w-14"
									>
										<Icon size={22} strokeWidth={1.7} />
									</motion.div>

									<div className="pt-0.5">
										<h3 className="font-display text-base font-bold text-ink sm:text-lg">
											{benefit.title}
										</h3>

										<p className="mt-2 max-w-lg text-sm leading-6 text-mist sm:leading-7">
											{benefit.copy}
										</p>
									</div>
								</Reveal>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
