import { cn } from "cn";
import favicon from "/favicon.png";

export default function Logo({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				"relative rounded-[10%] border border-primary/40 bg-(--bg-tertiary) hover:shadow-[0_0_10px_rgba(212,175,55,0.1)]",
				className,
			)}
		>
			<div className="p-[16%]">
				<img src={favicon} alt="Profile" />
			</div>
		</div>
	);
}
