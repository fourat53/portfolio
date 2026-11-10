import SectionTitle from "#/layout/SectionTitle.tsx";
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

export function Background() {
	return (
		<section
			id="background"
			className="border-t border-primary bg-bg-secondary px-6 py-16 sm:py-20 lg:py-24"
		>
			<SectionTitle title="Background" />

			<div className="mx-auto max-w-5xl">
				<Reveal variant="right" delay={140}>
					<p className="text-sm font-light leading-relaxed text-text-muted">
						The academic foundation and communication skills behind my
						engineering work.
					</p>
				</Reveal>

				<div className="pt-6 sm:pt-8 grid gap-10 md:grid-cols-[1.6fr_1fr] md:gap-16">
					<div>
						<Reveal variant="up" delay={80}>
							<h3 className="mb-6 text-[11px] tracking-[0.2em] uppercase text-text-subtle">
								Education
							</h3>
						</Reveal>
						<ol className="relative ml-1 space-y-8 border-l border-primary pl-6">
							{education.map((item, index) => (
								<li key={item.degree} className="relative">
									<span
										aria-hidden="true"
										className="absolute top-1.5 -left-7.25 h-2 w-2 rounded-full border border-primary bg-bg-primary"
									/>
									<Reveal variant="left" delay={index * 110} amount={0.2}>
										<div>
											<div className="text-[10px] tracking-[0.18em] uppercase text-text-subtle">
												{item.period}
											</div>
											<h4 className="mt-1.5 text-base text-text-secondary">
												{item.degree}
											</h4>
											<p className="mt-1 text-xs text-text-muted">
												{item.school}
											</p>
										</div>
									</Reveal>
								</li>
							))}
						</ol>
					</div>

					<div>
						<Reveal variant="up" delay={140}>
							<h3 className="mb-6 text-[11px] tracking-[0.2em] uppercase text-text-subtle">
								Languages
							</h3>
						</Reveal>
						<Reveal variant="right" delay={220}>
							<div>
								<ul className="space-y-4">
									{languages.map((language, index) => (
										<li
											key={language}
											className="flex items-baseline justify-between gap-4 border-b border-primary/60 pb-3"
										>
											<span className="text-sm text-text-secondary">
												{language}
											</span>
											<span className="text-[10px] tracking-[0.2em] uppercase text-text-subtle">
												0{index + 1}
											</span>
										</li>
									))}
								</ul>
								<p className="mt-5 text-xs leading-relaxed text-text-subtle">
									Professional proficiency or higher across all three.
								</p>
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	);
}
