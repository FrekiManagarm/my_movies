import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    server: {
        GITHUB_CLIENT: z.string(),
        GITHUB_SECRET: z.string(),
    },
    client: {},
    experimental__runtimeEnv: {}
});