const path = require('path'); //node에 기본 포함된 모듈(설치 없이 사용가능)
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'build') // __dirname : node에 기본 명령어
  },
  module : {
    rules:[
      {
        test:/\.css$/,
        use:['style-loader', 'css-loader'] // 오른쪽에서 왼쪽으로 실행!  [ css-loader : import ]
      },
      {
        test:/\.scss$/,
        use:['style-loader', 'css-loader', 'sass-loader'] // 오른쪽에서 왼쪽으로 실행!
      },
    ]
  },
  plugins: [
  new HtmlWebpackPlugin()
  ]
}


