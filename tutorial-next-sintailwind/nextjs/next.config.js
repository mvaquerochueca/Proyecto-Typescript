/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'mdx', 'js', 'jsx'],

    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    images: {
        domains: ['avatars.dicebear.com', 'api.dicebear.com'],
    },
}



module.exports = nextConfig
