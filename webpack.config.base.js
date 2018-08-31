/* eslint filenames/match-exported: 0 */
const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const {
  optimize: { CommonsChunkPlugin, UglifyJsPlugin },
  NamedModulesPlugin,
  NoEmitOnErrorsPlugin,
  DefinePlugin,
} = webpack;

const devVendorEntryPoints = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:3002',
  'webpack/hot/only-dev-server',
];

function getEntryPoints(isDev) {
  const commonPackages = ['react', 'react-dom', 'glamor', 'glamorous', 'react-redux', 'redux', 'redux-form'];
  const commonBundle = isDev ? ['babel-polyfill', ...devVendorEntryPoints, ...commonPackages] : ['babel-polyfill', ...commonPackages];
  return {
    app: './src/App.jsx',
    commonBundle,
    // add other bundles here
  };
}

function getWebpackConfig(isDev) {
  const config = {
    entry: getEntryPoints(isDev),
    module: {
      rules: [
        {
          exclude: /node_modules/,
          include: /src/,
          test: /.jsx?$/,
          use: 'babel-loader',
        },
        {
          loader: 'style-loader!css-loader',
          test: /\.css$/,
        },
      ],
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname, './public/js/webpack'),
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['src', 'node_modules'],
    },
  };

  const plugins = [
    new CommonsChunkPlugin({
      name: 'commonBundle',
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new CaseSensitivePathsPlugin(),
  ];

  if (isDev) {
    config.devServer = {
      headers: { 'Access-Control-Allow-Origin': '*' },
      historyApiFallback: true,
      host: 'localhost',
      hot: true,
      port: 3002,
      proxy: [{
        context: ['**', '!**/public/js/webpack/*.js'],
        target: 'http://localhost:3000',
      }],
    };

    config.devtool = 'inline-source-map';

    config.output.publicPath = './public/js/webpack/';

    plugins.push(
      new NamedModulesPlugin(),
      new NoEmitOnErrorsPlugin(),
      new WriteFilePlugin(),
    );
  }


  if (process.env.npm_lifecycle_event === 'build:production') {
    plugins.push(new UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }));
  }
  config.plugins = plugins;

  return config;
}

module.exports = getWebpackConfig;
