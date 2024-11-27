const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/' // 如果是Github無字定義網域，就要放存儲庫名稱
    : '/'
}