const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	images: {
		domains: ["localhost", "http.cat"],
	},
	env: {
		API_URL: process.env.API_URL,
	},
};

module.exports = nextConfig;
