const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  reactStrictMode: true,
  output: 'export', // 🔥 This replaces `npx next export`
});
