import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { getUserInfo, storeUserInfo } from "./actions/auth.services";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, account, user }) {
      // Handle OAuth token (GitHub, Google)
      if (account) {
        token.accessToken = account.access_token;
      }

      // Handle custom login token
      const storedUser = getUserInfo();
      if (storedUser?.accessToken) {
        token.accessToken = storedUser.accessToken;
      }

      return token;
    },
    async session({ session, token }) {
      // Include the access token in the session
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
  pages: {
    signIn: "/Regeister/RegisterPage", // Path to your custom sign-in page
  },
};
