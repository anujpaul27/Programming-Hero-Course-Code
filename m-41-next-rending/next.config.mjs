/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
};

module.exports = {
  images: {
    domains: ["example.com"],
  },
};

export default nextConfig;
