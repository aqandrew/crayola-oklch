/** @jsxImportSource @emotion/react */
'use client';

import { Global, css } from '@emotion/react';

import { COLORS, COLORS_ORIGINAL, COLORS_PROPOSED } from '@/utils/colors';
import Graph from '@/components/svg/Graph';
import Swatch from '@/components/Swatch';

export default function Home() {
	return (
		<>
			<Global
				styles={{
					':root': Object.entries(COLORS).reduce(
						(styles, [colorName, color]) => ({
							...styles,
							['--color-' + colorName]: color,
						}),
						{}
					),
				}}
			/>

			<main>
				<h1>Crayola Hues</h1>

				<div css={css({ display: 'flex', gap: '1rem' })}>
					<div>
						<Graph colors={COLORS_ORIGINAL} />

						<h2>Original</h2>

						{COLORS_ORIGINAL.map((color) => (
							<Swatch color={color} key={color} />
						))}
					</div>

					<div>
						<Graph colors={COLORS_PROPOSED} />

						<h2>Proposed</h2>

						{COLORS_PROPOSED.map((color) => (
							<Swatch color={color} key={color} />
						))}
					</div>
				</div>
			</main>
		</>
	);
}
