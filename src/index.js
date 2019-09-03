import getAllNodeVersions from 'all-node-versions'
import semver from 'semver'

function groupVersions(all) {
  return all.reduce((versions, version) => {
    const satisfiesRange = `^${version
      .split('.')
      .slice(0, 2)
      .join('.')}`

    if (!versions.some(version => semver.satisfies(version, satisfiesRange))) {
      versions.push(version)
    }

    return versions
  }, [])
}

async function versions() {
  return groupVersions(await getAllNodeVersions(), true).filter(
    version =>
      version === version[0] ||
      (semver.satisfies(version, ['^0.10', '^0.12', '>=4'].join('||')) &&
        Number(version.split('.')[0]) % 2 === 0)
  )
}

export default versions
