import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/arcmet', // Убрать эту строку при подключении своего домена
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
