import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  export interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
