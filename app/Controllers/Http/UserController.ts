import User from 'App/Models/Users'
import UserValidators from 'App/Validators/UserValidators'

export default class UsersController {
  public async login({ auth, request }) {
    const payload = await request.validate(UserValidators.LoginValidator)
    console.log(auth)
    const token = await auth.attempt(payload.email, payload.password)
    return token
  }

  //register user
  public async register({ request, response }) {
    const payload = await request.validate(UserValidators.RegisterValidator)
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
  public async update({ request, auth }) {
    const payload = await request.validate(UserValidators.UpdateValidator)
    if (payload.email) {
      const user = await User.findBy('email', payload.email)
      if (user) return 'this email alredy exisy'
    }
    const promise = await User.query()
      .where('id', auth.user.id)
      .update({ ...payload })

    return promise
  }

  //list all users
  public async users() {
    const user = await User.all()
    return user
  }
}
