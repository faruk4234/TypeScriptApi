import { column, beforeSave, BaseModel, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Movies from './Movie'

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
}
