'use strict';

var semverMax = require('..');

var test = require('tape');


test(function (t) {
  t.equal(semverMax('v1.0.0'), 'v1.0.0', 'one argument');
  t.equal(semverMax('0.0.0', '1.0.0'), '1.0.0', 'two arguments');
  t.equal(semverMax('0.0.0', '1.0.0', 'v0.1.0', 'v1.0.0'), '1.0.0',
          'many arguments');
  t.end();
});
