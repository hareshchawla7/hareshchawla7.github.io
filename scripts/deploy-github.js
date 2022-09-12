const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'main',
    repo: 'https://github.com/hareshchawla7/hareshchawla7.github.io',
  },
  () => {
    console.log('Deploy Complete!')
  }
)