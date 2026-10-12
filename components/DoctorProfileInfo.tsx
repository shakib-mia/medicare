"use client";

import { MapPin, Clock } from "lucide-react";
import type { Doctor } from "@/lib/doctors";
import Reveal from "./Reveal";

export default function DoctorProfileInfo({ doctor }: { doctor: Doctor }) {
	return (
		<div>
			<Reveal delay={0.08} className="mt-8">
				<div className="flex items-center gap-2 font-semibold text-ink">
					<MapPin size={18} className="text-teal-500" />
					{doctor.location ?? "Location not provided"}
				</div>

				{doctor.address && (
					<p className="mt-3 max-w-lg text-sm leading-relaxed text-mist">
						{doctor.address}
					</p>
				)}

				{doctor.chamber && (
					<p className="mt-2 text-sm text-mist">
						Chamber: {doctor.chamber}
					</p>
				)}
			</Reveal>

			{doctor.specialities && doctor.specialities.length > 0 && (
				<Reveal delay={0.14} className="mt-10">
					<h2 className="mb-4 font-display text-xl font-bold text-ink">
						Specialities
					</h2>
					<TagRow items={doctor.specialities} />
				</Reveal>
			)}

			{doctor.issues && doctor.issues.length > 0 && (
				<Reveal delay={0.18} className="mt-10">
					<h2 className="mb-4 font-display text-xl font-bold text-ink">
						Common Concerns
					</h2>
					<TagRow items={doctor.issues} />
				</Reveal>
			)}

			{(doctor.degree || doctor.qualification) && (
				<Reveal delay={0.22} className="mt-10">
					<h2 className="mb-3 font-display text-xl font-bold text-ink">
						Qualifications
					</h2>

					{doctor.degree && (
						<p className="text-sm leading-relaxed text-ink">
							<span className="font-semibold">Degree:</span>{" "}
							{doctor.degree}
						</p>
					)}

					{doctor.qualification && (
						<p className="mt-2 text-sm leading-relaxed text-mist">
							{doctor.qualification}
						</p>
					)}
				</Reveal>
			)}

			{doctor.experienceYears != null && (
				<Reveal delay={0.26} className="mt-10">
					<h2 className="mb-3 font-display text-xl font-bold text-ink">
						Experience
					</h2>

					<p className="text-sm text-ink">
						<span className="font-semibold">
							{doctor.experienceYears} years
						</span>{" "}
						of professional experience
					</p>
				</Reveal>
			)}

			<Reveal delay={0.3} className="mt-10">
				<h2
					id="weekly-availability"
					className="mb-4 scroll-mt-28 font-display text-xl font-bold text-ink"
				>
					Weekly Availability
				</h2>

				<div className="space-y-3">
					{doctor.weeklyAvailability.length > 0 ? (
						doctor.weeklyAvailability.map((schedule) => (
							<div
								key={schedule.day}
								className="flex flex-col gap-2 rounded-xl border border-teal-100 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
							>
								<span className="font-semibold text-ink">
									{schedule.day}
								</span>

								<div className="flex flex-wrap gap-2">
									{schedule.slots.map((slot) => (
										<span
											key={`${slot.startTime}-${slot.endTime}`}
											className="inline-flex items-center gap-1.5 rounded-lg bg-teal-50 px-3 py-2 text-sm text-teal-700"
										>
											<Clock size={14} />
											{formatTime(slot.startTime)} –{" "}
											{formatTime(slot.endTime)}
										</span>
									))}
								</div>
							</div>
						))
					) : (
						<p className="text-sm text-mist">
							Weekly schedule has not been provided yet.
						</p>
					)}
				</div>

				<p className="mt-3 text-xs leading-relaxed text-mist">
					Schedule is indicative. Please confirm availability with the
					clinic before visiting.
				</p>
			</Reveal>
		</div>
	);
}

function TagRow({ items }: { items: string[] }) {
	return (
		<div className="flex flex-wrap gap-3">
			{items.map((item) => (
				<span
					key={item}
					className="rounded-lg border border-teal-200 px-5 py-2.5 text-sm font-semibold text-teal-700"
				>
					{item}
				</span>
			))}
		</div>
	);
}

function formatTime(time: string): string {
	const [hours, minutes] = time.split(":").map(Number);
	const period = hours >= 12 ? "PM" : "AM";
	const displayHour = hours % 12 || 12;

	return `${displayHour}:${String(minutes).padStart(2, "0")} ${period}`;
}
