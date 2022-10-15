import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 63).notNullable()
      table.string('surname', 63).notNullable()
      table.string('email', 123).notNullable().unique()
      table.string('password', 123).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
