import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Movies extends BaseSchema {
  protected tableName = 'movies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 127)
      table.string('description', 511)
      table.integer('kind', 128).references('id').inTable('movie_kinds')
      table.integer('actor', 128).references('id').inTable('actors')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
