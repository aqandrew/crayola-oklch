import { motion } from 'framer-motion';

import { ColorName, getCSSVariable } from '@/utils/colors';

interface SwatchProps {
	color: ColorName;
	cx?: number;
	cy?: number;
	r: number;
}

export default function Swatch({ color, cx = 0, cy = 0, r }: SwatchProps) {
	return (
		<motion.circle
			cx={cx}
			cy={cy}
			r={r}
			style={
				{ '--color-swatch-dot': getCSSVariable(color) } as React.CSSProperties
			}
			fill="var(--color-swatch-dot)"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		/>
	);
}
