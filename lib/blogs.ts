import blogsData from "@/data/blogs.json";

export type BlogContentBlock = {
	type: "paragraph" | "heading";
	text: string;
};

export type Blog = {
	id: string;
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	author: {
		name: string;
		role: string;
	};
	publishedAt: string;
	updatedAt: string;
	readTime: number;
	image: string;
	imageAlt: string;
	featured: boolean;
	trending: boolean;
	tags: string[];
	seo: {
		title: string;
		description: string;
	};
	content: BlogContentBlock[];
};

export const blogs = blogsData as Blog[];

export function getAllBlogs(): Blog[] {
	return [...blogs].sort(
		(a, b) =>
			new Date(b.publishedAt).getTime() -
			new Date(a.publishedAt).getTime(),
	);
}

export function getFeaturedBlog(): Blog | undefined {
	return blogs.find((blog) => blog.featured);
}

export function getTrendingBlogs(limit = 3): Blog[] {
	return getAllBlogs()
		.filter((blog) => blog.trending && !blog.featured)
		.slice(0, limit);
}

export function getBlogBySlug(slug: string): Blog | undefined {
	return blogs.find((blog) => blog.slug === slug);
}

export function getBlogsByCategory(category: string): Blog[] {
	return getAllBlogs().filter(
		(blog) => blog.category.toLowerCase() === category.toLowerCase(),
	);
}

export function getBlogCategories(): string[] {
	return [...new Set(blogs.map((blog) => blog.category))];
}
