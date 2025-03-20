import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/SuccessStories.tsx',
                destination: '/SuccessStories',
                permanent: true,
            },
            {
                source: '/News.tsx',
                destination: '/News',
                permanent: true,
            },
            {
                source: '/CostAnalysis.tsx',
                destination: '/CostAnalysis',
                permanent: true,
            },
            {
                source: '/Chat.tsx',
                destination: '/Chat',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;