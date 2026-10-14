"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
	Star,
	ArrowRight,
	CalendarCheck,
	User,
	MessageCircle,
} from "lucide-react";
import { doctorGrid, Doctor } from "@/lib/doctors";
import Reveal from "./Reveal";
import Link from "next/link";

const PAGE_SIZE = 11; // + 1 featured card = 12 per "page"

export default function DoctorResults() {
	const [visible, setVisible] = useState(PAGE_SIZE);
	const rest = doctorGrid.slice(1, visible);
	const featured = doctorGrid[0];

	return (
		<div>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
				{/* Featured card first */}
				<Reveal className="sm:col-span-2">
					<FeaturedCard doctor={featured} />
				</Reveal>

				{rest.map((d, i) => (
					<Reveal key={`${d.name}-${i}`} delay={(i % 6) * 0.05}>
						<DoctorCard doctor={d} />
					</Reveal>
				))}
			</div>

			{visible < doctorGrid.length && (
				<div className="flex justify-center mt-12">
					<motion.button
						whileHover={{
							y: -2,
							backgroundColor: "#1FA39A",
							color: "#fff",
						}}
						whileTap={{ scale: 0.97 }}
						onClick={() => setVisible((v) => v + PAGE_SIZE)}
						className="border border-teal-400 text-teal-600 text-sm font-semibold rounded-full px-10 py-3 transition-colors"
					>
						Load More
					</motion.button>
				</div>
			)}
		</div>
	);
}
const MotionLink = motion.create(Link);

function DoctorCard({ doctor }: { doctor: Doctor }) {
	return (
		<MotionLink
			href={`/find-doctor/${doctor.slug}`}
			whileHover={{ y: -6 }}
			className="bg-white border border-teal-50 rounded-2xl shadow-card p-6 flex flex-col items-center text-center h-full"
		>
			<div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
				<Image
					src={doctor.img}
					alt={doctor.name}
					fill
					sizes="80px"
					className="object-cover"
				/>
				<span className="absolute -top-1 -right-2 bg-teal-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
					<Star size={9} className="fill-white" /> 5.0
				</span>
			</div>
			<h3 className="font-semibold text-ink text-sm">{doctor.name}</h3>
			<p className="text-xs text-mist mt-1">{doctor.role}</p>
			<p className="text-[11px] text-mist mt-4">
				{doctor.reviews} Reviews
			</p>
		</MotionLink>
	);
}

function FeaturedCard({ doctor }: { doctor: Doctor }) {
	return (
		<motion.div
			whileHover={{ y: -4 }}
			className="relative bg-teal-500 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-6 overflow-hidden"
		>
			<MotionLink
				whileHover={{ scale: 1.04 }}
				href={`/find-doctor/${doctor.slug}`}
				className="absolute top-5 right-5 bg-white/95 text-teal-600 text-xs font-semibold px-4 py-2 rounded-full"
			>
				View Profile
			</MotionLink>

			<div className="flex items-center gap-4 sm:shrink-0">
				<div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0">
					<Image
						src={doctor.img}
						alt={doctor.name}
						fill
						sizes="96px"
						className="object-cover"
					/>
					<span className="absolute -top-1 -right-1 bg-white text-teal-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
						<Star
							size={9}
							className="fill-teal-500 text-teal-500"
						/>{" "}
						5.0
					</span>
				</div>

				<div className="text-white sm:hidden">
					<h3 className="font-semibold text-base">{doctor.name}</h3>
					<p className="text-teal-50/85 text-sm">{doctor.role}</p>
					<p className="text-[11px] text-teal-50/70 mt-1">
						{doctor.reviews} Reviews
					</p>
				</div>
			</div>

			<div className="text-white hidden sm:block">
				<h3 className="font-semibold text-base">{doctor.name}</h3>
				<p className="text-teal-50/85 text-sm">{doctor.role}</p>
				<p className="text-[11px] text-teal-50/70 mt-2">
					{doctor.reviews} Reviews
				</p>

				<div className="flex gap-3 mt-4">
					<span className="w-7 h-7 rounded-md bg-white/15 flex items-center justify-center">
						<CalendarCheck size={13} />
					</span>
					<span className="w-7 h-7 rounded-md bg-white/15 flex items-center justify-center">
						<User size={13} />
					</span>
					<span className="w-7 h-7 rounded-md bg-white/15 flex items-center justify-center">
						<MessageCircle size={13} />
					</span>
				</div>
			</div>

			<div className="sm:ml-auto sm:pl-8 sm:border-l sm:border-white/20 sm:max-w-[38%]">
				<div className="grid grid-cols-3 sm:flex sm:flex-col gap-3 text-white/90 text-xs">
					<div>
						<div className="text-teal-50/60">Degree</div>
						<div className="font-semibold mt-0.5">
							{doctor.degree}
						</div>
					</div>
					<div>
						<div className="text-teal-50/60">Speciality</div>
						<div className="font-semibold mt-0.5">
							{doctor.role}
						</div>
					</div>
					<div>
						<div className="text-teal-50/60">Chamber</div>
						<div className="font-semibold mt-0.5">
							{doctor.chamber}
						</div>
					</div>
				</div>
				<a
					href="#"
					className="hidden sm:flex items-center gap-2 text-white text-xs font-semibold mt-4"
				>
					Booking Available Online <ArrowRight size={13} />
				</a>
			</div>
		</motion.div>
	);
}
