/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable the new App Router features in Next.js 15
  experimental: {
    // Enable any Next.js 15 experimental features if needed
  },
  // Ensure proper image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
