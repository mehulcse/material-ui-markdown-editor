const { createConfig, match } = require('@webpack-blocks/webpack')
const babel = require('@webpack-blocks/babel')
const path = require('path')

const webpackConfig = createConfig([
  match(['*.js', '!*node_modules*'], [
    babel(/* options */)
  ])
])

webpackConfig.resolve.alias = {}
webpackConfig.resolve.alias['react-styleguidist/lib/rsg-components/Wrapper/index'] = path.join(__dirname, 'src/styleguide/Wrapper')

module.exports = {
  skipComponentsWithoutExample: true,
  components: 'src/components/**/[A-Z]*.js',
  webpackConfig
}
