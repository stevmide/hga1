/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  test: /\.(png|jpe?g|gif|svg)$/i,
  type: 'asset/resource',
}

module.exports = nextConfig
