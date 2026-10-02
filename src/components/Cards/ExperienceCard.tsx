interface ExperienceCardProps {
	number: string;
	date: string;
	company: string;
	role: string;
	description: string;
	technologies: string[];
	side: "left" | "right";
	className?: string;
}

function ExperienceCard({
	number,
	date,
	company,
	role,
	description,
	technologies,
	side,
}: ExperienceCardProps) {
	return (
		<div className="relative flex flex-col md:flex-row items-start md:items-center mb-24 group">
			{side === "left" ? (
				<>
					<div className="hidden md:flex flex-1 justify-end pr-20 text-right">
						<div>
							<div className="text-[10px] tracking-[0.2em] uppercase border border-white/10 px-4 py-1.5 inline-block mb-4 text-stone-500 bg-white/5 rounded-full">
								{date}
							</div>
							<h4 className="text-xl uppercase tracking-widest mb-2 text-white group-hover:text-primary transition-colors font-light">
								{company}
							</h4>
							<div className="text-sm text-stone-500">{role}</div>
						</div>
					</div>
					<div className="absolute left-10 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-(--bg-secondary) border border-white/10 group-hover:border-primary rounded-full z-10 flex items-center justify-center transition-colors">
						<span className="text-[10px] text-stone-500 group-hover:text-primary">
							{number}
						</span>
					</div>
					<div className="flex-1 pl-20 md:pl-20 text-left w-full mt-2 md:mt-0">
						<div className="md:hidden mb-6">
							<div className="text-[10px] tracking-[0.2em] uppercase border border-white/10 px-4 py-1.5 inline-block mb-4 text-stone-500 bg-white/5 rounded-full">
								{date}
							</div>
							<h4 className="text-xl uppercase tracking-widest mb-1 text-white font-light">
								{company}
							</h4>
						</div>
						<p className="text-sm text-stone-400 mb-6 font-light leading-relaxed">
							{description}
						</p>
						<ul className="text-sm text-stone-500 list-disc list-inside space-y-2 font-light">
							{technologies.map((tech) => (
								<li key={tech}>{tech}</li>
							))}
						</ul>
					</div>
				</>
			) : (
				<>
					<div className="flex-1 pl-20 md:pr-20 md:pl-0 text-left md:text-right order-2 md:order-1 w-full mt-2 md:mt-0">
						<div className="md:hidden mb-6">
							<div className="text-[10px] tracking-[0.2em] uppercase border border-white/10 px-4 py-1.5 inline-block mb-4 text-stone-500 bg-white/5 rounded-full">
								{date}
							</div>
							<h4 className="text-xl uppercase tracking-widest mb-1 text-white font-light">
								{company}
							</h4>
						</div>
						<p className="text-sm text-stone-400 mb-6 font-light leading-relaxed">
							{description}
						</p>
						<ul className="text-sm text-stone-500 list-disc list-inside space-y-2 font-light md:list-none">
							{technologies.map((tech) => (
								<li key={tech}>{tech}</li>
							))}
						</ul>
					</div>
					<div className="absolute left-10 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-[#0a0a0a] border border-white/10 group-hover:border-primary rounded-full z-10 flex items-center justify-center transition-colors">
						<span className="text-[10px] text-stone-500 group-hover:text-primary">
							{number}
						</span>
					</div>
					<div className="hidden md:flex flex-1 justify-start pl-20 text-left order-3">
						<div>
							<div className="text-[10px] tracking-[0.2em] uppercase border border-white/10 px-4 py-1.5 inline-block mb-4 text-stone-500 bg-white/5 rounded-full">
								{date}
							</div>
							<h4 className="text-xl uppercase tracking-widest mb-2 text-white group-hover:text-primary transition-colors font-light">
								{company}
							</h4>
							<div className="text-sm text-stone-500">{role}</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export { ExperienceCard, type ExperienceCardProps };
