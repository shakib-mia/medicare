"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
	Headset,
	Stethoscope,
	MessageCircleHeart,
	ShieldCheck,
	ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

const cards = [
	{
		title: "Customer Support",
		icon: Headset,
		bg: "bg-peach-50",
		description: "Friendly support whenever you need guidance.",
	},
	{
		title: "Chamber Services",
		icon: Stethoscope,
		bg: "bg-peach-50",
		description: "Professional care with a personal touch.",
	},
	{
		title: "Online Specialist",
		icon: MessageCircleHeart,
		bg: "bg-sand-50",
		description: "Connect with specialists from your home.",
	},
	{
		title: "Privacy and Security",
		icon: ShieldCheck,
		bg: "bg-teal-50",
		description: "Your privacy and information matter to us.",
	},
];

export default function FocusCards() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
			{/* Subtle background accent */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-teal-100/30 blur-3xl"
			/>

			<div className="section-max container-px relative">
				{/* Section heading */}
				<Reveal>
					<div className="mb-10 flex flex-col gap-5 sm:mb-12 md:flex-row md:items-end md:justify-between md:gap-8">
						<div className="max-w-xl">
							<span className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-3.5 py-2 text-xs font-semibold tracking-wide text-teal-700 shadow-sm sm:text-sm">
								<span className="h-2 w-2 rounded-full bg-teal-500" />
								Care That Comes First
							</span>

							<h2 className="max-w-md font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
								Your health requirements are our{" "}
								<span className="text-teal-500">
									first focus.
								</span>
							</h2>
						</div>

						<p className="max-w-sm text-sm leading-7 text-mist sm:text-base sm:leading-8">
							Our team of skilled medical professionals and care
							specialists helps you get the attention, guidance,
							and support you deserve.
						</p>
					</div>
				</Reveal>

				{/* Focus cards */}
				<div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
					{cards.map((card, index) => {
						const Icon = card.icon;

						return (
							<Reveal
								key={card.title}
								delay={shouldReduceMotion ? 0 : index * 0.1}
							>
								<motion.div
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
									whileTap={
										shouldReduceMotion
											? undefined
											: { scale: 0.99 }
									}
									className={`group relative flex h-full min-h-[190px] cursor-default flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/80 ${card.bg} px-4 py-7 text-center shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-teal-100 hover:shadow-card sm:min-h-[220px] sm:rounded-[1.5rem] sm:px-6 sm:py-9`}
								>
									{/* Decorative corner accent */}
									<div
										aria-hidden="true"
										className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full border-[16px] border-white/30 transition-transform duration-700 ease-out group-hover:scale-125 motion-reduce:transform-none"
									/>

									{/* Icon */}
									<span className="relative mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/80 bg-white text-teal-600 shadow-card transition-transform duration-500 ease-out group-hover:scale-105 sm:h-16 sm:w-16 sm:rounded-[1.25rem] motion-reduce:transform-none">
										<Icon size={26} strokeWidth={1.6} />
									</span>

									{/* Card content */}
									<h3 className="relative font-display text-sm font-bold leading-snug text-ink sm:text-base">
										{card.title}
									</h3>

									<p className="mt-2 max-w-[220px] text-xs leading-5 text-mist sm:text-sm sm:leading-6">
										{card.description}
									</p>

									{/* Hover indicator */}
									<span className="absolute bottom-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-white/70 text-teal-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 translate-x-1 motion-reduce:transform-none">
										<ArrowUpRight size={15} />
									</span>
								</motion.div>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
