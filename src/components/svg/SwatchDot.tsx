import { ColorName, getCSSVariable } from '@/utils/colors';

interface SwatchProps {
	color: ColorName;
	cx?: number;
	cy?: number;
}

export default function Swatch({ color, cx = 0, cy = 0 }: SwatchProps) {
	return (
		<circle
			cx={cx}
			cy={cy}
			r={3}
			style={
				{ '--color-swatch-dot': getCSSVariable(color) } as React.CSSProperties
			}
			fill="var(--color-swatch-dot)"
		/>
	);
}
