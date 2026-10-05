import { Link } from "@tanstack/react-router";
import favicon from "/favicon.svg";

export default function Logo({ size }: { size: number }) {
	return (
		<Link
			to="/"
			className="cursor-pointer border-2 border-primary hover:shadow-md"
			style={{
				width: size * 0.9,
				height: size,
			}}
		>
			<div className="pl-px w-full h-full flex items-center justify-center">
				<div
					className="bg-text-secondary"
					style={{
						width: size * 0.55,
						height: size * 0.6,
						maskImage: `url(${favicon})`,
						WebkitMaskImage: `url(${favicon})`,
						maskRepeat: "no-repeat",
						WebkitMaskRepeat: "no-repeat",
						maskPosition: "center",
						WebkitMaskPosition: "center",
						maskSize: "contain",
						WebkitMaskSize: "contain",
					}}
				/>
			</div>
		</Link>
	);
}
