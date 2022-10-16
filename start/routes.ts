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

Route.group(() => {
  Route.post('add', 'MovieController.add')
}).prefix('/movies')

Route.group(() => {
  Route.post('add', 'MovieKindController.add')
  Route.delete('delete', 'MovieKindController.delete')
  Route.get('/', 'MovieKindController.kinds')
  Route.put('update', 'MovieKindController.update')
}).prefix('/moviekind')

Route.group(() => {
  Route.post('add', 'ActorController.add')
  Route.put('update', 'ActorController.update')
  Route.delete('delete', 'ActorController.delete')
  Route.get('/', 'ActorController.actors')
}).prefix('/actors')
