import { IconArrowDown } from "@tabler/icons-react";
import { motion, type Variants } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const glowVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 1.6, ease: "easeOut", delay: 0.6 },
	},
};

const imageVariants: Variants = {
	hidden: { opacity: 0, x: -48, scale: 0.98 },
	visible: {
		opacity: 1,
		x: 0,
		scale: 1,
		transition: { duration: 1.1, ease: EASE, delay: 0.25 },
	},
};

function lineVariants(delay: number): Variants {
	return {
		hidden: { opacity: 0, y: "110%" },
		visible: {
			opacity: 1,
			y: "0%",
			transition: { duration: 0.9, ease: EASE, delay },
		},
	};
}

function fadeUpVariants(delay: number): Variants {
	return {
		hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
		visible: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			transition: { duration: 0.9, ease: EASE, delay },
		},
	};
}

const firstLineVariants = lineVariants(0.15);
const secondLineVariants = lineVariants(0.3);
const copyVariants = fadeUpVariants(0.45);
const ctaVariants = fadeUpVariants(0.65);

export function Hero() {
	return (
		<section className="relative md:pb-15 pt-20 md:pt-30">
			<motion.div
				className="relative flex md:h-[calc(100vh-180px)] overflow-hidden border-y border-primary bg-bg-secondary md:min-h-[calc(100vh-200px)] flex-col-reverse md:flex-row max-md:items-center"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.1 }}
			>
				<motion.div
					aria-hidden="true"
					className="pointer-events-none absolute -inset-8 z-0"
					style={{
						background:
							"radial-gradient(60% 55% at 50% 45%, var(--shadow-glow), transparent 70%)",
					}}
					variants={glowVariants}
				/>

				<motion.img
					alt="Background"
					src="picture.png"
					className="min-w-62 md:max-w-md object-contain object-bottom w-[50%] relative z-10"
					variants={imageVariants}
				/>

				<div className="py-6 relative z-10 flex w-full flex-1 flex-col items-center justify-center text-center">
					<h1 className="mb-6 mt-4 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
						<span className="block overflow-hidden">
							<motion.span className="block" variants={firstLineVariants}>
								Software Engineer
							</motion.span>
						</span>
						<span className="block overflow-hidden">
							<motion.span
								className="block italic text-text-secondary"
								variants={secondLineVariants}
							>
								& Full-Stack Developer
							</motion.span>
						</span>
					</h1>

					<motion.p
						className="mb-4 md:mb-12 max-w-2xl text-sm font-light leading-relaxed text-text-muted md:text-base"
						variants={copyVariants}
					>
						Software engineer with hands-on experience in full-stack
						development, DevOps, and AI. I build premium web applications,
						reliable delivery pipelines, and intelligent features like RAG
						systems and AI agents, tailored to your business needs.
					</motion.p>

					<motion.a
						href="#services"
						className="group z-10 flex cursor-pointer items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-text-secondary transition-colors hover:text-accent-secondary"
						variants={ctaVariants}
					>
						<span className="rounded-full border p-2.5">
							<IconArrowDown size={14} stroke={1.5} />
						</span>
						MY SERVICES
					</motion.a>
				</div>
			</motion.div>
		</section>
	);
}
