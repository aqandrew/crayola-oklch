interface AxisYProps {
	height: number;
}

export default function AxisY({ height }: AxisYProps) {
	return (
		<line
			x1={0}
			y1={-height / 2}
			x2={0}
			y2={height / 2}
			stroke="currentColor"
		/>
	);
}
