let webpack = require('webpack');
let path = require('path');

let NODE_ENV = process.env.NODE_ENV || 'development';

let env = {
  production: NODE_ENV === 'production',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'development'
};

module.exports = {
  target: 'web',
  context: path.join(__dirname, '../src/'),
  entry: {
    vendor: ['react', 'redux', 'react-redux', 'redux-thunk', 'react-bootstrap', 'react-router', 'react-intl'],
    bundle: ['babel-polyfill', 'react-hot-loader/patch', './main.js']
  },

  output: {
    path: path.join(__dirname, '../build/'),
    pathinfo: true,
    publicPath: '/assets/',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js', '.scss', '.css'],
    modules: [path.resolve(path.join(__dirname, '../../node_modules'))]
  },

  resolveLoader: {
    modules: [path.resolve(path.join(__dirname, '../../node_modules'))]
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __PRODUCTION__: env.production,
      __TEST__: env.test,
      __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development' // default to development
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {outputStyle: 'expanded'}
          }
        ]
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '../src')
      },
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-sprite-loader',
      //   options: {
      //     extract: 'false'
      //   }
      // },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: 'webpack/[hash].[ext]'
            }
          },
          {
            loader: `image-webpack-loader`,
            options: {
              bypassOnDebug: true,
              optipng: {
                optimizationLevel: 7
              },
              gifsicle: {
                interlaced: false
              }
            }
          }
        ]
      },
      // fonts
      { test: /\.woff/, loader: 'file-loader' },
      { test: /\.svg/, loader: 'file-loader' },
      { test: /\.ttf/, loader: 'file-loader' },
      { test: /\.otf/, loader: 'file-loader' },
      { test: /\.eot/, loader: 'file-loader' }
    ],
    noParse: /\.min\.js/
  }
};
