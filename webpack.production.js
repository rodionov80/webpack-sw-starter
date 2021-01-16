const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /sqip/,
        use: [
          {
            loader: 'file-loader', // Or `url-loader` or your other loader
            options: {
              esModule: false,
            }
          },
          {
            loader: ImageMinimizerPlugin.loader,
            options: {
              severityError: 'warning', // Ignore errors on corrupted images
              minimizerOptions: {
                plugins: [
                  'imagemin-svgo',
                  'imagemin-webp',
                  'imagemin-gifsicle',
                  ['imagemin-mozjpeg', {quality: 80}],
                  ['imagemin-pngquant', {quality: [0.75, 0.85]}]
                ],
              },
            },
          },
        ],
      },
    ]
  },
  plugins: [
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: './CNAME',
    //       to: './'
    //     }
    //   ]
    // }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'serviceWorker.js'),
      swDest: './serviceWorker.js',
      exclude: [
        // don't precache images and CNAME
        /\.(png|svg|jpe?g|webp|gif)$/,
        /CNAME/
      ]
    })
  ]
})