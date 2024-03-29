import test from 'ava'
import getAllNodeVersions from 'all-node-versions'
import getRecommendedVersions from '../index.js'

test('main', async (t) => {
  const versions = await getRecommendedVersions()

  t.true(Array.isArray(versions))

  t.true(
    versions.some(({version}) => version.startsWith('0.10.')),
    '0.10.x should be listed',
  )

  t.true(
    versions.some(({version}) => version.startsWith('0.12.')),
    '0.12.x should be listed',
  )

  t.true(
    versions.every(({major}) => typeof major === 'number'),
    '`version.major` should be number',
  )

  t.true(
    versions.every(
      ({major}, index) => major === 0 || major % 2 === 0 || index === 0,
    ),
    'versions(except latest) should be even-numbered or `0`',
  )

  t.true(
    versions.some(
      ({major, codeName}, index) =>
        major % 2 === 0 &&
        // `0.x` don't has codeName
        major !== 0 &&
        typeof codeName === 'string',
    ),
    'There should be some LTS versions',
  )

  const latestVersion = (await getAllNodeVersions()).versions[0].node
  t.is(versions[0].version, latestVersion, 'latest version should be listed')
})
