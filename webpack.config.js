var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },

  plugins: [
    new BrowserSyncPlugin({
     // browse to http://localhost:3000/ during development,
     // ./public directory is being served
     host: 'localhost',
     port: 3000,
     server: { baseDir: ['./'] }
    })
  ],

  devtool: 'eval-source-map',

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/}
    ]
  }
};
