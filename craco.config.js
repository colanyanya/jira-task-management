const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {'@primary-color': '#5592e7', '@font-size-base': '16px'},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
