import Kinds from 'App/Models/Kinds'

export default class KindController {
  //add movie kind
  public async add({ request, response }) {
    const { name, description, movies } = request.body()

    if (await Kinds.findBy('name', name)) {
      return response.json({ error: 'Kind already exist' })
    }

    const kind = await Kinds.create({
      name: name,
      description: description,
    })

    movies ? kind.related('movies').sync([...movies]) : null
    return Kinds.query().where('id', kind.id).preload('movies')
  }

  //delete movie kind
  public async delete({ request, response }) {
    const { id } = request.body()
    if (await Kinds.find(id)) {
      await Kinds.query().where('id', id).delete()
      return 'delete succes'
    }
    return response.json({ error: 'no have kind like that' })
  }

  //update movie kind
  public async update({ request, response }) {
    const { id, movies, name, description } = request.body()
    const kind = await Kinds.find(id)

    if (kind) {
      await Kinds.query().where('id', id).update({ name, description })

      movies ? kind?.related('movies').sync([...movies]) : null
      return kind
    }
    return response.json({ error: 'no have kind like that' })
  }

  //list all kinds
  public async kinds() {
    const kinds = await Kinds.query().preload('movies')
    return kinds
  }
}
