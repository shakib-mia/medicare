import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DoctorProfileSidebar from "@/components/DoctorProfileSidebar";
import DoctorProfileInfo from "@/components/DoctorProfileInfo";
import OfficeAndAbout from "@/components/OfficeAndAbout";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import { getDoctorBySlug, getAllDoctorSlugs } from "@/lib/doctors";

export function generateStaticParams() {
	return getAllDoctorSlugs().map((id) => ({ id }));
}

export function generateMetadata({
	params,
}: {
	params: { id: string };
}): Metadata {
	const doctor = getDoctorBySlug(params.id);
	return {
		title: `${doctor.name} — Medicare`,
		description: `${doctor.name}, ${doctor.role}. View qualifications, specialities, and book an appointment.`,
	};
}

export default function DoctorProfilePage({
	params,
}: {
	params: { id: string };
}) {
	const doctor = getDoctorBySlug(params.id);

	return (
		<main className="overflow-x-hidden">
			<section className="section-max container-px pb-12 pt-24">
				<div className="grid lg:grid-cols-[340px_1fr] gap-12">
					<DoctorProfileSidebar doctor={doctor} />
					<DoctorProfileInfo doctor={doctor} />
				</div>

				<OfficeAndAbout doctor={doctor} />
			</section>

			<PromoBanner />
			<Footer />
		</main>
	);
}
