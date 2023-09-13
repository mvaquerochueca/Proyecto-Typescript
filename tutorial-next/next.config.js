/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'mdx', 'js', 'jsx'],

    reactStrictMode: true,
    experimental: {
        appDir: true
    },

}

module.exports = nextConfig
