/*
  webpack的整合功能，获取文件夹中所有js后缀文件
  调用：api.getUser(data).then(res=>{})
*/
const readFile = require.context("./components", false, /\.js$/);
const api = readFile.keys().reduce((module, path) => {
  const value = readFile(path)
  for(let i in value) {
    module[i] = value[i]
  }
  return module
}, {})

export default api