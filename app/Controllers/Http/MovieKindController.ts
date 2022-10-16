import MovieKind from 'App/Models/MovieKind'

export default class MovieKindController {
  //add movie kind
  public async add({ request, response }) {
    const { name, description } = request.body()
    const kind = await MovieKind.findBy('name', name)
    if (kind) {
      return response.json({ error: 'Kind already exist' })
    }

    const promise = await MovieKind.create({
      name: name,
      description: description,
    })
    return promise
  }

  //delete movie kind
  public async delete({ request, response }) {
    const { name } = request.body()
    const kind = await MovieKind.findBy('name', name)
    if (kind) {
      await MovieKind.query().where('name', name).delete()
      return 'delete succes'
    }
    return response.json({ error: 'no have kind like that' })
  }

  //update movie kind
  public async update({ request, response }) {
    const { name, description } = request.body()
    const kind = await MovieKind.findBy('name', name)
    if (kind) {
      const promise = await MovieKind.query().where('name', name).update({ description })
      return promise
    }
    return response.json({ error: 'no have kind like that' })
  }

  //list all kinds
  public async kinds() {
    const kinds = await MovieKind.all()
    return kinds
  }
}
