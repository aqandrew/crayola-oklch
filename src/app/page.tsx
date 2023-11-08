import Swatch from '@/components/Swatch';

export default function Home() {
	return (
		<main>
			<h1>hello</h1>

			{COLORS.map((color) => (
				<Swatch color={color} key={color} />
			))}
		</main>
	);
}

// TODO switch to CSS-in-JS so that there can be just one source of truth
const COLORS = [
	'red',
	'scarlet',
	'red-orange',
	'orange',
	'yellow-orange',
	'yellow',
	'green-yellow',
	'yellow-green',
	'green',
	'blue-green',
	'cerulean',
	'blue',
	'bluetiful',
	'indigo',
	'blue-violet',
	'violet',
	'red-violet',
	'violet-red',
	'bittersweet',
	'banana-mania',
	'granny-smith',
	'jungle-green',
	'robins-egg',
	'royal-purple',
	'plum',
	'wild-strawberry',
];
