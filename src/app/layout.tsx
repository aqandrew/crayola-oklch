import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';

import './reset.css';
import './globals.css';

export const metadata: Metadata = {
	title: 'Crayola OKLCH',
	description: 'An exploration of OKLCH color space',
	icons: {
		icon: {
			url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🖍️</text></svg>',
			type: 'image/svg',
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={GeistMono.className}>
			<body>{children}</body>
		</html>
	);
}
