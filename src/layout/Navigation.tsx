import Logo from "#/components/Cards/Logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
	{ href: "#services", label: "Services" },
	{ href: "#work", label: "Work" },
	{ href: "#about", label: "About" },
	{ href: "#contact", label: "Contact" },
];

export default function Navigation() {
	return (
		<div className="px-6 h-20 flex items-center justify-between tracking-[0.2em]">
			<Logo className="size-9" />
			<nav
				className="hidden md:flex gap-6 text-[11px] uppercase"
				aria-label="Main navigation"
			>
				{navLinks.map((link) => (
					<a
						key={link.href}
						href={link.href}
						className="px-2.5 py-1.5 nav-link hover:text-(--text-primary) transition-colors"
					>
						{link.label}
					</a>
				))}
			</nav>
			<div className="flex items-center gap-4">
				<a
					href="mailto:fourat610654@gmail.com"
					className="hidden sm:inline-flex bg-(--bg-primary) border border-(--border-subtle)  hover:border-primary px-6 py-2.5 transition-colors font-medium text-[12px] tracking-[0.2em] uppercase"
				>
					LET'S TALK
				</a>
				<ThemeToggle />
			</div>
		</div>
	);
}
