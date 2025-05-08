import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Option radicale : ignorer toutes les erreurs ESLint pendant le build
  },
};

export default nextConfig;
