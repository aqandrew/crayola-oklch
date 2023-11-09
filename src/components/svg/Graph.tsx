/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import AxisX from './AxisX';
import AxisY from './AxisY';

interface GraphProps {
	width?: number;
	height?: number;
}

export default function Graph({ width = 100, height = 100 }: GraphProps) {
	const containerSize = '400px';

	return (
		<div css={css({ width: containerSize, height: containerSize })}>
			<svg viewBox={`${-width / 2} ${-height / 2} ${width} ${height}`}>
				<AxisX width={width} />
				<AxisY height={height} />
			</svg>
		</div>
	);
}
