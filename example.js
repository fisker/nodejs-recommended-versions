import getRecommendVersions from 'nodejs-recommended-versions'

console.table(await getRecommendVersions())
