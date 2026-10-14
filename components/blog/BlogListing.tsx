"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Clock3, Search, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getAllBlogs, getBlogCategories, getFeaturedBlog } from "@/lib/blogs";

function formatDate(date: string) {
	return new Date(`${date.slice(0, 10)}T12:00:00`).toLocaleDateString(
		"en-US",
		{
			month: "short",
			day: "numeric",
			year: "numeric",
		},
	);
}

export default function BlogListing() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All topics");

	const blogs = useMemo(() => getAllBlogs(), []);
	const categories = useMemo(() => getBlogCategories(), []);
	const featuredBlog = useMemo(() => getFeaturedBlog() ?? blogs[0], [blogs]);

	const hasActiveFilters =
		searchQuery.trim().length > 0 || selectedCategory !== "All topics";

	const filteredBlogs = useMemo(() => {
		const query = searchQuery.trim().toLowerCase();

		return blogs.filter((blog) => {
			const matchesCategory =
				selectedCategory === "All topics" ||
				blog.category.toLowerCase() === selectedCategory.toLowerCase();

			const searchableText = [
				blog.title,
				blog.excerpt,
				blog.category,
				...blog.tags,
			]
				.join(" ")
				.toLowerCase();

			return matchesCategory && searchableText.includes(query);
		});
	}, [blogs, searchQuery, selectedCategory]);

	const displayedBlogs =
		hasActiveFilters || !featuredBlog
			? filteredBlogs
			: filteredBlogs.filter((blog) => blog.id !== featuredBlog.id);

	function clearFilters() {
		setSearchQuery("");
		setSelectedCategory("All topics");
	}

	return (
		<main className="min-h-screen bg-white">
			{/* Hero */}
			<section className="border-b border-black/5 bg-[#f7fbfa]">
				<div className="section-max container-px pt-24 pb-16 sm:py-20 md:pt-24 lg:py-24">
					<Reveal>
						<div className="mx-auto max-w-3xl text-center">
							<p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">
								The Medicare Journal
							</p>

							<h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
								Small steps toward a{" "}
								<span className="text-teal-600">
									healthier life.
								</span>
							</h1>

							<p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-mist sm:text-lg sm:leading-8">
								Explore practical health advice, preventive care
								insights, and everyday wellness tips to help you
								make informed decisions about your health.
							</p>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="section-max container-px py-12 sm:py-16">
				{/* Search and filters */}
				<Reveal>
					<div className="mb-10">
						<div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
							<div>
								<h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
									Explore our articles
								</h2>
								<p className="mt-2 text-sm leading-6 text-mist">
									Find guidance for your health and
									well-being.
								</p>
							</div>

							<div className="relative w-full lg:max-w-sm">
								<Search
									size={19}
									aria-hidden="true"
									className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mist"
								/>
								<input
									type="search"
									value={searchQuery}
									onChange={(event) =>
										setSearchQuery(event.target.value)
									}
									placeholder="Search articles..."
									aria-label="Search articles"
									className="w-full rounded-xl border border-black/10 bg-white py-3.5 pl-11 pr-4 text-sm text-ink outline-none transition placeholder:text-mist focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
								/>
							</div>
						</div>

						<div className="mt-6 flex flex-wrap items-center gap-2">
							{["All topics", ...categories].map((category) => {
								const isActive = selectedCategory === category;

								return (
									<button
										key={category}
										type="button"
										onClick={() =>
											setSelectedCategory(category)
										}
										aria-pressed={isActive}
										className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
											isActive
												? "border-teal-600 bg-teal-600 text-white"
												: "border-black/10 bg-white text-mist hover:border-teal-600 hover:text-teal-700"
										}`}
									>
										{category}
									</button>
								);
							})}
						</div>
					</div>
				</Reveal>

				{/* Featured article: shown when no filters are active */}
				{!hasActiveFilters && featuredBlog && (
					<Reveal>
						<Link
							href={`/blogs/${featuredBlog.slug}`}
							className="group mb-14 grid overflow-hidden rounded-3xl border border-black/5 bg-white shadow-card transition-shadow hover:shadow-soft md:grid-cols-2"
						>
							<div className="relative min-h-64 overflow-hidden bg-black/5 sm:min-h-80">
								<Image
									src={featuredBlog.image}
									alt={featuredBlog.imageAlt}
									fill
									priority
									sizes="(max-width: 768px) 100vw, 50vw"
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-ink shadow-soft">
									Featured article
								</span>
							</div>

							<div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
								<p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
									{featuredBlog.category}
								</p>

								<h2 className="font-display mt-4 text-2xl font-semibold leading-snug text-ink transition-colors group-hover:text-teal-600 sm:text-3xl">
									{featuredBlog.title}
								</h2>

								<p className="mt-4 line-clamp-3 text-sm leading-7 text-mist sm:text-base">
									{featuredBlog.excerpt}
								</p>

								<div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-mist">
									<span>
										{formatDate(featuredBlog.publishedAt)}
									</span>
									<span className="inline-flex items-center gap-1.5">
										<Clock3 size={14} aria-hidden="true" />
										{featuredBlog.readTime} min read
									</span>
								</div>

								<span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-teal-600">
									Read article
									<ArrowRight
										size={17}
										aria-hidden="true"
										className="transition-transform group-hover:translate-x-1"
									/>
								</span>
							</div>
						</Link>
					</Reveal>
				)}

				{/* Article results */}
				<div className="mb-6 flex items-center justify-between gap-4">
					<h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
						{hasActiveFilters
							? "Search results"
							: "Latest articles"}
					</h2>
					<p className="shrink-0 text-sm text-mist">
						{displayedBlogs.length}{" "}
						{displayedBlogs.length === 1 ? "article" : "articles"}
					</p>
				</div>

				{displayedBlogs.length > 0 ? (
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{displayedBlogs.map((blog, index) => (
							<Reveal key={blog.id} delay={(index % 3) * 0.06}>
								<article className="group h-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-soft transition-shadow hover:shadow-card">
									<Link
										href={`/blogs/${blog.slug}`}
										aria-label={`Read article: ${blog.title}`}
										className="flex h-full flex-col"
									>
										<div className="relative aspect-[16/10] overflow-hidden bg-black/5">
											<Image
												src={blog.image}
												alt={blog.imageAlt}
												fill
												sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
												className="object-cover transition-transform duration-500 group-hover:scale-105"
											/>
										</div>

										<div className="flex flex-1 flex-col p-5 sm:p-6">
											<p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
												{blog.category}
											</p>

											<h3 className="font-display mt-3 line-clamp-2 text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-teal-600">
												{blog.title}
											</h3>

											<p className="mt-3 line-clamp-3 text-sm leading-6 text-mist">
												{blog.excerpt}
											</p>

											<div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-5 text-xs text-mist">
												<span>
													{formatDate(
														blog.publishedAt,
													)}
												</span>
												<span className="inline-flex items-center gap-1">
													<Clock3
														size={13}
														aria-hidden="true"
													/>
													{blog.readTime} min read
												</span>
											</div>

											<div className="mt-5 flex items-center gap-2 border-t border-black/5 pt-4 text-sm font-semibold text-teal-600">
												Read article
												<ArrowRight
													size={16}
													aria-hidden="true"
													className="transition-transform group-hover:translate-x-1"
												/>
											</div>
										</div>
									</Link>
								</article>
							</Reveal>
						))}
					</div>
				) : (
					<div className="rounded-2xl border border-dashed border-black/10 bg-[#f7fbfa] px-6 py-14 text-center">
						<div className="mx-auto flex size-12 items-center justify-center rounded-full bg-white text-teal-600 shadow-soft">
							<Search size={21} aria-hidden="true" />
						</div>

						<h3 className="font-display mt-4 text-xl font-semibold text-ink">
							No articles found
						</h3>

						<p className="mx-auto mt-2 max-w-md text-sm leading-6 text-mist">
							Try another search term or choose a different
							category to find what you&apos;re looking for.
						</p>

						<button
							type="button"
							onClick={clearFilters}
							className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
						>
							<X size={15} aria-hidden="true" />
							Clear filters
						</button>
					</div>
				)}
			</section>
		</main>
	);
}
