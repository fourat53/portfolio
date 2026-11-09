import { scrollToTop } from "@/lib/utils";
import favicon from "/icons/favicon.svg";

export default function Logo({ size }: { size: number }) {
	return (
		<button
			type="button"
			style={{ width: size * 0.9, height: size }}
			className="flex h-full w-full cursor-pointer items-center justify-center border-2 border-primary pl-px hover:shadow-md"
			onClick={scrollToTop}
			aria-label="Back to top"
		>
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
		</button>
	);
}
