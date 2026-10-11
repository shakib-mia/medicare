import type { Metadata } from "next";
import DoctorSearchHero from "@/components/DoctorSearchHero";
import FiltersSidebar from "@/components/FiltersSidebar";
import DoctorResults from "@/components/DoctorResults";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Find a Doctor — Medicare",
	description:
		"Search doctors, filter by speciality, hospital, and experience, and book an appointment.",
};

export default function FindDoctorPage() {
	return (
		<main className="overflow-x-hidden">
			<DoctorSearchHero />

			<section className="section-max container-px">
				<div className="border-t border-teal-50 pt-10 grid lg:grid-cols-[280px_1fr] gap-10">
					<aside className="lg:border-r lg:border-teal-50 lg:pr-8">
						<FiltersSidebar />
					</aside>
					<div>
						<DoctorResults />
					</div>
				</div>
			</section>

			<PromoBanner />
			<Footer />
		</main>
	);
}
