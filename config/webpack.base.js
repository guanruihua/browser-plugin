const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const fileExtensions = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'eot',
  'otf',
  'svg',
  'ttf',
  'woff',
  'woff2',
  'mp3',
  'json'
]

const include = [path.resolve(__dirname, '../src')]

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    newtab: path.join(__dirname, '../src/pages/Newtab/index.tsx'),
    options: path.join(__dirname, '../src/pages/Options/index.tsx'),
    popup: path.join(__dirname, '../src/pages/Popup/index.tsx'),
    background: path.join(__dirname, '../src/pages/Background/index.ts'),
    contentScript: path.join(__dirname, '../src/pages/Content/index.ts'),
    devtools: path.join(__dirname, '../src/pages/Devtools/index.ts'),
    panel: path.join(__dirname, '../src/pages/Panel/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  // devServer: {
  //   contentBase: path.resolve(__dirname, '../build'),
  //   hot: true
  // },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]'
        }
      },
      {
        test: /\.(svg|woff|woff2|eot|ttf|otf|ico)$/i,
        // test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|otf|ico)$/i,
        type: 'asset/resource',
        exclude: /node_modules/
      },
      // {
      //   test: new RegExp('.(' + fileExtensions.join('|') + ')$'),
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[ext]'
      //   },
      //   exclude: /node_modules/,
      //   include
      // },
      {
        test: /\.module.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '_[local]_[hash:base64:6]'
              },
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                sourceMap: true,
                importLoaders: 2,
                javascriptEnabled: true
              }
            }
          }
        ],
        include,
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
        include,
        exclude: /\.module.scss|node_modules/
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx'
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
      // 'react-dom': '@hot-loader/react-dom'
    },
    extensions: fileExtensions
      .map(extension => '.' + extension)
      .concat(['.js', '.jsx', '.ts', '.tsx', '.css', '.d.ts', '.json'])
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env.lastUpdateTime': new Date().getTime()
    // }),
    // new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      // verbose: true,
      // cleanStaleWebpackAssets: true
    }),
    new ESLintPlugin({
      context: '../src', // 检查目录
      extensions: ['js', 'jsx', 'ts', 'tsx']
    }),
    // new webpack.EnvironmentPlugin(['NODE_ENV']),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, '../src/manifest.json'),
          to: path.join(__dirname, '../build'),
          force: true,
          transform: function (content, path) {
            return Buffer.from(
              JSON.stringify({
                // description: process.env.npm_package_description,
                version: process.env.npm_package_version,
                ...JSON.parse(content.toString())
              })
            )
          }
        }
      ]
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, '../src/pages/Content/content.styles.css'),
          to: path.join(__dirname, '../build'),
          force: true
        }
      ]
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, '../src/assets/img/icon-128.png'),
          to: path.join(__dirname, '../build'),
          force: true
        }
      ]
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, '../src/assets/img/icon-34.png'),
          to: path.join(__dirname, '../build'),
          force: true
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/pages/Newtab/index.html'),
      filename: 'newtab.html',
      chunks: ['newtab'],
      cache: false
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/pages/Options/index.html'),
      filename: 'options.html',
      chunks: ['options'],
      cache: false
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/pages/Popup/index.html'),
      filename: 'popup.html',
      chunks: ['popup'],
      cache: false
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/pages/Devtools/index.html'),
      filename: 'devtools.html',
      chunks: ['devtools'],
      cache: false
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/pages/Panel/index.html'),
      filename: 'panel.html',
      chunks: ['panel'],
      cache: false
    })
  ],
  infrastructureLogging: {
    level: 'info'
  }
}

// if (env.NODE_ENV === 'development') {
//   options.devtool = 'cheap-module-source-map'
// } else {
// options.optimization = {
//   minimize: true,
//   minimizer: [
//     new TerserPlugin({
//       extractComments: false
//     })
//   ]
// }
// }

// module.exports = options
