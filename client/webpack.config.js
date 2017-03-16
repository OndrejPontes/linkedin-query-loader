const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

// let extractCSS = new ExtractTextPlugin('../app/assets/stylesheets/[name].css');

const config = {
  entry: [
    'bootstrap-loader',
    'babel-polyfill',
    'es5-shim/es5-shim',
    'es5-shim/es5-sham',
    'jquery',
    // 'css-loader',
    // 'react-bootstrap',
    'react-dom',
    'react-redux',
    'react-on-rails',
    'react-router-redux',
    'redux-thunk',
    './app/bundles/queries/startup/registration.jsx',
    './app/bundles/queries/main.scss',
  ],

  output: {
    filename: 'webpack-bundle.js',
    path: '../app/assets/webpack',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      libs: path.join(process.cwd(), 'app', 'libs'),
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },
  plugins: [
    new ExtractTextPlugin ('../stylesheets/site.scss'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
      TRACE_TURBOLINKS: devBuild,
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery'
    }),
  ],
  module: {
    loaders: [
      { test: require.resolve('react'), loader: 'imports?shim=es5-shim/es5-shim&sham=es5-shim/es5-sham' },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") }
    ],
  },
  // postcss: [autoprefixer],
  // sassResources: ['./app/assets/styles/app-variables.scss'],
};

module.exports = config;

if (devBuild) {
  console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
  module.exports.devtool = 'eval-source-map';
} else {
  config.plugins.push(
    new webpack.optimize.DedupePlugin()
  );
  console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}
