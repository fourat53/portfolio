"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import Logo from "#/components/Cards/Logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
	{ href: "#services", label: "Services" },
	{ href: "#projects", label: "Projects" },
	{ href: "#experience", label: "Experience" },
	{ href: "#about", label: "About" },
	{ href: "#contact", label: "Contact" },
];

export default function Navigation() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="px-4 sm:px-6 tracking-[0.2em]">
			<div className="flex h-20 items-center justify-between">
				<Logo size={36} />
				<nav
					className="hidden md:flex gap-2 text-[11px] uppercase"
					aria-label="Main navigation"
				>
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="px-2.5 py-1.5 nav-link hover:text-text-primary transition-colors"
						>
							{link.label}
						</a>
					))}
				</nav>
				<div className="flex items-center gap-3 sm:gap-4">
					<a
						href="mailto:fourat610654@gmail.com"
						className="bg-bg-primary text-text-secondary hover:text-accent-secondary px-4 sm:px-6 py-2.5 border hover:border-primary font-medium transition-colors uppercase tracking-[0.15em] text-xs flex items-center gap-3"
					>
						LET'S TALK
					</a>
					<ThemeToggle />
					<button
						type="button"
						onClick={() => setMenuOpen((open) => !open)}
						className="md:hidden text-text-primary hover:text-accent-secondary transition-colors"
						aria-label={
							menuOpen ? "Close navigation menu" : "Open navigation menu"
						}
						aria-expanded={menuOpen}
					>
						{menuOpen ? (
							<IconX size={22} stroke={1.5} />
						) : (
							<IconMenu2 size={22} stroke={1.5} />
						)}
					</button>
				</div>
			</div>

			{menuOpen && (
				<nav
					className="md:hidden flex flex-col gap-1 pb-6 text-[11px] uppercase"
					aria-label="Mobile navigation"
				>
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							onClick={() => setMenuOpen(false)}
							className="px-2.5 py-2.5 nav-link hover:text-text-primary transition-colors"
						>
							{link.label}
						</a>
					))}
				</nav>
			)}
		</div>
	);
}
