"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "@/lib/theme-context";

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="size-9 p-2 bg-bg-primary text-text-secondary hover:text-accent-secondary border hover:border-primary transition-colors"
		>
			<span className="sr-only">
				{theme === "dark" ? "Light mode" : "Dark mode"}
			</span>
			{theme === "dark" ? (
				<IconSun stroke={1.5} className="size-4.5" />
			) : (
				<IconMoon stroke={1.5} className="size-4.5" />
			)}
		</button>
	);
}
