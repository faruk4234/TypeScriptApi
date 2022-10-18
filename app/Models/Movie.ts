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
  belongsTo,
  BelongsTo,
} from '@ioc:Adonis/Lucid/Orm'
import Actor from './Actor'
import Kinds from './Kinds'
import User from './Users'

export default class Movies extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public year: number

  @manyToMany(() => Kinds, {
    localKey: 'id',
    pivotForeignKey: 'movie_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'kind_id',
    pivotTable: 'movie_kinds',
  })
  public kinds: ManyToMany<typeof Kinds>

  @manyToMany(() => Actor, {
    localKey: 'id',
    pivotForeignKey: 'movie_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'actor_id',
    pivotTable: 'movie_actors',
  })
  public actors: ManyToMany<typeof Actor>

  @belongsTo(() => User)
  public who_created: BelongsTo<typeof User>

  @belongsTo(() => User)
  public who_updated: BelongsTo<typeof User>
}
