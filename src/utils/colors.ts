// hex codes sampled from here with Digital Color Meter
// https://www.tiktok.com/@color.nerd/video/7283917703314771242?lang=en
// oklch values obtained from https://oklch.com/

export type Color =
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

export const COLORS: { [K in Color]: string } = {
	// original 24-pack
	red: 'oklch(58.43% 0.232 25.43)', // #e51027
	scarlet: 'oklch(63.84% 0.234 26.09)', // #fa3035
	'red-orange': 'oklch(59.85% 0.221 27.53)', // #e62b29
	orange: 'oklch(70.72% 0.178 47.71)', // #f67727
	'yellow-orange': 'oklch(71.07% 0.161 56.38)', // #eb8325
	yellow: 'oklch(79% 0.159 92.08)', // #dfb612
	'green-yellow': 'oklch(79.07% 0.156 97.19)', // #d7ba20
	'yellow-green': 'oklch(70.2% 0.152 123.8)', // #8cae33
	green: 'oklch(53.28% 0.137 147.52)', // #24813a
	'blue-green': 'oklch(52.23% 0.12382028137144023 241.9488014959934)', // #0070aa
	cerulean: 'oklch(50.49% 0.16262266110737159 254.35290114509638)', // #0063be
	blue: 'oklch(45.71% 0.166 257.59)', // #0052b1
	bluetiful: 'oklch(33.17% 0.11694152904668356 256.8281093396693)', // #003370
	indigo: 'oklch(35.22% 0.145 261.46)', // #063385
	'blue-violet': 'oklch(29.43% 0.124 266.93)', // #112369
	violet: 'oklch(40.26% 0.124 314.09)', // #602f76
	'red-violet': 'oklch(44.59% 0.179 4.32)', // #9c0048
	'violet-red': 'oklch(61.7% 0.237 16.95)', // #f21b4f

	// additions for proposed 24-pack
	'wild-strawberry': 'oklch(58.82% 0.23674007941731795 21.429836265688046)', // #e80037
	bittersweet: 'oklch(65.76% 0.217 29.1)', // #fa4839
	'banana-mania': 'oklch(76.68% 0.153 75.07)', // #eba324
	'granny-smith': 'oklch(69.04% 0.091 141.75)', // #7baa75
	'jungle-green': 'oklch(55.4% 0.093 187.2)', // #11847c
	'robins-egg': 'oklch(54.64% 0.10062293895614662 221.56836171458156)', // #007d9a
	'royal-purple': 'oklch(35.44% 0.121 298.29)', // #452871
	plum: 'oklch(38.17% 0.13 330.74)', // #672162
};

export const COLORS_ORIGINAL = (Object.keys(COLORS) as Color[]).slice(0, 18);

export const COLORS_PROPOSED: Color[] = [
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

export function getCSSVariable(color: Color) {
	return `var(--color-${color})`;
}
