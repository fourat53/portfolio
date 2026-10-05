import { IconArrowRight } from "@tabler/icons-react";

export function About() {
	return (
		<section
			id="about"
			className="px-4 py-14 md:py-32 border-t border-primary text-center flex flex-col items-center bg-bg-secondary"
		>
			<h2 className="font-display text-[34px] md:text-5xl lg:text-7xl mb-4 md:mb-8">
				A website that leaves <br />
				secondary
				<span className="italic text-text-secondary">
					a lasting impression!
				</span>
			</h2>
			<p className="text-text-muted mb-6 md:mb-12 md:max-w-2xl font-light leading-relaxed">
				Hi, I'm Fourat Taktak - a freelancer specializing in premium web design,
				development, and AI solutions. I'm passionate about creating unique and
				effective solutions for my clients. Let's work together to bring your
				vision to life!
			</p>
			<a
				href="mailto:fourat610654@gmail.com"
				className="bg-bg-primary text-text-secondary hover:text-accent-secondary px-8 py-4 border hover:border-primary font-medium transition-colors uppercase tracking-[0.2em] text-xs flex items-center gap-3"
			>
				GET IN TOUCH <IconArrowRight size={16} stroke={1.5} />
			</a>
		</section>
	);
}
