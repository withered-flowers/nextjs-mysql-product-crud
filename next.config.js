// /** @type {import('next').NextConfig} */
// const nextConfig = {};
//
// export default nextConfig;

module.exports = {
	output: "standalone",
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/",
				destination: "/products",
				permanent: true,
			},
		];
	},
	experimental: {
		serverActions: {
			allowedOrigins: [
				"opulent-space-xylophone-vpw4wpxpqfxg-3002.app.github.dev",
				"localhost:3002",
			],
		},
	},
};
