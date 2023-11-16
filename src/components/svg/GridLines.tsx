import { scaleLinear } from 'd3';

const stroke = 'lightgrey';
const numLines = 5;

interface GridLinesProps {
	graphSize: number;
	gridLineWidth: number;
}

export default function GridLines({
	graphSize,
	gridLineWidth,
}: GridLinesProps) {
	const lineMax = graphSize / 2;
	// trying to use d3.ticks here gives lines that don't align w/graph bounds
	const gridTicks = Array.from({ length: numLines }).map((_, i) =>
		scaleLinear([0, numLines - 1], [-lineMax, lineMax])(i)
	);

	return (
		<>
			{/* horizontal */}
			{gridTicks.map((tick) => (
				<line
					x1={-lineMax}
					y1={tick}
					x2={lineMax}
					y2={tick}
					key={tick}
					stroke={stroke}
					strokeWidth={gridLineWidth}
				/>
			))}

			{/* vertical */}
			{gridTicks.map((tick) => (
				<line
					x1={tick}
					y1={-lineMax}
					x2={tick}
					y2={lineMax}
					key={tick}
					stroke={stroke}
					strokeWidth={gridLineWidth}
				/>
			))}
		</>
	);
}
