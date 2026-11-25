import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  // The old /hub page was removed but several buttons still link to it. Send those visitors to the company tracks.
  async redirects() {
    return [{ source: "/hub", destination: "/#tracks", permanent: false }];
  },
  async headers() {
    const h = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      // Proctoring needs the camera and microphone on this site only.
      { key: "Permissions-Policy", value: "camera=(self), microphone=(self), geolocation=()" },
      // Enforced subset that cannot break scripts: no framing by other sites, no plugins, no base-tag tricks, forms post only to this site.
      { key: "Content-Security-Policy", value: "frame-ancestors 'self'; object-src 'none'; base-uri 'self'; form-action 'self'" },
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
