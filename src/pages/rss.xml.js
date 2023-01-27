import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE } from '../consts';

export async function get(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: 'Personal page',
		site: context.site,
	});
}
