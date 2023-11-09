interface AxisXProps {
	width: number;
}

export default function AxisX({ width }: AxisXProps) {
	return (
		<line x1={-width / 2} y1={0} x2={width / 2} y2={0} stroke="currentColor" />
	);
}
