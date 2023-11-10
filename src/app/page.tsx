/** @jsxImportSource @emotion/react */
'use client';

import { useState } from 'react';
import { Global } from '@emotion/react';

import {
	COLORS,
	COLORS_ORIGINAL,
	COLORS_PROPOSED,
	getOKLCH,
} from '@/utils/colors';
import Graph from '@/components/svg/Graph';
import Swatch from '@/components/Swatch';

const colorOptions = [
	{ label: 'Original', colorSet: COLORS_ORIGINAL },
	{ label: 'Proposed', colorSet: COLORS_PROPOSED },
];

export default function Home() {
	const [graphColors, setGraphColors] = useState(COLORS_ORIGINAL);

	return (
		<>
			<Global
				styles={{
					':root': Object.entries(COLORS).reduce(
						(styles, [colorName, color]) => ({
							...styles,
							['--color-' + colorName]: getOKLCH(color),
						}),
						{}
					),
				}}
			/>

			<main>
				<h1>Crayola OKLCH</h1>

				<fieldset>
					<legend>Graph colors</legend>

					{colorOptions.map(({ label, colorSet }) => (
						<label key={label}>
							<input
								type="radio"
								name="graph-color"
								checked={graphColors === colorSet}
								onChange={() => {
									setGraphColors(colorSet);
								}}
							/>
							{label}
						</label>
					))}
				</fieldset>

				<Graph colors={graphColors} />

				{graphColors.map((color) => (
					<Swatch color={color} key={color} />
				))}
			</main>
		</>
	);
}
