/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    //domains: [""],
    domains: ["http://localhost"],
  },
  env: {
    //API_URL: "",
    API_URL: "http://localhost:3000/api",
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  }
}

module.exports = nextConfig