import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.resolve.alias["@vladmandic/human"] = path.resolve(process.cwd(), "node_modules/@vladmandic/human/dist/human.esm.js");
    return config;
  },
};

export default nextConfig;
