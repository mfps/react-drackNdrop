module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2017', 'react', 'stage-2']
        }
      }
    ]
  }
};
