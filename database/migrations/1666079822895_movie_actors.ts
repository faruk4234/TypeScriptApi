import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MovieActors extends BaseSchema {
  protected tableName = 'movie_actors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('movie_id').unsigned().references('movies.id').onDelete('CASCADE')
      table.integer('actor_id').unsigned().references('actors.id').onDelete('CASCADE')
      table.unique(['movie_id', 'actor_id'])
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
