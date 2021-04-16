# nodejs-recommended-versions

[![Build Status][github_actions_badge]][github_actions_link]
[![Coverage][coveralls_badge]][coveralls_link]
[![Npm Version][package_version_badge]][package_link]
[![MIT License][license_badge]][license_link]

[github_actions_badge]: https://img.shields.io/github/workflow/status/fisker/nodejs-recommended-versions/CI/master?style=flat-square
[github_actions_link]: https://github.com/fisker/nodejs-recommended-versions/actions?query=branch%3Amaster
[coveralls_badge]: https://img.shields.io/coveralls/github/fisker/nodejs-recommended-versions/master?style=flat-square
[coveralls_link]: https://coveralls.io/github/fisker/nodejs-recommended-versions?branch=master
[license_badge]: https://img.shields.io/npm/l/nodejs-recommended-versions.svg?style=flat-square
[license_link]: https://github.com/fisker/nodejs-recommended-versions/blob/master/license
[package_version_badge]: https://img.shields.io/npm/v/nodejs-recommended-versions.svg?style=flat-square
[package_link]: https://www.npmjs.com/package/nodejs-recommended-versions

> Node.js versions you should install

## Install

```bash
yarn add nodejs-recommended-versions
```

## Usage

```js
import getRecommendVersions from 'nodejs-recommended-versions'

console.table(await getRecommendVersions())

// ->
// ┌─────────┬───────┬───────────┬───────────┐
// │ (index) │ major │  version  │ codeName  │
// ├─────────┼───────┼───────────┼───────────┤
// │    0    │  15   │ '15.14.0' │           │
// │    1    │  14   │ '14.16.1' │ 'fermium' │
// │    2    │  12   │ '12.22.1' │ 'erbium'  │
// │    3    │  10   │ '10.24.1' │ 'dubnium' │
// │    4    │   8   │ '8.17.0'  │ 'carbon'  │
// │    5    │   6   │ '6.17.1'  │  'boron'  │
// │    6    │   4   │  '4.9.1'  │  'argon'  │
// │    7    │   0   │ '0.12.18' │           │
// │    8    │   0   │ '0.10.48' │           │
// └─────────┴───────┴───────────┴───────────┘
```
