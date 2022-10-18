import {
  column,
  beforeSave,
  BaseModel,
  hasOne,
  HasOne,
  hasMany,
  HasMany,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Movies from './Movie'

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
}
