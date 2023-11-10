// oklch values copied from DevTools here:
// https://www.crayola.com/explore-colors.aspx

export type ColorName =
	| 'red'
	| 'scarlet'
	| 'red-orange'
	| 'orange'
	| 'yellow-orange'
	| 'yellow'
	| 'green-yellow'
	| 'yellow-green'
	| 'green'
	| 'blue-green'
	| 'cerulean'
	| 'blue'
	| 'bluetiful'
	| 'indigo'
	| 'blue-violet'
	| 'violet'
	| 'red-violet'
	| 'violet-red'
	| 'wild-strawberry'
	| 'bittersweet'
	| 'banana-mania'
	| 'granny-smith'
	| 'jungle-green'
	| 'robins-egg'
	| 'royal-purple'
	| 'plum';

type ColorLCH = {
	lightness: number;
	chroma: number;
	hue: number;
};

export function getOKLCH(color: ColorLCH) {
	const { lightness, chroma, hue } = color;
	return `oklch(${lightness}% ${chroma} ${hue})`;
}

export const COLORS: { [K in ColorName]: ColorLCH } = {
	// original 24-pack

	// oklch(0.6 0.24 20.12)
	red: { lightness: 60, chroma: 0.24, hue: 20.12 },

	// oklch(0.63 0.25 23.57)
	scarlet: { lightness: 63, chroma: 0.25, hue: 23.57 },

	// oklch(0.66 0.23 28.52)
	'red-orange': { lightness: 66, chroma: 0.23, hue: 28.52 },

	// oklch(0.7 0.2 41.81)
	orange: { lightness: 70, chroma: 0.2, hue: 41.81 },

	// oklch(0.81 0.15 69.89)
	'yellow-orange': { lightness: 81, chroma: 0.15, hue: 69.89 },

	// oklch(0.92 0.14 100.41)
	yellow: { lightness: 92, chroma: 0.14, hue: 100.41 },

	// oklch(0.92 0.12 103.15)
	'green-yellow': { lightness: 92, chroma: 0.12, hue: 103.15 },

	// oklch(0.87 0.13 121.69)
	'yellow-green': { lightness: 87, chroma: 0.13, hue: 121.69 },

	// oklch(0.63 0.15 158.87)
	green: { lightness: 63, chroma: 0.15, hue: 158.87 },

	// oklch(0.62 0.11 220.89)
	'blue-green': { lightness: 62, chroma: 0.11, hue: 220.89 },

	// oklch(0.67 0.13 227.34)
	cerulean: { lightness: 67, chroma: 0.13, hue: 227.34 },

	// oklch(0.56 0.24 260.82)
	blue: { lightness: 56, chroma: 0.24, hue: 260.82 },

	// #3c69e7
	// oklch(56.22% 0.198 265.51)
	// this is the only color not in Explore Colors
	// hex value taken from Wikipedia:
	// https://en.wikipedia.org/wiki/List_of_Crayola_crayon_colors
	// converted to oklch here:
	// https://oklch.com/
	bluetiful: { lightness: 56.22, chroma: 0.198, hue: 265.51 },

	// oklch(0.55 0.15 269.34)
	indigo: { lightness: 55, chroma: 0.15, hue: 269.34 },

	// oklch(0.52 0.15 286.65)
	'blue-violet': { lightness: 52, chroma: 0.15, hue: 286.65 },

	// oklch(0.54 0.12 309.07)
	violet: { lightness: 54, chroma: 0.12, hue: 309.07 },

	// oklch(0.55 0.19 348.1)
	'red-violet': { lightness: 55, chroma: 0.19, hue: 348.1 },

	// oklch(0.67 0.22 1.9)
	'violet-red': { lightness: 67, chroma: 0.22, hue: 1.9 },

	// additions for proposed 24-pack

	// oklch(0.67 0.25 356.41)
	'wild-strawberry': { lightness: 67, chroma: 0.25, hue: 356.41 },

	// oklch(0.71 0.18 29.08)
	bittersweet: { lightness: 71, chroma: 0.18, hue: 29.08 },

	// oklch(0.93 0.07 89.77)
	'banana-mania': { lightness: 93, chroma: 0.07, hue: 89.77 },

	// oklch(0.84 0.12 141.27)
	'granny-smith': { lightness: 84, chroma: 0.12, hue: 141.27 },

	// oklch(0.66 0.12 169.37)
	'jungle-green': { lightness: 66, chroma: 0.12, hue: 169.37 },

	// oklch(0.77 0.13 194.77)
	'robins-egg': { lightness: 77, chroma: 0.13, hue: 194.77 },

	// oklch(0.47 0.15 301.71)
	'royal-purple': { lightness: 47, chroma: 0.15, hue: 301.71 },

	// oklch(0.46 0.14 333.21)
	plum: { lightness: 46, chroma: 0.14, hue: 333.21 },
};

export const COLORS_ORIGINAL = (Object.keys(COLORS) as ColorName[]).slice(
	0,
	18
);

export const COLORS_PROPOSED: ColorName[] = [
	'wild-strawberry',
	'red',
	'bittersweet',
	'orange',
	'banana-mania',
	'yellow',
	'yellow-green',
	'granny-smith',
	'green',
	'jungle-green',
	'robins-egg',
	'blue-green',
	'blue',
	'bluetiful',
	'indigo',
	'royal-purple',
	'plum',
	'red-violet',
];

export function getCSSVariable(color: ColorName) {
	return `var(--color-${color})`;
}
