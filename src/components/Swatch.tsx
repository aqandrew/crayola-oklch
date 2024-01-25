import styled from '@emotion/styled';

import { ColorName, getCSSVariable } from '@/utils/colors';

interface SwatchProps {
	color: ColorName;
}

export default function Swatch({ color }: SwatchProps) {
	return (
		<Figure color={color}>
			<figcaption>{color.replace('-', ' ')}</figcaption>
		</Figure>
	);
}

const Figure = styled.figure`
	--color-swatch: ${({ color }) => getCSSVariable(color as ColorName)};

	display: flex;
	gap: 0.5rem;
	align-items: center;
	margin: 0.25rem 0;

	&::before {
		content: '';
		width: 1.5rem;
		aspect-ratio: 1;
		border-radius: 50%;
		background-color: var(--color-swatch);
	}
`;
