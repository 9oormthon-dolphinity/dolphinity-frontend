const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ["dolphinity-server.run.goorm.io"],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
