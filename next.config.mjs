/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          "api.microlink.io",
          "images.unsplash.com",
          "plus.unsplash.com",
          "aceternity.com" ,
          "cdn.sanity.io" ,// Microlink Image Preview
          "avatar.vercel.sh"
        ],
      },
};

export default nextConfig;
