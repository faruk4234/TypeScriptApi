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
}
