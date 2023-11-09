import './Swatch.css';

interface SwatchProps {
	color: string;
}

export default function Swatch({ color }: SwatchProps) {
	return (
		<figure
			className="Swatch"
			style={
				{ '--color-swatch': `var(--color-${color})` } as React.CSSProperties
			}
		>
			<figcaption>{color.replace('-', ' ')}</figcaption>
		</figure>
	);
}
