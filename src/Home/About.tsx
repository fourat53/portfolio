import { IconArrowRight } from "@tabler/icons-react";

export function About() {
	return (
		<section
			id="about"
			className="py-40 border-t border-(--border-subtle) text-center flex flex-col items-center bg-(--bg-secondary)"
		>
			<h2 className="display-title text-5xl md:text-7xl lg:text-8xl mb-8">
				A website that leaves <br />
				secondary
				<span className="italic text-(--text-secondary)">
					a lasting impression!
				</span>
			</h2>
			<p className="text-(--text-muted) max-w-xl mx-auto mb-12 font-light leading-relaxed px-6">
				Hi, I'm Fourat Taktak - a freelancer specializing in premium web design,
				development, and AI solutions. I'm passionate about creating unique and
				effective solutions for my clients. Let's work together to bring your
				vision to life!
			</p>
			<a
				href="mailto:fourat610654@gmail.com"
				className="text-(--text-primary) px-8 py-4 font-medium transition-colors uppercase tracking-[0.2em] text-xs flex items-center gap-3"
			>
				GET IN TOUCH <IconArrowRight size={16} stroke={1.5} />
			</a>
		</section>
	);
}
