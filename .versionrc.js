const defaultStandardVersion = require('@davidsneighbour/release-config');

const localStandardVersion = {
  bumpFiles: [
    ...defaultStandardVersion.bumpFiles,
    { filename: 'data/dnb/asylum/build.json', type: 'json' },
  ],
  skip: {
    changelog: true,
  },
};

module.exports = {
  ...defaultStandardVersion,
  ...localStandardVersion,
};
