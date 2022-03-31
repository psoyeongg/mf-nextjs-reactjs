/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;
module.exports = {
  webpack: (config, options) => {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        remoteType: "var",
        remotes: {
          remote: "remote",
          user: "user",
        },
        shared: {
          react: {
            eager: true,
            singleton: true,
            // requiredVersion: true,
          },
          "react-dom": {
            eager: true,
            singleton: true,
            // requiredVersion: deps["react-dom"],
          },
        },
      })
    );

    config.module.rules.push({
      test: /_app.js/,
      loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
    });
    return config;
  },
  reactStrictMode: true,
};
