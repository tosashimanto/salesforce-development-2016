var webpack = require('webpack')

module.exports = {
  entry: {
    main :'./react/entry/index.js',
    home :'./react/entry/home.js',
    todo :'./react/entry/todo.js',
    discussion :'./react/entry/discussion.js',
    counter :'./react/entry/counter.js',
    reactslick :'./react/entry/reactslick.js',
    board :'./react/entry/board.js',
  },
  output: {
    path: 'react/build',
    filename: '[name].bundle.js',
    publicPath: ''
  },

  // add this handful of plugins that optimize the build
  // when we're in production
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}