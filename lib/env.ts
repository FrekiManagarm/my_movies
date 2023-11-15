import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    server: {
        GITHUB_CLIENT: z.string(),
        GITHUB_SECRET: z.string(),
        NEXTAUTH_SECRET: z.string(),
        NEXTAUTH_URL: z.string(),
        TMDB_API_KEY: z.string(),
        TMDB_API_TOKEN: z.string(),
        TMDB_API_URL: z.string(),
    },
    client: {},
    experimental__runtimeEnv: {}
});