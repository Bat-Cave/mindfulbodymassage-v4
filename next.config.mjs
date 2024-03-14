/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
        port: "",
        pathname: "/720x400",
      },
      { protocol: "https", hostname: "d2zdpiztbgorvt.cloudfront.net" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "www.fleurdecleanco.com" },
      { protocol: "https", hostname: "images.leadconnectorhq.com" },
    ],
  },
};

export default config;
