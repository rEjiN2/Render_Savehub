/** @type {import('next').NextConfig} */
const nextConfig = {

  async headers() {
    return [
        {
            // matching all API routes
            source: "/api/:path*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "http://localhost:3000" }, 
                // { key: "Access-Control-Allow-Origin", value: "http://127.0.0.1:5500" },  
                // replace this your actual origin
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }
    ]
},
reactStrictMode: true,
  images: {
      domains: ['localhost', 'rukminim2.flixcart.com', 'm.media-amazon.com', 'rb.gy'],
  },
};

export default nextConfig;
