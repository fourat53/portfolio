"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "@/lib/theme-context";

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="relative p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-stone-400 hover:text-white"
			aria-label={
				theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
			}
		>
			<span className="sr-only">
				{theme === "dark" ? "Light mode" : "Dark mode"}
			</span>
			<IconSun
				size={18}
				stroke={1.5}
				className={theme === "dark" ? "block" : "hidden"}
			/>
			<IconMoon
				size={18}
				stroke={1.5}
				className={theme === "dark" ? "hidden" : "block"}
			/>
		</button>
	);
}
