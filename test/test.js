'use strict';

var semverMax = require('..');

var test = require('tape');


test(function (t) {
  t.equal(semverMax('0.0.0', '1.0.0'), '1.0.0', 'two arguments');
  t.end();
});
