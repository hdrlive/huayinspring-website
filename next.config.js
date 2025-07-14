const path = require("path");
const normalizePath = require("normalize-path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@" ] = normalizePath(path.resolve(__dirname, "src"));
    return config;
  },
};

module.exports = nextConfig;


