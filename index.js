'use strict';

var semver = require('semver');


module.exports = function (v1, v2) {
  return semver.gt(v1, v2) ? v1 : v2;
};
