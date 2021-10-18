const { getEnv } = require("./env");

const ENV = getEnv();

const VUE_APP_HTTP_BASE_URL = ENV.VUE_APP_HTTP_BASE_URL

const VUE_APP_HTTP_PROXY = ENV.VUE_APP_HTTP_PROXY

module.exports = {
  proxy: {
    [VUE_APP_HTTP_BASE_URL]: {
      target: VUE_APP_HTTP_PROXY
    }
  }
}
