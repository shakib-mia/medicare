"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function DoctorSearchHero() {
	const [who, setWho] = useState<"myself" | "someone">("myself");

	return (
		<section className="pt-20 sm:pt-32 pb-10">
			<div className="section-max container-px">
				<Reveal className="text-center max-w-2xl mx-auto">
					<h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-ink leading-tight">
						Search for Doctor, Make an Appointment
					</h1>
					<p className="text-mist mt-4 text-sm sm:text-base">
						Discover the best doctors, clinic, hospitals, nearest
						cities that suits your calender
					</p>
				</Reveal>

				<Reveal delay={0.15} className="mt-12">
					<div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-8">
						<div>
							<span className="text-teal-500 text-sm font-semibold">
								Only for Medical Treatment
							</span>
							<div className="flex items-center gap-6 mt-3 text-sm text-ink">
								<span>Treatment inquiry for</span>
								<label className="flex items-center gap-2 cursor-pointer">
									<span
										onClick={() => setWho("myself")}
										className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
											who === "myself"
												? "border-teal-500"
												: "border-gray-300"
										}`}
									>
										{who === "myself" && (
											<motion.span
												layoutId="who-dot"
												className="w-2 h-2 rounded-full bg-teal-500"
											/>
										)}
									</span>
									Myself
								</label>
								<label className="flex items-center gap-2 cursor-pointer">
									<span
										onClick={() => setWho("someone")}
										className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
											who === "someone"
												? "border-teal-500"
												: "border-gray-300"
										}`}
									>
										{who === "someone" && (
											<motion.span
												layoutId="who-dot"
												className="w-2 h-2 rounded-full bg-teal-500"
											/>
										)}
									</span>
									Someone
								</label>
							</div>
						</div>

						<div className="flex-1 grid sm:grid-cols-[1fr_1fr_auto] gap-4 items-end">
							<div>
								<label className="text-sm font-semibold text-ink block mb-2">
									Name
								</label>
								<input
									type="text"
									placeholder="Enter patients name"
									className="w-full border border-teal-100 rounded-lg px-4 py-3 text-sm placeholder:text-gray-300 focus:outline-none focus:border-teal-400"
								/>
							</div>
							<div>
								<label className="text-sm font-semibold text-ink block mb-2">
									Phone
								</label>
								<div className="flex gap-2">
									<select className="border border-teal-100 rounded-lg px-3 py-3 text-sm text-mist focus:outline-none focus:border-teal-400">
										<option>+233</option>
										<option>+91</option>
										<option>+1</option>
									</select>
									<input
										type="tel"
										placeholder="XXXXXXXXXX"
										className="w-full border border-teal-100 rounded-lg px-4 py-3 text-sm placeholder:text-gray-300 focus:outline-none focus:border-teal-400"
									/>
								</div>
							</div>
							<motion.button
								whileHover={{ y: -2 }}
								whileTap={{ scale: 0.97 }}
								className="bg-teal-500 hover:bg-teal-600 transition-colors text-white text-sm font-semibold rounded-lg px-8 py-3.5 whitespace-nowrap"
							>
								Submit
							</motion.button>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
