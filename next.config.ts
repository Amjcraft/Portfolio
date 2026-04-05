import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["mighty-ui"],
  async redirects() {
    return [
      // {
      //   source: "/((?!coming-soon).*)",
      //   destination: "/coming-soon",
      //   permanent: false,
      // },
    ];
  },
};

export default nextConfig;
