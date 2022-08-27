import { Redis } from '@upstash/redis';
import type { APIRoute } from 'astro';
import { getDomainUrl } from '~utilities/utilities';

const HASHSET_KEY = 'notes';
const url = import.meta.env.UPSTASH_REDIS_REST_URL;
const token = import.meta.env.UPSTASH_REDIS_REST_TOKEN;

const redis = new Redis({ url, token });

export const get: APIRoute = async function get() {
	/* coming soon! */
};

export const post: APIRoute = async function post({ request }) {
	try {
		const form = await request.formData();
		const action = form.get('action');
		const redirectURL: string = getDomainUrl(request);
		const urlParams = new URLSearchParams();

		switch (action) {
			case 'create': {
				const date = new Date();
				const id = date.getTime();
				const modified = date.toISOString();
				const note = {
					title: 'Untitled',
					text: '',
					modified,
				};
				await redis.hset(HASHSET_KEY, {
					[id]: JSON.stringify(note),
				});
				urlParams.append('edit', 'true');
				urlParams.append('note', id.toString(10));
				break;
			}
			default:
		}
		return Response.redirect(`${redirectURL}?${urlParams.toString()}`);
	} catch {
		return Response.redirect(getDomainUrl(request));
	}
};
