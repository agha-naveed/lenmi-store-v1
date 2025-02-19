import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['www.hamzastore.pk', 'www.space-tech.co', 'm.media-amazon.com', 'img.drz.lazcdn.com', "mrlaptop.pk", "typeshop.pk", 'res.cloudinary.com']
  },
  server: {
    host: '0.0.0.0',
  }
};

export default nextConfig;