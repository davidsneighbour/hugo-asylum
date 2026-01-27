const defaultStandardVersion = require('@davidsneighbour/release-config');

const localStandardVersion = {
  bumpFiles: [
    ...defaultStandardVersion.bumpFiles,
  ],
  skip: {
    changelog: true,
  },
};

module.exports = {
  ...defaultStandardVersion,
  ...localStandardVersion,
};
