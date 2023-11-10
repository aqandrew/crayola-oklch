// hex codes sampled from here with Digital Color Meter
// https://www.tiktok.com/@color.nerd/video/7283917703314771242?lang=en
// oklch values obtained from https://oklch.com/

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

	// #ea1a30
	red: { lightness: 59.74, chroma: 0.232, hue: 24.35 },

	// #fa3035
	scarlet: { lightness: 63.84, chroma: 0.234, hue: 26.09 },

	// #e62b29
	'red-orange': { lightness: 59.85, chroma: 0.221, hue: 27.53 },

	// #f67727
	orange: { lightness: 70.72, chroma: 0.178, hue: 47.71 },

	// #eb8325
	'yellow-orange': { lightness: 71.07, chroma: 0.161, hue: 56.38 },

	// #dfb612
	yellow: { lightness: 79, chroma: 0.159, hue: 92.08 },

	// #d7ba20
	'green-yellow': { lightness: 79.07, chroma: 0.156, hue: 97.19 },

	// #8cae33
	'yellow-green': { lightness: 70.2, chroma: 0.152, hue: 123.8 },

	// #24813a
	green: { lightness: 53.28, chroma: 0.137, hue: 147.52 },

	// #0d74ac
	'blue-green': { lightness: 53.46, chroma: 0.121, hue: 241.15 },

	// #0063be
	cerulean: {
		lightness: 50.49,
		chroma: 0.16262266110737159,
		hue: 254.35290114509638,
	},

	// #0052b1
	blue: { lightness: 45.71, chroma: 0.166, hue: 257.59 },

	// #003370
	bluetiful: {
		lightness: 33.17,
		chroma: 0.11694152904668356,
		hue: 256.8281093396693,
	},

	// #083489
	indigo: { lightness: 35.86, chroma: 0.149, hue: 261.92 },

	// #112369
	'blue-violet': { lightness: 29.89, chroma: 0.13, hue: 267.41 },

	// #602f76
	violet: { lightness: 40.26, chroma: 0.124, hue: 314.09 },

	// #9b014b
	'red-violet': { lightness: 44.49, chroma: 0.179, hue: 2.57 },

	// #ea1a52
	'violet-red': { lightness: 60.27, chroma: 0.231, hue: 15.13 },

	// additions for proposed 24-pack

	// #e80037
	'wild-strawberry': {
		lightness: 58.82,
		chroma: 0.23674007941731795,
		hue: 21.429836265688046,
	},

	// #fa4839
	bittersweet: { lightness: 65.76, chroma: 0.217, hue: 29.1 },

	// #eba324
	'banana-mania': { lightness: 76.68, chroma: 0.153, hue: 75.07 },

	// #7baa75
	'granny-smith': { lightness: 69.04, chroma: 0.091, hue: 141.75 },

	// #11847c
	'jungle-green': { lightness: 55.4, chroma: 0.093, hue: 187.2 },

	// #007d9a
	'robins-egg': {
		lightness: 54.64,
		chroma: 0.10062293895614662,
		hue: 221.56836171458156,
	},

	// #452871
	'royal-purple': { lightness: 35.44, chroma: 0.121, hue: 298.29 },

	// #672162
	plum: { lightness: 38.17, chroma: 0.13, hue: 330.74 },
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
