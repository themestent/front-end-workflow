require('coffee-script');

module.exports = {
  PACKAGE_INFO: require('./package.json'),
  CLI:          require('./node_modules/groc/lib/cli'),
  LANGUAGES:    require('./node_modules/groc/lib/languages'),
  DOC_TAGS:     require('./node_modules/groc/lib/doc_tags'),
  Project:      require('./node_modules/groc/lib/project'),
  styles:       require('./node_modules/groc/lib/styles')
};
