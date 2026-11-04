import { useEffect, useRef } from "react";

export function ScrollProgress() {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		let frame = 0;
		const update = () => {
			frame = 0;
			const node = ref.current;
			if (!node) return;
			const doc = document.documentElement;
			const max = doc.scrollHeight - window.innerHeight;
			const progress = max > 0 ? window.scrollY / max : 0;
			node.style.transform = `scaleX(${progress})`;
		};
		const onScroll = () => {
			if (!frame) frame = window.requestAnimationFrame(update);
		};

		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, []);

	return (
		<div
			aria-hidden="true"
			className="fixed top-0 left-0 z-60 h-0.5 w-full pointer-events-none"
		>
			<div
				ref={ref}
				className="h-full w-full origin-left bg-linear-to-r from-accent-primary to-accent-secondary shadow-glow"
				style={{ transform: "scaleX(0)" }}
			/>
		</div>
	);
}
