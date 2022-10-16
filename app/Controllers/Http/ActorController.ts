import Actor from 'App/Models/Actor'

export default class ActorController {
  public async add({ request, response }) {
    const { name, movies, age } = request.body()

    const promise = await Actor.create({
      name,
      age,
      movies,
    })
    return promise
  }

  public async update({ request, response }) {
    const { id } = request.body()

    const actor = await Actor.find(id)
    if (actor) {
      const promise = await Actor.query()
        .where('id', id)
        .update({ ...request.body() })
      return promise
    }
    return response.json({ error: 'no have actor like that' })
  }

  public async delete({ request, response }) {
    const { id } = request.body()
    const actor = await Actor.find(id)
    if (actor) {
      await Actor.query().where('id', id).delete()
      return 'delete succes'
    }
    return response.json({ error: 'no have actor like that' })
  }

  public async actors() {
    const actors = await Actor.all()
    return actors
  }
}
