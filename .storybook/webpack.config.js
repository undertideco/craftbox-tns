const path = require('path');
const gatsbyWebpack = require('gatsby/dist/utils/webpack.config');

const directory = path.resolve(__dirname, '../src/components');
const suppliedStage = 'develop';
const program = {
  directory,
};

const config = gatsbyWebpack(program, directory, suppliedStage).then(config => {
  return config.resolve();
}).catch(e => {
  console.log(e);
});

module.exports = function customiseStorybookConfig(storybookBaseConfig) {
  // Replace parts of react storybook webpack config with gatsby webpack config.
  config.entry = storybookBaseConfig.entry;
  config.output = storybookBaseConfig.output;

  return config;
};
