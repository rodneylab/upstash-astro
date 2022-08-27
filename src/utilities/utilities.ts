export function getDomainUrl(request: Request) {
	const { headers, url } = request;
	const host = headers.get('X-Forwarded-Host') ?? headers.get('host');
	const { protocol } = new URL(url);

	if (!host) {
		throw new Error('Could not determine domain URL.');
	}

	return `${protocol}//${host}`;
}
