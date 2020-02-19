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
;(async () => {
  const versions = getRecommendVersions()

  console.log(versions)

  // -> [..., '0.12.18', '0.10.48']
})()
```
