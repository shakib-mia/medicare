"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import type { Doctor } from "@/lib/doctors";
import Reveal from "./Reveal";

export default function OfficeAndAbout({ doctor }: { doctor: Doctor }) {
	const [expanded, setExpanded] = useState(false);
	const about = doctor.about ?? "";
	const short = about.length > 340 ? `${about.slice(0, 340).trim()}…` : about;

	return (
		<div className="mt-16 grid gap-10 lg:grid-cols-[340px_1fr]">
			<Reveal>
				<div className="rounded-2xl bg-teal-50/70 p-6">
					<h2 className="mb-4 font-display text-xl font-bold text-ink">
						Office & Chamber
					</h2>

					<motion.div
						whileHover={{ scale: 1.02 }}
						className="relative aspect-[4/3] w-full overflow-hidden rounded-xl"
					>
						<Image
							src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=800&auto=format&fit=crop"
							alt={`${doctor.chamber ?? "Medical"} clinic environment`}
							fill
							sizes="(max-width: 1024px) 100vw, 400px"
							className="object-cover"
						/>
					</motion.div>

					{doctor.chamber && (
						<h3 className="mt-5 font-semibold text-ink">
							{doctor.chamber}
						</h3>
					)}

					{doctor.address && (
						<p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-mist">
							<MapPin
								size={16}
								className="mt-0.5 shrink-0 text-teal-600"
							/>
							{doctor.address}
						</p>
					)}
				</div>
			</Reveal>

			{about && (
				<Reveal delay={0.1}>
					<h2 className="mb-4 font-display text-xl font-bold text-ink">
						About {doctor.name}
					</h2>

					<p className="max-w-2xl text-sm leading-relaxed text-mist">
						{expanded ? about : short}
					</p>

					{about.length > 340 && (
						<button
							type="button"
							onClick={() => setExpanded((value) => !value)}
							aria-expanded={expanded}
							className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-teal-600"
						>
							{expanded ? "Show Less" : "Read More"}
							<motion.span
								animate={{ rotate: expanded ? 180 : 0 }}
								transition={{ duration: 0.25 }}
							>
								<ChevronDown size={16} />
							</motion.span>
						</button>
					)}
				</Reveal>
			)}
		</div>
	);
}
