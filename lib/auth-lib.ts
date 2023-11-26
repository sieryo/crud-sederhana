import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[[...nextauth]]/route";
import { getSession } from "next-auth/react";
import { PrismaAdapter, } from "@next-auth/prisma-adapter";

export const auth = async() => {
    const session = await getServerSession(authOptions)

    return session?.user
}



