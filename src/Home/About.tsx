import { IconArrowRight } from "@tabler/icons-react";
import { Reveal } from "@/components/Reveal";

export function About() {
	return (
		<section
			id="about"
			className="border-t border-primary bg-bg-secondary px-6 py-20 md:py-32"
		>
			<div className="flex flex-col items-center text-center">
				<Reveal variant="blur">
					<div className="mb-5 text-[11px] tracking-[0.2em] uppercase text-text-subtle md:mb-6">
						About
					</div>
					<h2 className="mb-4 font-display text-[34px] md:mb-8 md:text-5xl lg:text-7xl">
						A website that leaves <br />
						<span className="italic text-text-secondary">
							a lasting impression!
						</span>
					</h2>
				</Reveal>
				<Reveal variant="up" delay={180}>
					<p className="mb-6 max-w-2xl font-light leading-relaxed text-text-muted md:mb-12">
						Hi, I'm Fourat Taktak, a freelance software engineer specializing in
						full-stack web development, DevOps, and AI solutions. I hold a
						Computer Science Engineering degree from Esprit and have hands-on
						experience at Echo Parrot, Kreatek, and Orange. Let's work together
						to bring your vision to life!
					</p>
				</Reveal>
				<Reveal variant="up" delay={360}>
					<a
						href="mailto:fourat610654@gmail.com"
						className="flex items-center gap-3 border bg-bg-primary px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-text-secondary transition-colors hover:border-primary hover:text-accent-secondary"
					>
						GET IN TOUCH <IconArrowRight size={16} stroke={1.5} />
					</a>
				</Reveal>
			</div>
		</section>
	);
}
