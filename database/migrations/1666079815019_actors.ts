import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Actors extends BaseSchema {
  protected tableName = 'actors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.integer('age')
      table.integer('who_created').unsigned().references('users.id').onDelete('CASCADE') //
      table.integer('who_updated').unsigned().references('users.id').onDelete('CASCADE') //
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
