import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AddingValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string({}, [rules.required(), rules.minLength(2), rules.maxLength(127)]),
    description: schema.string({}, [rules.required(), rules.minLength(2), rules.maxLength(511)]),
    year: schema.number([rules.required(), rules.range(1800, 2030)]),
    kinds: schema.array
      .optional([rules.minLength(0), rules.maxLength(10)])
      .members(schema.number()),
    actors: schema.array
      .optional([rules.minLength(0), rules.maxLength(10)])
      .members(schema.number()),
  })
}
