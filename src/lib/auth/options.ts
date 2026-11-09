import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { findUserByEmail, upsertOAuthUser, verifyPassword } from "./store";

const providers: NextAuthOptions["providers"] = [
  CredentialsProvider({
    name: "Email",
    credentials: { email: { label: "Email", type: "email" }, password: { label: "Password", type: "password" } },
    async authorize(credentials) {
      const email = String(credentials?.email ?? "");
      const password = String(credentials?.password ?? "");
      const user = await findUserByEmail(email);
      if (!user || !user.passwordHash || !verifyPassword(password, user.passwordHash)) return null;
      return { id: user.id, email: user.email, name: user.name, image: user.image ?? null };
    },
  }),
];

// Google and GitHub only appear when their keys are set in the environment.
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(GoogleProvider({ clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET }));
}
if (process.env.GITHUB_ID && process.env.GITHUB_SECRET) {
  providers.push(GithubProvider({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET }));
}

export const authOptions: NextAuthOptions = {
  providers,
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if (!account || account.provider === "credentials") return true;
      if (!user.email) return false;
      await upsertOAuthUser({
        email: user.email,
        name: user.name ?? user.email,
        image: user.image ?? undefined,
        provider: account.provider,
      });
      return true;
    },
    async jwt({ token, user }) {
      if (user?.email) {
        const stored = await findUserByEmail(user.email);
        if (stored) token.uid = stored.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.uid) session.user.id = String(token.uid);
      return session;
    },
  },
};
