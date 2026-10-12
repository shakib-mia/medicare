import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import DoctorProfileSidebar from "@/components/DoctorProfileSidebar";
import DoctorProfileInfo from "@/components/DoctorProfileInfo";
import OfficeAndAbout from "@/components/OfficeAndAbout";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import { getDoctorBySlug, getAllDoctorSlugs } from "@/lib/doctors";

type PageProps = {
	params: Promise<{ id: string }>;
};

export function generateStaticParams() {
	return getAllDoctorSlugs().map((id) => ({ id }));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { id } = await params;
	const doctor = getDoctorBySlug(id);

	if (!doctor) {
		return {
			title: "Doctor Not Found — Medicare",
			description: "The requested doctor profile could not be found.",
		};
	}

	return {
		title: `${doctor.name} — Medicare`,
		description: `${doctor.name}, ${doctor.role}. View qualifications, specialities, experience, and weekly availability.`,
	};
}

export default async function DoctorProfilePage({ params }: PageProps) {
	const { id } = await params;
	const doctor = getDoctorBySlug(id);

	if (!doctor) notFound();

	return (
		<main className="overflow-x-hidden">
			<section className="section-max container-px pb-12 pt-24">
				<div className="grid gap-12 lg:grid-cols-[340px_1fr]">
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
