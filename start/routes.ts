import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.get('/', () => {
  return 'Hello world'
})

Route.get('/health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy ? response.ok(report) : response.badRequest(report)
})
// Login
Route.group(() => {
  Route.post('login', 'UserController.login')
  Route.post('register', 'UserController.register')
  Route.put('update', 'UserController.update').middleware('auth')
  Route.get('/', 'UserController.users')
}).prefix('/user')

//movies
Route.group(() => {
  Route.post('add', 'MovieController.add')
  Route.put('update', 'MovieController.update')
  Route.delete('delete', 'MovieController.delete')
  Route.get('/', 'MovieController.movies')
})
  .prefix('/movies')
  .middleware('auth')

//movieKind
Route.group(() => {
  Route.post('add', 'KindController.add')
  Route.delete('delete', 'KindController.delete')
  Route.get('/', 'KindController.kinds')
  Route.put('update', 'KindController.update')
})
  .prefix('/moviekind')
  .middleware('auth')

//actor
Route.group(() => {
  Route.post('add', 'ActorController.add')
  Route.put('update', 'ActorController.update')
  Route.delete('delete', 'ActorController.delete')
  Route.get('/', 'ActorController.actors')
})
  .prefix('/actors')
  .middleware('auth')
