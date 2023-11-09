'use client';

import { Global } from '@emotion/react';

import { COLORS } from '@/utils/colors';
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
				<h1>hello</h1>

				{Object.keys(COLORS).map((color) => (
					<Swatch color={color} key={color} />
				))}
			</main>
		</>
	);
}
