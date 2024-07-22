const {
  override,
  addWebpackAlias,
  addBabelPlugins,
  addWebpackPlugin,
} = require('customize-cra')
const path = require('path')
const webpack = require('webpack')

module.exports = override(
  addWebpackAlias({
    ['@common']: path.resolve(__dirname, './src/common'),
    ['@components']: path.resolve(__dirname, './src/components'),
    ['@features']: path.resolve(__dirname, './src/features'),
    ['@hooks']: path.resolve(__dirname, './src/hooks'),
    ['@pages']: path.resolve(__dirname, './src/pages'),
    ['@state']: path.resolve(__dirname, './src/state'),
    ['@utils']: path.resolve(__dirname, './src/utils'),
  }),
  addBabelPlugins([
    'babel-plugin-styled-components',
    {
      fileName: false,
    },
  ]),
)
