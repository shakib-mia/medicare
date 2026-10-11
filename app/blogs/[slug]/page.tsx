import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";
import BlogDetails from "@/components/blog/BlogDetails";

type BlogPageProps = {
	params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
	return getAllBlogs().map((blog) => ({
		slug: blog.slug,
	}));
}

export async function generateMetadata({
	params,
}: BlogPageProps): Promise<Metadata> {
	const { slug } = await params;
	const blog = getBlogBySlug(slug);

	if (!blog) {
		return {
			title: "Article Not Found | Medicare",
		};
	}

	return {
		title: blog.seo.title,
		description: blog.seo.description,
		alternates: {
			canonical: `/blogs/${blog.slug}`,
		},
		openGraph: {
			type: "article",
			title: blog.seo.title,
			description: blog.seo.description,
			url: `/blogs/${blog.slug}`,
			images: [
				{
					url: blog.image,
					alt: blog.imageAlt,
				},
			],
			publishedTime: blog.publishedAt,
			modifiedTime: blog.updatedAt,
			authors: [blog.author.name],
			tags: blog.tags,
		},
	};
}

export default async function BlogDetailsPage({ params }: BlogPageProps) {
	const { slug } = await params;
	const blog = getBlogBySlug(slug);

	if (!blog) {
		notFound();
	}

	return <BlogDetails blog={blog} />;
}
