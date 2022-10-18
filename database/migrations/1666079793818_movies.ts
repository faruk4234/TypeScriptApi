import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Movies extends BaseSchema {
  protected tableName = 'movies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('description')
      table.integer('year')
      table.integer('who_created').unsigned().references('users.id').onDelete('CASCADE') //
      table.integer('who_updated').unsigned().references('users.id').onDelete('CASCADE') //
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
