import Route from '@ioc:Adonis/Core/Route'

//using group for routes
Route.group(() => {
  Route.get('/', async () => {
    return 'HELLO WORLD'
  })

  Route.get('/ciguli', async () => {
    return 'cigubigule'
  })

  Route.get('/posts/:id', async () => {
    const postUrl = Route.makeUrl('posts.show', { id: 1 })
    return postUrl
  }).as('post.index')
}).prefix('/user')

Route.on('/goBr').redirectToPath('https://tr.tradingview.com/symbols/BTCUSDT/')
