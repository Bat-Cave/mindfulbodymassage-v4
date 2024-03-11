

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
    ],
  },
};

export default config;
