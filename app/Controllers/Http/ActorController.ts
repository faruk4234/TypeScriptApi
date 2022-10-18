import Actor from 'App/Models/Actor'

export default class ActorController {
  public async add({ request, response }) {
    const { name, movies, age } = request.body()
    const actor = await Actor.create({
      name,
      age: age,
    })
    movies ? actor.related('movies').sync([...movies]) : null
    return actor
  }

  public async update({ request, response }) {
    const { id, name, movies, age } = request.body()

    const actor = await Actor.find(id)
    if (actor) {
      await Actor.query().where('id', id).update({ name, movies, age })
      movies ? actor.related('movies').sync([...movies]) : null
      return actor
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
    const actors = await Actor.query().preload('movies')
    return actors
  }
}
