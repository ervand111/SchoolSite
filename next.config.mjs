/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['182school.geeklab.am'],
  },
  reactStrictMode: true,
  env: {
    API_URL: "https://182school.geeklab.am/api",
    IMAGE_URL: "https://182school.geeklab.am/storage/",
  },
};

export default nextConfig;
