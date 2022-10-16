import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class MovieKind extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string
}
