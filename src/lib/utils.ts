export { cn } from "cn";

export function scrollToTop() {
	if (typeof window === "undefined") return;

	window.history.replaceState(
		null,
		"",
		window.location.pathname + window.location.search,
	);
	window.scrollTo({ top: 0, behavior: "smooth" });
}
