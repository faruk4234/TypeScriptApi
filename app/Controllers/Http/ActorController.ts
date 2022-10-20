import Actor from 'App/Models/Actor'
import ActorValidators from 'App/Validators/ActorValidators'

export default class ActorController {
  public async add({ request, auth, response }) {
    const { name, movies, age } = await request.validate(ActorValidators.AddingValidator)
    const actor = await Actor.create({
      name,
      age: age,
      created_by: auth.user.id,
    })
    movies ? actor.related('movies').sync([...movies]) : null
    return Actor.query()
      .where('id', actor.id)
      .preload('updated_user')
      .preload('created_user')
      .preload('movies')
  }

  public async update({ request, response, auth }) {
    const { id, name, movies, age } = await request.validate(ActorValidators.UpdateValidator)

    const actor = await Actor.find(id)
    if (actor) {
      await Actor.query().where('id', id).update({ name, age, updated_by: auth.user.id })
      movies ? actor.related('movies').sync([...movies]) : null
      return Actor.query()
        .where('id', id)
        .preload('created_user')
        .preload('updated_user')
        .preload('movies')
    }
    return response.json({ error: 'no have actor like that' })
  }

  public async delete({ request, response }) {
    const { id } = await request.validate(ActorValidators.DeletingValidator)
    const actor = await Actor.find(id)
    if (actor) {
      await Actor.query().where('id', id).delete()
      return 'delete succes'
    }
    return response.json({ error: 'no have actor like that' })
  }

  public async actors() {
    const actors = await Actor.query()
      .preload('movies')
      .preload('created_user')
      .preload('updated_user')
    return actors
  }
}
