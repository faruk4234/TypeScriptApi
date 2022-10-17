import Actor from 'App/Models/Actor'
import Movie from 'App/Models/Movie'

export default class MoviesController {
  public async add({ request, response }) {
    const { name, description, kind, actor } = request.body()
    console.log(kind)
    const promise = await Movie.create({
      name: name,
      description: description,
      kind: kind,
      actor: actor,
    })
    return promise
  }

  public async update({ request }) {
    const payload = await request.body()
    console.log(payload)

    const movie = await Movie.find(payload.id)
    if (!movie) {
      return 'no have a movie'
    }

    const promise = await Actor.query()
      .where('id', payload.id)
      .update({ ...payload })
    return promise
  }

  public async delete({ request, response }) {
    const { id } = request.body()
    const movie = await Movie.find(id)
    if (movie) {
      await Movie.query().where('id', id).delete()
      return 'delete succes'
    }
    return response.json({ error: 'no have movie like that' })
  }

  public async movies() {
    const movie = await Movie.all()
    return movie
  }
}
