import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: [
    "/tracks/:path*",
    "/profile/:path*",
    "/crucible/:path*",
  ],
};
