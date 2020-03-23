import getAllNodeVersions from 'all-node-versions'
import semver from 'semver'

function isSameMajor(current) {
  return (version) => version.major === current.major
}

function isSameMinor(current) {
  return (version) =>
    version.major === current.major && version.minor === current.minor
}

function group(versions) {
  return versions.reduce((result, current) => {
    const compareFunction =
      current.major === 0 ? isSameMinor(current) : isSameMajor(current)

    if (!result.some(compareFunction)) {
      result.push(current)
    }

    return result
  }, [])
}

function recommended(version, index) {
  return (
    index === 0 ||
    (version.major % 2 === 0 &&
      semver.satisfies(version, ['^0.10', '^0.12', '>=4'].join('||')))
  )
}

async function getRecommendedVersions() {
  const all = await getAllNodeVersions()
  const parsed = all.map(semver.parse)
  const grouped = group(parsed)
  return grouped.filter(recommended).map((version) => version.version)
}

export default getRecommendedVersions
