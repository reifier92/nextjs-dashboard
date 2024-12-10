import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental',
    typedRoutes: true,
  },
};

export default nextConfig;
