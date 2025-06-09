const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
  analyzerMode: 'static',
  reportFilename: '.next/analyze/bundle-analyzer.html',
});

module.exports = withBundleAnalyzer({});
