/** @type {import('next').NextConfig} */
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = {
  reactStrictMode: true,
  images: {
      domains: ['s3-us-west-2.amazonaws.com', 's3.us-west-2.amazonaws.com', 'cdn.spencer.felinae98.cn','giscus.app']
  },
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
  redirects: [
    {
      source: "/posts/index.xml",
      destination: "/feed",
      permanent: false
    },
    {
      source: "/feed.xml",
      destination: "/feed",
      permanent: false
    }
  ]
}
