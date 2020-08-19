var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    mainFiles: ['index', 'Index'],
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    favicon: './public/favicon.ico'
  })],
  devServer: {
    historyApiFallback: true
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: 'http://localhost:3000'
    })
  }
}