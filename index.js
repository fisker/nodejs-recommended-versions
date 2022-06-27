import getAllNodeVersions from 'all-node-versions'

async function getRecommendedVersions() {
  const {versions, majors} = await getAllNodeVersions()

  const recommended = majors
    .filter(({major}, index) => index === 0 || major % 2 === 0)
    .map(({major, latest: version, lts}) =>
      lts ? {major, version, codeName: lts} : {major, version},
    )

  const legacyVersion = {
    major: 0,
    version: versions.find((version) => version.node.startsWith('0.10.')).node,
  }

  return [...recommended, legacyVersion]
}

export default getRecommendedVersions
