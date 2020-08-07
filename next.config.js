module.exports = {
    async redirects() {
      return [
        {
          source: '/category',
          destination: '/category/business',
          permanent: true,
        },
      ]
    },
  }