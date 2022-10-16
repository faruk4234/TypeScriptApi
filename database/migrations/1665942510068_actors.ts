import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Actors extends BaseSchema {
  protected tableName = 'actors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 127)
      table.integer('age', 127)
      table.string('movies', 127)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
