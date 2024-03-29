import Movie from 'App/Models/Movie'
import MovieValidators from 'App/Validators/MovieValidators'

export default class MoviesController {
  //add movie
  public async add({ request, auth }) {
    const { name, description, kinds, actors, year } = await request.validate(
      MovieValidators.AddingValidator
    )
    const movie = await Movie.create({
      name: name,
      description: description,
      year: year,
      created_by: auth.user.id,
    })
    actors ? await movie.related('actors').sync([...actors]) : null
    kinds ? await movie.related('kinds').sync([...kinds]) : null
    return Movie.query()
      .where('id', movie.id)
      .preload('actors')
      .preload('kinds')
      .preload('created_user')
  }

  //update movie
  public async update({ request, auth }) {
    const { id, name, description, year, actors, kinds } = await request.validate(
      MovieValidators.UpdateValidator
    )
    const movie = await Movie.find(id)
    if (!movie) {
      return 'no have a movie'
    }
    actors ? movie.related('actors').sync([...actors]) : null
    kinds ? movie.related('kinds').sync([...kinds]) : null

    await Movie.query()
      .where('id', id)
      .update({ name, description, year, updated_by: auth.user.id })

    return await Movie.query()
      .where('id', id)
      .preload('actors')
      .preload('kinds')
      .preload('created_user')
      .preload('updated_user')
  }

  //delete movie
  public async delete({ request, response }) {
    const { id } = await request.validate(MovieValidators.DeleteValidator)
    const movie = await Movie.find(id)
    if (movie) {
      await Movie.query().where('id', id).delete()
      return 'delete succes'
    }
    return response.json({ error: 'no have movie like that' })
  }

  public async movies() {
    const movie = await Movie.query()
      .preload('actors')
      .preload('kinds')
      .preload('updated_user')
      .preload('created_user')
    return movie
  }
}
