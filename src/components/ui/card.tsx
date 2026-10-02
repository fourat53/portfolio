import { forwardRef, type HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	variant?: "default" | "elevated" | "outlined" | "project";
	hover?: boolean;
	padding?: "none" | "sm" | "md" | "lg";
	children: React.ReactNode;
	className?: string;
}

const paddingClasses = {
	none: "",
	sm: "p-4",
	md: "p-6",
	lg: "p-8",
};

const variantClasses = {
	default: "bg-(--bg-secondary) border border-white/5",
	elevated:
		"bg-(--bg-background) border border-white/5 shadow-[0_22px_44px_rgba(0,0,0,0.3)]",
	outlined: "bg-transparent border border-white/10",
	project:
		"bg-(--bg-background) border border-background/5 overflow-hidden relative",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
	(
		{
			variant = "default",
			hover = false,
			padding = "md",
			children,
			className = "",
			...props
		},
		ref,
	) => {
		return (
			<div
				ref={ref}
				className={`${variantClasses[variant]} ${paddingClasses[padding]} transition-all duration-300 ${
					hover
						? "group-hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]"
						: ""
				} ${className}`}
				{...props}
			>
				{children}
			</div>
		);
	},
);

Card.displayName = "Card";

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
	({ className = "", children, ...props }, ref) => {
		return (
			<div ref={ref} className={`mb-6 ${className}`} {...props}>
				{children}
			</div>
		);
	},
);

CardHeader.displayName = "CardHeader";

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
	className?: string;
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
	({ className = "", children, ...props }, ref) => {
		return (
			<h3
				ref={ref}
				className={`text-xl uppercase tracking-widest font-light text-white ${className}`}
				{...props}
			>
				{children}
			</h3>
		);
	},
);

CardTitle.displayName = "CardTitle";

export interface CardDescriptionProps
	extends HTMLAttributes<HTMLParagraphElement> {
	className?: string;
}

export const CardDescription = forwardRef<
	HTMLParagraphElement,
	CardDescriptionProps
>(({ className = "", children, ...props }, ref) => {
	return (
		<p
			ref={ref}
			className={`text-sm text-stone-400 font-light leading-relaxed mt-4 mb-8 ${className}`}
			{...props}
		>
			{children}
		</p>
	);
});

CardDescription.displayName = "CardDescription";

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
	({ className = "", children, ...props }, ref) => {
		return (
			<div ref={ref} className={className} {...props}>
				{children}
			</div>
		);
	},
);

CardContent.displayName = "CardContent";

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
	({ className = "", children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={`mt-8 flex items-center gap-3 ${className}`}
				{...props}
			>
				{children}
			</div>
		);
	},
);

CardFooter.displayName = "CardFooter";
