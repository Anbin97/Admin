const env = process.env;

const getEnv = function() {
  let envs = {
    NODE_ENV: env.NODE_ENV
  }
  for (const key in env) {
    if(/^VUE_APP/.test(key)) {
      envs[key] = env[key]
    }
  }
  return envs
}

const isDev = env.NODE_ENV === "development"

module.exports = {
  getEnv,
  isDev
}