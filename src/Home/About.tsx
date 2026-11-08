import {
	IconArrowRight,
	IconMail,
	IconMapPin,
	IconPhone,
} from "@tabler/icons-react";
import { Reveal } from "@/components/Reveal";

const education = [
	{
		period: "Sep 2021 - Jan 2026",
		degree: "Computer Science Engineering",
		school: "Esprit School of Engineering",
	},
	{
		period: "Sep 2019 - Jun 2021",
		degree: "Preparatory Program for Engineering Schools",
		school: "Esprit Preparatory School",
	},
	{
		period: "Sep 2018 - Jun 2019",
		degree: "Baccalaureate in Mathematics",
		school: "Pilot High School of Kairouan",
	},
];

const languages = ["English", "French", "Arabic"];

export function About() {
	return (
		<section
			id="about"
			className="px-4 py-14 md:py-32 border-t border-primary bg-bg-secondary"
		>
			<div className="flex flex-col items-center text-center">
				<Reveal variant="blur">
					<h2 className="font-display text-[34px] md:text-5xl lg:text-7xl mb-4 md:mb-8">
						A website that leaves <br />
						<span className="italic text-text-secondary">
							a lasting impression!
						</span>
					</h2>
				</Reveal>
				<Reveal variant="up" delay={180}>
					<p className="text-text-muted mb-6 md:mb-12 md:max-w-2xl font-light leading-relaxed">
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
						className="bg-bg-primary text-text-secondary hover:text-accent-secondary px-8 py-4 border hover:border-primary font-medium transition-colors uppercase tracking-[0.2em] text-xs flex items-center gap-3"
					>
						GET IN TOUCH <IconArrowRight size={16} stroke={1.5} />
					</a>
				</Reveal>
			</div>

			<div className="max-w-5xl mx-auto mt-14 md:mt-24 grid gap-10 md:grid-cols-3 border-t border-primary pt-10 md:pt-14 text-left">
				<Reveal variant="left" delay={80}>
					<div>
						<h3 className="text-[11px] tracking-[0.2em] uppercase text-text-subtle mb-5">
							Education
						</h3>
						<ul className="space-y-4">
							{education.map((item) => (
								<li key={item.degree}>
									<div className="text-sm text-text-secondary">
										{item.degree}
									</div>
									<div className="text-xs text-text-muted mt-1">
										{item.school}
									</div>
									<div className="text-[10px] tracking-[0.18em] uppercase text-text-subtle mt-1">
										{item.period}
									</div>
								</li>
							))}
						</ul>
					</div>
				</Reveal>

				<Reveal variant="up" delay={180}>
					<div>
						<h3 className="text-[11px] tracking-[0.2em] uppercase text-text-subtle mb-5">
							Languages
						</h3>
						<ul className="space-y-2 text-sm text-text-secondary">
							{languages.map((language) => (
								<li key={language}>{language}</li>
							))}
						</ul>
						<p className="text-xs text-text-subtle mt-3">
							Professional proficiency or higher
						</p>
					</div>
				</Reveal>

				<Reveal variant="right" delay={280}>
					<div>
						<h3 className="text-[11px] tracking-[0.2em] uppercase text-text-subtle mb-5">
							Contact
						</h3>
						<div className="space-y-3 text-sm text-text-secondary">
							<a
								href="mailto:fourat610654@gmail.com"
								className="flex items-center gap-2 hover:text-accent-secondary transition-colors"
							>
								<IconMail size={15} stroke={1.5} />
								fourat610654@gmail.com
							</a>
							<a
								href="tel:+21653610654"
								className="flex items-center gap-2 hover:text-accent-secondary transition-colors"
							>
								<IconPhone size={15} stroke={1.5} />
								+216 53 610 654
							</a>
							<div className="flex items-center gap-2 text-text-muted">
								<IconMapPin size={15} stroke={1.5} />
								Tunisia
							</div>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
