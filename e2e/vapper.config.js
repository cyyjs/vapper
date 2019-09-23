const prerender = require('@vapper/plugin-prerender')

module.exports = {
  // default
  fallBackSpa: true,
  plugins: [
    [
      prerender,
      {
        routes: ['/foo/bar']
      }
    ],
    '@vapper/plugin-cookie'
  ],
  htmlMinifier: true,
  pageCache: {
    cacheOptions: {
      max: 100,
      maxAge: 1000
    },
    cacheable (req) {
      // Only /cache will be applied micro-caching
      return req.url === '/cache'
    }
  }
}
