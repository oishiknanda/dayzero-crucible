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
      if (!user) {
        throw new Error("NO_ACCOUNT_FOUND");
      }
      if (!user.passwordHash || !verifyPassword(password, user.passwordHash)) {
        throw new Error("INVALID_CREDENTIALS");
      }
      return { id: user.id, email: user.email, name: user.name, image: user.image ?? null };
    },
  }),
];

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "select_account",
          access_type: "offline",
          response_type: "code",
        },
      },
    })
  );
}

if (process.env.GITHUB_ID && process.env.GITHUB_SECRET) {
  providers.push(
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          prompt: "login",
        },
      },
    })
  );
}

// "signup" is set by the login page (cookie dz_intent) when the person clicked Google or GitHub
// from the Create account tab. Only then may a brand new social account be created.
export function buildAuthOptions(intent: "signin" | "signup" = "signin"): NextAuthOptions {
  return {
    providers,
    session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
    pages: { signIn: "/login", error: "/login" },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      async signIn({ user, account }) {
        if (!account || account.provider === "credentials") return true;
        if (!user.email) return false;

        const existing = await findUserByEmail(user.email);

        // Signing in with a social account that has no account yet: ask them to create one first.
        if (!existing && intent !== "signup") {
          return "/login?error=OAuthAccountNotFound&mode=signup";
        }

        // Create account (signup tab) or refresh the profile picture (existing account).
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
}

// Used by getServerSession(). Sign-in rules do not matter there, so the default is fine.
export const authOptions: NextAuthOptions = buildAuthOptions("signin");
