module.exports = {
  pwa: {
    workboxOptions: {
      runtimeCaching: [{
        urlPattern: new RegExp('^https://jsonplaceholder.typicode.com/users'),
        handler: 'networkFirst',
        options: {
          networkTimeoutSeconds: 20,
          cacheName: 'api-cache',
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }]
    }
  }
}
