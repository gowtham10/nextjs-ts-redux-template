const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const commonConfig = require('./next.common.config');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});


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

	return withBundleAnalyzer(nextConfig);
}