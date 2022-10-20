import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AddingValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string({}, [rules.required(), rules.minLength(2), rules.maxLength(127)]),
    description: schema.string({}, [rules.required(), rules.minLength(20), rules.maxLength(511)]),
    movies: schema.array.optional().members(schema.number()),
  })
}
