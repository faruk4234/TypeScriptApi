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
import Kinds from './Kinds'

export default class Movies extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public year: number

  @manyToMany(() => Kinds)
  public kinds: ManyToMany<typeof Kinds>

  @manyToMany(() => Actor)
  public actors: ManyToMany<typeof Actor>
}
