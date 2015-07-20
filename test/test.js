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


// > msg = msgBase("Base part")
// > msg("suffix")
// "Base part (suffix)"
var msgBase = function (str) {
  return function (suffix) {
    return str + ' (' + suffix + ')';
  };
};


test('comparators', function (t) {
  t.equal(semverMax, semverMax.gt, 'semverMax === semverMax.gt');

  (function (msg) {
    ['gt', 'gte', 'lt', 'lte'].forEach(function (op) {
      t.equal(semverMax[op]('=1.0.0'), '=1.0.0', msg(op));
    });
  }(msgBase('one argument')));

  (function (msg) {
    [{ op: 'gt', answer: '1.0.0' },
     { op: 'gte', answer: '1.0.0' },
     { op: 'lt', answer: '0.0.0' },
     { op: 'lte', answer: '0.0.0' }].forEach(function (cc) {
       t.equal(semverMax[cc.op]('0.0.0', '1.0.0'), cc.answer, msg(cc.op));
     });
  }(msgBase('two arguments')));

  (function (msg) {
    [{ op: 'gt', answer: '1.0.0' },
     { op: 'gte', answer: 'v1.0.0' },
     { op: 'lt', answer: '=0.0.0' },
     { op: 'lte', answer: '0.0.0' }].forEach(function (cc) {
       t.equal(semverMax[cc.op]('=0.0.0', '1.0.0', 'v0.1.0', 'v1.0.0', '0.0.0'),
               cc.answer, msg(cc.op));
     });
  }(msgBase('many arguments')));

  t.end();
});


test('use with reduce', function (t) {
  t.equal(['0.0.0', '0.1.0', '1.0.0'].reduce(semverMax), '1.0.0', 'semverMax');

  var msgBase = 'semverMax.';

  [{ op: 'gt', answer: '1.0.0' },
   { op: 'gte', answer: 'v1.0.0' },
   { op: 'lt', answer: '=0.0.0' },
   { op: 'lte', answer: '0.0.0' }].forEach(function (cc) {
     t.equal(['=0.0.0', '1.0.0', 'v0.1.0', 'v1.0.0', '0.0.0']
             .reduce(semverMax[cc.op]), cc.answer, msgBase + cc.op);
   });

  t.end();
});
