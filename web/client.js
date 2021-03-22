const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '2gpk6du5',
  dataset: 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})

module.exports = client
