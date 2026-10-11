import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getAllBlogs, type Blog } from "@/lib/blogs";

type BlogDetailsProps = {
	blog: Blog;
};

function formatDate(date: string) {
	return new Date(`${date.slice(0, 10)}T12:00:00`).toLocaleDateString(
		"en-US",
		{
			month: "long",
			day: "numeric",
			year: "numeric",
		},
	);
}

export default function BlogDetails({ blog }: BlogDetailsProps) {
	const relatedBlogs = getAllBlogs()
		.filter(
			(item) => item.id !== blog.id && item.category === blog.category,
		)
		.slice(0, 3);

	const fallbackRelatedBlogs =
		relatedBlogs.length > 0
			? relatedBlogs
			: getAllBlogs()
					.filter((item) => item.id !== blog.id)
					.slice(0, 3);

	return (
		<main className="min-h-screen bg-white">
			{/* Article header */}
			<section className="border-b border-black/5 bg-[#f7fbfa] pt-10">
				<div className="section-max container-px py-10 sm:py-14">
					<Reveal>
						<Link
							href="/blogs"
							className="inline-flex items-center gap-2 text-sm font-semibold text-mist transition-colors hover:text-teal-600"
						>
							<ArrowLeft size={16} aria-hidden="true" />
							Back to all articles
						</Link>

						<div className="mx-auto mt-10 max-w-3xl text-center sm:mt-14">
							<p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600 sm:text-sm">
								{blog.category}
							</p>

							<h1 className="font-display mt-5 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
								{blog.title}
							</h1>

							<p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-mist sm:text-lg sm:leading-8">
								{blog.excerpt}
							</p>

							<div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-mist">
								<div className="text-left">
									<p className="font-semibold text-ink">
										{blog.author.name}
									</p>
									<p className="mt-1 text-xs">
										{blog.author.role}
									</p>
								</div>

								<span
									className="hidden h-8 w-px bg-black/10 sm:block"
									aria-hidden="true"
								/>

								<span>{formatDate(blog.publishedAt)}</span>

								<span className="inline-flex items-center gap-1.5">
									<Clock3 size={15} aria-hidden="true" />
									{blog.readTime} min read
								</span>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			{/* Cover image */}
			<section className="section-max container-px pt-8 sm:pt-12">
				<Reveal>
					<div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-black/5 sm:rounded-3xl">
						<Image
							src={blog.image}
							alt={blog.imageAlt}
							fill
							priority
							sizes="100vw"
							className="object-cover"
						/>
					</div>
				</Reveal>
			</section>

			{/* Article body */}
			<section className="section-max container-px py-12 sm:py-16">
				<div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
					<article className="min-w-0">
						<Reveal>
							<div className="space-y-6">
								{blog.content.map((block, index) =>
									block.type === "heading" ? (
										<h2
											key={`${block.type}-${index}`}
											className="font-display pt-3 text-2xl font-semibold leading-snug text-ink sm:text-3xl"
										>
											{block.text}
										</h2>
									) : (
										<p
											key={`${block.type}-${index}`}
											className="text-base leading-8 text-mist sm:text-lg sm:leading-9"
										>
											{block.text}
										</p>
									),
								)}
							</div>
						</Reveal>

						{blog.tags.length > 0 && (
							<div className="mt-10 border-t border-black/5 pt-6">
								<p className="mb-3 text-sm font-semibold text-ink">
									Topics covered
								</p>

								<div className="flex flex-wrap gap-2">
									{blog.tags.map((tag) => (
										<Link
											key={tag}
											href={`/blogs?category=${encodeURIComponent(blog.category)}`}
											className="rounded-full border border-black/5 bg-[#f7fbfa] px-3.5 py-2 text-xs font-medium text-mist transition-colors hover:border-teal-600 hover:text-teal-700"
										>
											{tag}
										</Link>
									))}
								</div>
							</div>
						)}

						<div className="mt-10 rounded-2xl border border-teal-600/10 bg-[#f7fbfa] p-6 sm:p-8">
							<p className="font-display text-xl font-semibold text-ink">
								Your health deserves informed decisions.
							</p>
							<p className="mt-2 text-sm leading-6 text-mist">
								Explore more articles for practical health
								information and everyday wellness guidance.
							</p>
							<Link
								href="/blogs"
								className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
							>
								Explore all articles
								<ArrowRight size={16} aria-hidden="true" />
							</Link>
						</div>
					</article>

					{/* Article sidebar */}
					<aside className="h-fit rounded-2xl border border-black/5 bg-white p-5 shadow-soft lg:sticky lg:top-24">
						<p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600">
							About this article
						</p>

						<h2 className="font-display mt-3 text-xl font-semibold leading-snug text-ink">
							{blog.title}
						</h2>

						<div className="mt-5 space-y-4 border-t border-black/5 pt-5 text-sm">
							<div>
								<p className="text-xs text-mist">Written by</p>
								<p className="mt-1 font-semibold text-ink">
									{blog.author.name}
								</p>
								<p className="mt-1 text-xs text-mist">
									{blog.author.role}
								</p>
							</div>

							<div>
								<p className="text-xs text-mist">Published</p>
								<p className="mt-1 font-medium text-ink">
									{formatDate(blog.publishedAt)}
								</p>
							</div>

							<div>
								<p className="text-xs text-mist">
									Last updated
								</p>
								<p className="mt-1 font-medium text-ink">
									{formatDate(blog.updatedAt)}
								</p>
							</div>

							<div>
								<p className="text-xs text-mist">
									Reading time
								</p>
								<p className="mt-1 font-medium text-ink">
									{blog.readTime} minutes
								</p>
							</div>
						</div>
					</aside>
				</div>
			</section>

			{/* Related articles */}
			{fallbackRelatedBlogs.length > 0 && (
				<section className="border-t border-black/5 bg-[#f7fbfa] py-14 sm:py-20">
					<div className="section-max container-px">
						<Reveal>
							<div className="mb-8 flex items-end justify-between gap-4">
								<div>
									<p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-600">
										Keep exploring
									</p>
									<h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
										Related articles
									</h2>
								</div>

								<Link
									href="/blogs"
									className="hidden items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-teal-600 sm:inline-flex"
								>
									View all
									<ArrowRight size={16} aria-hidden="true" />
								</Link>
							</div>
						</Reveal>

						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{fallbackRelatedBlogs.map((item, index) => (
								<Reveal key={item.id} delay={index * 0.06}>
									<Link
										href={`/blogs/${item.slug}`}
										className="group block h-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-soft transition-shadow hover:shadow-card"
									>
										<div className="relative aspect-[16/10] overflow-hidden bg-black/5">
											<Image
												src={item.image}
												alt={item.imageAlt}
												fill
												sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
												className="object-cover transition-transform duration-500 group-hover:scale-105"
											/>
										</div>

										<div className="p-5">
											<p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
												{item.category}
											</p>

											<h3 className="font-display mt-3 line-clamp-2 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-teal-600">
												{item.title}
											</h3>

											<p className="mt-2 line-clamp-2 text-sm leading-6 text-mist">
												{item.excerpt}
											</p>

											<span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-600">
												Read article
												<ArrowRight
													size={15}
													aria-hidden="true"
													className="transition-transform group-hover:translate-x-1"
												/>
											</span>
										</div>
									</Link>
								</Reveal>
							))}
						</div>
					</div>
				</section>
			)}
		</main>
	);
}
