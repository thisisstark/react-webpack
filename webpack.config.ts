import * as fs from 'fs';
import path from "path";
import { Configuration } from "webpack";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

// const devServer: DevServerConfiguration = {
//   server: {
//     type: 'https',
//     options: {
//       key: fs.readFileSync(path.join(__dirname, './ssl/host.key')),
//       cert: fs.readFileSync(path.join(__dirname, './ssl/host.crt'))
//     }
//   },
//   port: 3000
// };

const config: Configuration = {
  //devServer,
  mode:
    (process.env.NODE_ENV as "production" | "development" | undefined) ??
    "development",
  entry: path.join(__dirname, "src", "index.tsx"),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  }
};

export default config;
