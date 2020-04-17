import test from 'ava'
import getRecommendedVersions from '../src'
import getAllNodeVersions from 'all-node-versions'

test('main', async (t) => {
  const versions = await getRecommendedVersions()

  t.true(Array.isArray(versions))

  t.true(
    versions.some(({version}) => version.startsWith('0.10.')),
    '0.10.x should be listed'
  )

  t.true(
    versions.some(({version}) => version.startsWith('0.12.')),
    '0.12.x should be listed'
  )

  t.true(
    versions
      .slice(1)
      .every(({version}) => Number(version.split('.')[0]) % 2 === 0),
    'versions except latest should be all even-numbered'
  )

  t.true(
    versions.every(({major}) => typeof major === 'number'),
    '`version.major` should be number'
  )

  t.true(
    versions
      .filter(({major}) => major % 2 === 0 && major)
      .every(({lts}) => typeof lts === 'string'),
    'even-numbered versions should be lts'
  )

  const latestVersion = (await getAllNodeVersions()).versions[0]
  t.is(versions[0].version, latestVersion, 'latest version should be listed')
})
