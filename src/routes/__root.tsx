import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "#/lib/theme-context";
import appCss from "../styles.css?url";

function getInitialThemeScript() {
	return `(function() {
		try {
			var stored = localStorage.getItem('theme');
			var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			var theme = stored || (prefersDark ? 'dark' : 'light');
			document.documentElement.classList.toggle('dark', theme === 'dark');
		} catch (e) {}
	})();`;
}

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Fourat Taktak's Portfolio",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "icon",
				href: "favicon.png",
			},
		],
		scripts: [
			{
				children: getInitialThemeScript(),
				strategy: "inline",
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<ThemeProvider>{children}</ThemeProvider>
				<TanStackDevtools
					config={{ position: "bottom-right" }}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
