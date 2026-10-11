"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import {
	Star,
	Quote,
	ChevronLeft,
	ChevronRight,
	MessageCircle,
} from "lucide-react";
import Reveal from "./Reveal";

import "swiper/css";

const testimonials = [
	{
		name: "Sarah Johnson",
		role: "Patient",
		initials: "SJ",
		color: "bg-rose-100 text-rose-600",
		review: "The entire experience felt comfortable and well organized. The staff were welcoming, and I felt listened to throughout my consultation.",
	},
	{
		name: "Michael Anderson",
		role: "Patient",
		initials: "MA",
		color: "bg-sky-100 text-sky-700",
		review: "Booking an appointment was straightforward, and the consultation helped me better understand my health concerns and next steps.",
	},
	{
		name: "Emily Wilson",
		role: "Patient",
		initials: "EW",
		color: "bg-violet-100 text-violet-700",
		review: "I appreciated the professional approach and the time taken to explain everything in a way that was easy to understand.",
	},
	{
		name: "David Miller",
		role: "Patient",
		initials: "DM",
		color: "bg-amber-100 text-amber-700",
		review: "The clinic environment felt welcoming, and the team made the consultation process feel much less stressful.",
	},
	{
		name: "Olivia Taylor",
		role: "Patient",
		initials: "OT",
		color: "bg-emerald-100 text-emerald-700",
		review: "From the initial appointment to the consultation, the process felt clear and organized. I valued the attentive communication.",
	},
	{
		name: "James Wilson",
		role: "Patient",
		initials: "JW",
		color: "bg-indigo-100 text-indigo-700",
		review: "The explanations were clear, and I felt comfortable asking questions. Having a clear plan for follow-up care was especially helpful.",
	},
	{
		name: "Sophia Brown",
		role: "Patient",
		initials: "SB",
		color: "bg-pink-100 text-pink-700",
		review: "A reassuring experience overall. The team was approachable, and I appreciated how clearly the consultation process was explained.",
	},
	{
		name: "Daniel Thomas",
		role: "Patient",
		initials: "DT",
		color: "bg-teal-100 text-teal-700",
		review: "The appointment experience was smooth, and the staff helped me understand what to expect at each step.",
	},
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Testimonials() {
	const shouldReduceMotion = useReducedMotion();
	const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
		null,
	);
	const [active, setActive] = useState(0);

	const goToSlide = (index: number) => {
		if (!swiperInstance || swiperInstance.destroyed) return;

		swiperInstance.slideToLoop(index);
	};

	return (
		<section
			id="testimonials"
			className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
		>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-teal-100/60 blur-3xl"
			/>

			<div className="section-max container-px relative">
				{/* Heading */}
				<div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 lg:flex-row lg:items-end">
					<Reveal className="max-w-2xl">
						<span className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-xs font-semibold tracking-wide text-teal-700">
							<MessageCircle size={15} />
							Patient Experiences
						</span>

						<h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
							Stories of Care,
							<span className="text-teal-600">
								{" "}
								Trust & Comfort
							</span>
						</h2>

						<p className="mt-4 max-w-xl text-sm leading-7 text-mist sm:text-base">
							Discover patient experiences and what makes a
							healthcare journey feel more comfortable, clear, and
							supportive.
						</p>
					</Reveal>

					{/* Navigation */}
					<Reveal delay={0.1} className="flex items-center gap-3">
						<span className="mr-2 text-sm text-mist">
							<span className="font-semibold text-ink">
								{active + 1}
							</span>
							{" / "}
							{testimonials.length}
						</span>

						<button
							type="button"
							onClick={() => swiperInstance?.slidePrev()}
							aria-label="Previous testimonials"
							className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-100 bg-white text-ink shadow-sm transition-all duration-300 hover:border-teal-500 hover:bg-teal-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
						>
							<ChevronLeft size={20} />
						</button>

						<button
							type="button"
							onClick={() => swiperInstance?.slideNext()}
							aria-label="Next testimonials"
							className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-500 text-white shadow-sm transition-all duration-300 hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
						>
							<ChevronRight size={20} />
						</button>
					</Reveal>
				</div>

				{/* Swiper carousel */}
				<Reveal>
					<Swiper
						modules={[Autoplay, A11y]}
						onSwiper={setSwiperInstance}
						onSlideChange={(swiper) => setActive(swiper.realIndex)}
						slidesPerView={1}
						slidesPerGroup={1}
						spaceBetween={16}
						speed={shouldReduceMotion ? 0 : 650}
						loop
						grabCursor
						simulateTouch
						allowTouchMove
						watchOverflow
						autoplay={
							shouldReduceMotion
								? false
								: {
										delay: 5000,
										disableOnInteraction: false,
										pauseOnMouseEnter: true,
									}
						}
						breakpoints={{
							640: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 24,
							},
						}}
						a11y={{
							prevSlideMessage: "Previous testimonial",
							nextSlideMessage: "Next testimonial",
							firstSlideMessage: "This is the first testimonial",
							lastSlideMessage: "This is the last testimonial",
						}}
					>
						{testimonials.map((testimonial) => (
							<SwiperSlide
								key={testimonial.name}
								className="!h-auto"
							>
								<motion.article
									whileHover={
										shouldReduceMotion
											? undefined
											: { y: -5 }
									}
									transition={{ duration: 0.25, ease }}
									className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-3xl border border-teal-100/70 bg-teal-50/60 p-6 sm:min-h-[320px] sm:p-7"
								>
									<Quote
										aria-hidden="true"
										size={44}
										strokeWidth={1.2}
										className="absolute right-5 top-5 text-teal-200/80"
									/>

									<div
										aria-label="Sample five-star rating"
										className="relative flex items-center gap-1 text-amber-400"
									>
										{Array.from({ length: 5 }).map(
											(_, index) => (
												<Star
													key={index}
													size={15}
													fill="currentColor"
													strokeWidth={1.4}
												/>
											),
										)}
									</div>

									<p className="relative mt-6 flex-1 text-sm leading-7 text-slate-600 sm:text-[15px]">
										“{testimonial.review}”
									</p>

									<div className="mt-6 border-t border-teal-100 pt-5">
										<div className="flex items-center gap-3">
											<div
												aria-hidden="true"
												className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold ${testimonial.color}`}
											>
												{testimonial.initials}
											</div>

											<div className="min-w-0">
												<h3 className="truncate text-sm font-bold text-ink">
													{testimonial.name}
												</h3>
												<p className="mt-1 text-xs text-mist">
													{testimonial.role}
												</p>
											</div>

											<div className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-teal-600">
												<Quote size={15} />
											</div>
										</div>
									</div>
								</motion.article>
							</SwiperSlide>
						))}
					</Swiper>
				</Reveal>

				{/* Pagination */}
				<div
					className="mt-8 flex flex-wrap items-center justify-center gap-2"
					aria-label="Testimonial pagination"
				>
					{testimonials.map((testimonial, index) => (
						<button
							key={testimonial.name}
							type="button"
							onClick={() => goToSlide(index)}
							aria-label={`Go to testimonial ${index + 1}`}
							aria-current={active === index ? "true" : undefined}
							className={`relative h-2.5 overflow-hidden rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${
								active === index
									? "w-8 bg-teal-100"
									: "w-2.5 bg-teal-100 hover:bg-teal-200"
							}`}
						>
							{active === index && (
								<motion.span
									layoutId="testimonial-pagination"
									className="absolute inset-0 rounded-full bg-teal-500"
									transition={{
										type: "spring",
										stiffness: 300,
										damping: 28,
									}}
								/>
							)}
						</button>
					))}
				</div>
			</div>
		</section>
	);
}
