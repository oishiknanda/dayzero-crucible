import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    const h = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      // Proctoring needs the camera and microphone on this site only.
      { key: "Permissions-Policy", value: "camera=(self), microphone=(self), geolocation=()" },
      // Report-Only: it logs problems in the browser console but blocks nothing.
      { key: "Content-Security-Policy-Report-Only", value: "frame-ancestors 'self'; object-src 'none'; base-uri 'self'" },
    ];
    if (process.env.NODE_ENV === "production") h.push({ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" });
    return [{ source: "/:path*", headers: h }];
  },
  webpack(config) {
    config.resolve.alias["@vladmandic/human"] = path.resolve(process.cwd(), "node_modules/@vladmandic/human/dist/human.esm.js");
    return config;
  },
};

export default nextConfig;
