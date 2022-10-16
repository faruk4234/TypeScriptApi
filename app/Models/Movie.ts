import {
  column,
  beforeSave,
  BaseModel,
  hasMany,
  HasMany,
  hasOne,
  HasOne,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Actor from './Actor'
import MovieKind from './MovieKind'

export default class Movies extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public year: number

  @hasMany(() => MovieKind, { foreignKey: 'id' })
  public kind: HasMany<typeof MovieKind>

  @hasMany(() => Actor, { foreignKey: 'id' })
  public actor: HasMany<typeof Actor>
}
