import {
	IconArrowRight,
	IconBrandGithub,
	IconBrandGitlab,
	IconBrandLinkedin,
	IconMail,
	IconMapPin,
	IconPhone,
} from "@tabler/icons-react";
import { motion, type Variants } from "motion/react";
import { scrollToTop } from "@/lib/utils";

const socials = [
	{
		href: "https://github.com/fourat53",
		label: "GitHub",
		icon: IconBrandGithub,
	},
	{
		href: "https://www.linkedin.com/in/taktak-fourat-558316313",
		label: "LinkedIn",
		icon: IconBrandLinkedin,
	},
	{
		href: "https://gitlab.com/fourat53",
		label: "GitLab",
		icon: IconBrandGitlab,
	},
	{
		href: "mailto:fourat610654@gmail.com",
		label: "Email",
		icon: IconMail,
	},
	{
		href: "tel:+21653610654",
		label: "Phone",
		icon: IconPhone,
	},
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const footerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.09, delayChildren: 0.1 },
	},
};

const accentLineVariants: Variants = {
	hidden: { opacity: 0, scaleX: 0 },
	visible: {
		opacity: 1,
		scaleX: 1,
		transition: { duration: 1.1, ease: EASE },
	},
};

const slideLeftVariants: Variants = {
	hidden: { opacity: 0, x: -32 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.75, ease: EASE },
	},
};

const connectVariants: Variants = {
	hidden: { opacity: 0, x: 32 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.75,
			ease: EASE,
			staggerChildren: 0.06,
			delayChildren: 0.15,
		},
	},
};

const fadeUpVariants: Variants = {
	hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.7, ease: EASE },
	},
};

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<motion.footer
			id="contact"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			variants={footerVariants}
			className="relative overflow-hidden border-t border-primary bg-bg-secondary"
		>
			<motion.div
				aria-hidden="true"
				variants={accentLineVariants}
				className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-linear-to-r from-transparent via-accent-primary to-transparent"
			/>

			<div className="px-16">
				<div className="py-16 px-5 flex flex-col justify-between gap-8 md:flex-row">
					<motion.div variants={slideLeftVariants}>
						<p className="flex items-center gap-3 text-sm font-medium tracking-[0.15em] uppercase text-text-primary">
							Fourat Taktak
						</p>
						<p className="mt-3 max-w-sm text-xs leading-relaxed tracking-wide text-text-subtle">
							Software engineer specializing in full-stack web development,
							DevOps and AI integrations.
						</p>
						<p className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-text-subtle">
							<IconMapPin size={13} stroke={1.5} />
							Based in Tunisia
						</p>
					</motion.div>

					<motion.div
						variants={connectVariants}
						className="flex flex-col gap-4"
					>
						<span className="text-[10px] font-medium tracking-[0.2em] uppercase text-foreground">
							Connect
						</span>

						<div className="flex flex-wrap gap-x-6 gap-y-3">
							{socials.map((social) => {
								const Icon = social.icon;
								return (
									<motion.a
										key={social.href}
										href={social.href}
										target={
											social.href.startsWith("http") ? "_blank" : undefined
										}
										rel={
											social.href.startsWith("http") ? "noreferrer" : undefined
										}
										variants={fadeUpVariants}
										whileHover={{ x: 4 }}
										className="group flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-text-secondary transition-colors hover:text-accent-secondary"
									>
										<Icon
											size={15}
											stroke={1.5}
											className="transition-transform group-hover:scale-110"
										/>
										{social.label}
									</motion.a>
								);
							})}
						</div>
					</motion.div>
				</div>
				<motion.div
					variants={fadeUpVariants}
					className="p-5 flex flex-col items-start justify-between gap-4 border-t text-[10px] uppercase tracking-[0.18em] text-text-subtle sm:flex-row sm:items-center"
				>
					<span>© {year} Fourat Taktak</span>
					<motion.button
						type="button"
						onClick={scrollToTop}
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.97 }}
						className="group flex cursor-pointer items-center gap-2 transition-colors hover:text-text-primary"
					>
						Back to top
						<IconArrowRight
							size={12}
							stroke={1.5}
							className="-rotate-90 transition-transform group-hover:-translate-y-0.5"
						/>
					</motion.button>
				</motion.div>
			</div>
		</motion.footer>
	);
}
