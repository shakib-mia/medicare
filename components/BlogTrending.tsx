"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock3 } from "lucide-react";
import Reveal from "./Reveal";
import { getAllBlogs, getFeaturedBlog, getTrendingBlogs } from "@/lib/blogs";

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

export default function BlogTrending() {
	const shouldReduceMotion = useReducedMotion();

	const featuredBlog = getFeaturedBlog() ?? getAllBlogs()[0];
	const trendingBlogs = getTrendingBlogs(3);

	const cardMotion = shouldReduceMotion
		? {}
		: {
				whileHover: { y: -4 },
				transition: { duration: 0.25, ease: "easeOut" as const },
			};

	if (!featuredBlog) return null;

	return (
		<section className="py-20">
			<div className="section-max container-px">
				<Reveal>
					<div className="mb-10 flex items-end justify-between gap-4">
						<div>
							<p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">
								Health &amp; Wellness
							</p>

							<h2 className="font-display max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
								What you need to know about healthy living
							</h2>
						</div>

						<Link
							href="/blogs"
							className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-teal-600 sm:inline-flex"
						>
							See More
							<ArrowRight size={16} />
						</Link>
					</div>
				</Reveal>

				<div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
					{/* Featured article */}
					<Reveal>
						<motion.article
							{...cardMotion}
							className="group h-full overflow-hidden rounded-3xl border border-black/5 bg-white shadow-card"
						>
							<Link
								href={`/blogs/${featuredBlog.slug}`}
								className="flex h-full flex-col"
							>
								<div className="relative aspect-[16/10] overflow-hidden bg-black/5">
									<Image
										src={featuredBlog.image}
										alt={featuredBlog.imageAlt}
										fill
										priority
										sizes="(max-width: 1024px) 100vw, 55vw"
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>

									<span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-ink shadow-soft">
										{featuredBlog.category}
									</span>
								</div>

								<div className="flex flex-1 flex-col p-6 sm:p-8">
									<div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-mist">
										<span>
											{formatDate(
												featuredBlog.publishedAt,
											)}
										</span>
										<span className="flex items-center gap-1.5">
											<Clock3 size={15} />
											{featuredBlog.readTime} min read
										</span>
									</div>

									<h3 className="font-display text-2xl font-semibold leading-snug text-ink transition-colors group-hover:text-teal-600 sm:text-3xl">
										{featuredBlog.title}
									</h3>

									<p className="mt-4 line-clamp-3 text-sm leading-7 text-mist sm:text-base">
										{featuredBlog.excerpt}
									</p>

									<div className="mt-6 flex items-center justify-between gap-4 border-t border-black/5 pt-5">
										<div className="min-w-0">
											<p className="truncate text-sm font-semibold text-ink">
												{featuredBlog.author.name}
											</p>
											<p className="mt-1 text-xs text-mist">
												{featuredBlog.author.role}
											</p>
										</div>

										<span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-teal-600">
											Read Article
											<ArrowRight
												size={16}
												className="transition-transform group-hover:translate-x-1"
											/>
										</span>
									</div>
								</div>
							</Link>
						</motion.article>
					</Reveal>

					{/* Trending articles */}
					<div>
						<Reveal>
							<div className="mb-6 flex items-center justify-between">
								<h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
									What&apos;s Trending?
								</h3>

								<span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-600">
									Latest reads
								</span>
							</div>
						</Reveal>

						<div className="space-y-5">
							{trendingBlogs.map((blog, index) => (
								<Reveal key={blog.id} delay={index * 0.08}>
									<motion.article
										{...cardMotion}
										className="group overflow-hidden rounded-2xl border border-black/5 bg-white p-3 shadow-soft sm:p-4"
									>
										<Link
											href={`/blogs/${blog.slug}`}
											className="flex gap-4 sm:gap-5"
										>
											<div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-xl bg-black/5 sm:w-36">
												<Image
													src={blog.image}
													alt={blog.imageAlt}
													fill
													sizes="(max-width: 640px) 112px, 144px"
													className="object-cover transition-transform duration-500 group-hover:scale-105"
												/>
											</div>

											<div className="flex min-w-0 flex-1 flex-col justify-center py-1">
												<span className="mb-2 text-xs font-semibold uppercase tracking-wide text-teal-600">
													{blog.category}
												</span>

												<h4 className="line-clamp-2 font-display text-base font-semibold leading-snug text-ink transition-colors group-hover:text-teal-600 sm:text-lg">
													{blog.title}
												</h4>

												<p className="mt-2 line-clamp-2 text-sm leading-6 text-mist">
													{blog.excerpt}
												</p>

												<div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-mist">
													<span>
														{formatDate(
															blog.publishedAt,
														)}
													</span>
													<span className="flex items-center gap-1">
														<Clock3 size={13} />
														{blog.readTime} min read
													</span>
												</div>
											</div>
										</Link>
									</motion.article>
								</Reveal>
							))}

							{trendingBlogs.length === 0 && (
								<p className="rounded-2xl border border-black/5 p-6 text-sm text-mist">
									No trending articles available yet.
								</p>
							)}
						</div>

						<Link
							href="/blogs"
							className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-teal-600 sm:hidden"
						>
							See More Articles
							<ArrowRight size={16} />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
