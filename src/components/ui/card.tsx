import { cn } from "cn";
import { forwardRef, type HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	variant: "service" | "project";
	hover?: boolean;
	children: React.ReactNode;
	className?: string;
}

const variantClasses = {
	service:
		"py-6 px-8 bg-bg-secondary border border-primary group flex h-full flex-col",
	project: "group bg-bg-primary overflow-hidden relative border border-primary",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
	({ variant, children, className, hover = true, ...props }, ref) => {
		const hoverClasses =
			hover &&
			"hover:shadow-lg hover:-translate-y-0.5 hover:-translate-x-px transition-all duration-300";

		return (
			<div
				ref={ref}
				className={cn(hoverClasses, variantClasses[variant], className)}
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
			<div ref={ref} className={cn("mb-6", className)} {...props}>
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
				className={`text-xl uppercase tracking-widest font-light text-text-primary ${className}`}
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
			className={cn(
				"text-sm text-stone-400 font-light leading-relaxed mt-4 mb-8",
				className,
			)}
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
