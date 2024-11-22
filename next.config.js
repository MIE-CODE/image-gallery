module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jsonplaceholder.typicode.com",
        port: "",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
    ],
  },
};
