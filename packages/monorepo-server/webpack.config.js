// @flow
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  targets: {
                    node: '6.10',
                  },
                  modules: false,
                },
              ],
              'flow',
            ],
          },
        },
      },
    ],
  },
  target: 'node',
  externals: [
    (
      context /*: string */,
      request /*: string */,
      callback /*: (void | null, string | void) => void*/
    ) => {
      if (request === 'lodash') {
        return callback(null, 'commonjs ' + request);
      }
      callback();
    },
  ],
  devtool: 'source-map',
};
