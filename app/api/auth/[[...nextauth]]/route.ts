import NextAuth, { NextAuthOptions } from 'next-auth'
import githubAuth from 'next-auth/providers/github'
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import { db } from '@/lib/db'

export const authOptions : NextAuthOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? ""
        }),
    ],
    secret:process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
    callbacks: {
       async session({session,user}) {
        session.user.id = user.id
        return session
       }
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}