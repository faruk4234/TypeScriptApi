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
}).prefix('/user')
