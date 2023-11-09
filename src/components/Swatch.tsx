/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ColorName, getCSSVariable } from '@/utils/colors';

interface SwatchProps {
	color: ColorName;
}

export default function Swatch({ color }: SwatchProps) {
	return (
		<figure
			style={{ '--color-swatch': getCSSVariable(color) } as React.CSSProperties}
			css={css({
				display: 'flex',
				gap: '1rem',
				alignItems: 'center',

				'&::before': {
					content: '""',
					width: '2rem',
					aspectRatio: 1,
					outline: '1px solid black',
					backgroundColor: 'var(--color-swatch)',
				},
			})}
		>
			<figcaption>{color.replace('-', ' ')}</figcaption>
		</figure>
	);
}
