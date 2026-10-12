"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.1,
			smoothWheel: true,
			anchors: true,
		});

		let frameId = 0;

		function raf(time: number) {
			lenis.raf(time);
			frameId = requestAnimationFrame(raf);
		}

		frameId = requestAnimationFrame(raf);

		return () => {
			cancelAnimationFrame(frameId);
			lenis.destroy();
		};
	}, []);

	return children;
}
