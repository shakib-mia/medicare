import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FocusCards from "@/components/FocusCards";
import Departments from "@/components/Departments";
import TopSpecialists from "@/components/TopSpecialists";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import BlogTrending from "@/components/BlogTrending";
import PartnerLogos from "@/components/PartnerLogos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <FocusCards />
      <Departments />
      <TopSpecialists />
      <Benefits />
      <Testimonials />
      <CTABanner />
      <BlogTrending />
      <PartnerLogos />
      <Footer />
    </main>
  );
}
