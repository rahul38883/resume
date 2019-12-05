module.exports = {
  mode: 'development',
  entry: ['./jquery-3.4.1.min.js', './main.js'],
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [{
      test: /jquery.+\.js$/,
      use: [{
        loader: 'expose-loader',
        options: 'jQuery'
      },{
        loader: 'expose-loader',
        options: '$'
      }]
    }]
  },
  watch: true,
  devServer: {
    contentBase: './static/',
    watchContentBase: true
  }
};
