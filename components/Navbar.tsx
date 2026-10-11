"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Plus } from "lucide-react";
import Link from "next/link";

const links = [
	{ label: "Home", href: "/" },
	{ label: "Our Serivces", href: "/#services" },
	{ label: "Find Docter", href: "/find-doctor" },
	{ label: "How it works", href: "/#benefits" },
	{ label: "Reviews", href: "/#testimonials" },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`fixed w-full top-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-white/90 backdrop-blur-md shadow-card"
					: "bg-white/0"
			}`}
		>
			<div className="section-max container-px flex items-center justify-between py-5">
				<Link
					href="/"
					className="flex items-center gap-2 font-display font-bold text-xl text-ink"
				>
					<span className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white">
						<Plus size={18} strokeWidth={3} />
					</span>
					Medicare
				</Link>

				<nav className="hidden lg:flex items-center gap-9">
					{links.map((l) => {
						const active =
							l.href === "/"
								? pathname === "/"
								: pathname.startsWith(l.href.split("#")[0]) &&
									l.href !== "/";
						return (
							<Link
								key={l.href}
								href={l.href}
								className={`text-sm font-medium transition-colors hover:text-teal-600 ${
									active ? "text-teal-600" : "text-mist"
								}`}
							>
								{l.label}
							</Link>
						);
					})}
				</nav>

				<div className="hidden md:flex items-center gap-3 text-right">
					<span className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
						<Phone size={16} />
					</span>
					<div>
						<div className="text-sm font-semibold text-ink">
							+233554205473
						</div>
						<div className="text-xs text-mist">
							Mon-Sat 9am - 6am
						</div>
					</div>
				</div>

				<button
					className="lg:hidden text-ink"
					onClick={() => setOpen((v) => !v)}
					aria-label="Toggle menu"
				>
					{open ? <X size={26} /> : <Menu size={26} />}
				</button>
			</div>

			<AnimatePresence>
				{open && (
					<motion.nav
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="lg:hidden overflow-hidden bg-white border-t border-teal-50"
					>
						<div className="container-px py-4 flex flex-col gap-4">
							{links.map((l) => (
								<a
									key={l.href}
									href={l.href}
									onClick={() => setOpen(false)}
									className="text-sm font-medium text-ink"
								>
									{l.label}
								</a>
							))}
							<a
								href="tel:+233554205473"
								className="text-sm font-semibold text-teal-600"
							>
								+233554205473
							</a>
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
}
