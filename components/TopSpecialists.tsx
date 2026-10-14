"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
	Star,
	ChevronLeft,
	ChevronRight,
	ArrowUpRight,
	Stethoscope,
} from "lucide-react";
import Reveal from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

const specialists = [
	{
		name: "Dr. Travis Oman",
		role: "Ophthalmologist",
		img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop",
		phone: "+1 (555) 123-4567",
	},
	{
		name: "Dr. Annah Ray",
		role: "Dentist",
		img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop",
		phone: "+1 (555) 987-6543",
	},
	{
		name: "Dr. Richard Brook",
		role: "Gastroenterologist",
		img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop",
		phone: "+1 (555) 246-8101",
	},
	{
		name: "Dr. Vivian Monroe",
		role: "Pediatric Surgeon",
		img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=600&auto=format&fit=crop",
		phone: "+1 (555) 135-7913",
	},
];

export default function TopSpecialists() {
	const scroller = useRef<HTMLDivElement>(null);
	const shouldReduceMotion = useReducedMotion();

	const scroll = (direction: number) => {
		if (!scroller.current) return;

		const firstCard = scroller.current.querySelector<HTMLElement>(
			"[data-specialist-card]",
		);

		const cardWidth = firstCard?.offsetWidth ?? 260;
		const gap = 24;

		scroller.current.scrollBy({
			left: direction * (cardWidth + gap),
			behavior: shouldReduceMotion ? "instant" : "smooth",
		});
	};

	return (
		<section
			id="specialists"
			className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
		>
			{/* Soft background accent */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-40 top-12 h-80 w-80 rounded-full bg-teal-100/30 blur-3xl"
			/>

			<div className="section-max container-px relative">
				{/* Section heading */}
				<Reveal>
					<div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<span className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-3.5 py-2 text-xs font-semibold tracking-wide text-teal-700 shadow-sm sm:text-sm">
								<span className="h-2 w-2 rounded-full bg-teal-500" />
								Meet Our Medical Team
							</span>

							<h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
								Our Top{" "}
								<span className="text-teal-500">
									Specialists
								</span>
							</h2>

							<p className="mt-3 max-w-lg text-sm leading-7 text-mist sm:text-base sm:leading-8">
								Meet dedicated medical professionals committed
								to your health and well-being.
							</p>
						</div>

						{/* Carousel controls */}
						<div className="flex items-center gap-2 self-start sm:self-auto">
							<button
								type="button"
								onClick={() => scroll(-1)}
								aria-label="View previous specialists"
								className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-100 bg-white text-teal-600 shadow-sm transition-colors duration-300 hover:border-teal-200 hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
							>
								<ChevronLeft size={19} />
							</button>

							<button
								type="button"
								onClick={() => scroll(1)}
								aria-label="View next specialists"
								className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-500 text-white shadow-soft transition-colors duration-300 hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
							>
								<ChevronRight size={19} />
							</button>
						</div>
					</div>
				</Reveal>

				{/* Specialists carousel */}
				<div className="overflow-hidden">
					<div
						ref={scroller}
						role="region"
						aria-label="Medical specialists"
						tabIndex={0}
						className="flex snap-x snap-mandatory gap-0 overflow-x-auto overflow-y-hidden pb-5 pt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-4 sm:gap-6"
						style={{
							scrollbarWidth: "none",
							scrollBehavior: shouldReduceMotion
								? "auto"
								: "smooth",
						}}
					>
						{specialists.map((specialist, index) => (
							<Reveal
								key={specialist.name}
								delay={shouldReduceMotion ? 0 : index * 0.08}
								className="w-full min-w-0 shrink-0 snap-start sm:w-[260px] lg:w-[calc((100%-4.5rem)/4)]"
							>
								<motion.article
									data-specialist-card
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
									className="group h-full overflow-hidden rounded-2xl border border-teal-50 bg-white shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-teal-100 hover:shadow-card sm:rounded-[1.5rem]"
								>
									{/* Doctor image */}
									<div className="relative aspect-[4/3] overflow-hidden bg-teal-50">
										<Image
											src={specialist.img}
											alt={specialist.name}
											fill
											sizes="(max-width: 639px) 100vw, (max-width: 1023px) 260px, 22vw"
											className="object-cover object-center transition-transform duration-[1000ms] ease-out group-hover:scale-[1.04] motion-reduce:transform-none"
										/>

										<div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent opacity-70" />

										{/* Rating badge */}
										<div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/90 px-2.5 py-1.5 text-[11px] font-bold text-ink shadow-sm backdrop-blur-md">
											<Star
												size={12}
												className="fill-teal-500 text-teal-500"
											/>
											5.0
										</div>

										{/* Specialty badge */}
										<div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/35 px-2.5 py-1.5 text-[10px] font-medium text-white backdrop-blur-md">
											<Stethoscope size={12} />
											Specialist
										</div>
									</div>

									{/* Doctor details */}
									<div className="flex h-[190px] flex-col p-4 sm:p-5">
										<h3 className="font-display text-base font-bold leading-snug text-ink">
											{specialist.name}
										</h3>

										<p className="mt-1.5 text-xs leading-5 text-mist sm:text-sm">
											{specialist.role}
										</p>

										<div className="mt-auto pt-5">
											<motion.a
												href={
													"callto:" + specialist.phone
												}
												whileTap={
													shouldReduceMotion
														? undefined
														: { scale: 0.985 }
												}
												transition={{
													duration: 0.2,
													ease,
												}}
												className="group/button flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 px-4 py-3 text-xs font-semibold text-white transition-colors duration-300 hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
											>
												Book an Appointment
												<ArrowUpRight
													size={15}
													className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 motion-reduce:transform-none"
												/>
											</motion.a>

											<p className="mt-3 text-center text-[11px] text-mist">
												Professional, patient-focused
												care
											</p>
										</div>
									</div>
								</motion.article>
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
