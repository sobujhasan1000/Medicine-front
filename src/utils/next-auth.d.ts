// src/types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user?: {
      id?: string;
      name?: string;
      email?: string;
      image?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id?: string;
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    user?: {
      id?: string;
      name?: string;
      email?: string;
      image?: string;
    };
  }
}
