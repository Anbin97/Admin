const path = require("path");
const devServer = require("./vue-cli/devServer");
const { getEnv, isDev } = require("./vue-cli/env");
const ENV = getEnv();

const publicPath = ENV.VUE_APP_PUBLIC_PATH;

module.exports = {
  publicPath: isDev ? "/" : publicPath,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/style/index.less")]
    }
  },
  lintOnSave: true,
  devServer
  // devServer: {
  //   overlay: {
  //     warnings: true,
  //     error: true
  //   }
  // }
};