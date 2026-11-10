"use client";

import { motion, type Target, type Transition } from "motion/react";
import type { ReactNode } from "react";

export type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "blur";

interface Pose extends Target {
	opacity: number;
}

const hiddenPoses: Record<RevealVariant, Pose> = {
	up: { opacity: 0, y: 64, rotate: -2 },
	down: { opacity: 0, y: -40 },
	left: { opacity: 0, x: -96, rotate: -4 },
	right: { opacity: 0, x: 96, rotate: 4 },
	scale: { opacity: 0, scale: 0.9, filter: "blur(8px)" },
	blur: { opacity: 0, filter: "blur(12px)" },
};

const visiblePoses: Record<RevealVariant, Pose> = {
	up: { opacity: 1, y: 0, rotate: 0 },
	down: { opacity: 1, y: 0 },
	left: { opacity: 1, x: 0, rotate: 0 },
	right: { opacity: 1, x: 0, rotate: 0 },
	scale: { opacity: 1, scale: 1, filter: "blur(0px)" },
	blur: { opacity: 1, filter: "blur(0px)" },
};

interface RevealProps {
	children: ReactNode;
	variant?: RevealVariant;
	delay?: number;
	className?: string;
	amount?: number;
}

export function Reveal({
	children,
	variant = "up",
	delay = 0,
	className,
	amount = 0.2,
}: RevealProps) {
	const delaySeconds = delay / 1000;

	const transition: Transition = {
		x: {
			type: "spring",
			stiffness: 55,
			damping: 15,
			mass: 1,
			delay: delaySeconds,
		},
		y: {
			type: "spring",
			stiffness: 55,
			damping: 15,
			mass: 1,
			delay: delaySeconds,
		},
		rotate: {
			type: "spring",
			stiffness: 55,
			damping: 15,
			mass: 1,
			delay: delaySeconds,
		},
		scale: { type: "spring", stiffness: 70, damping: 18, delay: delaySeconds },
		opacity: { duration: 0.55, ease: "easeOut", delay: delaySeconds },
		filter: {
			duration: 0.8,
			ease: [0.22, 1, 0.36, 1],
			delay: delaySeconds,
		},
	};

	return (
		<motion.div
			initial={hiddenPoses[variant]}
			whileInView={visiblePoses[variant]}
			viewport={{ once: true, amount }}
			transition={transition}
			className={className}
		>
			{children}
		</motion.div>
	);
}
