import { env } from '@/src/lib/env';
import { prisma } from '@/src/lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions : NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: env.GITHUB_CLIENT,
            clientSecret: env.GITHUB_SECRET,
        }),
    ],
    adapter: PrismaAdapter(prisma)
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }