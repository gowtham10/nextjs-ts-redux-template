const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const commonConfig = require('./next.common.config');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPWA = require('next-pwa')({
  dest: 'public',
  // will enable after adding valid strategy in worker/index.ts file
  disable: false
  // TODO: understand GenerateSW and injectmanifest (https://www.npmjs.com/package/next-pwa)
})


module.exports = (phase, { defaultConfig }) => {

  /**
 * @type {import('next').NextConfig}
 */

  let environmentConfig = {}

	if (phase === PHASE_DEVELOPMENT_SERVER) {
		environmentConfig = {
			reactStrictMode: true,
		}
	}


  const nextConfig = {
    ...commonConfig,
    ...environmentConfig,
  }

	return withBundleAnalyzer(withPWA(nextConfig));
}