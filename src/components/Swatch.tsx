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
				marginBlock: '0.25rem',
				marginInline: 0,

				'&::before': {
					content: '""',
					width: '1.5rem',
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
