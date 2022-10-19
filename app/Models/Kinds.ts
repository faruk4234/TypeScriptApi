import {
  column,
  beforeSave,
  BaseModel,
  manyToMany,
  ManyToMany,
  belongsTo,
  BelongsTo,
} from '@ioc:Adonis/Lucid/Orm'
import Movies from './Movie'
import User from './Users'

export default class Kind extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @manyToMany(() => Movies, {
    localKey: 'id',
    pivotForeignKey: 'kind_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'movie_id',
    pivotTable: 'movie_kinds',
  })
  public movies: ManyToMany<typeof Movies>

  @belongsTo(() => User)
  public who_created: BelongsTo<typeof User>

  @belongsTo(() => User)
  public who_updated: BelongsTo<typeof User>
}
