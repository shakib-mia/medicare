import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FocusCards from "@/components/FocusCards";
import Departments from "@/components/Departments";
import TopSpecialists from "@/components/TopSpecialists";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import BlogTrending from "@/components/BlogTrending";
import PartnerLogos from "@/components/PartnerLogos";

export default function Home() {
	return (
		<main className="overflow-x-hidden">
			<Hero />
			<FocusCards />
			<Departments />
			<TopSpecialists />
			<Benefits />
			<Testimonials />
			{/* <CTABanner /> */}
			<BlogTrending />
			<PartnerLogos />
		</main>
	);
}
