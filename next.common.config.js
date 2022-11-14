module.exports = {

	distDir: 'dist',

	/* Environment variables */
	env: {
	},

	swcMinify: true,

	/* base path if needed eg. /my-app/home */
	/* basePath: '/my-app' */

	pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],

	/* Customize webpack config if not already handled in the next framework*/
	webpack: (
		config,
		{ buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
	) => {
		return config
	},

	serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
  },

	trailingSlash: false,

	devIndicators: {
    buildActivityPosition: 'top-right',
  },
}