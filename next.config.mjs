/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 21600,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
    ],
  },
};

export default nextConfig;
