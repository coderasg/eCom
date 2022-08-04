const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'development', //TO-DO please change it to toggle based on env variable
  devtool: 'source-map',
  entry: {
    app: [path.resolve(__dirname, 'src/index.tsx')]
  },
  output: {
    path:path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: /[\\/]node_modules/,
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new ESLintPlugin({
      exclude: ['dist'],
      extensions: ['.ts', '.tsx', '.js']
    }),
    new MiniCssExtractPlugin(),
    new CompressionPlugin(),
    new BundleAnalyzerPlugin()
  ],
};