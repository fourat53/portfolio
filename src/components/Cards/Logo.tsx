import favicon from "/icons/favicon.svg";

export default function Logo({ size }: { size: number }) {
	return (
		<button
			type="button"
			style={{ width: size * 0.9, height: size }}
			className="cursor-pointer border-2 border-primary hover:shadow-md pl-px w-full h-full flex items-center justify-center"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
