import {
  column,
  BaseModel,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany,
  hasOne,
  HasOne,
} from '@ioc:Adonis/Lucid/Orm'
import Movies from './Movie'
import User from './Users'

export default class Actor extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public age: number

  @manyToMany(() => Movies, {
    localKey: 'id',
    pivotForeignKey: 'actor_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'movie_id',
    pivotTable: 'movie_actors',
  })
  public movies: ManyToMany<typeof Movies>

  @column()
  public created_by: number

  @belongsTo(() => User, {
    localKey: 'id',
    foreignKey: 'created_by',
  })
  public created_user: BelongsTo<typeof User>

  @column()
  public updated_by: number

  @belongsTo(() => User, {
    localKey: 'id',
    foreignKey: 'updated_by',
  })
  public updated_user: BelongsTo<typeof User>
}
