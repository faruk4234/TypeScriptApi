import User from 'App/Models/Users'
import RegisterValidator from 'App/Validators/RegisterValidator'

export default class UsersController {
  public async login({ auth, request, response }) {
    const { email, password } = request.body()
    console.log(auth)
    const token = await auth.attempt(email, password)
    return token
  }

  //register user
  public async register({ request, response }) {
    const payload = await request.validate(RegisterValidator)
    const user = await User.findBy('email', payload.email)
    if (user) {
      return response.json({ error: 'User already exist' })
    }
    await User.create({
      email: payload.email,
      password: payload.password,
      name: payload.name,
      surname: payload.surname,
    })

    return response.json({ success: 'User created' })
  }

  //update users
  public async update({ request }) {
    const payload = await request.body()
    console.log(payload)

    const promise = await User.query()
      .where('email', payload.email)
      .update({ ...payload })

    return promise
  }

  //list all users
  public async users() {
    const user = await User.all()
    return user
  }
}
