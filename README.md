[![npm](https://nodei.co/npm/semver-max.png)](https://npmjs.com/package/semver-max)

# semver-max

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Find maximum version according to semver.

[travis]: https://travis-ci.org/eush77/semver-max
[travis-badge]: https://travis-ci.org/eush77/semver-max.svg
[david]: https://david-dm.org/eush77/semver-max
[david-badge]: https://david-dm.org/eush77/semver-max.png

## Usage

Pass versions in the arguments:

```js
semverMax('0.0.0', '0.1.0', '1.0.0')
//=> '1.0.0'
```

Or reduce over an array:

```js
['0.0.0', '0.1.0', '1.0.0'].reduce(semverMax)
//=> '1.0.0'
```

## API

#### `semverMax(version1, version2, ...)`

Returns the maximum version.

#### `semverMax.gt(version1, version2, ...)`
#### `semverMax.gte(version1, version2, ...)`
#### `semverMax.lt(version1, version2, ...)`
#### `semverMax.lte(version1, version2, ...)`

Use a different comparator (see [npm/node-semver]).

`semverMax.gt` computes maximum (the default), `semverMax.lt` computes minimum instead.

The difference between `semverMax.gt` and `semverMax.gte` (or `semverMax.lt` and `semverMax.lte`) is a bit more subtle:

```js
semverMax.gt('0.0.0', '1.0.0', 'v0.1.0', 'v1.0.0')
//=> '1.0.0'

semverMax.gte('0.0.0', '1.0.0', 'v0.1.0', 'v1.0.0')
//=> 'v1.0.0'
```

[npm/node-semver]: https://github.com/npm/node-semver#comparison

## Install

```
npm install semver-max
```

## License

MIT
