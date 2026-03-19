/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 🚀 OTIMIZAÇÃO DE BUILD
  compress: true,

  // 🖼️ IMAGENS (CRÍTICO PRA PERFORMANCE)
  images: {
    formats: ["image/avif", "image/webp"], // 🔥 formatos modernos
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [ 60, 70, 75, 80], // 🔥 controle total
  },

  // 🚀 HEADERS (CACHE + SEGURANÇA)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // ⚡ CACHE (assets estáticos)
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },

          // 🔒 SEGURANÇA
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ]
  },

  // ⚡ REMOVE LOGS EM PRODUÇÃO
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
}

module.exports = nextConfig