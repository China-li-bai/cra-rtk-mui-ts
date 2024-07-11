const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const url = "http://172.17.169.203:8088"
// function configureDevServer(devServerConfig, { env, paths, proxy, allowedHost }) {
//   devServerConfig.historyApiFallback = {
//     disableDotRule: true, //禁用，否则当访问/xxx.html时服务器会自动去掉.html重写url为/xxx
//     index: paths.publicUrlOrPath,
//     // verbose: true
//   }
//   devServerConfig.proxy = {
//     "/local": {
//       //这里最好有一个 /
//       target: url, // 服务器端接口地址
//       secure: false, // 如果是https接口，需要配置这个参数
//       changeOrigin: true, //是否跨域
//       pathRewrite: { "^/local": "" }
//     },
//     "/sit": {
//       target: "https://cms-corpalert-svc-cms-corp-sit.tstcld61.server.ha.org.hk", // 服务器端接口地址
//       secure: false,
//       changeOrigin: true, //是否跨域
//       pathRewrite: { "^/sit": "" }
//     },
//     "/ricky": {
//       target: "http://172.17.169.41:8080", // 服务器端接口地址
//       secure: false,
//       changeOrigin: true, //是否跨域
//       pathRewrite: { "^/ricky": "" }
//     }
//   }
//   return devServerConfig
// }
module.exports = {
  webpack: {
    plugins: {
      add:[
        new HtmlWebpackPlugin({
          inject: true,
          chunks: ["summary"],
          filename: "summary.html",
          template:path.resolve(__dirname,"public/summary.html")
        })
      ],
    },
    configure: (webpackConfig, { env, paths }) => {
      // 添加打包入口文件
      webpackConfig.entry = {
        main: paths.appIndexJs,
        summary: path.resolve(__dirname, "src/summary")
      }
      // 修改输出文件名
      webpackConfig.output = {
        ...webpackConfig.output,
        filename: "static/js/[name].[contenthash:5].js"
      }
      // // 默认的index.html HtmlWebpackPlugin配置时没有添加chunks，为了只让main注入到index.html，配置chunks
      webpackConfig.plugins.map((item) => {
        if (item instanceof HtmlWebpackPlugin) {
          console.log({HtmlWebpackPlugin:item});
          if (!item.userOptions.chunks) {
            // item.userOptions.chunks = ["main"]
            // item.userOptions.excludeChunks = ["summary"]
            item.options.chunks=['main']
            item.options.excludeChunks = ["summary"]
            console.dir({main:item});
          }
        }
        return item
      })
      return webpackConfig
    }
  }
}
