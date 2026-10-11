import type { Metadata } from "next";
import BlogListing from "@/components/blog/BlogListing";

export const metadata: Metadata = {
	title: "Health & Wellness Articles | Medicare",
	description:
		"Explore practical health tips, preventive care guides, and wellness articles to make informed healthcare decisions.",
	alternates: {
		canonical: "/blogs",
	},
};

export default function BlogsPage() {
	return <BlogListing />;
}
