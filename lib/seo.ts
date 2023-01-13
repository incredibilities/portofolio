import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'IUSTIN - M6 MAFIA MGKK 888';
	const description = "SALUT COAIE 👋 SUNT IUSTIN";

	return {
		title,
		description,
		canonical: `https://iustin-e.gay/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'iustin pro m6',
			url: `https://iustin-e.gay/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: ' ',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@iustin',
			site: '@iustin',
		},
		...props,
	};
}
