import Chart from "@/components/chart/chart";
import useChart from "@/components/chart/useChart";

const series = [
	{
		name: "3000CV2",
		// type: "column",
		type: "area",
		data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
	},
	{
		name: "3000HV2",
		type: "area",
		data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
	},
	{
		name: "3000S",
		// type: "line",
		type: "area",
		data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
	},
];

export default function ChartMixed() {
	const chartOptions = useChart({
		stroke: {
			width: [3, 3, 3],
		},
		plotOptions: {
			bar: { columnWidth: "20%" },
		},
		fill: {
			type: ["gradient", "gradient", "gradient"],
		},
		labels: [
			"17/08/2025",
			"18/08/2025",
			"19/08/2025",
			"20/08/2025",
			"21/08/2025",
			"22/08/2025",
			"23/08/2025",
			"24/08/2025",
			"25/08/2025",
			"26/08/2025",
			"27/08/2025",
		],
		// xaxis: {
		// 	type: "datetime",
		// },
		yaxis: {
			title: { text: "Points" },
			min: 0,
		},
		tooltip: {
			shared: true,
			intersect: false,
			y: {
				formatter: (value: number) => {
					if (typeof value !== "undefined") {
						return `${value.toFixed(0)} points`;
					}
					return value;
				},
			},
		},
	});

	return (
		<Chart type="line" series={series} options={chartOptions} height={320} />
	);
}
