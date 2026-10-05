"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "@/lib/theme-context";

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="relative p-2 bg-bg-tertiary border hover:border-primary hover:text-primary transition-colors text-stone-400"
		>
			<span className="sr-only">
				{theme === "dark" ? "Light mode" : "Dark mode"}
			</span>
			{theme === "dark" ? (
				<IconSun size={18} stroke={1.5} />
			) : (
				<IconMoon size={18} stroke={1.5} />
			)}
		</button>
	);
}
