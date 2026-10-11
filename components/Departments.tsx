"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
	Brain,
	HeartPulse,
	Scissors,
	Microscope,
	Smile,
	Eye,
	Baby,
	Bone,
	ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

const depts = [
	{ name: "Neurology", icon: Brain },
	{ name: "Cardiology", icon: HeartPulse },
	{ name: "Surgery", icon: Scissors },
	{ name: "Gastroenterology", icon: Microscope },
	{ name: "Dentistry", icon: Smile },
	{ name: "Ophthalmology", icon: Eye },
	{ name: "Pediatrics", icon: Baby },
	{ name: "Orthopaedics", icon: Bone },
];

const copy =
	"Personalized care and professional support focused on your well-being.";

export default function Departments() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section
			id="services"
			className="relative overflow-hidden bg-teal-500 py-16 sm:py-20 lg:py-24"
		>
			{/* Decorative background accents */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-32 -top-36 h-96 w-96 rounded-full border-[45px] border-white/[0.06]"
			/>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-teal-400/30 blur-3xl"
			/>

			<div className="section-max container-px relative">
				{/* Section heading */}
				<Reveal>
					<div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
						<div className="max-w-xl">
							<span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold tracking-wide text-teal-50 sm:text-sm">
								<span className="h-2 w-2 rounded-full bg-white" />
								Our Medical Specialties
							</span>

							<h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
								Our Departments
							</h2>
						</div>

						<p className="max-w-sm text-sm leading-7 text-teal-50/85 sm:text-base sm:leading-8">
							Explore our medical specialties and find
							professional care tailored to your health needs.
						</p>
					</div>
				</Reveal>

				{/* Department cards */}
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
					{depts.map((dept, index) => {
						const Icon = dept.icon;

						return (
							<Reveal
								key={dept.name}
								delay={
									shouldReduceMotion ? 0 : (index % 4) * 0.08
								}
							>
								<motion.article
									whileHover={
										shouldReduceMotion
											? undefined
											: {
													y: -5,
													transition: {
														duration: 0.3,
														ease,
													},
												}
									}
									className="group relative flex h-full min-h-[230px] flex-col overflow-hidden rounded-2xl border border-white/15 bg-teal-600/50 p-5 shadow-sm backdrop-blur-sm transition-[background-color,border-color,box-shadow] duration-300 hover:border-white/30 hover:bg-teal-600/80 hover:shadow-lg sm:min-h-[250px] sm:rounded-[1.5rem] sm:p-6"
								>
									{/* Decorative corner accent */}
									<div
										aria-hidden="true"
										className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full border-[16px] border-white/[0.06] transition-transform duration-700 ease-out group-hover:scale-125 motion-reduce:transform-none"
									/>

									{/* Icon */}
									<div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-colors duration-300 group-hover:border-white/25 group-hover:bg-white/20">
										<Icon size={22} strokeWidth={1.7} />
									</div>

									{/* Content */}
									<h3 className="relative mt-5 font-display text-base font-bold leading-snug text-white sm:text-lg">
										{dept.name}
									</h3>

									<p className="mt-2 text-xs leading-6 text-teal-50/75 sm:text-sm">
										{copy}
									</p>

									{/* Read more */}
									{/* <a
										href="#appointment"
										aria-label={`Learn more about ${dept.name}`}
										className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-xs font-bold tracking-wide text-white transition-colors duration-300 hover:text-teal-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-teal-600"
									>
										EXPLORE DEPARTMENT
										<ArrowUpRight
											size={15}
											className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
										/>
									</a> */}
								</motion.article>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
