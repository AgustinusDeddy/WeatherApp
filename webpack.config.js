const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
  const isProduction = env === 'production';
  console.log('env', env);

  const cssExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: ['babel-polyfill', './app/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        { test: /\.(js)$/, use: 'babel-loader' }, // use babel loader for all js files
        { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader'] },
        {
          test: /\.css$/,
          use: cssExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        },
      ],
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'app/index.html',
      }),
      cssExtract,
    ],
  };
};

// if (process.env.NODE_ENV === 'production') {
//   config.plugins.push(
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: JSON.stringify(process.env.NODE_ENV),
//       },
//     }),
//     new webpack.optimize.UglifyJsPlugin()
//   );
// }
