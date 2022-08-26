const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ["dolphinity-server.run.goorm.io", "http://localhost:5000"],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
