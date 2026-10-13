import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Medicare — Your Health Comes First",
	description:
		"Medicare connects you with skilled medical professionals for home and chamber care, diagnostics, and specialist consultations.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="font-body antialiased">
				<Navbar />
				<SmoothScroll>{children}</SmoothScroll>
				<Footer />
			</body>
		</html>
	);
}
