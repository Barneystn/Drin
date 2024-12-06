/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  // این خط را اضافه کنید تا از خطاهای مربوط به استفاده از `getInitialProps` جلوگیری شود
  experimental: {
    esmExternals: false
  }
}