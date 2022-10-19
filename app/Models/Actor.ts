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

  @column()
  public updated_by: number
}
