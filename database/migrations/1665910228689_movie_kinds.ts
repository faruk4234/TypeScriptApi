import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MovieKinds extends BaseSchema {
  protected tableName = 'movie_kinds'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 63).unique()
      table.string('description')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
