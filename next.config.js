/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GITHUB_CLIENT: process.env.GITHUB_CLIENT,
        GITHUB_SECRET: process.env.GITHUB_SECRET,
    },
}

module.exports = nextConfig
