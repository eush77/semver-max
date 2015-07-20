'use strict';

var semver = require('semver');


var max2 = function (v1, v2) {
  console.log(v1, 'vs', v2);
  return semver.gt(v2, v1) ? v2 : v1;
};


module.exports = function () {
  return []
    .filter.call(arguments, semver.valid)
    .reduce(max2);
};
