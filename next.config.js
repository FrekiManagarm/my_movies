/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GITHUB_CLIENT: process.env.GITHUB_CLIENT,
        GITHUB_SECRET: process.env.GITHUB_SECRET,
        TMDB_API_KEY: process.env.TMDB_API_KEY,
        TMDB_API_TOKEN: process.env.TMDB_API_TOKEN,
        TMDB_API_URL: process.env.TMDB_API_URL,
    },
    images: {
        remotePatterns: [
            {
                hostname: 'i.imgur.com',
                protocol: "https",
            },
            {
                hostname: "images.unsplash.com",
                protocol: "https"
            },
            {
                hostname: "avatars.githubusercontent.com",
                protocol: "https"
            },
            {
                hostname: "www.themoviedb.org",
                protocol: "https"
            }
        ]
    },
}

module.exports = nextConfig
