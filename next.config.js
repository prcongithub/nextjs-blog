// 📦 file: ./next.config.js
module.exports = {
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  webpack: (config, { isServer, webpack }) => {
    return config;
  }
}
