const defaultStandardVersion = require("@davidsneighbour/config/standard-version");

const localStandardVersion = {
  bumpFiles: [
    ...defaultStandardVersion.bumpFiles,
    { filename: "data/dnb/asylum/build.json", type: "json" },
  ],
  skip: [
    "changelog"
  ]
};

module.exports = {
  ...defaultStandardVersion,
  ...localStandardVersion,
};
