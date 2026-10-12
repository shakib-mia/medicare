"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Smile, Ear, HeartHandshake } from "lucide-react";
import type { Doctor } from "@/lib/doctors";
import Reveal from "./Reveal";

const traitIcons: Record<string, typeof Smile> = {
	Friendly: Smile,
	"Good Listener": Ear,
	Patient: HeartHandshake,
};

export default function DoctorProfileSidebar({ doctor }: { doctor: Doctor }) {
	const specialties = doctor.specialities?.slice(0, 2).join(" · ");
	const availableDays = doctor.weeklyAvailability.length;

	return (
		<Reveal>
			<div className="flex flex-col items-center rounded-2xl bg-teal-50/70 p-8 text-center">
				<div className="relative h-40 w-40 overflow-hidden rounded-full">
					<Image
						src={doctor.img}
						alt={doctor.name}
						fill
						sizes="160px"
						className="object-cover"
					/>
				</div>

				<h1 className="mt-4 line-clamp-2 font-display text-lg font-semibold leading-snug text-ink">
					{doctor.name}
				</h1>

				<p className="mt-1 text-sm font-medium text-teal-700">
					{doctor.role}
				</p>

				{specialties && (
					<p className="mt-3 text-sm leading-relaxed text-mist">
						{specialties}
					</p>
				)}

				{doctor.degree && (
					<p className="mt-2 text-xs leading-relaxed text-mist">
						{doctor.degree}
					</p>
				)}

				{doctor.priceRange && (
					<p className="mt-5 font-display text-xl font-bold text-ink">
						{doctor.priceRange}
					</p>
				)}

				<p className="my-2 flex items-center gap-2 text-sm text-mist">
					<CalendarCheck size={16} className="text-teal-600" />
					Available {availableDays} days a week
				</p>

				<motion.a
					href={`tel:${doctor.phone}`}
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.98 }}
					className="flex w-full items-center justify-center gap-2 rounded-lg border border-teal-200 bg-white py-3.5 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50"
				>
					Call to Book
				</motion.a>

				<div className="mt-8 flex flex-wrap justify-center gap-3">
					{doctor.traits?.map((trait) => {
						const Icon = traitIcons[trait] ?? Smile;

						return (
							<span
								key={trait}
								className="flex items-center gap-2 rounded-lg border border-teal-100 bg-white px-3.5 py-2 text-xs font-medium text-ink"
							>
								<Icon size={14} className="text-teal-500" />
								{trait}
							</span>
						);
					})}
				</div>
			</div>
		</Reveal>
	);
}
