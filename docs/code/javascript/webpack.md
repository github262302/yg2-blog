```json title="webpack.config.js"
import path from 'path';
import webpack, { node } from 'webpack';
import CopyPlugin from "copy-webpack-plugin";
const HtmlWebpackPlugin = require('html-webpack-plugin');
import 'webpack-dev-server';

const config = (env: any, argv: any): webpack.Configuration => {
  console.log("输入信息", argv);

  return {
    entry: './src/index.tsx',

    output: {
      filename: 'main.[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,

    },

    plugins: [
      // new CopyPlugin({
      //   patterns: [
      //      { from: "public", to: "." },
      //   ]
      // }),
      new HtmlWebpackPlugin({ template: argv.mode === 'production' ? "./public/production.html" : "./public/index.html" }),
      new webpack.ProvidePlugin({
        "React": "react"
      })
    ],
    devtool: "cheap-module-source-map",
    module: {
      rules: [
        {
          test: /\.(css|scss)$/i,
          use: ["style-loader", "css-loader", "sass-loader", 'postcss-loader'],
        },
        { test: /\.(tsx|ts)?$/, use: ["awesome-typescript-loader"] },

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },
    resolve: {
      // 尝试按顺序解析这些后缀名。如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。
      extensions: [".tsx", ".ts", ".js"]
    },
    // 外部扩展
    externals: {
      "react": "React",
      "react-dom": "ReactDOM"
    },
    devServer: {
      host: '0.0.0.0',
      port: 8888,
      compress: true,
      static: [
        {
          // directory: path.join(__dirname, 'dist'),

        },

      ],
      allowedHosts: 'all', hot: true, historyApiFallback: true,
    },
    stats: {
      logging: "error"
    }
  }
};
export default config
```
