import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    id: schema.number([rules.required()]),
    name: schema.string.optional({}, [rules.minLength(2), rules.maxLength(127)]),
    description: schema.string.optional({}, [rules.minLength(20), rules.maxLength(511)]),
    movies: schema.array.optional().members(schema.number()),
  })
}
