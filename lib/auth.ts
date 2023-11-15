import GithubProvider from 'next-auth/providers/github';
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import { NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from '@auth/prisma-adapter';
import { env } from './env';

export const authOptions : NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: env.GITHUB_CLIENT,
            clientSecret: env.GITHUB_SECRET,
        }),
    ],
}

type ParamtersGetServerSession =
    | []
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse];

    export const getAuthSession = async (...parameters: ParamtersGetServerSession) => {
        const session = await getServerSession(...parameters, authOptions);
        return session
    }

    export const getRequiredAuthSession = async (
        ...parameters : ParamtersGetServerSession
    ) => {
        const session = await getServerSession(...parameters, authOptions);

        if (!session?.user.id) {
            throw new Error('Unauthorized');
        }

        return session as {
            user: {
                id: string,
                email?: string,
                image?: string,
                name?: string,
            }
        }
    }