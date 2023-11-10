/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { scaleLinear } from 'd3';

import { COLORS, ColorName } from '@/utils/colors';
import AxisX from './AxisX';
import AxisY from './AxisY';
import SwatchDot from './SwatchDot';

const containerSize = '400px';
const graphSize = 100;
const width = graphSize;
const height = graphSize;
const dotSize = 3;

interface GraphProps {
	colors: ColorName[];
}

export default function Graph({ colors }: GraphProps) {
	const cartesianMax =
		dotSize / graphSize +
		2 * Math.max(...colors.map((color) => COLORS[color].chroma));
	const xScale = scaleLinear([0, cartesianMax], [0, graphSize]);
	const yScale = scaleLinear([0, cartesianMax], [0, -graphSize]); // flip y axis because SVG's +y is downward
	const colorPlotData = colors.map((color) => {
		const { chroma, hue } = COLORS[color];
		const { x, y } = radialToCartesian({
			r: chroma,
			theta: degreeToRad(hue),
		});

		return {
			color,
			x: xScale(x),
			y: yScale(y),
		};
	});

	return (
		<div css={css({ width: containerSize, height: containerSize })}>
			<svg viewBox={`${-width / 2} ${-height / 2} ${width} ${height}`}>
				<AxisX width={width} />
				<AxisY height={height} />

				{colorPlotData.map(({ color, x, y }) => {
					return (
						<SwatchDot color={color} key={color} cx={x} cy={y} r={dotSize} />
					);
				})}
			</svg>
		</div>
	);
}

function radialToCartesian({ r, theta }: { r: number; theta: number }) {
	return {
		x: r * Math.cos(theta),
		y: r * Math.sin(theta),
	};
}

function degreeToRad(degrees: number) {
	return (degrees * Math.PI) / 180;
}
