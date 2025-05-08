import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignore toutes les erreurs TypeScript
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore les erreurs ESLint
  },
  // Désactive le checking strict des types Webpack
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, stream: false, constants: false };
    return config;
  }
};

export default nextConfig;