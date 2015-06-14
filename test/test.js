var assert = require('power-assert');
var lspath = require('../');

it('should return paths from file path', function (callback) {

  this.timeout(10000);

  lspath('test/test.js', function (error, paths) {
    assert(!error, error);
    assert(paths.length === 1);
    callback();
  });
});

it('should return paths from file paths', function (callback) {

  this.timeout(10000);

  lspath(['test/test.js', 'test/fixtures/test.js'], function (error, paths) {
    assert(!error, error);
    assert(paths.length === 2);
    callback();
  });
});

it('should not return with argument which does not exist', function (callback) {

  this.timeout(10000);

  lspath(['test/foo.js', 'test/fixtures/bar.js'], function (error, paths) {
    assert(!error, error);
    assert(paths.length === 0);
    callback();
  });
});

it('should return paths from file path and folder path', function (callback) {

  this.timeout(10000);

  lspath(['test/test.js', 'test/fixtures/'], function (error, paths) {
    assert(!error, error);
    assert(paths.length === 3);
    callback();
  });
});

it('should return paths from single glob', function (callback) {

  this.timeout(10000);

  lspath('test/**/*.json', function (error, paths) {
    assert(!error, error);
    assert(paths.length === 1);
    callback();
  });
});

it('should return paths from multiple glob', function (callback) {

  this.timeout(10000);

  lspath(['test/**/*.json', 'test/**/*.js'], function (error, paths) {
    assert(!error, error);
    assert(paths.length === 3);
    callback();
  });
});