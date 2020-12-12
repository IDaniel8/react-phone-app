const { override, addBabelPlugin } = require('customize-cra')
const { alias, configPaths } = require('react-app-rewire-alias')

function myOverrides(config) {
  // do stuff to config
  return config
}

module.exports = override(
  myOverrides,
  alias(configPaths('./jsconfig.paths.json')),
  addBabelPlugin(['styled-components', { displayName: true, fileName: false }]),
)
