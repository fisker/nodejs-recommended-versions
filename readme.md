# nodejs-recommended-versions

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
