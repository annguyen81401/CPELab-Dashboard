import type { CSSProperties } from "react";

type Props = {
	cover: string;
	subtitle: string;
	title: string;
	style?: CSSProperties;
	number: string;
};

export default function AnalysisCard({ cover, subtitle, title, style, number }: Props) {
	return (
		<div
			className="flex flex-col justify-between rounded-2xl px-8 py-6"
			style={{ ...style }}
			>
			{/* Top: icon + title */}
			<div className="flex items-center gap-2">
				<img src={cover} className="w-10 h-10" alt="" />
				<span className="text-lg font-semibold">{title}{subtitle}</span>
			</div>

			{/* Bottom: number */}
			<span className="text-3xl font-bold mt-2 text-white p-2">{number}</span>
		</div>
		
	);
}
