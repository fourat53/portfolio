import { Reveal } from "#/components/Reveal.tsx";

export default function SectionTitle({ title }: { title: string }) {
	return (
		<Reveal
			delay={80}
			variant="up"
			className="w-full text-[13px] text-center tracking-[0.2em] font-medium uppercase text-text-subtle mb-6"
		>
			{title}
		</Reveal>
	);
}
