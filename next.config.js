const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ["dolphinity-server.run.goorm.io", "localhost"],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
