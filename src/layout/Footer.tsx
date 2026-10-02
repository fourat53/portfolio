import {
	IconArrowRight,
	IconBrandGithub,
	IconBrandGitlab,
	IconBrandLinkedin,
} from "@tabler/icons-react";

const socials = [
	{
		href: "https://github.com",
		label: "GitHub",
		icon: IconBrandGithub,
	},
	{
		href: "https://linkedin.com",
		label: "LinkedIn",
		icon: IconBrandLinkedin,
	},
	{
		href: "https://gitlab.com",
		label: "GitLab",
		icon: IconBrandGitlab,
	},
];

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-(--bg-sidebar) border-t border-(--border-subtle) px-6 py-16">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between gap-12">
					<div>
						<p className="text-sm tracking-[0.2em] uppercase text-(--text-primary)">
							Fourat Taktak
						</p>
						<p className="mt-3 max-w-sm text-xs leading-relaxed tracking-wide text-(--text-subtle)">
							Ingénieur informatique spécialisé dans le développement
							d'applications web modernes.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<span className="text-[10px] tracking-[0.2em] uppercase text-(--text-subtle)">
							Connect
						</span>

						<div className="flex flex-wrap gap-x-6 gap-y-3">
							{socials.map((social) => {
								const Icon = social.icon;
								return (
									<a
										key={social.href}
										href={social.href}
										target="_blank"
										rel="noreferrer"
										className="group flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-(--text-primary) transition-colors hover:text-(--text-subtle)"
									>
										<Icon
											size={15}
											stroke={1.5}
											className="transition-transform group-hover:scale-110"
										/>
										{social.label}
									</a>
								);
							})}
						</div>
					</div>
				</div>
				<div className="mt-16 pt-6 border-t border-(--border-subtle) flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] tracking-[0.18em] uppercase text-(--text-subtle)">
					<span>© {year} Fourat Taktak</span>
					<button
						type="button"
						onClick={() =>
							window.scrollTo({
								top: 0,
								behavior: "smooth",
							})
						}
						className="group flex items-center gap-2 transition-colors hover:text-(--text-primary)"
					>
						Back to top
						<IconArrowRight
							size={12}
							stroke={1.5}
							className="-rotate-90 transition-transform group-hover:-translate-y-0.5"
						/>
					</button>
				</div>
			</div>
		</footer>
	);
}
