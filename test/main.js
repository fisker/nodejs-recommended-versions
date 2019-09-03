import test from 'ava'
import getRecommendedVersions from '../src'

test('main', async t => {
  const versions = await getRecommendedVersions()

  t.true(Array.isArray(versions))
  t.true(
    versions.some(version => version.startsWith('0.10.')),
    '0.10.x should be listed'
  )
  t.true(
    versions.some(version => version.startsWith('0.12.')),
    '0.12.x should be listed'
  )
  t.true(
    versions.slice(1).every(version => Number(version.split('.')[0]) % 2 === 0),
    'versions except latest should be all even-numbered'
  )
})
