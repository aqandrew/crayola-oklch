/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Color } from '@/utils/colors';
import AxisX from './AxisX';
import AxisY from './AxisY';
import SwatchDot from './SwatchDot';

interface GraphProps {
	width?: number;
	height?: number;
	colors: Color[];
}

const containerSize = '400px';

export default function Graph({
	width = 100,
	height = 100,
	colors,
}: GraphProps) {
	return (
		<div css={css({ width: containerSize, height: containerSize })}>
			<svg viewBox={`${-width / 2} ${-height / 2} ${width} ${height}`}>
				<AxisX width={width} />
				<AxisY height={height} />

				{colors.map((color) => (
					// TODO set cx and cy based on oklch
					<SwatchDot color={color} key={color} />
				))}
			</svg>
		</div>
	);
}
