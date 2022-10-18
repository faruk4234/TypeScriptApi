import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MovieKinds extends BaseSchema {
  protected tableName = 'movie_kinds'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('movie_id').unsigned().references('movies.id').onDelete('CASCADE')
      table.integer('kind_id').unsigned().references('kinds.id').onDelete('CASCADE')
      table.unique(['movie_id', 'kind_id'])
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
