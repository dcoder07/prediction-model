await import('./src/env.js');

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	images: {
		domains: ['arweave.net', 'cdn.hashnode.com'],
	},
};

export default config;
